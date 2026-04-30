import React from "react";
import CurveArrow from '@/assets/icons/CurveArrow.svg'
import Facebook3dLogo from "@/assets/logo/Facebook3dLogo.webp";
import Instagram3dLogo from "@/assets/logo/Instagram3dLogo.webp";
import Linkedin3dLogo from "@/assets/logo/Linkedin3dLogo.webp";
import X3dLogo from "@/assets/logo/X3dLogo.webp";
import Youtube3dLogo from "@/assets/logo/Youtube3dLogo.webp";

import "./AboutHero.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SocialIcons from "../Common/SocialIcons";

const AboutHero = () => {
    useGSAP(() => {
        gsap.from(".about-hero-ani", {
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.2,
            delay: 0.8
        })
    }, {})

    const socialIcons = [
        { img: Youtube3dLogo, alt: "Youtube" },
        { img: Linkedin3dLogo, alt: "LinkedIn" },
        { img: X3dLogo, alt: "X" },
        { img: Instagram3dLogo, alt: "Instagram" },
        { img: Facebook3dLogo, alt: "Facebook" },
    ];

    return (
        <section className="about-hero-section">

            <div className="about-hero-container">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">
                        <div className="about-hero-ani">
                            We help you <span className="text-accent text-bold">Build</span> And <span className="text-accent text-bold">Grow</span>
                        </div>
                    
                        <div className="about-hero-ani mt-8">
                            Your <span className="text-accent text-bold">Startup</span>
                        </div>
                    </h1>

                    <div className="hero-desc about-hero-ani">
                        <p>
                            <span className="text-accent font-semibold">Adymire</span> is a Full Stack digital Company specializing{" "}
                            <span className="text-accent">Software Development</span> ,{" "}
                            <span className="text-accent">UI/UX Design</span> , and Performance{" "}
                            <span className="text-accent">Marketing</span> to{" "}
                            <span className="text-accent">help startups</span> and businesses scale efficiently.
                        </p>
                    </div>
                </div>

                <div className="about-hero-image about-hero-ani">
                    <img src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1777563698/yashabout_1_r8wnoz.png"
                        alt="founder" />

                </div>
            </div>
        </section>
    );
};

export default AboutHero;
