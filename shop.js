/**
 * Shared shop logic: cart in localStorage, catalogue from /api/products,
 * cart drawer (pages with <body data-drawer>), header cart count.
 * Prices shown here are for display only; the Worker prices the order.
 */
const CART_KEY = 'ks-cart';
const rm = (sen) => 'RM' + (sen / 100).toFixed(2);
const tr = (s) => (typeof t === 'function' ? t(s) : s);
const el = (tag, props = {}, ...kids) => {
  const e = Object.assign(document.createElement(tag), props);
  e.append(...kids);
  return e;
};

const Cart = {
  get() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch { return {}; }
  },
  set(c) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(c)); } catch {}
    document.dispatchEvent(new Event('cartchange'));
  },
  setQty(id, qty) {
    const c = this.get();
    qty = Math.max(0, Math.min(20, qty));
    if (qty) c[id] = qty; else delete c[id];
    this.set(c);
  },
  add(id) { this.setQty(id, (this.get()[id] || 0) + 1); },
  clear() { this.set({}); },
};

let catalogPromise;
const loadCatalog = () => (catalogPromise ??= fetch('/api/products').then((r) => {
  if (!r.ok) throw new Error(r.status);
  return r.json();
}));

// Cart lines joined with catalogue prices, unknown ids dropped
function cartLines(cat) {
  const cart = Cart.get();
  return cat.products.filter((p) => cart[p.id]).map((p) => ({ ...p, qty: cart[p.id] }));
}
const subtotalOf = (lines) => lines.reduce((s, l) => s + l.price * l.qty, 0);

// Render editable (or read-only) line items into a container
function renderLines(box, lines, editable = true) {
  box.replaceChildren();
  if (!lines.length) {
    box.append(el('p', { className: 'cart-empty' }, tr('Your cart is empty.')));
    return;
  }
  lines.forEach((l) => {
    const qty = editable
      ? el('div', { className: 'qty' },
          el('button', { type: 'button', ariaLabel: tr('Decrease'), onclick: () => Cart.setQty(l.id, l.qty - 1) }, '−'),
          el('span', {}, String(l.qty)),
          el('button', { type: 'button', ariaLabel: tr('Increase'), onclick: () => Cart.setQty(l.id, l.qty + 1) }, '+'))
      : el('span', { className: 'qty-static' }, '× ' + l.qty);
    box.append(el('div', { className: 'line' },
      el('div', { className: 'line-info' },
        el('strong', {}, tr(l.name)),
        el('small', {}, rm(l.price))),
      qty,
      el('span', { className: 'line-total' }, rm(l.price * l.qty))));
  });
}

function updateCount() {
  const n = Object.values(Cart.get()).reduce((s, q) => s + q, 0);
  document.querySelectorAll('[data-cart-count]').forEach((e) => { e.textContent = n; e.hidden = !n; });
}

async function initDrawer() {
  const drawer = el('aside', { className: 'cart-drawer', ariaLabel: tr('Cart') });
  const back = el('div', { className: 'drawer-backdrop' });
  const lines = el('div', { className: 'drawer-lines' });
  const total = el('strong', {});
  const checkout = el('a', { className: 'btn btn-primary', href: 'checkout.html' }, tr('Checkout'));
  const close = () => { drawer.classList.remove('is-open'); back.classList.remove('is-open'); };
  drawer.append(
    el('header', {},
      el('h2', {}, tr('Your cart')),
      el('button', { type: 'button', className: 'drawer-close', ariaLabel: tr('Close'), onclick: close }, '×')),
    lines,
    el('footer', {}, el('div', { className: 'drawer-total' }, el('span', {}, tr('Subtotal')), total), checkout));
  back.onclick = close;
  document.body.append(back, drawer);

  const draw = async () => {
    const cat = await loadCatalog();
    const ls = cartLines(cat);
    renderLines(lines, ls);
    total.textContent = rm(subtotalOf(ls));
    checkout.hidden = !ls.length;
  };
  document.addEventListener('cartchange', draw);
  document.addEventListener('langchange', draw);
  document.querySelectorAll('[data-open-cart]').forEach((b) => b.addEventListener('click', (e) => {
    e.preventDefault();
    drawer.classList.add('is-open');
    back.classList.add('is-open');
  }));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
  document.addEventListener('shopadd', () => { drawer.classList.add('is-open'); back.classList.add('is-open'); });
  draw();
}

async function renderProducts(grid) {
  const draw = async () => {
    let cat;
    try { cat = await loadCatalog(); } catch {
      grid.replaceChildren(el('p', {}, tr('Could not load products. Please try again later.')));
      return;
    }
    grid.replaceChildren(...cat.products.map((p) => el('article', { className: `flavour-card ${p.theme}-theme product-card` },
      el('div', { className: 'flavour-card-body' },
        el('h3', { className: 'flavour-name' }, tr(p.name)),
        el('p', { className: 'flavour-subhead' }, tr(p.desc)),
        el('div', { className: 'product-price' }, rm(p.price), el('small', {}, ' ' + tr('testing price'))),
        el('div', { className: 'card-action' },
          el('button', { type: 'button', className: 'btn btn-primary', onclick: () => { Cart.add(p.id); document.dispatchEvent(new Event('shopadd')); } }, tr('Add to cart')))))));
  };
  document.addEventListener('langchange', draw);
  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCount();
  document.addEventListener('cartchange', updateCount);
  if (document.body.dataset.drawer !== undefined) initDrawer();
  const grid = document.getElementById('product-grid');
  if (grid) renderProducts(grid);
});
