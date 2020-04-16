import { tns } from "tiny-slider/src/tiny-slider";

export const slider = () => {
  const sliderClass = document.querySelector(".contact-slider__slides");
  if (sliderClass) {
    tns({
      SwipeAngle: "false",
      autoplay: "true",
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      center: "true",
      container: ".contact-slider__slides",
      controls: false,
      items: 1,
      mode: "carousel",
      mouseDrag: "true",
      navPosition: "bottom",
      speed: 600,
      touch: "true",
    });
  }
};
