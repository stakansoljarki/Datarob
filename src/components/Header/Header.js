export const header = () => {
  const burger = document.querySelector(".header__burger"),
    menu = document.querySelector(".header__nav-list");

  burger.addEventListener("click", () => {
    if (menu.classList.contains("header__nav-list--active")) {
      menu.classList.remove("header__nav-list--active");
    } else {
      menu.classList.add("header__nav-list--active");
    }
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
