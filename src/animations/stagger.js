import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const staggerFadeIn = (elements, options = {}) => {
    const {
        y = 30,
        opacity = 0,
        duration = 0.6,
        stagger = 0.08,
        ease = "power3.out",
        delay = 0.1
    } = options;

    return gsap.from(elements, {
        y,
        opacity,
        duration,
        stagger,
        ease,
        delay
    });
};

//trigger
export const staggerFadeInOnScroll = (elements, options = {}) => {
    const {
        y = 40,
        x=0,
        opacity = 0,
        duration = 0.6,
        stagger = 0.1,
        ease = "power3.out",
        trigger,
        delay=0,
        start = "top 80%",
    } = options;

    return gsap.from(elements, {
        y,
        x,
        opacity,
        duration,
        stagger,
        ease,
        delay,
        scrollTrigger: {
            trigger,
            start,
            toggleActions: "play none none reverse",
        },
    });
};
