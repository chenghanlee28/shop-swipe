/* ─── Config ─── */
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const LINE_CHANNEL_ID = 'YOUR_LINE_CHANNEL_ID';

/* ─── Inline product data (fallback for file:// and offline) ─── */
const PRODUCTS_INLINE = [
  { id:1,  name:'北歐陶瓷咖啡杯',           price:280,   category:'居家',   image:'images/product-1.jpg',  description:'手工拉坯陶瓷馬克杯，容量 380ml，霧面質感釉料，微波與洗碗機適用，讓每個早晨都更有儀式感。', welfare:false },
  { id:2,  name:'真皮皮革錢包',             price:1280,  category:'配件',   image:'images/product-2.jpg',  description:'頭層牛皮長夾，12 卡位設計，附拉鍊零錢袋，質感縫線收邊，越用越有光澤。', welfare:false },
  { id:3,  name:'帆布托特購物袋',           price:599,   category:'配件',   image:'images/product-3.jpg',  description:'加厚 12oz 帆布材質，可承重 15kg，附拉鍊內袋，簡約字母印刷，環保時尚兩不誤。', welfare:false },
  { id:4,  name:'925純銀簡約戒指',         price:780,   category:'珠寶',   image:'images/product-4.jpg',  description:'925純銀材質，拋光處理，細版設計百搭不挑手，可鐫刻文字，送禮自用皆宜。', welfare:false },
  { id:5,  name:'18K金幾何項鍊',           price:1480,  category:'珠寶',   image:'images/product-5.jpg',  description:'18K包金幾何吊墜，45cm 鏈長，防過敏電鍍工藝，鎖骨鏈設計，優雅有型。', welfare:false },
  { id:6,  name:'輕量慢跑運動鞋',           price:1580,  category:'鞋款',   image:'images/product-6.jpg',  description:'透氣飛織鞋面，EVA 緩震中底，橡膠防滑外底，重量僅 230g，日常跑步都合適。', welfare:false },
  { id:7,  name:'棉質寬版休閒T恤',         price:390,   category:'服飾',   image:'images/product-7.jpg',  description:'100% 純棉材質，寬版廓形，肩線下移設計，水洗不縮水，多色可選，穿搭必備基本款。', welfare:false },
  { id:8,  name:'高腰緊身瑜珈褲',           price:680,   category:'服飾',   image:'images/product-8.jpg',  description:'4 向彈力布料，高腰收腹設計，側邊深口袋，瑜珈跑步日常皆適用，修飾腿型效果佳。', welfare:false },
  { id:9,  name:'極簡風石英腕錶',           price:1980,  category:'配件',   image:'images/product-9.jpg',  description:'日本石英機芯，38mm 錶盤，真皮錶帶，藍寶石鏡面，10ATM 防水，男女皆宜設計。', welfare:false },
  { id:10, name:'復古圓框太陽眼鏡',         price:890,   category:'配件',   image:'images/product-10.jpg', description:'金屬圓框設計，UV400 防護鏡片，輕量 22g，附皮革眼鏡盒，復古感十足。', welfare:false },
  { id:11, name:'防水筆電後背包',           price:1580,  category:'配件',   image:'images/product-11.jpg', description:'可放 15.6 吋筆電，防水尼龍材質，USB 充電孔，隱藏式後背口袋，容量 25L。', welfare:false },
  { id:12, name:'香氛大豆蠟燭',             price:360,   category:'居家',   image:'images/product-12.jpg', description:'天然大豆蠟基底，薰衣草＋雪松複方香氣，燃燒約 45 小時，手工鑄造，附禮盒包裝。', welfare:false },
  { id:13, name:'珍珠髮夾禮盒組',           price:260,   category:'配件',   image:'images/product-13.jpg', description:'仿珍珠鑲嵌法式髮夾，六入組合裝，多種造型搭配，不傷髮質彈簧夾口，優雅日常兩用。', welfare:false },
  { id:14, name:'矽膠保護手機殼',           price:290,   category:'3C配件', image:'images/product-14.jpg', description:'液態矽膠材質，防摔 3.5m 認證，相容 MagSafe 磁吸，手感細膩不沾指紋，多色可選。', welfare:false },
  { id:15, name:'北歐風 LED 桌燈',          price:880,   category:'居家',   image:'images/product-15.jpg', description:'木質燈座設計，三段色溫切換，USB-C 供電，360° 燈頭旋轉，護眼無頻閃認證。', welfare:false },
  { id:16, name:'不鏽鋼真空保溫瓶',         price:580,   category:'居家',   image:'images/product-16.jpg', description:'雙層真空304不鏽鋼，容量 500ml，保溫 24h / 保冷 12h，一鍵開蓋防漏設計。', welfare:false },
  { id:17, name:'亞麻廚房圍裙',             price:480,   category:'居家',   image:'images/product-17.jpg', description:'水洗亞麻材質，前胸雙口袋，可調節頸帶，透氣耐污，烹飪烘焙攝影都好搭。', welfare:false },
  { id:18, name:'多肉植物組合盆栽',         price:199,   category:'居家',   image:'images/product-18.jpg', description:'三種不同品種多肉植物，附白色陶瓷花器，桌面療癒小物，附施肥說明卡，易照顧。', welfare:false },
  { id:19, name:'天然橡膠瑜珈墊',           price:890,   category:'運動',   image:'images/product-19.jpg', description:'4mm 天然橡膠底層，PU 吸汗表面，防滑紋路，183×61cm 標準尺寸，附收納帶。', welfare:false },
  { id:20, name:'竹製砧板刀具組',           price:850,   category:'居家',   image:'images/product-20.jpg', description:'天然竹製砧板附三件不鏽鋼刀組，刀架一體成型，防黴抗菌竹材，廚房必備實用套組。', welfare:false },
  { id:21, name:'真絲髮圈禮盒組',           price:240,   category:'配件',   image:'images/product-21.jpg', description:'100% 桑蠶絲材質，五色裝禮盒，不傷髮絲不留痕，睡眠也適用，精緻禮盒附緞帶。', welfare:false },
  { id:22, name:'彈力訓練阻力帶組',         price:299,   category:'運動',   image:'images/product-22.jpg', description:'五段阻力等級，乳膠材質耐用不易斷，居家健身必備，附收納袋，適合全身訓練。', welfare:false },
  { id:23, name:'牛皮護照夾票夾',           price:590,   category:'配件',   image:'images/product-23.jpg', description:'植鞣真皮材質，可放護照/票卡/SIM 卡工具，RFID 防盜刷，旅行必備質感好物。', welfare:false },
  { id:24, name:'玫瑰精華護手霜',           price:220,   category:'美妝',   image:'images/product-24.jpg', description:'大馬士革玫瑰精華，質地輕盈快吸收，深層修護乾裂，50ml 隨身裝，無矽靈配方。', welfare:false },
  { id:25, name:'精油香竹擴香瓶',           price:280,   category:'居家',   image:'images/product-25.jpg', description:'天然藤條擴香，附 100ml 複方精油，持續釋香約 60 天，無火安全，玻璃瓶身設計。', welfare:false },
  { id:26, name:'棒球帽鴨舌帽',             price:450,   category:'服飾',   image:'images/product-26.jpg', description:'水洗棉材質，金屬扣調節帽圍，刺繡 LOGO 設計，防曬遮陽，男女通用多色可選。', welfare:false },
  { id:27, name:'法蘭絨格紋毯子',           price:680,   category:'居家',   image:'images/product-27.jpg', description:'雙面法蘭絨格紋，130×170cm，超柔軟觸感，可機洗，沙發毯午睡毯首選。', welfare:false },
  { id:28, name:'手工陶瓷餐碗組',           price:320,   category:'居家',   image:'images/product-28.jpg', description:'手工拉坯陶瓷碗兩入組，容量 480ml，可微波可洗碗機，質樸釉面色，早餐碗/湯碗適用。', welfare:false },
  { id:29, name:'皮革手帳筆記本',           price:390,   category:'文具',   image:'images/product-29.jpg', description:'PU 皮革封面，A5 尺寸，內附月計劃、週計劃、空白筆記，鬆緊帶固定，附書帶。', welfare:false },
  { id:30, name:'棉麻儲物收納籃',           price:320,   category:'居家',   image:'images/product-30.jpg', description:'棉麻混紡折疊收納籃，圓形大口設計，可收納玩具衣物，折疊後平放，多尺寸可選。', welfare:false },
  { id:31, name:'10000mAh 行動電源',        price:590,   category:'3C配件', image:'images/product-31.jpg', description:'超薄卡片設計，22.5W 快充，雙向 USB-C，LED 電量顯示，支援 iPhone/Android。', welfare:false },
  { id:32, name:'絨面繫帶踝靴',             price:1980,  category:'鞋款',   image:'images/product-32.jpg', description:'麂皮絨面材質，5cm 方形粗跟，側拉鍊設計方便穿脫，增高顯瘦，秋冬必備款式。', welfare:false },
  { id:33, name:'環保咖啡隨行杯',           price:580,   category:'居家',   image:'images/product-33.jpg', description:'雙層隔熱玻璃+矽膠護套，350ml 容量，防漏旋蓋，可拆洗，取代紙杯減少碳排放。', welfare:false },
  { id:34, name:'抽象版畫裝飾掛畫',         price:580,   category:'居家',   image:'images/product-34.jpg', description:'北歐風抽象藝術版畫，A3 尺寸三聯幅，美術紙印刷，附鋁合金相框，開箱即可掛。', welfare:false },
  { id:35, name:'1000片主題拼圖',           price:480,   category:'生活',   image:'images/product-35.jpg', description:'台灣風景主題，1000片精切拼圖，厚紙版不易斷裂，完成尺寸 75×50cm，附收納袋。', welfare:false },
  { id:36, name:'手工編織圓形地毯',         price:1280,  category:'居家',   image:'images/product-36.jpg', description:'純棉手工編織，直徑 80cm 圓形，波西米亞風格配色，柔軟舒適，可機洗，臥房客廳適用。', welfare:false },
  { id:37, name:'竹纖維毛巾浴巾組',         price:340,   category:'居家',   image:'images/product-37.jpg', description:'竹纖維材質，70×140cm 浴巾＋35×75cm 毛巾各一，吸水快乾，天然抗菌，柔軟觸感。', welfare:false },
  { id:38, name:'玻璃精油擴香機',           price:750,   category:'居家',   image:'images/product-38.jpg', description:'超音波冷霧擴香，300ml 大容量，七彩氛圍燈，定時8h，適用精油/純露，附量杯。', welfare:false },
  { id:39, name:'珍珠鑲嵌耳環組',           price:480,   category:'珠寶',   image:'images/product-39.jpg', description:'S925 銀針，仿淡水珍珠，三種尺寸搭配，可當耳針或夾式，附絨布珠寶收納盒。', welfare:false },
  { id:40, name:'木質桌面文具收納架',       price:340,   category:'文具',   image:'images/product-40.jpg', description:'松木多格收納，附筆筒、名片槽、小物格，三色可選，穩固底座，辦公桌必備整理好幫手。', welfare:false },
  { id:41, name:'Apple AirPods Pro 2',      price:2290,  originalPrice:7490,  category:'3C配件', image:'images/product-41.jpg', description:'主動降噪旗艦真無線耳機，H2 晶片，自適應透明模式，MagSafe 充電盒，續航 30h。福利品原因：外盒輕微磨損，耳機本體全新未使用，完整原廠配件，附保固卡。成本價出清！', welfare:true },
  { id:42, name:'iPhone 15 128GB',          price:12900, originalPrice:28900, category:'3C配件', image:'images/product-42.jpg', description:'A16 仿生晶片，4800 萬畫素主鏡頭，USB-C，靈動島設計，全新未拆封。福利品原因：展示機包裝更換，機身全新，通過原廠功能檢測，成本價讓利，限量 5 台！', welfare:true },
  { id:43, name:'Sony WH-1000XM5 耳機',     price:5990,  originalPrice:12900, category:'3C配件', image:'images/product-43.jpg', description:'業界頂尖降噪耳罩耳機，LDAC 高解析，30h 長效續航，3min 快充 3h，可折疊設計。福利品原因：海外退貨商品，外觀完好如新，功能完整，含原廠保固。成本價出清！', welfare:true },
  { id:44, name:'Apple Watch Series 9',     price:7900,  originalPrice:12900, category:'3C配件', image:'images/product-44.jpg', description:'S9 晶片，Always-On 螢幕，血氧心率偵測，IP68 防水，45mm GPS 版。福利品原因：換貨品，全新未使用，原廠密封包裝，成本讓利限搶！', welfare:true },
  { id:45, name:'Nintendo Switch OLED',     price:6990,  originalPrice:10800, category:'3C配件', image:'images/product-45.jpg', description:'7 吋 OLED 螢幕，64GB 內建儲存，有線 LAN 連接埠，新款白色主機底座。福利品原因：外箱輕微凹陷，主機全新完整配件，成本價出清，遊戲迷不容錯過！', welfare:true },
  { id:46, name:'iPad Air M2 256GB',        price:16900, originalPrice:24900, category:'3C配件', image:'images/product-46.jpg', description:'M2 晶片，11 吋 Liquid Retina，支援 Apple Pencil Pro，WiFi 版，星光色。福利品原因：拍攝道具機，全新未啟用，外觀完美，成本出清，數量稀少！', welfare:true },
  { id:47, name:'DJI Mini 4 Pro 空拍機',    price:18900, originalPrice:28900, category:'3C配件', image:'images/product-47.jpg', description:'249g 超輕機身，4K/60fps 錄影，全向避障，RC-N2 遙控器，最長 34 分鐘飛行時間。福利品原因：展示用途後封存，全新功能，成本讓利出清，空拍迷的好機會！', welfare:true },
  { id:48, name:'Dyson Airwrap 造型器',     price:12900, originalPrice:22900, category:'美妝',   image:'images/product-48.jpg', description:'Coanda 氣流造型技術，捲髮直髮吹髮三合一，防止極端高溫傷害，附六件造型頭。福利品原因：包裝盒損壞，機體全新未使用，含完整配件，成本價出清！', welfare:true },
  { id:49, name:'GoPro HERO12 Black',       price:8900,  originalPrice:14900, category:'3C配件', image:'images/product-49.jpg', description:'5.3K 60fps 旗艦錄影，HyperSmooth 6.0 防震，潛水 10m，前後雙螢幕，附配件組。福利品原因：外盒輕微磨損，相機全新無使用，成本出清，戶外玩家必搶！', welfare:true },
  { id:50, name:'Samsung Galaxy Buds2 Pro', price:3490,  originalPrice:7490,  category:'3C配件', image:'images/product-50.jpg', description:'ANC 主動降噪，24-bit Hi-Fi 音質，IPX7 防水，自動切換連接，續航 8+29h。福利品原因：包裝拆封但未使用，完整配件，附保固書，成本讓利！限量衝評價！', welfare:true },
];

const WELFARE_CONFIG = {
  minInterval: 7,
  maxInterval: 16,
  maxPerSession: 3,
  triggerChance: 0.11,
};

const PRODUCT_CONDITIONS = {
  1:'全新',  2:'全新',  3:'庫存品', 4:'全新',  5:'庫存品',
  6:'庫存品', 7:'庫存品', 8:'庫存品', 9:'展示品', 10:'庫存品',
  11:'全新', 12:'全新', 13:'庫存品', 14:'庫存品', 15:'展示品',
  16:'全新', 17:'庫存品', 18:'全新', 19:'庫存品', 20:'全新',
  21:'庫存品', 22:'庫存品', 23:'展示品', 24:'庫存品', 25:'全新',
  26:'庫存品', 27:'庫存品', 28:'全新', 29:'庫存品', 30:'庫存品',
  31:'展示品', 32:'庫存品', 33:'全新', 34:'全新', 35:'庫存品',
  36:'全新', 37:'庫存品', 38:'展示品', 39:'全新', 40:'庫存品',
  41:'福利品', 42:'福利品', 43:'福利品', 44:'福利品', 45:'福利品',
  46:'福利品', 47:'福利品', 48:'福利品', 49:'福利品', 50:'福利品',
};

/* ─── State ─── */
let allProducts = [];
let deck = [];          // ordered list of product ids to show
let deckIndex = 0;      // next card to load
let cart = [];          // { product, qty }
let user = null;        // { name, email, avatar, provider }
let pendingCheckout = false;

let welfareState = {
  regularSinceLastWelfare: 0,
  welfareShownCount: 0,
};

let swipeStats = { right: 0, left: 0, categories: {} };

/* ─── Helper: deterministic social proof number (seeded by id) ─── */
function getSocialProof(id) {
  return ((id * 7 + 13) % 47) + 3;  // 3–49 range, always same for same id
}

/* ─── Helper: welfare flash-sale countdown ─── */
function getWelfareCountdown(productId) {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const seededOffset = (productId * 1234567) % (8 * 3600000); // up to 8h before midnight
  let saleEnd = new Date(midnight.getTime() - seededOffset);
  if (saleEnd <= now) saleEnd = new Date(saleEnd.getTime() + 86400000);
  const diff = saleEnd - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return `⏱ ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')} 後結束`;
}

function startCountdownTimer() {
  function tick() {
    document.querySelectorAll('.welfare-countdown[data-pid]').forEach(el => {
      el.textContent = getWelfareCountdown(parseInt(el.dataset.pid));
    });
  }
  tick();
  setInterval(tick, 1000);
}

/* ─── DOM Refs ─── */
const cardStack = document.getElementById('card-stack');
const emptyState = document.getElementById('empty-state');
const actionButtons = document.getElementById('action-buttons');
const welfareBanner = document.getElementById('welfare-banner');
const cartBadge = document.getElementById('cart-badge');
const toastContainer = document.getElementById('toast-container');

/* ═══════════════════════════════════════════════
   DECK BUILDING
═══════════════════════════════════════════════ */

function buildDeck(products) {
  const regular = products.filter(p => !p.welfare);
  const welfare = products.filter(p => p.welfare);

  // Shuffle regular products
  const shuffledRegular = shuffle([...regular]);
  const shuffledWelfare = shuffle([...welfare]);

  const result = [];
  let welfareUsed = 0;
  let regularSince = 0;

  for (let i = 0; i < shuffledRegular.length; i++) {
    result.push(shuffledRegular[i]);
    regularSince++;

    // Check welfare insertion
    if (welfareUsed < WELFARE_CONFIG.maxPerSession && shuffledWelfare.length > welfareUsed) {
      const shouldForce = regularSince >= WELFARE_CONFIG.maxInterval;
      const canTrigger = regularSince >= WELFARE_CONFIG.minInterval;
      const triggered = canTrigger && (shouldForce || Math.random() < WELFARE_CONFIG.triggerChance);

      if (triggered) {
        result.push(shuffledWelfare[welfareUsed]);
        welfareUsed++;
        regularSince = 0;
      }
    }
  }

  return result;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ═══════════════════════════════════════════════
   CARD RENDERING
═══════════════════════════════════════════════ */

const VISIBLE_CARDS = 3;

function renderStack() {
  const existing = Array.from(cardStack.children);
  if (existing.length >= VISIBLE_CARDS) return;

  const isInitialLoad = existing.length === 0;
  const needed = VISIBLE_CARDS - existing.length;
  const newCards = [];

  for (let i = 0; i < needed; i++) {
    const dataIdx = deckIndex + existing.length + i;
    if (dataIdx >= deck.length) break;
    const product = deck[dataIdx];
    const card = createCardElement(product, dataIdx);
    // Pre-assign the card's final position class so its transform is
    // defined before we activate is-advancing (prevents a transition
    // from the identity transform to back-2 on the new card)
    if (!isInitialLoad) card.classList.add('card-back-2');
    cardStack.insertBefore(card, cardStack.firstChild);
    newCards.push(card);
  }

  if (!isInitialLoad) {
    // Activate smooth-advance transition on existing cards,
    // then force a reflow so the browser registers the transition
    // property BEFORE updateCardPositions changes the transforms
    cardStack.classList.add('is-advancing');
    cardStack.offsetHeight; // eslint-disable-line no-unused-expressions
  }

  updateCardPositions();

  if (!isInitialLoad) {
    setTimeout(() => cardStack.classList.remove('is-advancing'), 460);
    // Fade in the new back card(s) only during an advance
    newCards.forEach(card => {
      if (!card.classList.contains('card-front')) {
        card.classList.add('card-entering');
        card.addEventListener('animationend', () => card.classList.remove('card-entering'), { once: true });
      }
    });
  }
}

function updateCardPositions() {
  const cards = Array.from(cardStack.children);
  const total = cards.length;
  cards.forEach((card, i) => {
    card.classList.remove('card-back-2', 'card-back-1', 'card-front');
    const pos = total - 1 - i; // 0=front, 1=back-1, 2=back-2
    if (pos === 0) card.classList.add('card-front');
    else if (pos === 1) card.classList.add('card-back-1');
    else card.classList.add('card-back-2');
  });
}

function getConditionClass(condition) {
  if (condition === '全新') return 'cond-new';
  if (condition === '展示品') return 'cond-display';
  return 'cond-stock';
}

function createCardElement(product, dataIdx) {
  const card = document.createElement('div');
  card.className = 'swipe-card' + (product.welfare ? ' welfare-card' : '');
  card.dataset.id = product.id;
  card.dataset.idx = dataIdx;

  const savingsPct = product.welfare && product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  card.innerHTML = `
    <div class="like-indicator">LIKE ❤</div>
    <div class="nope-indicator">NOPE ✕</div>
    <img class="card-img" src="${product.image}" alt="${product.name}" loading="lazy" draggable="false" />
    <div class="card-gradient"></div>
    ${product.welfare
      ? '<div class="welfare-label">🎁 福利品</div>'
      : (product.condition ? `<div class="card-condition ${getConditionClass(product.condition)}">${product.condition}</div>` : '')}
    ${product.category ? `<div class="card-category">${product.category}</div>` : ''}
    <div class="card-info">
      <div class="card-name">${product.name}</div>
      <div class="card-price-row">
        <span class="card-price">NT$${product.price.toLocaleString()}</span>
        ${product.welfare && product.originalPrice ? `
          <span class="card-original-price">NT$${product.originalPrice.toLocaleString()}</span>
          <span class="card-savings">省 ${savingsPct}%</span>
        ` : ''}
      </div>
      ${product.welfare
        ? `<div class="welfare-countdown" data-pid="${product.id}"></div>
           ${savingsPct >= 40 ? `<div class="card-deal-tag">⚡ 成本價出清 · 限量</div>` : ''}`
        : `<div class="card-social-proof">🔥 ${getSocialProof(product.id)} 人今天加入購物車</div>`
      }
      <div class="card-tap-hint">點擊查看詳情</div>
    </div>
  `;

  attachDragHandlers(card, product);
  return card;
}

/* ═══════════════════════════════════════════════
   DRAG / SWIPE
═══════════════════════════════════════════════ */

function attachDragHandlers(card, product) {
  let startX = 0, startY = 0, currentX = 0;
  let isDragging = false;

  function onPointerDown(e) {
    if (!card.classList.contains('card-front')) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    currentX = 0;
    card.style.transition = 'none';
    card.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    const currentY = e.clientY - startY;
    const rotation = currentX * 0.08;
    card.style.transform = `translateX(${currentX}px) translateY(${currentY * 0.3}px) rotate(${rotation}deg)`;

    const likeInd = card.querySelector('.like-indicator');
    const nopeInd = card.querySelector('.nope-indicator');
    const ratio = Math.abs(currentX) / 80;
    const clamped = Math.min(ratio, 1);

    if (currentX > 20) {
      likeInd.style.opacity = clamped;
      nopeInd.style.opacity = 0;
    } else if (currentX < -20) {
      nopeInd.style.opacity = clamped;
      likeInd.style.opacity = 0;
    } else {
      likeInd.style.opacity = 0;
      nopeInd.style.opacity = 0;
    }
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    card.releasePointerCapture(e.pointerId);

    const likeInd = card.querySelector('.like-indicator');
    const nopeInd = card.querySelector('.nope-indicator');
    likeInd.style.opacity = 0;
    nopeInd.style.opacity = 0;

    const threshold = 80;
    if (currentX > threshold) {
      dismissCard(card, product, 'right');
    } else if (currentX < -threshold) {
      dismissCard(card, product, 'left');
    } else {
      // Snap back
      card.style.transition = 'transform 0.4s cubic-bezier(.34,1.56,.64,1)';
      card.style.transform = '';
      setTimeout(() => { card.style.transition = ''; }, 400);
    }
  }

  // Distinguish tap from drag
  let pointerDownX = 0, pointerDownY = 0;
  card.addEventListener('pointerdown', (e) => {
    pointerDownX = e.clientX;
    pointerDownY = e.clientY;
    onPointerDown(e);
  });
  card.addEventListener('pointermove', onPointerMove);
  card.addEventListener('pointerup', (e) => {
    const dx = Math.abs(e.clientX - pointerDownX);
    const dy = Math.abs(e.clientY - pointerDownY);
    if (dx < 12 && dy < 12) {
      isDragging = false;
      try { card.releasePointerCapture(e.pointerId); } catch (_) {}
      card.style.transition = 'transform 0.2s ease';
      card.style.transform = '';
      setTimeout(() => { card.style.transition = ''; }, 200);
      openProductModal(product);
      return;
    }
    onPointerUp(e);
  });
  card.addEventListener('pointercancel', () => {
    isDragging = false;
    card.style.transition = 'transform 0.4s cubic-bezier(.34,1.56,.64,1)';
    card.style.transform = '';
    setTimeout(() => { card.style.transition = ''; }, 400);
  });
}

function dismissCard(card, product, direction) {
  card.classList.remove('card-front', 'card-back-1', 'card-back-2');
  card.style.transition = '';
  card.classList.add(direction === 'right' ? 'fly-right' : 'fly-left');

  // Track stats
  if (direction === 'right') {
    swipeStats.right++;
    addToCart(product);
    if (navigator.vibrate) navigator.vibrate(45);
  } else {
    swipeStats.left++;
  }
  if (product.category) {
    swipeStats.categories[product.category] = (swipeStats.categories[product.category] || 0) + 1;
  }

  card.addEventListener('animationend', () => {
    card.remove();
    deckIndex++;
    advanceDeck(product);
  }, { once: true });
}

function advanceDeck(lastProduct) {
  // Update welfare state
  if (!lastProduct.welfare) {
    welfareState.regularSinceLastWelfare++;
  } else {
    welfareState.welfareShownCount++;
    welfareState.regularSinceLastWelfare = 0;
  }

  updateProgress();

  if (deckIndex >= deck.length) {
    showEmptyState();
    return;
  }

  renderStack();

  // Show banner at the moment the welfare card becomes front
  if (deck[deckIndex] && deck[deckIndex].welfare) {
    showWelfareBanner();
  }
}

function showWelfareBanner() {
  welfareBanner.classList.add('show');
  setTimeout(() => welfareBanner.classList.remove('show'), 2500);
}

/* ═══════════════════════════════════════════════
   PROGRESS
═══════════════════════════════════════════════ */

function updateProgress() {
  /* progress bar removed from UI — no-op kept for call-site compatibility */
}

function showEmptyState() {
  cardStack.style.display = 'none';
  actionButtons.style.display = 'none';

  const total = swipeStats.right + swipeStats.left;
  const topCatEntry = Object.entries(swipeStats.categories).sort((a, b) => b[1] - a[1])[0];

  emptyState.innerHTML = `
    <div class="empty-state-emoji">🎉</div>
    <h2>看完了！</h2>
    <p>你已經瀏覽了全部 ${total} 件商品</p>
    <div class="swipe-stats">
      <div class="stat-item">
        <div class="stat-num stat-right">❤ ${swipeStats.right}</div>
        <div class="stat-label">加入購物車</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-num stat-left">✕ ${swipeStats.left}</div>
        <div class="stat-label">跳過</div>
      </div>
      ${topCatEntry ? `
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-num stat-cat">🏆 ${topCatEntry[0]}</div>
        <div class="stat-label">最愛分類</div>
      </div>` : ''}
    </div>
    <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px">喜歡的都加進購物車了嗎？</p>
    <button class="btn-restart" id="btn-restart">重新瀏覽</button>
  `;

  document.getElementById('btn-restart').addEventListener('click', restartDeck);
  emptyState.classList.add('show');
}

function restartDeck() {
  deckIndex = 0;
  swipeStats = { right: 0, left: 0, categories: {} };
  welfareState = { regularSinceLastWelfare: 0, welfareShownCount: 0 };
  deck = buildDeck(allProducts);
  cardStack.innerHTML = '';
  emptyState.classList.remove('show');
  cardStack.style.display = '';
  actionButtons.style.display = '';
  updateProgress();
  renderStack();
}

/* ═══════════════════════════════════════════════
   CART
═══════════════════════════════════════════════ */

function addToCart(product) {
  const existing = cart.find(item => item.product.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ product, qty: 1 });
  }
  updateCartBadge();
  showToast(
    product.welfare ? `🎁 福利品已加入！省了 NT$${(product.originalPrice - product.price).toLocaleString()}` : `❤ 已加入購物車：${product.name}`,
    product.welfare ? 'welfare' : ''
  );
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  updateCartBadge();
  renderCartDrawer();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.product.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else {
    updateCartBadge();
    renderCartDrawer();
  }
}

function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartBadge.textContent = count;
  cartBadge.classList.toggle('visible', count > 0);
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items');
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="cart-empty-emoji">🛒</div><div>購物車是空的<br>快去滑一滑吧！</div></div>`;
    document.getElementById('cart-total').textContent = 'NT$0';
    return;
  }

  const total = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  document.getElementById('cart-total').textContent = `NT$${total.toLocaleString()}`;

  container.innerHTML = cart.map(({ product, qty }) => `
    <div class="cart-item ${product.welfare ? 'welfare-item' : ''}">
      <img class="cart-item-img" src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="cart-item-info">
        <div class="cart-item-name">${product.welfare ? '🎁 ' : ''}${product.name}</div>
        <div class="cart-item-price">NT$${product.price.toLocaleString()} × ${qty} = NT$${(product.price * qty).toLocaleString()}</div>
      </div>
      <div class="cart-item-actions">
        <button class="qty-btn" onclick="changeQty(${product.id}, -1)">−</button>
        <span class="qty-display">${qty}</span>
        <button class="qty-btn" onclick="changeQty(${product.id}, 1)">＋</button>
        <button class="btn-remove-item" onclick="removeFromCart(${product.id})" title="移除">✕</button>
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   CART DRAWER
═══════════════════════════════════════════════ */

function openCart() {
  renderCartDrawer();
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════
   PRODUCT DETAIL MODAL
═══════════════════════════════════════════════ */

let currentModalProduct = null;

function openProductModal(product) {
  currentModalProduct = product;
  const modal = document.getElementById('product-modal');
  document.getElementById('product-modal-img').src = product.image;
  document.getElementById('product-modal-img').alt = product.name;
  document.getElementById('product-modal-name').textContent = product.name;
  document.getElementById('product-modal-price').textContent = `NT$${product.price.toLocaleString()}`;

  const origEl = document.getElementById('product-modal-orig');
  const savingsEl = document.getElementById('product-modal-savings');
  const welfareEl = document.getElementById('product-modal-welfare-badge');

  if (product.welfare && product.originalPrice) {
    const pct = Math.round((1 - product.price / product.originalPrice) * 100);
    origEl.textContent = `NT$${product.originalPrice.toLocaleString()}`;
    origEl.style.display = '';
    savingsEl.textContent = `省 ${pct}%`;
    savingsEl.style.display = '';
    welfareEl.innerHTML = '<div class="welfare-badge">🎁 福利商品</div>';
  } else {
    origEl.style.display = 'none';
    savingsEl.style.display = 'none';
    welfareEl.innerHTML = product.condition
      ? `<span class="product-modal-condition ${getConditionClass(product.condition)}">${product.condition}</span>`
      : '';
  }

  document.getElementById('product-modal-desc').textContent = product.description;
  modal.classList.add('open');
}

function closeProductModal() {
  document.getElementById('product-modal').classList.remove('open');
  currentModalProduct = null;
}

/* ═══════════════════════════════════════════════
   LOGIN MODAL
═══════════════════════════════════════════════ */

function openLoginModal() {
  document.getElementById('login-modal').classList.add('open');
}

function closeLoginModal() {
  document.getElementById('login-modal').classList.remove('open');
}

function loginAs(name, email, avatar, provider) {
  user = { name, email, avatar, provider };
  updateUserUI();
  closeLoginModal();
  if (pendingCheckout) {
    pendingCheckout = false;
    setTimeout(openCheckoutModal, 200);
  }
  showToast(`歡迎，${name}！`);
}

function updateUserUI() {
  const btnLogin = document.getElementById('btn-header-login');
  const avatarWrap = document.getElementById('user-avatar-wrap');
  if (user) {
    btnLogin.style.display = 'none';
    avatarWrap.style.display = '';
    const avatarEl = document.getElementById('user-avatar');
    avatarEl.src = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=ff6b81&color=fff`;
    document.getElementById('menu-name').textContent = user.name;
    document.getElementById('menu-email').textContent = user.email;
    // Pre-fill checkout fields
    document.getElementById('field-name').value = user.name;
    document.getElementById('field-email').value = user.email;
  } else {
    btnLogin.style.display = '';
    avatarWrap.style.display = 'none';
  }
}

function logout() {
  user = null;
  document.getElementById('user-menu').classList.remove('open');
  updateUserUI();
  showToast('已登出');
}

/* ─── Google Login ─── */
function initGoogleLogin() {
  if (!window.google || GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID') return;
  try {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCredential,
    });
  } catch (e) {}
}

function handleGoogleCredential(response) {
  try {
    const parts = response.credential.split('.');
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
    loginAs(payload.name, payload.email, payload.picture, 'google');
  } catch (e) {
    showToast('Google 登入失敗，請重試');
  }
}

function triggerGoogleLogin() {
  if (GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID') {
    // Demo mode
    loginAs('Google 使用者', 'user@gmail.com', '', 'google');
    return;
  }
  if (window.google) {
    google.accounts.id.prompt();
  }
}

/* ─── LINE Login ─── */
function triggerLineLogin() {
  if (LINE_CHANNEL_ID === 'YOUR_LINE_CHANNEL_ID') {
    // Demo mode
    loginAs('LINE 使用者', 'user@line.me', '', 'line');
    return;
  }
  const redirectUri = encodeURIComponent(window.location.href.split('?')[0]);
  const state = Math.random().toString(36).slice(2);
  sessionStorage.setItem('line_oauth_state', state);
  const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${LINE_CHANNEL_ID}&redirect_uri=${redirectUri}&state=${state}&scope=profile%20openid%20email`;
  window.location.href = url;
}

/* ─── LINE OAuth callback ─── */
function handleLineCallback() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');
  const saved = sessionStorage.getItem('line_oauth_state');
  if (!code || state !== saved) return;
  // In production: exchange code for token via backend
  // For now, demo login
  loginAs('LINE 使用者', '', '', 'line');
  window.history.replaceState({}, '', window.location.pathname);
}

/* ═══════════════════════════════════════════════
   CHECKOUT MODAL
═══════════════════════════════════════════════ */

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('購物車是空的！先去挑幾件商品吧 😊');
    return;
  }
  closeCart();

  if (!user) {
    pendingCheckout = true;
    openLoginModal();
    return;
  }

  renderCheckoutSummary();
  document.getElementById('checkout-modal').classList.add('open');
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.remove('open');
}

function renderCheckoutSummary() {
  const total = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const lines = cart.map(({ product, qty }) =>
    `<div class="order-line"><span>${product.name} × ${qty}</span><span>NT$${(product.price * qty).toLocaleString()}</span></div>`
  ).join('');
  document.getElementById('checkout-summary').innerHTML = `
    <div class="order-summary-title">訂單明細</div>
    ${lines}
    <div class="order-line order-line-total"><span>總計</span><span>NT$${total.toLocaleString()}</span></div>
  `;
}

function submitOrder(e) {
  e.preventDefault();
  const name = document.getElementById('field-name').value.trim();
  const phone = document.getElementById('field-phone').value.trim();
  const email = document.getElementById('field-email').value.trim();
  const address = document.getElementById('field-address').value.trim();
  const notes = document.getElementById('field-notes').value.trim();

  if (!name || !phone || !address) {
    showToast('請填寫必填欄位（姓名、手機、地址）');
    return;
  }

  const total = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  document.getElementById('success-sub').innerHTML =
    `感謝 ${name} 的訂購！<br>訂單金額 NT$${total.toLocaleString()}，我們將盡快聯繫您確認。`;

  closeCheckoutModal();
  cart = [];
  updateCartBadge();

  document.getElementById('success-screen').classList.add('show');
}

/* ═══════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════ */

function showToast(message, type = '') {
  const toast = document.createElement('div');
  toast.className = 'toast' + (type ? ' ' + type : '');
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

/* ═══════════════════════════════════════════════
   BUTTON ACTIONS
═══════════════════════════════════════════════ */

function triggerLike() {
  const frontCard = getFrontCard();
  if (!frontCard) return;
  const product = getProductById(parseInt(frontCard.dataset.id));
  if (!product) return;
  dismissCard(frontCard, product, 'right');
}

function triggerNope() {
  const frontCard = getFrontCard();
  if (!frontCard) return;
  const product = getProductById(parseInt(frontCard.dataset.id));
  if (!product) return;
  dismissCard(frontCard, product, 'left');
}

function triggerInfo() {
  const frontCard = getFrontCard();
  if (!frontCard) return;
  const product = getProductById(parseInt(frontCard.dataset.id));
  if (product) openProductModal(product);
}

function getFrontCard() {
  return cardStack.querySelector('.card-front');
}

function getProductById(id) {
  return allProducts.find(p => p.id === id);
}

/* ═══════════════════════════════════════════════
   KEYBOARD SHORTCUTS
═══════════════════════════════════════════════ */

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowRight' || e.key === 'l' || e.key === 'L') triggerLike();
  if (e.key === 'ArrowLeft' || e.key === 'n' || e.key === 'N') triggerNope();
  if (e.key === 'i' || e.key === 'I') triggerInfo();
  if (e.key === 'Escape') {
    closeProductModal();
    closeLoginModal();
    closeCheckoutModal();
  }
});

/* ═══════════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════════ */

document.getElementById('btn-like').addEventListener('click', triggerLike);
document.getElementById('btn-nope').addEventListener('click', triggerNope);
document.getElementById('btn-info').addEventListener('click', triggerInfo);

document.getElementById('btn-open-cart').addEventListener('click', openCart);
document.getElementById('btn-close-cart').addEventListener('click', closeCart);
document.getElementById('drawer-overlay').addEventListener('click', closeCart);

document.getElementById('btn-checkout').addEventListener('click', openCheckoutModal);

document.getElementById('btn-close-product-modal').addEventListener('click', closeProductModal);
document.getElementById('product-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('product-modal')) closeProductModal();
});
document.getElementById('btn-modal-add-to-cart').addEventListener('click', () => {
  if (currentModalProduct) {
    closeProductModal();
    setTimeout(triggerLike, 350);
  }
});

document.getElementById('btn-header-login').addEventListener('click', openLoginModal);
document.getElementById('login-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('login-modal')) closeLoginModal();
});
document.getElementById('btn-google-login').addEventListener('click', triggerGoogleLogin);
document.getElementById('btn-line-login').addEventListener('click', triggerLineLogin);
document.getElementById('btn-guest-login').addEventListener('click', () => {
  loginAs('訪客', '', '', 'guest');
});

document.getElementById('user-avatar').addEventListener('click', () => {
  document.getElementById('user-menu').classList.toggle('open');
});
document.getElementById('btn-logout').addEventListener('click', logout);
document.addEventListener('click', (e) => {
  const menu = document.getElementById('user-menu');
  const avatarWrap = document.getElementById('user-avatar-wrap');
  if (!avatarWrap.contains(e.target)) menu.classList.remove('open');
});

document.getElementById('btn-close-checkout').addEventListener('click', closeCheckoutModal);
document.getElementById('checkout-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('checkout-modal')) closeCheckoutModal();
});
document.getElementById('checkout-form').addEventListener('submit', submitOrder);

/* btn-restart is re-created dynamically in showEmptyState — no static listener needed */

document.getElementById('btn-back-home').addEventListener('click', () => {
  document.getElementById('success-screen').classList.remove('show');
});

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */

function initOnboarding() {
  const overlay = document.getElementById('onboarding');
  if (!overlay) return;

  let currentSlide = 0;
  const totalSlides = 3;

  // Populate today's welfare deals in slide 3
  const welfareItems = PRODUCTS_INLINE.filter(p => p.welfare).slice(0, 3);
  const dealsContainer = document.getElementById('ob-deals');
  if (dealsContainer) {
    dealsContainer.innerHTML = welfareItems.map(p => {
      const savePct = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
      return `
        <div class="ob-deal-card">
          <img src="${p.image}" alt="${p.name}" class="ob-deal-img" loading="lazy" />
          <div class="ob-deal-info">
            <div class="ob-deal-name">${p.name}</div>
            <div class="ob-deal-price">NT$${p.price.toLocaleString()}
              <span class="ob-deal-orig">NT$${p.originalPrice ? p.originalPrice.toLocaleString() : ''}</span>
            </div>
          </div>
          <div class="ob-deal-badge">省${savePct}%</div>
        </div>`;
    }).join('');
  }

  function goToSlide(n) {
    currentSlide = n;
    document.querySelectorAll('.ob-slide').forEach((s, i) =>
      s.classList.toggle('active', i === n)
    );
    document.querySelectorAll('.ob-dot').forEach((d, i) =>
      d.classList.toggle('active', i === n)
    );
    const nextBtn = document.getElementById('ob-next');
    if (nextBtn) {
      const isLast = n === totalSlides - 1;
      nextBtn.style.display = isLast ? 'none' : '';
      if (!isLast) nextBtn.textContent = n === 0 ? '了解怎麼用 →' : '查看今日優惠 →';
    }
  }

  function dismissOnboarding() {
    overlay.classList.add('hiding');
    setTimeout(() => { overlay.style.display = 'none'; }, 480);
  }

  document.getElementById('ob-next')?.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1);
  });
  document.getElementById('onboarding-start')?.addEventListener('click', dismissOnboarding);
  document.getElementById('ob-skip')?.addEventListener('click', dismissOnboarding);

  goToSlide(0);
}

async function init() {
  try {
    const resp = await fetch('products/products.json');
    if (!resp.ok) throw new Error('not ok');
    allProducts = await resp.json();
    // Merge categories from inline data if json lacks them
    allProducts = allProducts.map(p => {
      const inline = PRODUCTS_INLINE.find(q => q.id === p.id);
      return inline ? { ...p, category: p.category || inline.category } : p;
    });
  } catch (e) {
    allProducts = PRODUCTS_INLINE;
  }

  // Apply condition field from lookup table (covers both JSON and inline fallback)
  allProducts = allProducts.map(p => ({
    ...p,
    condition: p.condition || PRODUCT_CONDITIONS[p.id] || '庫存品',
  }));

  deck = buildDeck(allProducts);
  updateProgress();
  renderStack();
  startCountdownTimer();
  initOnboarding();

  // Handle LINE OAuth callback
  if (window.location.search.includes('code=')) {
    handleLineCallback();
  }

  // Load Google Identity Services
  if (GOOGLE_CLIENT_ID !== 'YOUR_GOOGLE_CLIENT_ID') {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = initGoogleLogin;
    document.head.appendChild(script);
  }
}

init();
