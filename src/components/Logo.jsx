import React from 'react'
import './Logo.css'
import AdymireLogo from "@/assets/logo/AdymireLogo.webp"

const Logo = ({ size = 'medium' ,className ,imgClass,textClass ,textSize="xl"}) => {
  return (
    <div className={` ${className} text-${textSize} font-bold logo  `}>
      <img loading='lazy' className={`${imgClass} h-18 rounded-full overflow-hidden`} src={AdymireLogo} alt="adymire-logo" />
      <span   className={`${textClass}  text-black `}>Ady<span className='text-[#fab04f]'>mire</span></span>
    </div>
  )
}

export default Logo

