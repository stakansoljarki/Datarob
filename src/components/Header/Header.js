const header = () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav-list");
  burger.addEventListener("click", () => {
    if (menu.classList.contains("header__nav-list--active")) {
      menu.classList.remove("header__nav-list--active");
    } else {
      menu.classList.add("header__nav-list--active");
    }
  });
};
export default header;
