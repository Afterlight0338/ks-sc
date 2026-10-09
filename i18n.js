/**
 * EN / MY / CN switcher. The English text in index.html is the source;
 * I18N maps each English string to [Malay, Simplified Chinese].
 * Text without an entry (brand, numbers, contacts) stays as-is.
 */

const I18N = {
  // Page text
  'KrunchieSnack — Kettle-Crafted Snacks': ['KrunchieSnack | Snek Buatan Kawah', 'KrunchieSnack | 手工锅煮零食'],
  'Order Announcement': ['Pengumuman Pesanan', '订购公告'],
  'Small Batch No. 04': ['Kelompok Kecil No. 04', '小批量 第04批'],
  'Fresh kettle run just cooled. Free shipping on orders over 3 bags with code': ['Kelompok baharu baru disejukkan. Penghantaran percuma untuk pesanan lebih 3 bungkus dengan kod', '新一批刚出锅放凉。满3包以上免运费，请使用优惠码'],
  '.': [null, '。'],
  'Stock Up →': ['Borong Sekarang →', '立即囤货 →'],
  'KrunchieSnack Homepage': ['Laman Utama KrunchieSnack', 'KrunchieSnack 首页'],
  'Main Navigation': ['Navigasi Utama', '主导航'],
  'Language': ['Bahasa', '语言'],
  'The Flavours': ['Perisa Kami', '我们的口味'],
  'Our Kettle Craft': ['Seni Kawah Kami', '我们的锅煮工艺'],
  'Ingredients': ['Bahan-bahan', '配料'],
  'Order / Packs': ['Pesanan / Pek', '订购 / 套装'],
  'Stockists & Contact': ['Kedai & Hubungi', '经销商与联系'],
  'Find in Stores': ['Cari di Kedai', '门店查找'],
  'Taste The Crunch': ['Rasai Kerangupannya', '尝尝这份酥脆'],
  '100% Real Potatoes • Zero Artificial Fluff': ['100% Kentang Asli • Tiada Bahan Tiruan', '100% 真材实料土豆 • 零人工添加'],
  'Crisp kettle bite.': ['Gigitan kawah yang rangup.', '锅煮酥脆，一口难忘。'],
  'Unapologetic seasoning.': ['Perasa yang berani.', '调味大胆不妥协。'],
  'We cook sliced Russet potatoes slowly in traditional cast kettles until the crunch echoes. Finished with honest seasonings, never industrial powdered shortcuts.': ['Kami memasak hirisan kentang Russet perlahan-lahan di dalam kawah besi tradisional sehingga kerangupannya bergema. Disudahi dengan perasa yang jujur, bukan serbuk perisa kilang.', '我们将切片的褐皮土豆放入传统铸铁锅中慢慢炸制，直到酥脆有声。只用真材实料调味，绝不用工业调味粉偷工减料。'],
  'Signature Pair': ['Pasangan Istimewa', '招牌组合'],
  'Smoky BBQ & Aged Cheddar': ['BBQ Berasap & Cheddar Matang', '烟熏烧烤 & 陈年切达'],
  'Standard Bag': ['Bungkus Standard', '标准包'],
  'Kettle Method': ['Kaedah Kawah', '锅煮工艺'],
  'Batch Kettle Cooked': ['Dimasak Berkelompok dalam Kawah', '小批量锅煮'],
  'Explore The 2 Flavours': ['Terokai 2 Perisa', '探索两种口味'],
  'How We Fry →': ['Cara Kami Menggoreng →', '我们如何炸制 →'],
  'Batch #104 / Freshly Sealed': ['Kelompok #104 / Baru Dibungkus', '第104批 / 新鲜密封'],
  'Illustration of KrunchieSnack BBQ and Cheese bags': ['Ilustrasi bungkusan KrunchieSnack BBQ dan Keju', 'KrunchieSnack 烧烤与芝士包装插图'],
  'Smoky BBQ': ['BBQ Berasap', '烟熏烧烤'],
  'HICKORY & BLACK PEPPER': ['HICKORY & LADA HITAM', '山核桃木 & 黑胡椒'],
  'Aged Cheese': ['Keju Matang', '陈年芝士'],
  'VINTAGE CHEDDAR CRUMB': ['SERBUK CHEDDAR MATANG', '陈年切达碎'],
  'Hickory BBQ': ['BBQ Hickory', '山核桃烧烤'],
  'Sharp Aged Cheddar': ['Cheddar Matang Tajam', '浓郁陈年切达'],
  'The Two Recipes': ['Dua Resipi', '两款配方'],
  'Two Obsessions. Zero Filler.': ['Dua Obsesi. Tiada Pengisi.', '两种执着，零填充。'],
  'We chose not to make fifteen mediocre varieties. We spent fourteen months perfecting two unapologetic profiles that demand respect.': ['Kami memilih untuk tidak membuat lima belas perisa yang biasa-biasa. Kami menghabiskan empat belas bulan menyempurnakan dua perisa berani yang patut dihormati.', '我们不做十五种平庸的口味，而是花了十四个月打磨出两款值得尊重的大胆风味。'],
  'Profile No. 01': ['Profil No. 01', '风味 01'],
  'Profile No. 02': ['Profil No. 02', '风味 02'],
  'Slow-charred sweet paprika, hickory wood smoke, dark molasses, and cracked tellicherry pepper.': ['Paprika manis yang dipanggang perlahan, asap kayu hickory, molases gelap dan lada tellicherry yang ditumbuk.', '慢烤甜椒粉、山核桃木烟熏、黑糖蜜，以及现磨代利杰里胡椒。'],
  'Flavor Notes:': ['Nota Rasa:', '风味特点：'],
  'Woodfire Hickory': ['Hickory Bakaran Kayu', '山核桃柴火香'],
  'Caramelized Molasses': ['Molases Berkaramel', '焦糖糖蜜'],
  'Cracked Black Peppercorn': ['Lada Hitam Tumbuk', '现磨黑胡椒粒'],
  'Flaky Sea Salt': ['Garam Laut Kepingan', '片状海盐'],
  'Cut Profile': ['Profil Hirisan', '切片规格'],
  'Thick Rustic Kettle Slice (1.8mm)': ['Hirisan Kawah Tebal (1.8mm)', '厚切锅煮片 (1.8mm)'],
  'Crunch Index': ['Indeks Rangup', '酥脆指数'],
  '9.5 / 10 (Deep Snap)': ['9.5 / 10 (Rangup Mendalam)', '9.5 / 10 (深层脆响)'],
  'Heat Level': ['Tahap Pedas', '辣度'],
  'Mild Warmth (Savory, Not Blazing)': ['Sedikit Pedas (Gurih, Tidak Membakar)', '微辣 (咸香不呛口)'],
  'Select BBQ in Pack': ['Pilih BBQ dalam Pek', '套装选烧烤味'],
  'Aged Cheddar': ['Cheddar Matang', '陈年切达'],
  'Naturally aged 18-month sharp cheese dust, toasted buttermilk, and roasted garlic aroma.': ['Serbuk keju tajam yang matang secara semula jadi selama 18 bulan, buttermilk panggang dan aroma bawang putih panggang.', '自然熟成18个月的浓郁芝士粉、烘烤酪乳，以及烤大蒜香气。'],
  'Sharp Golden Cheddar': ['Cheddar Keemasan Tajam', '浓郁金黄切达'],
  'Toasted Cream & Butter': ['Krim & Mentega Panggang', '烘烤奶油与黄油'],
  'Mild Allium & Chive': ['Bawang & Kucai Lembut', '淡葱香与韭葱'],
  'Mineral Sea Salt': ['Garam Laut Mineral', '矿物海盐'],
  'Golden Kettle Fold (1.6mm)': ['Lipatan Kawah Keemasan (1.6mm)', '金黄锅煮卷边 (1.6mm)'],
  '9.0 / 10 (Shatter Crisp)': ['9.0 / 10 (Rangup Berderai)', '9.0 / 10 (一咬即碎)'],
  'Savory Depth': ['Kedalaman Rasa', '咸香层次'],
  'Rich Umami, Authentic Dairy Dust': ['Umami Pekat, Serbuk Tenusu Asli', '浓郁鲜味，真正乳制品粉'],
  'Select Cheese in Pack': ['Pilih Keju dalam Pek', '套装选芝士味'],
  "Why Continuous Fryers Can't Make This Crisp.": ['Mengapa Penggoreng Berterusan Tak Mampu Hasilkan Kerepek Ini.', '为什么流水线油炸做不出这种薯片。'],
  'Big food conglomerates push potato slurry through 80-meter continuous conveyer belts in 90 seconds. We drop honest, skin-on potato slices into small, heavy-bottomed kettles. The oil temperature drops, then gently recovers — creating that signature jagged shatter.': ['Syarikat makanan gergasi menolak bubur kentang melalui tali sawat berterusan sepanjang 80 meter dalam 90 saat. Kami memasukkan hirisan kentang berkulit ke dalam kawah kecil yang berdasar tebal. Suhu minyak menurun, kemudian naik semula perlahan-lahan, menghasilkan kerangupan bergerigi yang tersendiri.', '大型食品集团把土豆浆放上80米长的连续传送带，90秒就完成。我们则把带皮的土豆片放进小巧厚底的锅中。油温先降，再缓缓回升，造就那标志性的不规则脆感。'],
  'Skin-On Russet Slicing': ['Hirisan Russet Berkulit', '带皮褐皮土豆切片'],
  'We leave the nutrient-dense earthy peel intact. Sliced thick enough to resist sog, thin enough to shatter effortlessly.': ['Kami mengekalkan kulitnya yang kaya nutrien. Dihiris cukup tebal supaya tidak lembik, cukup nipis supaya mudah rangup.', '我们保留营养丰富的土豆皮。切得够厚不易回软，又够薄一咬即碎。'],
  'Small Batch Immersion': ['Rendaman Kelompok Kecil', '小批量浸炸'],
  'Cooked in batches under 40 kilograms. Constant paddle stirring guarantees irregular blisters and deep golden crunch.': ['Dimasak dalam kelompok bawah 40 kilogram. Kacauan berterusan menghasilkan gelembung tidak sekata dan kerangupan keemasan.', '每批不超过40公斤。持续搅拌，造就不规则的气泡与金黄酥脆。'],
  'Hot Seasoning Drum': ['Dram Perasa Panas', '热调味滚筒'],
  'Spices are applied while the chips are hot from the kettle, so every ridge grips real spices without sticky chemical binders.': ['Rempah ditabur semasa kerepek masih panas dari kawah, jadi setiap lekuk melekat dengan rempah sebenar tanpa pengikat kimia.', '趁薯片刚出锅还热时撒上香料，每道纹路都裹满真香料，无需化学黏合剂。'],
  'Pure Transparency': ['Ketelusan Penuh', '完全透明'],
  'What Goes In. What Stays Out.': ['Apa Yang Dimasukkan. Apa Yang Dielakkan.', '加了什么，没加什么。'],
  'Standard': ['Piawaian', '标准'],
  'Conventional Supermarket Crisps': ['Kerepek Pasar Raya Biasa', '普通超市薯片'],
  'Cooking Vessel': ['Bekas Memasak', '烹饪器具'],
  'Small-Batch Kettle': ['Kawah Kelompok Kecil', '小批量锅'],
  'Continuous Industrial Flume': ['Saluran Industri Berterusan', '工业连续生产线'],
  'Potatoes': ['Kentang', '土豆'],
  'Locally Harvested Russet, Non-GMO': ['Russet Tempatan, Bukan GMO', '本地采收褐皮土豆，非转基因'],
  'Dehydrated Potato Flakes & Starches': ['Kepingan Kentang Kering & Kanji', '脱水土豆片与淀粉'],
  'Preservatives': ['Pengawet', '防腐剂'],
  'Zero (Fresh Nitrogen Sealed)': ['Tiada (Dimeterai Nitrogen Segar)', '零 (充氮保鲜密封)'],
  'TBHQ, BHA, Artificial Anti-Caking Salts': ['TBHQ, BHA, Garam Antigumpal Tiruan', 'TBHQ、BHA、人工抗结剂盐'],
  'Seasoning Philosophy': ['Falsafah Perasa', '调味理念'],
  'Real Wood Smoke & True Aged Cheese': ['Asap Kayu Sebenar & Keju Matang Asli', '真木烟熏与真正陈年芝士'],
  'Artificial Smoke Powder & Yellow Dye #6': ['Serbuk Asap Tiruan & Pewarna Kuning #6', '人工烟熏粉与黄色6号色素'],
  'Shelf Freshness': ['Tempoh Kesegaran', '保鲜期'],
  '120 Days Maximum': ['Maksimum 120 Hari', '最长120天'],
  '12-18 Months via Chemical Preservatives': ['12-18 Bulan dengan Pengawet Kimia', '依靠化学防腐剂12-18个月'],
  'Fair Pricing & Bundles': ['Harga Berpatutan & Pakej', '公道价格与套装'],
  'Choose Your Crunch.': ['Pilih Kerangupan Anda.', '选择你的酥脆。'],
  'Packaged fresh in aroma-barrier matte pouches. Direct from kettle to pantry.': ['Dibungkus segar dalam pek matte penghalang aroma. Terus dari kawah ke dapur anda.', '新鲜装入锁香哑光袋。从锅里直达你的零食柜。'],
  'Retail Single': ['Runcit Tunggal', '单包零售'],
  'The Single Bag': ['Bungkus Tunggal', '单包装'],
  '/ 150g bag': ['/ bungkus 150g', '/ 每包150g'],
  'Ideal for lunch boxes, desk drawer emergencies, or an honest movie evening.': ['Sesuai untuk bekal makan, simpanan di laci meja, atau malam menonton filem.', '适合午餐盒、办公桌抽屉应急，或悠闲的电影之夜。'],
  'Choose either BBQ or Aged Cheddar': ['Pilih BBQ atau Cheddar Matang', '烧烤味或陈年切达任选'],
  'Re-sealable freshness zipper': ['Zip boleh tutup semula', '可重复密封拉链'],
  'Calculated local shipping': ['Caj penghantaran tempatan dikira', '按本地运费计算'],
  'Select Single': ['Pilih Tunggal', '选择单包'],
  'Most Popular': ['Paling Popular', '最受欢迎'],
  'The Best of Both': ['Terbaik Kedua-duanya', '两全其美'],
  'Tasting Duo Sampler': ['Set Rasa Duo', '双味试吃装'],
  '/ 3-Bag Sampler': ['/ Set 3 Bungkus', '/ 3包试吃装'],
  'Two bags of your primary craving + one bag of the companion flavor. No compromises.': ['Dua bungkus perisa kegemaran + satu bungkus perisa pasangan. Tiada kompromi.', '两包你最爱的口味 + 一包另一款口味。绝不妥协。'],
  '2x Smoky BBQ + 1x Aged Cheddar (or swapped)': ['2x BBQ Berasap + 1x Cheddar Matang (atau sebaliknya)', '2x 烟熏烧烤 + 1x 陈年切达 (可互换)'],
  'Free kettle sticker pack included': ['Termasuk pek pelekat percuma', '附赠贴纸包'],
  'Saves RM0.98 compared to singles': ['Jimat RM0.98 berbanding bungkus tunggal', '比单买省 RM0.98'],
  'Order Duo Sampler': ['Pesan Set Duo', '订购双味试吃装'],
  'Wholesale & Pantry': ['Borong & Simpanan', '批发与囤货'],
  'The Party Crate': ['Kotak Parti', '派对箱'],
  '/ 8 Bags Total': ['/ Jumlah 8 Bungkus', '/ 共8包'],
  'For game days, office pantries, and households with serious snack standards.': ['Untuk hari perlawanan, pantri pejabat, dan rumah yang serius tentang snek.', '适合赛事日、办公室茶水间，以及对零食有要求的家庭。'],
  '4x Smoky BBQ + 4x Aged Cheddar': ['4x BBQ Berasap + 4x Cheddar Matang', '4x 烟熏烧烤 + 4x 陈年切达'],
  'Includes Priority Shipping nationwide': ['Termasuk Penghantaran Keutamaan ke seluruh negara', '含全国优先配送'],
  'Best value per gram (RM3.50 / bag)': ['Nilai terbaik setiap gram (RM3.50 / bungkus)', '每克最划算 (RM3.50 / 包)'],
  'Stock The Pantry': ['Penuhkan Simpanan', '囤满零食柜'],
  'Ready to order or stock KrunchieSnack in your shop?': ['Sedia untuk memesan atau menjual KrunchieSnack di kedai anda?', '想订购或在你的店里销售 KrunchieSnack？'],
  'Click any package above or drop your details below. We confirm dispatch within 24 hours.': ['Klik mana-mana pakej di atas atau isi butiran anda di bawah. Kami sahkan penghantaran dalam masa 24 jam.', '点击上方任一套装，或在下方留下你的资料。我们会在24小时内确认发货。'],
  'Your Name': ['Nama Anda', '你的名字'],
  'Phone or Email': ['Telefon atau E-mel', '电话或电邮'],
  '+1 (555) 000-0000 or email': ['+1 (555) 000-0000 atau e-mel', '+1 (555) 000-0000 或电邮'],
  'Selected Package': ['Pakej Dipilih', '所选套装'],
  'Tasting Duo Sampler (RM10.99)': ['Set Rasa Duo (RM10.99)', '双味试吃装 (RM10.99)'],
  'Single Bag (RM3.99)': ['Bungkus Tunggal (RM3.99)', '单包 (RM3.99)'],
  'Party Crate (RM27.99)': ['Kotak Parti (RM27.99)', '派对箱 (RM27.99)'],
  'Wholesale Inquiry (50+ bags)': ['Pertanyaan Borong (50+ bungkus)', '批发询价 (50包以上)'],
  'Send Order Request': ['Hantar Permintaan Pesanan', '提交订购请求'],
  'Stockists & Direct Inquiries': ['Kedai & Pertanyaan Terus', '经销商与直接咨询'],
  'Direct Kettle Phone': ['Telefon Terus', '直线电话'],
  'Customer service & dispatch inquiries open Monday to Friday, 9:00 AM – 5:00 PM EST.': ['Khidmat pelanggan & pertanyaan penghantaran dibuka Isnin hingga Jumaat, 9:00 pagi hingga 5:00 petang EST.', '客服与发货咨询：周一至周五，上午9:00至下午5:00 (EST)。'],
  'Official Socials': ['Media Sosial Rasmi', '官方社交媒体'],
  'Follow our small batch drops, behind-the-scenes fry days, and recipe pairings.': ['Ikuti keluaran kelompok kecil, di sebalik tabir hari menggoreng, dan padanan resipi kami.', '关注我们的小批量新品、炸制幕后花絮和搭配食谱。'],
  'Kettle HQ & Mail': ['Ibu Pejabat & Surat', '总部与邮寄地址'],
  '"Real kettle crunch. Unapologetic seasoning."': ['"Kerangupan kawah sebenar. Perasa yang berani."', '“真正锅煮酥脆，调味大胆不妥协。”'],
  'Allergen Notice: Cooked in a dedicated gluten-free facility. Aged Cheddar contains milk.': ['Notis Alergen: Dimasak di kemudahan khas bebas gluten. Cheddar Matang mengandungi susu.', '过敏原提示：在专用无麸质设施中制作。陈年切达含牛奶。'],
  'Flavours': ['Perisa', '口味'],
  'Kettle Philosophy': ['Falsafah Kawah', '锅煮理念'],
  'Nutritional Breakdown': ['Pecahan Nutrisi', '营养成分'],
  'Purchasing': ['Pembelian', '购买'],
  'Single Pack (RM3.99)': ['Pek Tunggal (RM3.99)', '单包 (RM3.99)'],
  'Duo Sampler (RM10.99)': ['Set Duo (RM10.99)', '双味试吃装 (RM10.99)'],
  'Wholesale Retailers': ['Peruncit Borong', '批发零售商'],
  'Connect': ['Hubungi', '联系我们'],
  'KrunchieSnack Co. All rights reserved.': ['KrunchieSnack Co. Hak cipta terpelihara.', 'KrunchieSnack Co. 版权所有。'],
  'Privacy Policy': ['Dasar Privasi', '隐私政策'],
  'Terms of Service': ['Terma Perkhidmatan', '服务条款'],
  'Food Safety Standards': ['Piawaian Keselamatan Makanan', '食品安全标准'],

  // Messages from app.js
  'Selected flavor note: {flavor}. Enter your details below to request a pack.': ['Perisa dipilih: {flavor}. Isi butiran anda di bawah untuk memesan pek.', '已选口味：{flavor}。请在下方填写资料以订购。'],
  'Please provide both your name and phone/email.': ['Sila isi nama dan telefon/e-mel anda.', '请填写你的名字和电话/电邮。'],
  "Thank you, {name}! Your request for {pack} has been logged. We'll contact {contact} within 24 hours.": ['Terima kasih, {name}! Permintaan anda untuk {pack} telah direkodkan. Kami akan menghubungi {contact} dalam masa 24 jam.', '谢谢你，{name}！你的 {pack} 订购请求已记录。我们会在24小时内联系 {contact}。'],
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
}

document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem('ks-lang'); } catch (e) {}
setLang(saved);
