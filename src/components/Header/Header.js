export const header = () => {
  const burger = document.querySelector(".burger-menu"),
    menu = document.querySelector(".header__nav-list"),
    navListActive = "header__nav-list--active",
    burgerMenuActive = "burger-menu--active";

  burger.addEventListener("click", () => {
    menu.classList.toggle(navListActive);
    burger.classList.toggle(burgerMenuActive);
  });
};

export const headerFill = () => {
  const header = document.querySelector(".cases .header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.remove("header--noFill");
        header.classList.add("header--fill");
      } else {
        header.classList.remove("header--fill");
        header.classList.add("header--noFill");
      }
    });
  }
};
