import React from 'react'
import {FourCustomers} from "@/assets"
import "./TrustedBy.css"

const TrustedBy = () => {
  return (
    <div className="ty-container">
    <div className="ty-hero-stats">
                <div className="ty-stat">
                  <p>Trusted By Our</p>
                  <p>Customer</p>
    
                  <div className="ty-avatars">
                   <img className="w-[60%] mx-auto my-2"  src={FourCustomers} alt="customers" />
                  </div>
                </div>
    
                <div className="ty-stat">
                  <strong>10k+</strong>
                  <p>Complete Projects</p>
                </div>
    
                <div className="ty-stat">
                  <strong>50k+</strong>
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