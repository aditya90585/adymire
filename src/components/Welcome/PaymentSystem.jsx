import React from 'react'
import './PaymentSystem.css'
import { PaymentMethods } from "@/assets";


const PaymentSystem = () => {

  return (
    <section className="ps-section">
      <div className="ps-header">
        <h2>Easy Payment System</h2>
        <span className="ps-underline" />
        <p>
          We Accept Paypal, Escrow, Stripe Debit and Credit & Debit Card <br />
          Crypto ( USDT bitcoin solana etc)
        </p>
      </div>
      <div className='ps-payment-methods-img'>
        <img src={PaymentMethods} alt="payment-methods" />
      </div>
      </section>
  )
}

export default PaymentSystem

