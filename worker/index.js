import { EmailMessage } from 'cloudflare:email';

const FROM = 'orders@vivlos.dev';
const TO = 'krunchiesnacks@gmail.com';
const FLAVOURS = ['BBQ', 'Cheese'];
const clean = (s, n) => String(s ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, n);

export default {
  async fetch(req, env) {
    if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
    let b;
    try { b = await req.json(); } catch { return new Response('Bad Request', { status: 400 }); }
    if (b.website) return new Response('ok'); // honeypot, bots fill it
    const name = clean(b.name, 80), contact = clean(b.contact, 120), flavour = clean(b.flavour, 20);
    if (!name || !contact || !FLAVOURS.includes(flavour)) return new Response('Bad Request', { status: 400 });

    const subject = `Krunchie order: ${flavour} from ${name}`.replace(/[^\x20-\x7E]/g, '?');
    const body = `Name: ${name}\r\nContact: ${contact}\r\nFlavour: ${flavour}\r\n`;
    const raw = [
      `From: Krunchie Orders <${FROM}>`,
      `To: ${TO}`,
      `Subject: ${subject}`,
      `Date: ${new Date().toUTCString()}`,
      `Message-ID: <${crypto.randomUUID()}@vivlos.dev>`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=utf-8',
      'Content-Transfer-Encoding: base64',
      '',
      btoa(String.fromCharCode(...new TextEncoder().encode(body))),
    ].join('\r\n');
    try {
      await env.MAIL.send(new EmailMessage(FROM, TO, raw));
    } catch (e) {
      return new Response('Send failed', { status: 502 });
    }
    return new Response('ok');
  },
};
