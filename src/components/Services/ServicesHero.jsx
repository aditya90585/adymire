import React from "react";
import "./ServicesHero.css";
import { GirlSittingWithLaptop, PhoneYellow } from "@/assets";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BookCallButton from "../UI/NavButtons/BookCallButton";

const ServicesHero = () => {
    useGSAP(()=>{
      gsap.from(".services-hero-ani",{
       opacity:0,
       y:40,
       duration:0.6,
       stagger:0.1,
       delay:0.4
      })
  },{})
  return (
    <section className="services-hero">
      <div className="services-hero__container">


        <div className="services-hero__content">
          <div className="services-hero__badge" />

          <h1 className="services-hero__title">
            <div className="services-hero-ani">We help to Grow Your </div>
            <div className="services-hero-ani"><span>Business</span> with Full</div>
            <div className="services-hero-ani">Potentiality</div>
          </h1>

          <p className="services-hero__subtitle services-hero-ani">
            Want to know how we can help?
          </p>
{/* 
          <button className="services-hero__btn ">
            <span className="services-hero__btn-icon">
              <img src={PhoneYellow} alt="call" />
            </span>
            Book a Strategy Call
          </button> */}
          <BookCallButton text="Book a Strategy Call" className="border-black border-2 bg-[#f8f1d5]"  borderstate={true} backgroundnumber={2} textSize="xl" rounded="xl" height="60px" paddingY="1"/> 
        </div>

        <div className="services-hero__image-wrapper">
          <div className="services-hero__image-card">
            <img
              src={GirlSittingWithLaptop}
              alt="Hero visual"
              className="services-hero__image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesHero;
