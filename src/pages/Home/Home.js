import { header } from "../../components/Header/Header";

import { slider } from "./../../components/Contact-slider/Contact-slider";
import SmoothScroll from "smooth-scroll";
import scrollReveal from "scrollreveal";

import "./Home.sass";

document.addEventListener("DOMContentLoaded", () => {
  header();

  /*
   * ScrollReveal().reveal(".headline");
   * ScrollReveal().reveal(".tagline", { delay: 500 });
   * ScrollReveal().reveal(".punchline", { delay: 2000 });
   */
  slider();
  new SmoothScroll('a[href*="#"]');
});
