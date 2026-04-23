import {

  SpecializedIndustryIcon2,
  SpecializedIndustryIcon3,
  SpecializedIndustryIcon4,
  SpecializedIndustryIcon5,
  SpecializedIndustryIcon6,
  SpecializedIndustryIcon7,
  SpecializedIndustryIcon8,
} from "@/assets";


import SpecializedIndustryIcon1 from "@/assets/icons/SpecializedIndustryicons/SpecializedIndustryIcon1.webp";

import AdymireLogo from "@/assets/logo/AdymireLogo.webp"

import "./SpecializedIndustries.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { staggerFadeInOnScroll } from "../../animations/stagger";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



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
    const q = gsap.utils.selector(SIContRef);


    const wrapperAnim = gsap.to(q(".industries-wrapper"), {
      rotate: 360,
      repeat: -1,
      duration: 12,
      ease: "none",
    });

    const cardAnim = gsap.to(q(".industry-card"), {
      rotate: -360,
      repeat: -1,
      duration: 12,
      ease: "none",
    });

    const centerAnim = gsap.to(q(".center-circle"), {
      rotate: -360,
      repeat: -1,
      duration: 12,
      ease: "none",
    });

    const wrapper = q(".industries-wrapper")[0];

    const handleEnter = () => {
      wrapperAnim.pause();
      cardAnim.pause();
      centerAnim.pause();
    };

    const handleLeave = () => {
      wrapperAnim.play(); 
      cardAnim.play();
      centerAnim.play();
    };

    wrapper.addEventListener("mouseenter", handleEnter);
    wrapper.addEventListener("mouseleave", handleLeave);

    // Your scroll animation
    // staggerFadeInOnScroll(".SI-ani", { trigger: SIContRef.current });
    const elements = gsap.utils.toArray(".SI-ani");


    elements.forEach((element) => {
      staggerFadeInOnScroll(element, { trigger: element })
    });
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    // Cleanup (VERY IMPORTANT)
    return () => {
      wrapper.removeEventListener("mouseenter", handleEnter);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };

  }, { scope: SIContRef });

  return (
    <section ref={SIContRef} className="industries-section">
      <h2 className="industries-title SI-ani">Our Specialized Industries</h2>
      <p className="industries-subtitle SI-ani">
        We help only Our Specialized Industries
      </p>

      <div className="industries-wrapper SI-ani">

        <div className="center-circle rounded-full">
          <div className="absolute inset-0 z-0 flex rounded-full items-center justify-center">
            <div className="si-attention-ring-1 " />
            <div className="si-attention-ring-2 " />
            <div className="si-attention-ring-3 " />
            <div className="si-attention-ring-4 " />
          </div>
          <img className="center-inner relative z-10" src={AdymireLogo} alt="adymire" />
        </div>

        {industries.map((item, index) => (
          <div key={index}
            className={`industry-card ${item.position}`}>
            <div className="card-inner">
              <img className="industry-icon-box animate-pulse" src={item.icon} alt={item.title} />

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

