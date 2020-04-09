import { header } from "../../components/Header/Header";

import { slider } from "./../../components/Contact-slider/Contact-slider";
import SmoothScroll from "smooth-scroll";

import "./Home.scss";

document.addEventListener(
  "DOMContentLoaded",
  () => {
    new SmoothScroll('a[href*="#"]');
    header();
    slider();
  },
  { passive: false }
);
