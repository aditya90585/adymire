import "./PortfolioHero.css";

import  Development from "@/assets/icons/Development.webp";
import DigitalMarketing  from "@/assets/icons/DigitalMarketing.webp";
import PortfolioHeroimg  from "@/assets/illustrations/PortfolioHeroimg.webp";
import UIUX from "@/assets/icons/UIUX.webp";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BookCallButton from "../UI/NavButtons/BookCallButton";
import Magnet from "../UI/Magnet";

const PortfolioHero = () => {
    useGSAP(()=>{
      gsap.from(".portfolio-hero-ani",{
       opacity:0,
       y:40,
       duration:0.8,
       stagger:0.1,
       delay:0.4
      })
  },{})
    return (
        <section className="portfolio-hero md:h-screen h-auto">
            <div className="portfolio-hero-container">

                <div className="portfolio-hero-left">
                    <h2 className="portfolio-hero-title portfolio-hero-ani">
                        Let's See our <br /> Portfolio--
                    </h2>

                    <p className="portfolio-hero-text portfolio-hero-ani">
                        7+ years | 30+ Satistfyed clients | 40+ Completed proejcts <br />
                        A dedicated team of specialists, delivering remarkable work <br />
                        to our clients worldwide!
                    </p>

                    <div className="portfolio-hero-steps">
                        <div className="portfolio-step portfolio-hero-ani">
                            <img src={UIUX} alt="Design" />
                            <p>Design</p>
                        </div>

                        <span className="portfolio-step-arrow portfolio-hero-ani">➶</span>

                        <div className="portfolio-step portfolio-hero-ani">
                            <img src={Development} alt="Development" />
                            <p>Development</p>
                        </div>

                        <span className="portfolio-step-arrow portfolio-hero-ani">➶</span>

                        <div className="portfolio-step portfolio-hero-ani">
                            <img src={DigitalMarketing} alt="Grow" />
                            <p>Grow</p>
                        </div>
                    </div>
                    <div className="portfolio-hero-cta-wrapper portfolio-hero-ani">
                      
                         <Magnet padding={50} disabled={false} magnetStrength={6}>

                        <BookCallButton text="Book a Strategy Call"   height="60px" textSize="base" rounded="xl" paddingX="5" attention={true} className="hover:bg-[#faddac] h-15 px-5 rounded-xl font-semibold"/>
                         </Magnet>
                    </div>
                </div>

                <div className="portfolio-hero-right portfolio-hero-ani">
                    <img src={PortfolioHeroimg} alt="Portfolio Visual" />
                </div>

            </div>

        </section>
    );
};

export default PortfolioHero;
