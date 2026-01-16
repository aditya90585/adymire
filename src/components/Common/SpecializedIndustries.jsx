import {
  SpecializedIndustryIcon1,
  SpecializedIndustryIcon2,
  SpecializedIndustryIcon3,
  SpecializedIndustryIcon4,
  SpecializedIndustryIcon5,
  SpecializedIndustryIcon6,
  SpecializedIndustryIcon7,
  SpecializedIndustryIcon8,
} from "@/assets";


import AdymireLogo from "@/assets/logo/AdymireLogo.png"

import "./SpecializedIndustries.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { staggerFadeInOnScroll } from "../../animations/stagger";
import { useRef } from "react";



const industries = [
  { title: "Real E-states", subtitle: "Sector", position: "top", icon: SpecializedIndustryIcon1 },
  { title: "Education", subtitle: "Sector", position: "top-left", icon: SpecializedIndustryIcon8 },
  { title: "Social Media", subtitle: "Growth", position: "top-right", icon: SpecializedIndustryIcon2 },
  { title: "Software", subtitle: "Products", position: "left", icon: SpecializedIndustryIcon7 },
  { title: "AI", subtitle: "Products", position: "right", icon: SpecializedIndustryIcon3 },
  { title: "Online", subtitle: "Selling", position: "bottom-left", icon: SpecializedIndustryIcon6 },
  { title: "E-commerce", subtitle: "Growth", position: "bottom", icon: SpecializedIndustryIcon5 },
  { title: "More", subtitle: "Industries", position: "bottom-right", icon: SpecializedIndustryIcon4 },
];

const SpecializedIndustries = () => {
   const itemsRef = useRef([])
   const SIContRef = useRef()

  useGSAP(() => {
    gsap.to(".industries-wrapper", {
      rotate: 360,
      repeat: -1,
      duration: 8,
      ease: "none",
    })
     gsap.to(".industry-card", {
      rotate: -360,
      repeat: -1,
      duration: 8,
      ease: "none",
    })
     gsap.to(".center-circle", {
      rotate: -360,
      repeat: -1,
      duration: 8,
      ease: "none",
    })

    staggerFadeInOnScroll(".SI-ani",{trigger:SIContRef.current})
  },{scope:SIContRef})
  return (
    <section ref={SIContRef} className="industries-section">
      <h2 className="industries-title SI-ani">Our Specialized Industries</h2>
      <p className="industries-subtitle SI-ani">
        We help only Our Specialized Industries
      </p>

      <div className="industries-wrapper">

        <div className="center-circle">
          <img className="center-inner" src={AdymireLogo} alt="adymire" />
        </div>

        {industries.map((item, index) => (
          <div key={index}
          className={`industry-card ${item.position}`}>
            <div className="card-inner">

              <img className="industry-icon-box" src={item.icon} alt={item.title} />

              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default SpecializedIndustries;

