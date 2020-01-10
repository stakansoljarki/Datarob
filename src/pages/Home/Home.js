import { slider } from "./../../components/Contact-slider/Contact-slider";
import SmoothScroll from "smooth-scroll";
import "./Home.sass";

document.addEventListener("DOMContentLoaded", () => {
  const scroll = new SmoothScroll('a[href*="#"]');

  scroll();
  slider();
});
