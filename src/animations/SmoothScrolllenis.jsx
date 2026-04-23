import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
    smoothTouch: true,
  });

  window.lenis = lenis;

  lenis.on("scroll", ScrollTrigger.update);

  const update = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(update);


  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });

  return () => {
    gsap.ticker.remove(update);
    lenis.destroy();
  };
}, []);
    return children;
}