import { header } from "../../components/Header/Header";

import SmoothScroll from "smooth-scroll";

import "./Cases.scss";

document.addEventListener(
  "DOMContentLoaded",
  () => {
    new SmoothScroll('a[href*="#"]');
    header();
  },
  { passive: false }
);
