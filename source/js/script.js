// кнопка открытия меню
let button = document.querySelector(".header__button");
// контейнер меню
let menu = document.querySelector(".header__nav");
// иконка открытия
let open = document.querySelector(".header__open");
// иконка закрытия
let close = document.querySelector(".header__close");

menu.classList.add("header__nav--js");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("header__nav--js");
  open.classList.toggle("header__open--js");
  close.classList.toggle("header__close--js");
});
