import React, { useRef } from 'react'
import { UIUX, Development, DigitalMarketing } from "@/assets";

import './AgencyHelps.css'
import { useGSAP } from '@gsap/react';
import { staggerFadeInOnScroll } from '../../animations/stagger';

const AgencyHelps = () => {
  const helpscontref = useRef()
  useGSAP(() => {
    staggerFadeInOnScroll(".trigger-ani",{trigger:helpscontref.current})
  },{scope:helpscontref})
  return (
    <section className="agency-helps">
      <div ref={helpscontref} className="ah-container">
        <h2 className="ah-section-title trigger-ani">Adymire Agency helps you</h2>
        <div className="process-steps">
          <div className="step-card trigger-ani">
            <div className="step-icon"><img className='animate-pulse' src={UIUX} alt="design" /></div>
            <h3 className="step-title">Design</h3>
          </div>
          <div className="step-connector trigger-ani">➶</div>
          <div className="step-card trigger-ani">
            <div className="step-icon"><img className='animate-pulse'  src={Development} alt="development" /></div>
            <h3 className="step-title">Development</h3>
          </div>
          <div className="step-connector trigger-ani">➶</div>
          <div className="step-card trigger-ani">
            <div className="step-icon"><img className='animate-pulse'  src={DigitalMarketing} alt="grow" /></div>
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

