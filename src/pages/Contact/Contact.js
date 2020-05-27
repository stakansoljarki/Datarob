import { header } from "../../components/Header/Header";

import { secondSlider } from "../../components/ContactLead/ContactLead";
import SmoothScroll from "smooth-scroll";

import "./Contact.scss";

document.addEventListener(
  "DOMContentLoaded",
  () => {
    new SmoothScroll('a[href*="#"]');
    header();
    secondSlider();
  },
  { passive: false }
);
