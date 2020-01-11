import { slider } from "./../../components/Contact-slider/Contact-slider";
import SmoothScroll from "smooth-scroll";
import scrollReveal from "scrollreveal";

import "./Home.sass";

const scroll = new SmoothScroll('a[href*="#"]');

document.addEventListener("DOMContentLoaded", () => {
  scrollReveal().reveal(".headline");
  scrollReveal().reveal(".tagline", { delay: 500 });
  scrollReveal().reveal(".punchline", { delay: 2000 });
  slider();
});
