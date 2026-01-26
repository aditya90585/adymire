import {
  SittingDarkMan,
  FourCustomers,
  MetaShopifyGoogle,
  PhoneYellow,
} from "@/assets";

import "./Hero.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { staggerFadeIn } from "../../animations/stagger";
import BookCallButton from "../UI/NavButtons/BookCallButton";


const Hero = () => {
  useGSAP(() => {
    staggerFadeIn(".hero-left-ani", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.4
    })
  }, {})
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-left">
          <h1 >
            <div className="hero-left-ani first" >Digital Agency</div>
            <span className="hero-left-ani" >& Solutions</span>
            <span className="dot hero-left-ani">.</span>
          </h1>

          <div className="hero-stats">
            <div className="stat trusted hero-left-ani">
              <p>Trusted By Our</p>
              <p>Customer</p>

              <div className="avatars">
                <img className="" height={20} src={FourCustomers} alt="" />
              </div>
            </div>

            <div className="stat hero-left-ani">
              <strong>10k+</strong>
              <p>Complete Projects</p>
            </div>

            <div className="stat hero-left-ani">
              <strong>50k+</strong>
              <p>Satisfied Clients</p>
            </div>

            <div className="stat hero-left-ani">
              <strong>07+</strong>
              <p>Years Experience</p>
            </div>
          </div>


        </div>

        <div className="hero-right">
          <img className="hero-image" src={SittingDarkMan} alt="hero-cover" />
        </div>

      </div>
      <div className="hero-partners hero-left-ani">
        <img height={50} src={MetaShopifyGoogle} alt="Meta_Shopify_Google_partners" />
      </div>
     
      <div className="hero-btn">
      <BookCallButton text="Book a Strategy Call" className="bg-white h-15" backgroundnumber={2} paddingX="5" paddingY="2" rounded="xl" textSize="xl" borderstate={true}/>
      </div>
    </section>
  );
};

export default Hero;
