import React from 'react'
import './Logo.css'
import {AdymireLogo} from "@/assets"

const Logo = ({ size = 'medium' }) => {
  return (
    <div className={`logo logo-${size}`}>
      <img className='h-18 ' src={AdymireLogo} alt="adymire-logo" />
      <span className="text-black text-xl font-bold">Ady<span className='text-[#fab04f]'>mire</span></span>
    </div>
  )
}

export default Logo

