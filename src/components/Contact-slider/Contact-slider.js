import Glide from "@glidejs/glide";

export const slider = () => {
  new Glide(".contact-slider", {
    animationDuration: 600,
    animationTimingFunc: "linear",
    autoplay: 2000,
    perView: 1,
    startAt: 0,
    type: "carousel"
  }).mount();
};
