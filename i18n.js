/**
 * EN / MY / CN switcher. The English text in index.html is the source;
 * I18N maps each English string to [Malay, Simplified Chinese].
 * Text without an entry (brand, numbers, contacts) stays as-is.
 */

const I18N = {
  // Page text
  'Krunchie Snacks | One bite, big delight': ['Krunchie Snacks | Satu gigitan, kegembiraan besar', 'Krunchie Snacks | 一口，大满足'],
  'Krunchie Snacks Homepage': ['Laman Utama Krunchie Snacks', 'Krunchie Snacks 首页'],
  'Main Navigation': ['Navigasi Utama', '主导航'],
  'Language': ['Bahasa', '语言'],
  'Flavours': ['Perisa', '口味'],
  'Flavour': ['Perisa', '口味'],
  'Order': ['Pesanan', '订购'],
  'Contact': ['Hubungi', '联系'],
  'One bite,': ['Satu gigitan,', '一口，'],
  'big delight.': ['kegembiraan besar.', '大满足。'],
  'Placeholder': ['Pemegang tempat', '占位文字'],
  'See The Flavours': ['Lihat Perisa', '查看口味'],
  'Illustration of Krunchie Snacks BBQ and Cheese bags': ['Ilustrasi bungkusan Krunchie Snacks BBQ dan Keju', 'Krunchie Snacks 烧烤与芝士包装插图'],
  'BBQ': ['BBQ', '烧烤'],
  'Cheese': ['Keju', '芝士'],
  'BBQ or Cheese.': ['BBQ atau Keju.', '烧烤或芝士。'],
  'Select BBQ': ['Pilih BBQ', '选择烧烤味'],
  'Select Cheese': ['Pilih Keju', '选择芝士味'],
  'Place an order.': ['Buat pesanan.', '下订单。'],
  'Interested in Krunchie Snacks?': ['Berminat dengan Krunchie Snacks?', '对 Krunchie Snacks 感兴趣？'],
  'Pick a flavour and leave your details below.': ['Pilih perisa dan tinggalkan butiran anda di bawah.', '选择口味并在下方留下你的资料。'],
  'Your Name': ['Nama Anda', '你的名字'],
  'Your name': ['Nama anda', '你的名字'],
  'Phone or Email': ['Telefon atau E-mel', '电话或电邮'],
  'Phone or email': ['Telefon atau e-mel', '电话或电邮'],
  'Send Order Request': ['Hantar Permintaan Pesanan', '提交订购请求'],
  'Phone': ['Telefon', '电话'],
  'Official Socials': ['Media Sosial Rasmi', '官方社交媒体'],
  'Email': ['E-mel', '电邮'],
  'Connect': ['Hubungi', '联系我们'],
  '"One bite, big delight"': ['"Satu gigitan, kegembiraan besar"', '“一口，大满足”'],
  'Krunchie Snacks. All rights reserved.': ['Krunchie Snacks. Hak cipta terpelihara.', 'Krunchie Snacks 版权所有。'],

  // Shop
  'Shop': ['Kedai', '商店'],
  'Shop Now': ['Beli Sekarang', '立即选购'],
  'Prices are for testing only.': ['Harga hanya untuk ujian.', '价格仅供测试。'],
  'Cart': ['Troli', '购物车'],
  'Your cart': ['Troli anda', '你的购物车'],
  'Checkout': ['Bayar', '结账'],
  'Subtotal': ['Jumlah kecil', '小计'],
  'Total': ['Jumlah', '合计'],
  'Delivery': ['Penghantaran', '配送'],
  'Payment': ['Pembayaran', '付款'],
  'Status': ['Status', '状态'],
  'Close': ['Tutup', '关闭'],
  'Decrease': ['Kurangkan', '减少'],
  'Increase': ['Tambah', '增加'],
  'Your cart is empty.': ['Troli anda kosong.', '你的购物车是空的。'],
  'Add to cart': ['Tambah ke troli', '加入购物车'],
  'testing price': ['harga ujian', '测试价格'],
  'Could not load products. Please try again later.': ['Produk tidak dapat dimuatkan. Sila cuba lagi nanti.', '无法加载产品，请稍后再试。'],
  'Something went wrong. Please try again.': ['Sesuatu tidak kena. Sila cuba lagi.', '出错了，请重试。'],
  'Your details': ['Butiran anda', '你的资料'],
  'Email (optional)': ['E-mel (pilihan)', '电邮（选填）'],
  'Delivery address': ['Alamat penghantaran', '配送地址'],
  'Notes (optional)': ['Nota (pilihan)', '备注（选填）'],
  'Order summary': ['Ringkasan pesanan', '订单摘要'],
  'Place order': ['Buat pesanan', '提交订单'],
  'Testing mode: prices, delivery and payment are placeholders, no real payment is taken.': ['Mod ujian: harga, penghantaran dan pembayaran adalah contoh, tiada bayaran sebenar diambil.', '测试模式：价格、配送和付款均为占位，不会真正收款。'],
  'Order number': ['Nombor pesanan', '订单编号'],
  'Thank you for your order': ['Terima kasih atas pesanan anda', '感谢你的订单'],
  'Order not found': ['Pesanan tidak dijumpai', '找不到订单'],
  'Back to shop': ['Kembali ke kedai', '返回商店'],
  'Testing mode: this is a test order, no payment was taken.': ['Mod ujian: ini pesanan ujian, tiada bayaran diambil.', '测试模式：这是测试订单，未收取任何款项。'],
  'Keep this page link to check your order status later.': ['Simpan pautan halaman ini untuk semak status pesanan kemudian.', '请保存此页面链接，以便稍后查看订单状态。'],
  'Loading…': ['Memuatkan…', '加载中…'],
  'new': ['baharu', '新订单'],
  'paid': ['dibayar', '已付款'],
  'shipped': ['dihantar', '已发货'],
  'cancelled': ['dibatalkan', '已取消'],
  'Duo Pack (1 BBQ + 1 Cheese)': ['Pek Duo (1 BBQ + 1 Keju)', '双拼装（1 烧烤 + 1 芝士）'],
  'Self pickup': ['Ambil sendiri', '自取'],
  'Delivery (testing flat fee)': ['Penghantaran (kadar rata ujian)', '配送（测试统一运费）'],
  'Cash on delivery / pickup (testing)': ['Tunai semasa penghantaran / ambil (ujian)', '货到付款 / 自取付款（测试）'],
  'Bank transfer (testing)': ['Pindahan bank (ujian)', '银行转账（测试）'],
  'Please enter your name.': ['Sila masukkan nama anda.', '请输入你的名字。'],
  'Please enter a valid phone number.': ['Sila masukkan nombor telefon yang sah.', '请输入有效的电话号码。'],
  'Please enter a valid email.': ['Sila masukkan e-mel yang sah.', '请输入有效的电邮。'],
  'Choose delivery and payment.': ['Pilih penghantaran dan pembayaran.', '请选择配送和付款方式。'],
  'Please enter a delivery address.': ['Sila masukkan alamat penghantaran.', '请输入配送地址。'],
  'Invalid cart.': ['Troli tidak sah.', '购物车无效。'],
  'Invalid request': ['Permintaan tidak sah', '请求无效'],

  // Messages from app.js
  'Could not send your request. Please try again or contact us directly.': ['Permintaan tidak dapat dihantar. Sila cuba lagi atau hubungi kami terus.', '无法发送你的请求。请重试或直接联系我们。'],
  'Selected flavor note: {flavor}. Enter your details below to order.': ['Perisa dipilih: {flavor}. Isi butiran anda di bawah untuk memesan.', '已选口味：{flavor}。请在下方填写资料以订购。'],
  'Please provide both your name and phone/email.': ['Sila isi nama dan telefon/e-mel anda.', '请填写你的名字和电话/电邮。'],
  "Thank you, {name}! Your request for {pack} has been logged. We'll contact {contact}.": ['Terima kasih, {name}! Permintaan anda untuk {pack} telah direkodkan. Kami akan menghubungi {contact}.', '谢谢你，{name}！你的 {pack} 订购请求已记录。我们会联系 {contact}。'],
};

const LANGS = ['en', 'ms', 'zh'];
let lang = 'en';

function t(en, vars = {}) {
  const i = LANGS.indexOf(lang) - 1;
  const s = (i >= 0 && I18N[en] && I18N[en][i]) || en;
  return s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
}

// Snapshot the English once: [node, leading space, text, trailing space] and [el, attr, text]
const texts = [];
const attrs = [];
const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  const [, pre, body, post] = node.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
  const en = body.replace(/\s+/g, ' ');
  if (I18N[en]) texts.push([node, pre, en, post]);
}
document.querySelectorAll('[placeholder], [aria-label], [alt]').forEach(el => {
  ['placeholder', 'aria-label', 'alt'].forEach(a => {
    const en = el.getAttribute(a);
    if (en && I18N[en]) attrs.push([el, a, en]);
  });
});

function setLang(next) {
  lang = LANGS.includes(next) ? next : 'en';
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
  texts.forEach(([node, pre, en, post]) => { node.nodeValue = pre + t(en) + post; });
  attrs.forEach(([el, a, en]) => el.setAttribute(a, t(en)));
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  try { localStorage.setItem('ks-lang', lang); } catch (e) {}
  document.dispatchEvent(new Event('langchange'));
}

document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem('ks-lang'); } catch (e) {}
setLang(saved);
