import { tns } from "tiny-slider/src/tiny-slider";

export const slider = () => {
  tns({
    autoplay: true,
    autoplayButtonOutput: false,
    center: true,
    container: ".contact-slider__slides",
    controls: false,
    items: 1,
    mode: "carousel",
    mouseDrag: true,
    navPosition: "bottom",
    speed: 400,
    swipeAngle: false
  });
};
