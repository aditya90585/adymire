import "./PortfolioHero.css";
import {
  PortfolioHeroimg,
  UIUX,
  Development,
  DigitalMarketing,
  PhoneYellow,
} from "@/assets";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BookCallButton from "../UI/NavButtons/BookCallButton";

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
        <section className="portfolio-hero h-screen">
            <div className="portfolio-hero-container">

                <div className="portfolio-hero-left">
                    <h2 className="portfolio-hero-title portfolio-hero-ani">
                        Let's See our <br /> Portfolio--
                    </h2>

                    <p className="portfolio-hero-text portfolio-hero-ani">
                        5+ years | 511+ Brands | 60+ Crore Ad spent <br />
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
                        {/* <button className="portfolio-hero-cta">
                         <img src={PhoneYellow} alt="call" />   Book a Strategy Call
                        </button> */}
                        <BookCallButton text="Book a Strategy Call"   height="60px" textSize="base" rounded="xl" paddingX="5" attention={true} className="hover:bg-[#faddac] h-15 px-5 rounded-xl font-semibold"/>
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
