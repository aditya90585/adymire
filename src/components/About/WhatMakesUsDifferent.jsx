import { useRef } from "react";
import "./WhatMakesUsDifferent.css";
import CurveArrow from '@/assets/icons/CurveArrow.svg'
import Whatsapp from '@/assets/icons/Whatsapp.svg'
import WhatMakesUsDifferentImages1  from "@/assets/illustrations/WhatMakesUsDifferentImages/WhatMakesUsDifferentImages1.webp";
import WhatMakesUsDifferentImages2  from "@/assets/illustrations/WhatMakesUsDifferentImages/WhatMakesUsDifferentImages2.webp";
import WhatMakesUsDifferentImages3  from "@/assets/illustrations/WhatMakesUsDifferentImages/WhatMakesUsDifferentImages3.webp";
import WhatMakesUsDifferentImages4  from "@/assets/illustrations/WhatMakesUsDifferentImages/WhatMakesUsDifferentImages4.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const WhatMakesUsDifferent = () => {
    const navigateToWhatsapp = () => {
        const phoneNumber = "917302356804";
        const message = "Hello, I want to know more about your services";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        // window.location.href = url;
        window.open(url, '_blank');
    }

    const aboutadycontref = useRef()
    useGSAP(() => {
        const cards = gsap.utils.toArray(".wmd-card");

        cards.forEach((card) => {
            const image = card.querySelector(".wmd-image");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    invalidateOnRefresh: true
                }
            });

            tl.from(card, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            })
                .from(image, {
                    x: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                }, "-=0.5");
        });
        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 200)

    }, { scope: aboutadycontref });

    return (
        <section ref={aboutadycontref} className="wmd-section">
            <div className="wmd-container">

                <h2 className="wmd-title">What makes us different</h2>
                <div className="wmd-card wmd-design">
                    <div className="wmd-content">
                        <h3>End-to-end: Design</h3>

                        <div className="wmd-tags">
                            <img className="absolute w-15  -rotate-130  left-20 -top-10 md:block hidden" src={CurveArrow} alt="" />

                            <img className="absolute w-15 -rotate-130 left-60 -top-10 md:block hidden" src={CurveArrow} alt="" />
                            <span className="wmd-tag">Dev</span>
                            <span className="wmd-tag scale-120">Design</span>
                            <span className="wmd-tag">Ads</span>
                        </div>
                    </div>

                    <div className="wmd-image ">
                        <img src={WhatMakesUsDifferentImages1} alt="End to End Design" />
                    </div>
                </div>

                <div className="wmd-card wmd-promise">
                    <div className="wmd-content">
                        <h3>Our promise</h3>
                        <p>
                            Clear scopes, regular demos, and a one-page<br />
                            SLA in every proposal.<br />
                            <span className="text-xl">We aim for fast response and predictable delivery.</span>
                        </p>
                    </div>

                    <div className="wmd-image">
                        <img src={WhatMakesUsDifferentImages2} alt="Our Promise" />
                    </div>
                </div>

                <div className="wmd-card wmd-premium">
                    <div className="wmd-content">
                        <h3>Premium focus</h3>
                        <p>
                            We accept limited clients monthly to ensure executive attention.<br />
                            <span className="text-xl">Only 10–20 clients are onboarded globally per month.</span>
                        </p>
                    </div>

                    <div className="wmd-image ">
                        <img src={WhatMakesUsDifferentImages3} alt="Premium Focus" />
                    </div>
                </div>

                <div className="wmd-card wmd-support">
                    <div className="wmd-content">
                        <h3>Team Support</h3>
                        <div className="relative">
                            <div onClick={navigateToWhatsapp} className="wmd-support-btn">
                                Message Us on
                                <img src={Whatsapp} alt="whatsapp" />
                            </div>
                            <img className="absolute w-20 -rotate-130 left-70 -top-10 md:block  hidden" src={CurveArrow} alt="" />

                            <span >24×7</span>
                        </div>
                    </div>

                    <div className="wmd-image">
                        <img src={WhatMakesUsDifferentImages4} alt="Team Support" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhatMakesUsDifferent;
