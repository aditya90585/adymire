import FourCustomers from '@/assets/icons/FourCustomers.svg'
import "./Hero.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { staggerFadeIn } from "../../animations/stagger";
import BookCallButton from "../UI/NavButtons/BookCallButton";

import { BiBot } from "react-icons/bi";
import Magnet from "../UI/Magnet";


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
            <div className="hero-left-ani first" >Launch Your Startups</div>
            <span className="hero-left-ani" >With <span className='text-yellow-400'>Adymire </span></span>
            <span className="dot hero-left-ani">.</span>
          </h1>

          <div className="hero-desc hero-left-ani">
            <p>
              We Help <span className="text-orange-400">Startups</span> and{" "}
              <span className="text-orange-400">Business</span> Build High
              Performance <span className="text-orange-400">Products</span> and scale
              theme data-driven Marketing System
            </p>
          </div>

        </div>

        <div className="hero-right hero-left-ani">
          <img className="hero-image" src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1777563699/yashhome_1_f3kfjp.png"
            alt="hero-cover" />
        </div>

      </div>

      <div className="hero-btn hero-left-ani">
        <Magnet padding={50} disabled={false} magnetStrength={6}>
          <BookCallButton attention={true} text="Book a Strategy Call" className=" hover:bg-[#FFF1C6] h-15 mx-auto sm:mx-0" borderstate={true} backgroundnumber={2} textSize="xl" rounded="xl" height="45px" />
        </Magnet>
      </div>

    </section>
  );
};

export default Hero;
