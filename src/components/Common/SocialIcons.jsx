import React from 'react'

import Facebook3dLogo  from "@/assets/logo/Facebook3dLogo.webp";
import Instagram3dLogo  from "@/assets/logo/Instagram3dLogo.webp";
import Linkedin3dLogo from "@/assets/logo/Linkedin3dLogo.webp";
import X3dLogo from "@/assets/logo/X3dLogo.webp";
import Youtube3dLogo from "@/assets/logo/Youtube3dLogo.webp";

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
                       <a target="_blank" rel="noopener noreferrer" key={index} href={item.redirectUrl}><img className={`${imgClass} rounded-xl`}   src={item.img} alt={item.alt} /></a>
                    ))}
                </div>
  )
}

export default SocialIcons