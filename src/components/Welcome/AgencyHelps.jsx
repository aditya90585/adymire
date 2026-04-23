import React, { useRef } from 'react'
import UIUX from "@/assets/icons/UIUX.webp";
import  Development from "@/assets/icons/Development.webp";
import DigitalMarketing  from "@/assets/icons/DigitalMarketing.webp";

import './AgencyHelps.css'
import { useGSAP } from '@gsap/react';
import { staggerFadeInOnScroll } from '../../animations/stagger';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AgencyHelps = () => {
  const helpscontref = useRef()

  useGSAP(() => {

    const elements = gsap.utils.toArray(".ah-trigger-ani");
    elements.forEach((element) => {
      staggerFadeInOnScroll(element, { trigger: element ,x:-150,y:10})
    });
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)


  }, { scope: helpscontref });

  return (
    <section ref={helpscontref} className="agency-helps">
      <div className="ah-container">
        <h2 className="ah-section-title ah-trigger-ani">Adymire Agency helps you</h2>
        <div className="process-steps">
          <div className="step-card ah-trigger-ani">
            <div className="step-icon"><img className='animate-pulse' src={UIUX} alt="design" /></div>
            <h3 className="step-title">Design</h3>
          </div>
          <div className="step-connector ah-trigger-ani">➶</div>
          <div className="step-card ah-trigger-ani">
            <div className="step-icon"><img className='animate-pulse' src={Development} alt="development" /></div>
            <h3 className="step-title">Development</h3>
          </div>
          <div className="step-connector ah-trigger-ani">➶</div>
          <div className="step-card ah-trigger-ani">
            <div className="step-icon"><img className='animate-pulse' src={DigitalMarketing} alt="grow" /></div>
            <h3 className="step-title">Grow</h3>
          </div>
        </div>
        <p className="agency-description">
          Premium UI/UX, Web & App Development, and Performance Marketing for businesses.
        </p>
      </div>
    </section>
  )
}

export default AgencyHelps

