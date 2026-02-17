import React, { useRef } from 'react'
import './CallToAction.css'
import { PhoneYellow, Whatsapp } from "@/assets";
import { useGSAP } from '@gsap/react';
import { staggerFadeInOnScroll } from '../../animations/stagger';
import ChatOnWhatsappButton from '../UI/NavButtons/ChatOnWhatsappButton';
import BookCallButton from '../UI/NavButtons/BookCallButton';

const CallToAction = () => {
   const actioncontref = useRef()
    useGSAP(() => {
      staggerFadeInOnScroll(".action-trigger-ani",{trigger:actioncontref.current})
    },{scope:actioncontref})
  return (
    <section className="call-to-action">
      <div ref={actioncontref} className="cta-container">
        <div className="cta-content">
            <h2 className="cta-title action-trigger-ani">Book a call & Chat on Whatsapp</h2>
            <div className="cta-buttons">
              {/* <button className="btn-call-action action-trigger-ani">
                <span className="btn-icon"><img src={PhoneYellow} alt="call" /></span>
                Book Concultation Call
              </button> */}
              {/* <button className="btn-whatsapp-action action-trigger-ani">
                <span className="btn-icon"><img src={Whatsapp} alt="Whatsapp" /></span>
                Chat on Whatsapp
              </button> */}
              <BookCallButton text='Book Concultation Call' className='bg-[#faecba] h-12.5' backgroundnumber={2} textSize='base' height='50px' rounded="md" paddingX='2' />
              <ChatOnWhatsappButton className='h-12.5' textSize='base' height='50px' rounded="md" paddingX='5' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

