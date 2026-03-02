import React from "react";
import {
    Founder1,
    Facebook3dLogo,
    Instagram3dLogo,
    Linkedin3dLogo,
    X3dLogo,
    Youtube3dLogo,
    CurveArrow,
} from "@/assets";

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
                    <h4 className="about-hero-small about-hero-ani">Hey! I'm</h4>

                    <h1 className="about-hero-title">
                        <div className="about-hero-ani about-hero-title-1">Yash Goswami</div>
                        <div className="about-hero-ani">From Ady<span>mire</span></div>
                    </h1>


                </div>
                <div className="about-hero-social about-hero-ani">
                   <SocialIcons className="grid grid-cols-5 gap-2 " />
                    <div className="about-hero-follow">
                        <span>Follow Us</span>
                        <div className="about-hero-arrow"><img src={CurveArrow} alt="arrow" /></div>
                    </div>
                </div>

                <div className="about-hero-image about-hero-ani">
                    <img src={Founder1} alt="founder" />
                    
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
