import React from 'react'
import {
  Facebook3dLogo,
  Instagram3dLogo,
  Linkedin3dLogo,
  X3dLogo,
  Youtube3dLogo,
} from "@/assets";

const SocialIcons = ({className,imgClass}) => {
      const socialIcons = [
        { img: Youtube3dLogo, alt: "Youtube",redirectUrl:"https://youtube.com/@adymire" },
        { img: Linkedin3dLogo, alt: "LinkedIn",redirectUrl:"https://www.linkedin.com/company/adymire/" },
        { img: X3dLogo, alt: "X",redirectUrl:"https://x.com/Adymire_" },
        { img: Instagram3dLogo, alt: "Instagram",redirectUrl:"https://www.instagram.com/adymire_" },
        { img: Facebook3dLogo, alt: "Facebook",redirectUrl:"https://www.facebook.com/adymiredigital" },
      ];
  return (
   <div className={`${className}`} >
                    {socialIcons.map((item, index) => (
                       <a key={index} href={item.redirectUrl}><img className={`${imgClass} rounded-xl`}   src={item.img} alt={item.alt} /></a>
                    ))}
                </div>
  )
}

export default SocialIcons