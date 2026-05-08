const merchants = [
  {
    name: "西北莜面村（望京华彩店）",
    logo: "西贝\n莜面村",
    logoClass: "red",
    badge: "品牌",
    score: "4.5分",
    sales: "月售6328",
    average: "人均￥26",
    delivery: "起送￥20  配送 约￥11.12",
    time: "29分钟",
    distance: "2.5km",
    tags: [
      { text: "望京咖啡口碑榜第1名", tone: "gold" },
      { text: "18元神券可用", tone: "coupon" },
      { text: "已测体温", tone: "gray" }
    ],
    category: "nearby",
    couponAvailable: true
  },
  {
    name: "CUP ONE（望京麒麟社店）",
    logo: "CUP\nONE",
    logoClass: "black",
    badge: "",
    score: "4.8分",
    sales: "月售2089",
    average: "人均￥26",
    delivery: "起送￥15  配送 约￥4.5",
    time: "29分钟",
    distance: "2.5km",
    tags: [
      { text: "美团快送", tone: "orange" },
      { text: "满45减8", tone: "green" }
    ],
    category: "special",
    couponAvailable: false
  },
  {
    name: "老乡鸡（望京SOHO店）",
    logo: "老乡鸡",
    logoClass: "yellow",
    badge: "放心",
    score: "4.7分",
    sales: "月售4180",
    average: "人均￥31",
    delivery: "起送￥20  配送 约￥6.2",
    time: "31分钟",
    distance: "2.8km",
    tags: [
      { text: "香菇鸡丁盖饭两人餐", tone: "gold" },
      { text: "18元神券可用", tone: "coupon" },
      { text: "热卖套餐", tone: "green" }
    ],
    category: "deal",
    couponAvailable: true
  },
  {
    name: "川成元麻辣香锅（望京店）",
    logo: "川成元",
    logoClass: "hotpot",
    badge: "",
    score: "4.6分",
    sales: "月售3516",
    average: "人均￥38",
    delivery: "起送￥25  配送 约￥7.8",
    time: "34分钟",
    distance: "3.1km",
    tags: [
      { text: "川味香锅热销", tone: "gold" },
      { text: "18元神券可用", tone: "coupon" },
      { text: "满60减12", tone: "green" }
    ],
    category: "nearby",
    couponAvailable: true
  },
  {
    name: "瑞幸咖啡（望京恒电店）",
    logo: "Luckin",
    logoClass: "blue",
    badge: "品牌",
    score: "4.9分",
    sales: "月售9096",
    average: "人均￥18",
    delivery: "起送￥0  配送 约￥3.5",
    time: "23分钟",
    distance: "1.1km",
    tags: [
      { text: "玛斯卡彭生酪拿铁", tone: "gold" },
      { text: "还余2张券可用", tone: "green" }
    ],
    category: "special",
    couponAvailable: false
  }
];

const recommendationCards = [
  {
    title: "南宋胡记（簋街总店）",
    badge: "必点榜｜连续8年上榜",
    logo: "南宋胡记",
    photoClass: "photo-buns",
    meta: ["4.9分", "月售6328", "人均￥26", "免配送费"],
    distance: "48分钟　2.5km",
    specialty: "蛋黄酥、荷花酥",
    chips: ["8年老店", "非遗制作工艺"],
    reason: "宋式酥点精致耐吃，蛋黄酥和荷花酥适合旅途下午茶。"
  },
  {
    title: "四季民福烤鸭店（望京店）",
    badge: "北京烤鸭热门榜｜第1名",
    logo: "四季民福",
    photoClass: "photo-duck",
    meta: ["4.8分", "月售5210", "人均￥42", "满减好券"],
    distance: "36分钟　3.1km",
    specialty: "烤鸭",
    chips: ["京味招牌", "酥皮烤鸭"],
    reason: "烤鸭皮脆肉香，荷叶饼和甜面酱齐全，适合来京必点。"
  },
  {
    title: "西北莜面村（望京华彩店）",
    badge: "望京面食热卖榜｜上升最快",
    logo: "西贝",
    photoClass: "photo-noodle",
    meta: ["4.7分", "月售6328", "人均￥26", "品牌商家"],
    distance: "29分钟　2.5km",
    specialty: "莜面、黄米凉糕",
    chips: ["热乎面点", "家庭套餐"],
    reason: "莜面筋道、羊肉香浓，适合想尝西北风味的正餐。"
  },
  {
    title: "胡大饭馆（簋街总店）",
    badge: "夜宵热度榜｜近7天飙升",
    logo: "胡大",
    photoClass: "photo-crayfish",
    meta: ["4.8分", "月售8960", "人均￥57", "夜宵优选"],
    distance: "42分钟　4.2km",
    specialty: "麻辣小龙虾",
    chips: ["簋街排队王", "小龙虾招牌"],
    reason: "麻辣小龙虾是招牌，适合夜宵和重口味聚餐。"
  }
];

const curatedRestaurants = [
  { name: "京八件点心局", tag: "中式糕点", reason: "枣泥酥和山楂锅盔稳定出片，适合下午茶。", time: "31分钟", score: "4.8分" },
  { name: "聚宝源涮肉", tag: "铜锅涮肉", reason: "手切羊肉、麻酱小料和糖蒜，是很北京的热乎劲。", time: "45分钟", score: "4.7分" },
  { name: "方砖厂炸酱面", tag: "胡同面馆", reason: "菜码清爽，酱香厚，想吃老北京面食时很对味。", time: "38分钟", score: "4.6分" },
  { name: "北新桥卤煮", tag: "地道小吃", reason: "卤汤浓、火烧软，适合重口味夜宵补一口。", time: "49分钟", score: "4.5分" },
  { name: "门框胡同百年卤煮", tag: "老字号", reason: "肥肠处理干净，汤头厚而不腻，老店气质很足。", time: "41分钟", score: "4.7分" }
];

const state = {
  filter: "nearby",
  query: "",
  recommendIndex: 0,
  activeScheme: "one",
  schemeOneExpanded: false,
  schemeOneVisibleCount: 0,
  manualExpanded: false
};

const listEl = document.getElementById("merchantList");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultHint = document.getElementById("resultHint");
const toastEl = document.getElementById("toast");
const recommendSection = document.getElementById("recommendSection");
const recommendStage = document.getElementById("recommendStage");
const schemeExtra = document.getElementById("schemeExtra");
let toastTimer;
let dragStartX = 0;
let isRecommendationDragging = false;
let dragHandled = false;
let recommendCards = [];
let schemeOneRevealTimer;
let oneToggleHandledAt = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.classList.add("show");
  toastTimer = window.setTimeout(() => {
    toastEl.classList.remove("show");
  }, 1700);
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}

function merchantMatchesQuery(merchant, query) {
  if (!query) {
    return true;
  }

  const haystack = [
    merchant.name,
    merchant.logo,
    merchant.delivery,
    ...merchant.tags.map((tag) => tag.text)
  ].join(" ");

  return normalize(haystack).includes(query);
}

function merchantMatchesFilter(merchant) {
  if (state.filter === "nearby") {
    return true;
  }

  if (state.filter === "deal") {
    return merchant.category === "deal";
  }

  if (state.filter === "coupon") {
    return merchant.couponAvailable;
  }

  return merchant.category === state.filter;
}

function renderMerchants() {
  const query = normalize(state.query);
  const visible = merchants.filter((merchant) => merchantMatchesFilter(merchant) && merchantMatchesQuery(merchant, query));

  if (query) {
    resultHint.textContent = `已为你找到 ${visible.length} 个和“${state.query}”相关的商家`;
  } else if (state.filter === "coupon") {
    resultHint.textContent = `已筛选出 ${visible.length} 家 18元神券可用商家`;
  } else {
    resultHint.textContent = "";
  }

  if (!visible.length) {
    listEl.innerHTML = `
      <article class="store-card">
        <div class="store-logo hotpot">暂无<br /><small>换个词试试</small></div>
        <div class="store-info">
          <div class="store-title-row">
            <h3>没有匹配的商家</h3>
            <span class="more-dot" aria-hidden="true"></span>
          </div>
          <div class="store-meta">可以搜索“咖啡”“麻辣香锅”或点击上方分类。</div>
          <div class="delivery-line"><span>为 demo 保留空状态</span><span>--分钟  --km</span></div>
        </div>
      </article>
    `;
    return;
  }

  listEl.innerHTML = visible.map((merchant) => {
    const tags = merchant.tags.map((tag) => {
      const toneClass = tag.tone === "gold" ? "" : ` ${tag.tone}`;
      return `<span class="store-tag${toneClass}">${escapeHtml(tag.text)}<span class="chevron"></span></span>`;
    }).join("");

    return `
      <article class="store-card">
        <div class="store-logo ${escapeHtml(merchant.logoClass)}">
          ${merchant.badge ? `<span class="brand-badge">${escapeHtml(merchant.badge)}</span>` : ""}
          ${escapeHtml(merchant.logo).replaceAll("\n", "<br />")}
          ${merchant.logoClass === "black" ? "<small>CAFE & LOUNGE</small>" : ""}
        </div>
        <div class="store-info">
          <div class="store-title-row">
            <h3>${escapeHtml(merchant.name)}</h3>
            <span class="more-dot" aria-hidden="true"></span>
          </div>
          <div class="store-meta">
            <span class="score">${escapeHtml(merchant.score)}</span>
            <span>${escapeHtml(merchant.sales)}</span>
            <span>${escapeHtml(merchant.average)}</span>
          </div>
          <div class="delivery-line">
            <span>${escapeHtml(merchant.delivery)}</span>
            <span>${escapeHtml(merchant.time)}　${escapeHtml(merchant.distance)}</span>
          </div>
          <div class="tag-row">${tags}</div>
        </div>
      </article>
    `;
  }).join("");
}

function setFilter(filter) {
  state.filter = filter;
  document.querySelectorAll(".merchant-tab").forEach((button) => {
    const isNearbySubFilter = filter === "coupon" && button.dataset.filter === "nearby";
    button.classList.toggle("active", button.dataset.filter === filter || isNearbySubFilter);
  });
  document.querySelectorAll(".deal-pill, .quick-filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderMerchants();
}

function activateCouponFilter() {
  state.query = "";
  searchInput.value = "";
  setFilter("coupon");
  document.querySelector(".nearby-section").scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("已筛选红包可用商家");
}

function clearSchemeOneReveal() {
  window.clearInterval(schemeOneRevealTimer);
  schemeOneRevealTimer = undefined;
}

function resetSchemeOneExpansion() {
  clearSchemeOneReveal();
  state.schemeOneExpanded = false;
  state.schemeOneVisibleCount = 0;
}

function startSchemeOneReveal() {
  clearSchemeOneReveal();
  state.schemeOneExpanded = true;
  state.schemeOneVisibleCount = 0;
  renderRecommendationShell();

  schemeOneRevealTimer = window.setInterval(() => {
    state.schemeOneVisibleCount += 1;
    renderSchemeOneDialogueProgress();

    if (state.schemeOneVisibleCount >= curatedRestaurants.length) {
      clearSchemeOneReveal();
    }
  }, 520);
}

function visibleRecommendationCards() {
  if (state.activeScheme === "one") {
    return recommendationCards;
  }

  if (state.activeScheme === "three") {
    return recommendationCards.slice(0, 1);
  }

  return recommendationCards.slice(0, 3);
}

function renderCouponPacket(variant) {
  const isList = variant === "list";

  return `
    <button class="coupon-packet coupon-packet--${variant}" type="button" data-coupon-action>
      <span class="coupon-amount"><b>18</b><i>元</i></span>
      <span class="coupon-copy">
        <strong>${isList ? "18元吃喝玩乐神券" : "吃喝玩乐神券"}</strong>
        <small>${isList ? "适用于下方红包可用商家" : "北京出差旅游也能省一笔"}</small>
      </span>
      <em>去使用</em>
    </button>
  `;
}

function renderCuratedRestaurant(restaurant, index, { dialogue = false, delay = 0 } = {}) {
  return `
    <article class="curated-restaurant${dialogue ? " dialogue-item" : ""}" style="--item-delay: ${delay}ms">
      <span class="curated-rank">${index + 1}</span>
      <div>
        <h3>${escapeHtml(restaurant.name)}</h3>
        <p>${escapeHtml(restaurant.reason)}</p>
      </div>
      <div class="curated-side">
        <strong>${escapeHtml(restaurant.score)}</strong>
        <span>${escapeHtml(restaurant.time)}</span>
      </div>
      <em>${escapeHtml(restaurant.tag)}</em>
    </article>
  `;
}

function renderCuratedItems({ withCoupon = false, dialogue = false, limit = curatedRestaurants.length } = {}) {
  const delayStep = dialogue ? 330 : 110;
  const restaurantCards = curatedRestaurants
    .slice(0, limit)
    .map((restaurant, index) => renderCuratedRestaurant(restaurant, index, {
      dialogue,
      delay: index * delayStep
    }));

  if (withCoupon) {
    restaurantCards.splice(1, 0, renderCouponPacket("list"));
  }

  return restaurantCards.join("");
}

function renderSchemeOneDialogueProgress() {
  const panel = document.querySelector(".recommend-card.is-active .in-card-curated");
  const list = panel?.querySelector(".curated-list");

  if (!list) {
    renderRecommendationShell();
    return;
  }

  while (list.children.length < state.schemeOneVisibleCount && list.children.length < curatedRestaurants.length) {
    const index = list.children.length;
    list.insertAdjacentHTML("beforeend", renderCuratedRestaurant(curatedRestaurants[index], index, { dialogue: true }));
  }

  const typingIndicator = panel.querySelector(".typing-restaurant");
  if (typingIndicator && state.schemeOneVisibleCount >= curatedRestaurants.length) {
    typingIndicator.remove();
  }
}

function renderRecommendCard(card, index) {
  const isSchemeOneFourth = state.activeScheme === "one" && index === 3;
  const isSchemeOneExpanded = isSchemeOneFourth && state.schemeOneExpanded;
  const hasMoreDialogueItems = state.schemeOneVisibleCount < curatedRestaurants.length;

  if (isSchemeOneFourth) {
    return `
      <article class="recommend-card recommend-card--auto${isSchemeOneExpanded ? " is-expanded-auto" : ""}" data-card="${index}">
        <div class="auto-card-shell">
          <div class="auto-card-head">
            <span>北京特色精选</span>
            <h2>继续推荐 5 家北京味餐厅</h2>
            <p>按游客/出差用户更关心的特色菜来排，点外卖也能知道这家店最该吃什么。</p>
          </div>
          <button class="in-card-toggle" type="button" data-one-toggle aria-expanded="${isSchemeOneExpanded ? "true" : "false"}">
            ${isSchemeOneExpanded ? "收起推荐" : "展开推荐餐厅"}
          </button>
          ${!isSchemeOneExpanded ? `
            <div class="auto-card-preview">
              <span>已准备好 5 家精选</span>
              <b>点击卡片展开</b>
            </div>
          ` : ""}
          ${isSchemeOneExpanded ? `
            <div class="in-card-curated" aria-label="卡片内精选推荐" aria-live="polite">
              <div class="curated-list">${renderCuratedItems({ dialogue: true, limit: state.schemeOneVisibleCount })}</div>
              ${hasMoreDialogueItems ? `
                <div class="typing-restaurant" aria-live="polite">
                  <span></span><span></span><span></span>
                  <b>正在继续推荐下一家</b>
                </div>
              ` : ""}
            </div>
          ` : ""}
        </div>
      </article>
    `;
  }

  const meta = card.meta.map((item, metaIndex) => {
    return metaIndex === 0
      ? `<b>${escapeHtml(item)}</b>`
      : `<span>${escapeHtml(item)}</span>`;
  }).join("");
  const chips = card.chips.map((chip) => `<span>${escapeHtml(chip)}</span>`).join("");

  return `
    <article class="recommend-card" data-card="${index}">
      <div class="recommend-photo ${escapeHtml(card.photoClass)}" aria-hidden="true">
        <span class="top-badge">${escapeHtml(card.badge)}</span>
        <span class="store-mini-logo">${escapeHtml(card.logo)}</span>
      </div>
      <div class="recommend-body">
        <div class="recommend-title-row">
          <h2>${escapeHtml(card.title)}</h2>
          <button class="favorite-button" type="button" aria-label="收藏${escapeHtml(card.title)}"></button>
        </div>
        <p class="recommend-meta">${meta}<i>${escapeHtml(card.distance)}</i></p>
        <div class="specialty-row"><span>特色菜</span><b>${escapeHtml(card.specialty)}</b></div>
        <div class="recommend-reason">
          <strong>推荐理由</strong>
          ${chips}
          <p>${escapeHtml(card.reason)}</p>
        </div>
      </div>
    </article>
  `;
}

function renderRecommendationShell({ resetIndex = false } = {}) {
  const cards = visibleRecommendationCards();

  if (resetIndex || state.recommendIndex >= cards.length) {
    state.recommendIndex = 0;
  }

  recommendStage.innerHTML = cards.map(renderRecommendCard).join("");
  recommendCards = Array.from(document.querySelectorAll(".recommend-card"));
  renderRecommendCards();
}

function renderSchemeExtra() {
  const isSchemeOneExpanded = state.activeScheme === "one" && state.recommendIndex === 3 && state.schemeOneExpanded;
  const isManualScheme = state.activeScheme === "two" || state.activeScheme === "three";

  recommendSection.classList.toggle("is-auto-expanded", isSchemeOneExpanded);
  recommendSection.classList.toggle("is-manual-expanded", isManualScheme && state.manualExpanded);

  if (state.activeScheme === "one") {
    schemeExtra.innerHTML = renderCouponPacket("inline");
    return;
  }

  if (isManualScheme) {
    const collapsedText = state.activeScheme === "three" ? "展开全部" : "展开更多精选";
    const shouldEmbedCoupon = state.activeScheme === "three" && state.manualExpanded;
    schemeExtra.innerHTML = `
      ${state.activeScheme === "two" ? renderCouponPacket("float") : ""}
      <button id="toggleCurated" class="expand-curated-button" type="button" aria-expanded="${state.manualExpanded ? "true" : "false"}">
        ${state.manualExpanded ? "收回精选推荐" : collapsedText}
      </button>
      <div class="manual-curated-panel" aria-hidden="${state.manualExpanded ? "false" : "true"}">
        <div class="curated-list">${renderCuratedItems({ withCoupon: shouldEmbedCoupon })}</div>
      </div>
    `;
    return;
  }

  schemeExtra.innerHTML = "";
}

function renderRecommendCards() {
  const total = recommendCards.length;

  recommendCards.forEach((card, index) => {
    const offset = (index - state.recommendIndex + total) % total;
    card.classList.remove("is-active", "is-prev", "is-next", "is-back", "is-leaving");

    if (offset === 0) {
      card.classList.add("is-active");
    } else if (offset === 1) {
      card.classList.add("is-next");
    } else if (offset === total - 1) {
      card.classList.add("is-prev");
    } else {
      card.classList.add("is-back");
    }
  });

  renderSchemeExtra();
}

function moveRecommendation(step) {
  const total = recommendCards.length;
  state.recommendIndex = (state.recommendIndex + step + total) % total;

  if (state.activeScheme === "one" && state.recommendIndex === 3) {
    renderRecommendCards();
    startSchemeOneReveal();
    return;
  }

  resetSchemeOneExpansion();
  renderRecommendCards();
}

function setScheme(scheme) {
  state.activeScheme = scheme;
  resetSchemeOneExpansion();
  state.manualExpanded = false;

  document.querySelectorAll(".scheme-tab").forEach((button) => {
    const isActive = button.dataset.scheme === scheme;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  recommendSection.className = `recommend-stack-section scheme-${scheme}`;
  renderRecommendationShell({ resetIndex: true });
}

function runSearch() {
  state.query = searchInput.value.trim();
  renderMerchants();
  showToast(state.query ? `正在搜索：${state.query}` : "已展示附近推荐");
}

function beginRecommendationDrag(clientX) {
  dragStartX = clientX;
  isRecommendationDragging = true;
  dragHandled = false;
}

function updateRecommendationDrag(clientX) {
  if (!isRecommendationDragging || dragHandled) {
    return;
  }

  const dragDistance = clientX - dragStartX;

  if (Math.abs(dragDistance) > 42) {
    dragHandled = true;
    moveRecommendation(dragDistance < 0 ? 1 : -1);
  }
}

function finishRecommendationDrag(clientX) {
  updateRecommendationDrag(clientX);
  isRecommendationDragging = false;
}

function closestEventTarget(event, selector) {
  const target = event.target;

  if (target instanceof Element) {
    return target.closest(selector);
  }

  return target?.parentElement?.closest(selector) || null;
}

function toggleSchemeOneCardRecommendation() {
  if (state.schemeOneExpanded) {
    resetSchemeOneExpansion();
    renderRecommendationShell();
  } else {
    startSchemeOneReveal();
  }
  showToast(state.schemeOneExpanded ? "正在展开卡片内推荐" : "已收起卡片内推荐");
}

function handleSchemeOneToggleEvent(event) {
  const oneToggle = closestEventTarget(event, "[data-one-toggle]");

  if (!oneToggle) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  const now = Date.now();

  if (now - oneToggleHandledAt < 120) {
    return;
  }

  oneToggleHandledAt = now;
  toggleSchemeOneCardRecommendation();
}

document.querySelectorAll(".merchant-tab, .deal-pill, .quick-filter").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

document.querySelectorAll(".category-item").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.query;
    state.query = button.dataset.query;
    renderMerchants();
    showToast(`已切到：${button.dataset.query}`);
  });
});

document.querySelectorAll(".scheme-tab").forEach((button) => {
  button.addEventListener("click", () => {
    setScheme(button.dataset.scheme);
  });
});

recommendStage.addEventListener("pointerdown", (event) => {
  beginRecommendationDrag(event.clientX);
});

document.addEventListener("pointerup", (event) => {
  finishRecommendationDrag(event.clientX);
});

document.addEventListener("pointermove", (event) => {
  updateRecommendationDrag(event.clientX);
});

recommendStage.addEventListener("mousedown", (event) => {
  beginRecommendationDrag(event.clientX);
});

document.addEventListener("mouseup", (event) => {
  finishRecommendationDrag(event.clientX);
});

document.addEventListener("mousemove", (event) => {
  updateRecommendationDrag(event.clientX);
});

recommendStage.addEventListener("touchstart", (event) => {
  beginRecommendationDrag(event.changedTouches[0].clientX);
}, { passive: true });

document.addEventListener("touchend", (event) => {
  finishRecommendationDrag(event.changedTouches[0].clientX);
});

document.addEventListener("touchmove", (event) => {
  updateRecommendationDrag(event.changedTouches[0].clientX);
}, { passive: true });

document.addEventListener("pointerdown", handleSchemeOneToggleEvent, true);
document.addEventListener("click", handleSchemeOneToggleEvent, true);

recommendStage.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveRecommendation(1);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveRecommendation(-1);
  }
});

recommendStage.addEventListener("click", (event) => {
  const button = closestEventTarget(event, ".favorite-button");

  if (button) {
    button.classList.toggle("is-liked");
    showToast(button.classList.contains("is-liked") ? "已收藏这家推荐商家" : "已取消收藏");
    return;
  }

  if (closestEventTarget(event, ".in-card-curated")) {
    return;
  }

  const activeAutoCard = closestEventTarget(event, ".recommend-card--auto.is-active");

  if (activeAutoCard) {
    toggleSchemeOneCardRecommendation();
    return;
  }

  const sideCard = closestEventTarget(event, ".recommend-card");

  if (sideCard?.classList.contains("is-next")) {
    moveRecommendation(1);
    return;
  }

  if (sideCard?.classList.contains("is-prev")) {
    moveRecommendation(-1);
  }
});

schemeExtra.addEventListener("click", (event) => {
  const couponButton = closestEventTarget(event, "[data-coupon-action]");

  if (couponButton) {
    activateCouponFilter();
    return;
  }

  const button = closestEventTarget(event, "#toggleCurated");

  if (!button) {
    return;
  }

  state.manualExpanded = !state.manualExpanded;
  renderSchemeExtra();
  showToast(state.manualExpanded ? "已展开 5 家精选餐厅" : "已收回精选推荐");
});

document.querySelectorAll(".tabbar-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tabbar-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    showToast(`${button.dataset.page}频道已选中`);
  });
});

searchButton.addEventListener("click", runSearch);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    runSearch();
  }
});

renderRecommendationShell({ resetIndex: true });
renderMerchants();
