import React from "react";
import "./ServicesHero.css";
import GirlSittingWithLaptop from "@/assets/illustrations/GirlSittingWithLaptop.webp";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BookCallButton from "../UI/NavButtons/BookCallButton";
import Magnet from "../UI/Magnet";

const ServicesHero = () => {
  useGSAP(() => {
    gsap.from(".services-hero-ani", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.4
    })
  }, {})
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
      
          <div className="services-hero-ani md:block flex justify-center items-center">
            <Magnet padding={50} disabled={false} magnetStrength={6}>

              <BookCallButton text="Book a Strategy Call" height="60px" className=" h-15 mx-auto sm:mx-0 hover:bg-[#f8f1d5] text-xl py-1" attention={true} textSize="xl" rounded="xl" paddingY="1" />
            </Magnet>
          </div>
        </div>

        <div className="services-hero__image-wrapper">
          <div className="services-hero__image-card services-hero-ani">
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
