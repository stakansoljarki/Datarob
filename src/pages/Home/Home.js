import { header } from "../../components/Header/Header";

import { slider } from "./../../components/Contact-slider/Contact-slider";
import SmoothScroll from "smooth-scroll";

import "./Home.sass";

document.addEventListener("DOMContentLoaded", () => {
  header();
  slider();
});
document.addEventListener(
  "touchstart",
  () => {
    new SmoothScroll('a[href*="#"]');
  },
  {
    capture: true,
    passive: true
  }
);
