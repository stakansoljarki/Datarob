import SmoothScroll from "smooth-scroll";
import header from "../../components/Header/Header";

import "./Blog.scss";

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const scroll = new SmoothScroll('a[href*="#"]');
    scroll();
    header();
  },
  { passive: false }
);
