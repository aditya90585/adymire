import React from 'react'
import { UIUX, Development, DigitalMarketing } from "@/assets";

import './AgencyHelps.css'

const AgencyHelps = () => {
  return (
    <section className="agency-helps">
      <div className="container">
        <h2 className="section-title">Adymire Agency helps you</h2>
        <div className="process-steps">
          <div className="step-card">
            <div className="step-icon"><img src={UIUX} alt="design" /></div>
            <h3 className="step-title">Design</h3>
          </div>
          <div className="step-connector">➶</div>
          <div className="step-card">
            <div className="step-icon"><img src={Development} alt="development" /></div>
            <h3 className="step-title">Development</h3>
          </div>
          <div className="step-connector">➶</div>
          <div className="step-card">
            <div className="step-icon"><img src={DigitalMarketing} alt="grow" /></div>
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

