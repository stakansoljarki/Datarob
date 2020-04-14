import SmoothScroll from "smooth-scroll";
import header from "../../components/Header/Header";

import slider from "../../components/Contact-slider/Contact-slider";

import "./Home.scss";

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const scroll = SmoothScroll('a[href*="#"]');
    scroll();

    header();
    slider();
  },
  { passive: false }
);
