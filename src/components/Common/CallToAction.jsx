import React from 'react'
import './CallToAction.css'
import { PhoneYellow, Whatsapp } from "@/assets";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="cta-content">
            <h2 className="cta-title">Book a call & Chat on Whatsapp</h2>
            <div className="cta-buttons">
              <button className="btn-call-action">
                <span className="btn-icon"><img src={PhoneYellow} alt="call" /></span>
                Book Concultation Call
              </button>
              <button className="btn-whatsapp-action">
                <span className="btn-icon"><img src={Whatsapp} alt="Whatsapp" /></span>
                Chat on Whatsapp
              </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

