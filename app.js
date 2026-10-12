const categories = [
  { id: "plants", title: "Домашние растения", subtitle: "Добавьте немного зелени и уюта в ваш дом.", section: "home-plants", image: "ficus-benjamina" },
  { id: "flowers", title: "Цветы в подарок", subtitle: "Букеты и свежие цветы для любого повода.", section: "flowers", image: "bouquet-medium" },
  { id: "garden", title: "Дачные растения", subtitle: "Растения для вашего сада и участка.", section: "garden", image: "apple-tree" },
  { id: "cards", title: "Открытки", subtitle: "Красивое дополнение к вашему подарку.", section: "cards", image: "postcard-small" },
  { id: "toys", title: "Игрушки", subtitle: "Мягкие подарки для тех, кого вы любите.", section: "toys", image: "teddy-small" },
];

const products = [
  { id: "ficus-benjamina", name: "Фикус Бенджамина", category: "plants", price: 600, image: "ficus-benjamina", description: "Зелёное растение для дома. Хорошо дополнит жилое пространство." },
  { id: "monstera", name: "Монстера", category: "plants", price: 1000, image: "monstera", description: "Выразительное декоративно-лиственное растение с крупными резными листьями." },
  { id: "aglaonema", name: "Аглаонема", category: "plants", price: 350, image: "aglaonema", description: "Комнатное растение с яркой листвой для домашнего интерьера." },
  { id: "dieffenbachia", name: "Диффенбахия", category: "plants", price: 400, image: "dieffenbachia", description: "Декоративное комнатное растение с пёстрыми листьями." },
  { id: "echeveria", name: "Эхеверия", category: "plants", price: 500, image: "echeveria", description: "Компактный суккулент с листьями, собранными в розетку." },
  { id: "sansevieria", name: "Сансевиерия", category: "plants", price: 500, image: "sansevieria", description: "Стройное комнатное растение с выразительными вертикальными листьями." },
  { id: "crassula", name: "Толстянка", category: "plants", price: 800, image: "crassula", description: "Небольшое комнатное растение с мясистыми округлыми листьями." },
  { id: "decembrist", name: "Декабрист", category: "plants", price: 650, image: "decembrist", description: "Домашнее растение с яркими цветками и раскидистыми побегами." },

  { id: "rose-white", name: "Розы белые", category: "flowers", price: 120, image: "rose-white", description: "Свежие белые розы — нежный цветочный подарок для разных поводов." },
  { id: "rose-red", name: "Розы красные", category: "flowers", price: 100, image: "rose-red", description: "Классические красные розы с выразительными бархатистыми лепестками." },
  { id: "gypsophila", name: "Гипсофилы", category: "flowers", price: 200, image: "gypsophila", description: "Воздушные веточки гипсофилы для самостоятельного подарка или композиции." },
  { id: "carnations", name: "Гвоздики", category: "flowers", price: 70, image: "carnations", description: "Нежные гвоздики с выразительными лепестками и лёгким праздничным настроением." },
  { id: "tulips", name: "Тюльпаны", category: "flowers", price: 180, image: "tulips", description: "Яркие свежие тюльпаны — красивый знак внимания в любое время года." },
  { id: "chrysanthemums", name: "Хризантемы", category: "flowers", price: 150, image: "chrysanthemums", description: "Пышные хризантемы с аккуратными лепестками и природной фактурой." },
  { id: "gerberas", name: "Герберы", category: "flowers", price: 90, image: "gerberas", description: "Солнечные герберы, чтобы добавить в подарок яркий цветочный акцент." },
  { id: "peonies", name: "Пионы", category: "flowers", price: 130, image: "peonies", description: "Пышные пионы с мягкими лепестками и выразительным видом." },
  { id: "hydrangeas", name: "Гортензии", category: "flowers", price: 100, image: "hydrangeas", description: "Объёмные соцветия гортензии в спокойных природных оттенках." },
  { id: "lilies", name: "Лилии", category: "flowers", price: 120, image: "lilies", description: "Элегантные лилии с крупными цветами для выразительной композиции." },
  { id: "irises", name: "Ирисы", category: "flowers", price: 150, image: "irises", description: "Ирисы с яркими лепестками и характерным силуэтом." },
  { id: "bouquet-medium", name: "Букет средний", category: "flowers", price: 500, image: "bouquet-medium", description: "Собранный из свежих цветов букет среднего размера." },
  { id: "bouquet-large", name: "Букет большой", category: "flowers", price: 1200, image: "bouquet-large", description: "Объёмный букет из свежих цветов для запоминающегося подарка." },
  { id: "flower-set", name: "Огромные наборы цветов", category: "flowers", price: 2500, from: true, image: "flower-set", description: "Большая премиальная композиция из свежих цветов." },

  { id: "apple-tree", name: "Яблоня", category: "garden", price: 200, image: "apple-tree", description: "Саженец яблони для сада или дачного участка." },
  { id: "pear-tree", name: "Груша", category: "garden", price: 300, image: "pear-tree", description: "Саженец груши для сада или дачного участка." },
  { id: "raspberry", name: "Малина", category: "garden", price: 200, image: "raspberry", description: "Саженец малины с зелёными побегами и ягодами." },
  { id: "gooseberry", name: "Крыжовник", category: "garden", price: 600, image: "gooseberry", description: "Куст крыжовника с ягодами для сада или участка." },
  { id: "currant", name: "Смородина", category: "garden", price: 350, image: "currant", description: "Куст смородины с ягодами для садового участка." },
  { id: "honeysuckle", name: "Жимолость", category: "garden", price: 500, image: "honeysuckle", description: "Саженец жимолости с ягодами для вашего сада." },

  { id: "postcard-small", name: "Обычная открытка", category: "cards", price: 150, image: "postcard-small", description: "Небольшая открытка с нежным цветочным оформлением." },
  { id: "postcard-large", name: "Большая открытка", category: "cards", price: 350, image: "postcard-large", description: "Большая поздравительная открытка с цветочной иллюстрацией." },
  { id: "greeting-address", name: "Поздравительный адрес", category: "cards", price: 3000, from: true, image: "greeting-address", description: "Праздничное поздравление в элегантном оформлении." },

  { id: "teddy-small", name: "Мишка плюшевый маленький", category: "toys", price: 450, image: "teddy-small", description: "Небольшой мягкий плюшевый мишка — тёплое дополнение к подарку." },
  { id: "teddy-large", name: "Медведь плюшевый большой", category: "toys", price: 1200, image: "teddy-large", description: "Большой мягкий плюшевый медведь для особенного подарка." },
  { id: "teddy-heart", name: "Мишка с сердечком брелок", category: "toys", price: 200, image: "teddy-heart", description: "Небольшой брелок с плюшевым мишкой и красным сердечком." },
  { id: "photo-keychain", name: "Брелоки с вашим фото", category: "toys", price: 500, image: "photo-keychain", description: "Персонализированный брелок с вашим изображением." },
  { id: "plush-shark", name: "Акула плюшевая", category: "toys", price: 1500, image: "plush-shark", description: "Мягкая плюшевая акула с дружелюбным видом." },
  { id: "hug-goose", name: "Гусь-обнимусь", category: "toys", price: 1500, image: "hug-goose", description: "Длинный мягкий плюшевый гусь для уютных объятий." },
];

const categoryNames = Object.fromEntries(categories.map(({ id, title }) => [id, title]));
const groups = categories.map(({ id, title, section }) => ({ id, title, section }));
const state = { filter: "all", query: "" };
const currency = new Intl.NumberFormat("ru-RU");
const imagePath = (image) => `assets/products/${image}.webp`;
const priceText = (product) => `${product.from ? "от " : ""}${currency.format(product.price)} ₽`;

function renderCategories() {
  document.querySelector("#category-grid").innerHTML = categories.map((category) => `
    <a class="category-card" href="#${category.section}" aria-label="${category.title}: ${category.subtitle}">
      <img src="${imagePath(category.image)}" alt="${category.title}" loading="lazy" width="420" height="300">
      <span class="category-copy"><h3>${category.title}</h3><p>${category.subtitle}</p></span>
      <span class="category-arrow" aria-hidden="true">→</span>
    </a>`).join("");
}

function renderFilters() {
  const filters = [{ id: "all", title: "Все" }, ...categories.map(({ id, title }) => ({ id, title }))];
  document.querySelector("#filter-list").innerHTML = filters.map(({ id, title }) => `
    <button class="filter-button" type="button" data-filter="${id}" aria-pressed="${id === state.filter}">${title}</button>`).join("");
}

function renderCatalog() {
  document.querySelector("#catalog-sections").innerHTML = groups.map((group) => `
    <section class="catalog-group" id="${group.section}" data-group="${group.id}" aria-labelledby="heading-${group.id}">
      <div class="group-heading"><h3 id="heading-${group.id}">${group.title}</h3><span data-group-count="${group.id}"></span></div>
      <div class="product-grid" data-grid="${group.id}"></div>
    </section>`).join("");
  for (const product of products) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.product = product.id;
    card.dataset.category = product.category;
    card.dataset.search = `${product.name} ${categoryNames[product.category]}`.toLocaleLowerCase("ru");
    card.innerHTML = `
      <div class="product-image-wrap">
        <img src="${imagePath(product.image)}" alt="${product.name}" loading="lazy" width="420" height="420">
        <span class="product-sprig" aria-hidden="true">✳</span>
      </div>
      <div class="product-info">
        <h4>${product.name}</h4>
        <div class="product-bottom"><span class="product-price">${priceText(product)}</span><button class="details-button" type="button" data-open-product="${product.id}" aria-label="Подробнее: ${product.name}">Подробнее</button></div>
      </div>`;
    document.querySelector(`[data-grid="${product.category}"]`).append(card);
  }
}

function applyFilters() {
  const query = state.query.trim().toLocaleLowerCase("ru");
  let visible = 0;
  for (const category of categories) {
    let groupCount = 0;
    for (const card of document.querySelectorAll(`[data-grid="${category.id}"] .product-card`)) {
      const matchesFilter = state.filter === "all" || state.filter === category.id;
      const matchesSearch = !query || card.dataset.search.includes(query);
      const show = matchesFilter && matchesSearch;
      card.hidden = !show;
      if (show) groupCount += 1;
    }
    const section = document.querySelector(`[data-group="${category.id}"]`);
    section.hidden = groupCount === 0;
    section.querySelector(`[data-group-count="${category.id}"]`).textContent = `${groupCount} ${groupCount === 1 ? "позиция" : groupCount > 1 && groupCount < 5 ? "позиции" : "позиций"}`;
    visible += groupCount;
  }
  document.querySelector("#catalog-count").textContent = query || state.filter !== "all" ? `Найдено: ${visible}` : `${products.length} товаров`;
  document.querySelector("#no-results").hidden = visible !== 0;
}

function setFilter(filter) {
  state.filter = filter;
  document.querySelectorAll(".filter-button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === filter)));
  applyFilters();
}

function openProduct(id, trigger) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  document.querySelector("#dialog-image").src = imagePath(product.image);
  document.querySelector("#dialog-image").alt = product.name;
  document.querySelector("#dialog-image").hidden = false;
  document.querySelector("#dialog-title").textContent = product.name;
  document.querySelector("#dialog-category").textContent = categoryNames[product.category];
  document.querySelector("#dialog-description").textContent = product.description;
  document.querySelector("#dialog-price").textContent = priceText(product);
  const dialog = document.querySelector("#product-dialog");
  dialog.returnValue = "";
  dialog.showModal();
  dialog.dataset.trigger = trigger ? "product" : "";
}

renderCategories();
renderFilters();
renderCatalog();
applyFilters();

document.querySelector("#filter-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (button) setFilter(button.dataset.filter);
});
document.querySelector("#search-input").addEventListener("input", (event) => {
  state.query = event.target.value;
  applyFilters();
});
document.querySelector("#catalog-sections").addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-product]");
  if (button) openProduct(button.dataset.openProduct, button);
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Открыть меню");
  primaryNav.classList.remove("is-open");
}
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Открыть меню" : "Закрыть меню");
  primaryNav.classList.toggle("is-open", !isOpen);
});
primaryNav.addEventListener("click", (event) => { if (event.target.closest("a")) closeMenu(); });
document.addEventListener("click", (event) => {
  if (menuToggle.getAttribute("aria-expanded") === "true" && !primaryNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

const productDialog = document.querySelector("#product-dialog");
document.querySelector(".dialog-close").addEventListener("click", () => productDialog.close());
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});
productDialog.addEventListener("close", () => {
  if (productDialog.dataset.trigger) document.querySelector(`[data-open-product="${productDialog.dataset.lastProduct}"]`)?.focus();
});
document.querySelector("#catalog-sections").addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-product]");
  if (button) productDialog.dataset.lastProduct = button.dataset.openProduct;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) && !event.metaKey && !event.ctrlKey && !event.altKey) {
    event.preventDefault();
    document.querySelector("#search-input").focus();
  }
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") closeMenu();
});

// Scroll reveals are decorative only; core content remains visible without JavaScript support.
const revealTargets = document.querySelectorAll(".section-heading, .category-card, .delivery-card");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach((item) => item.classList.add("reveal-ready"));
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((item) => observer.observe(item));
}
