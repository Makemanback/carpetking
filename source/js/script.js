// кнопка открытия меню
let button = document.querySelector(".header__button");
// контейнер меню
let menu = document.querySelector(".header__nav");
// иконка открытия
let open = document.querySelector(".header__open");
// иконка закрытия
let close = document.querySelector(".header__close");
// кнопка открытия меню каталога
let subopen = document.querySelector(".header__list-item--js");
// контейнер подменю
let submenu = document.querySelector(".header__inner-list");
// хедер
let header = document.querySelector(".header");

// попап
let popup = document.querySelector(".popup");
// кнопка открытия
let popupOpen = document.querySelector(".form__button--basket");
// кнопка закрытия
let popupClose = document.querySelector(".popup__close");
// контейнер попапа
let popupContainer = document.querySelector(".popup__container");
// иконка стрелочки
let menuArrow = document.querySelector(".header__list-arrow");

// слайдер
let slider = document.querySelector(".slick");


// купон на странице корзины
let couponOpen = document.querySelector(".order__coupon-button");
// контейнер
let couponContainer = document.querySelector(".order__coupon-field");

menu.classList.add("header__nav--js");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("header__nav--js");
  open.classList.toggle("header__open--js");
  close.classList.toggle("header__close--js");
});

subopen.addEventListener("click", function(evt) {
  evt.preventDefault();
  submenu.classList.toggle("header__inner-list--js");
  menuArrow.classList.toggle("header__list-arrow--js");
});

// открываем попап
if (popupOpen != null) {
  popupOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("popup--js");
  });

  popupClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("popup--js");
});
};

// прячем форму купона
couponContainer.classList.add("order__not-visible");

// открываем купон
couponOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  couponContainer.classList.toggle("order__not-visible");
});
