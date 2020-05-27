import { tns } from "tiny-slider/src/tiny-slider";

export const secondSlider = () => {
  tns({
    SwipeAngle: "false",
    autoplay: "true",
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    center: "true",
    container: ".contact-lead__slider-inner",
    controls: false,
    items: 1,
    mode: "carousel",
    mouseDrag: "true",
    navPosition: "bottom",
    speed: 600,
    touch: "true",
  });
};
