import React, { useRef } from 'react'
import { FourCustomers } from "@/assets"
import "./TrustedBy.css"
import { staggerFadeInOnScroll } from "../../animations/stagger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TrustedBy = () => {
  const trustedbycontref = useRef()
  useGSAP(() => {
    const elements = gsap.utils.toArray(".trustedby-trigger-ani");
    elements.forEach((element) => {
      staggerFadeInOnScroll(element, { trigger: element, y: 200, scale: 2 })
    });
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  }, { scope: trustedbycontref })

  return (
    <div ref={trustedbycontref} className="ty-container">
      <div className="ty-hero-stats  trustedby-trigger-ani">
        <div className="ty-stat">
          <p>Trusted By Our</p>
          <p>Customer</p>

          <div className="ty-avatars">
            <img className="w-[60%] mx-auto my-2" src={FourCustomers} alt="customers" />
          </div>
        </div>

        <div className="ty-stat">
          <strong>40+</strong>
          <p>Complete Projects</p>
        </div>

        <div className="ty-stat">
          <strong>30+</strong>
          <p>Satisfied Clients</p>
        </div>

        <div className="ty-stat">
          <strong>07+</strong>
          <p>Years Experience</p>
        </div>
      </div>
    </div>
  )
}

export default TrustedBy