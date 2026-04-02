import React from 'react'
import './Logo.css'
import {AdymireLogo} from "@/assets"

const Logo = ({ size = 'medium' ,className ,imgClass ,textSize="xl"}) => {
  return (
    <div className={` ${className} text-${textSize} font-bold logo  `}>
      <img className={`${imgClass} h-18 rounded-full overflow-hidden`} src={AdymireLogo} alt="adymire-logo" />
      <span className="text-black ">Ady<span className='text-[#fab04f]'>mire</span></span>
    </div>
  )
}

export default Logo

