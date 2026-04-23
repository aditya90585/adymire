import React, { useRef } from 'react'
import './PaymentSystem.css'
import PaymentMethods from "@/assets/illustrations/PaymentMethods.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { staggerFadeInOnScroll } from '../../animations/stagger';

gsap.registerPlugin(ScrollTrigger);

const PaymentSystem = () => {
    const paymentsystemcontref = useRef()
    useGSAP(() => {
      const elements = gsap.utils.toArray(".paymentsystem-ani-element");
  
  
      elements.forEach((element) => {
        staggerFadeInOnScroll(element, { trigger: element })
      });
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
  
  
    }, { scope: paymentsystemcontref });

  return (
    <section ref={paymentsystemcontref} className="ps-section">
      <div className="ps-header ">
        <h2 className='paymentsystem-ani-element'>Easy Payment System</h2>
        <span className="ps-underline paymentsystem-ani-element" />
        <p className='paymentsystem-ani-element'>
          We Accept Paypal, Escrow, Stripe Debit and Credit & Debit Card <br />
          Crypto ( USDT bitcoin solana etc)
        </p>
      </div>
      <div className='ps-payment-methods-img paymentsystem-ani-element'>
        <img src={PaymentMethods} alt="payment-methods" />
      </div>
      </section>
  )
}

export default PaymentSystem

