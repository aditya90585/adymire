import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
        y = 80,
        x = 0,
        scale=1,
        opacity = 0,
        duration = 0.8,
        stagger = 0.1,
        ease = "power3.out",
        trigger,
        delay = 0,
        start = "top 80%",
    } = options;
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger,
            start,
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
        },
    })

    return tl.from(elements, {
        y,
        x,
        scale,
        opacity,
        duration,
        stagger,
        ease,
        delay,

    });
};
