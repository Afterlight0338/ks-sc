import { EmailMessage } from 'cloudflare:email';

// Money is integer sen. All values here are TESTING data until the real brief arrives.
const PRODUCTS = [
  { id: 'bbq', name: 'BBQ', desc: 'Placeholder', price: 500, theme: 'bbq' },
  { id: 'cheese', name: 'Cheese', desc: 'Placeholder', price: 500, theme: 'cheese' },
  { id: 'duo', name: 'Duo Pack (1 BBQ + 1 Cheese)', desc: 'Placeholder', price: 900, theme: 'duo' },
];
const DELIVERY = [
  { id: 'pickup', name: 'Self pickup', fee: 0, needsAddress: false },
  { id: 'delivery', name: 'Delivery (testing flat fee)', fee: 500, needsAddress: true },
];
const PAYMENT = [
  { id: 'cod', name: 'Cash on delivery / pickup (testing)' },
  { id: 'transfer', name: 'Bank transfer (testing)' },
];
const STATUSES = ['new', 'paid', 'shipped', 'cancelled'];
const FROM = 'orders@vivlos.dev';
const TO = 'krunchiesnacks@gmail.com';
const ID_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const clean = (s, n) => String(s ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, n);
const json = (o, status = 200) => Response.json(o, { status, headers: { 'Cache-Control': 'no-store' } });
const bad = (msg) => json({ error: msg }, 400);
const rm = (sen) => 'RM' + (sen / 100).toFixed(2);

let ready;
const ensureSchema = (db) => ready ??= db.exec(
  "CREATE TABLE IF NOT EXISTS orders (id TEXT PRIMARY KEY, created TEXT NOT NULL, status TEXT NOT NULL, name TEXT, phone TEXT, email TEXT, address TEXT, delivery TEXT, payment TEXT, notes TEXT, items TEXT, subtotal INTEGER, fee INTEGER, total INTEGER)"
);

function newId() {
  const b = crypto.getRandomValues(new Uint8Array(8));
  return 'KS-' + [...b].map((x) => ID_CHARS[x % ID_CHARS.length]).join('');
}

async function mail(env, subject, body) {
  const raw = [
    `From: Krunchie Orders <${FROM}>`,
    `To: ${TO}`,
    `Subject: ${subject.replace(/[^\x20-\x7E]/g, '?')}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@vivlos.dev>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: base64',
    '',
    btoa(String.fromCharCode(...new TextEncoder().encode(body))),
  ].join('\r\n');
  await env.MAIL.send(new EmailMessage(FROM, TO, raw));
}

async function createOrder(req, env) {
  let b;
  try { b = await req.json(); } catch { return bad('Invalid request'); }
  if (b.website) return json({ id: 'KS-00000000' }); // honeypot

  const name = clean(b.name, 80), phone = clean(b.phone, 30), email = clean(b.email, 120);
  const address = clean(b.address, 300), notes = clean(b.notes, 300);
  const delivery = DELIVERY.find((d) => d.id === b.delivery);
  const payment = PAYMENT.find((p) => p.id === b.payment);
  if (!name) return bad('Please enter your name.');
  if (!/^[+\d][\d\s\-]{6,}$/.test(phone)) return bad('Please enter a valid phone number.');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad('Please enter a valid email.');
  if (!delivery || !payment) return bad('Choose delivery and payment.');
  if (delivery.needsAddress && !address) return bad('Please enter a delivery address.');

  // Prices come from here, never from the browser.
  const lines = [];
  for (const it of Array.isArray(b.items) ? b.items.slice(0, 10) : []) {
    const p = PRODUCTS.find((x) => x.id === it.id);
    const qty = Math.floor(Number(it.qty));
    if (!p || !(qty >= 1 && qty <= 20)) return bad('Invalid cart.');
    lines.push({ id: p.id, name: p.name, qty, price: p.price });
  }
  if (!lines.length) return bad('Your cart is empty.');

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const fee = delivery.fee;
  const total = subtotal + fee;
  const id = newId();
  await ensureSchema(env.DB);
  await env.DB.prepare('INSERT INTO orders VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
    .bind(id, new Date().toISOString(), 'new', name, phone, email, address, delivery.name, payment.name, notes, JSON.stringify(lines), subtotal, fee, total)
    .run();

  const text = [
    `Order ${id} (TESTING)`,
    `Name: ${name}`, `Phone: ${phone}`, `Email: ${email || '-'}`,
    `Delivery: ${delivery.name}`, `Address: ${address || '-'}`,
    `Payment: ${payment.name}`, `Notes: ${notes || '-'}`, '',
    ...lines.map((l) => `${l.qty} x ${l.name} @ ${rm(l.price)} = ${rm(l.price * l.qty)}`),
    `Subtotal: ${rm(subtotal)}`, `Delivery fee: ${rm(fee)}`, `Total: ${rm(total)}`, '',
  ].join('\r\n');
  try { await mail(env, `Krunchie order ${id}: ${rm(total)} from ${name}`, text); } catch { /* order is saved, email is best effort */ }
  return json({ id });
}

const toOrder = (r) => ({ ...r, items: JSON.parse(r.items) });
const isAdmin = (req, env) => env.ADMIN_PASSWORD && req.headers.get('Authorization') === `Bearer ${env.ADMIN_PASSWORD}`;

export default {
  async fetch(req, env) {
    const { pathname } = new URL(req.url);
    const m = req.method;

    if (pathname === '/api/products' && m === 'GET') return json({ products: PRODUCTS, delivery: DELIVERY, payment: PAYMENT });
    if (pathname === '/api/orders' && m === 'POST') return createOrder(req, env);

    const one = pathname.match(/^\/api\/orders\/(KS-[A-Z0-9]{8})$/);
    if (one && m === 'GET') {
      await ensureSchema(env.DB);
      const r = await env.DB.prepare('SELECT id,created,status,delivery,payment,items,subtotal,fee,total FROM orders WHERE id=?').bind(one[1]).first();
      return r ? json(toOrder(r)) : json({ error: 'Not found' }, 404);
    }

    if (pathname.startsWith('/api/admin/')) {
      if (!isAdmin(req, env)) return json({ error: 'Unauthorized' }, 401);
      await ensureSchema(env.DB);
      if (pathname === '/api/admin/orders' && m === 'GET') {
        const { results } = await env.DB.prepare('SELECT * FROM orders ORDER BY created DESC LIMIT 200').all();
        return json({ orders: results.map(toOrder) });
      }
      const st = pathname.match(/^\/api\/admin\/orders\/(KS-[A-Z0-9]{8})$/);
      if (st && m === 'POST') {
        const { status } = await req.json().catch(() => ({}));
        if (!STATUSES.includes(status)) return bad('Bad status');
        await env.DB.prepare('UPDATE orders SET status=? WHERE id=?').bind(status, st[1]).run();
        return json({ ok: true });
      }
    }
    return json({ error: 'Not found' }, 404);
  },
};
