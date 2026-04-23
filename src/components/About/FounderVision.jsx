import { useRef } from "react";
import "./FounderVision.css";
import DigitalMarketing  from "@/assets/icons/DigitalMarketing.webp";
import UIUX from "@/assets/icons/UIUX.webp";

import  Development from "@/assets/icons/Development.webp";
import { staggerFadeInOnScroll } from "../../animations/stagger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const FounderVision = () => {
  const visioncontref = useRef()
  useGSAP(() => {
  const elements = gsap.utils.toArray(".vision-trigger-ani");
      elements.forEach((element) => {
        staggerFadeInOnScroll(element, { trigger: element })
      });
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
  }, { scope: visioncontref })
  return (
    <section ref={visioncontref} className="fv-section">
      <div className="fv-container">

        <h2 className="fv-title vision-trigger-ani">
          Founder & Vision
          <span className="fv-underline"></span>
        </h2>

        <p className="fv-subtitle vision-trigger-ani">
          I’m Yash Goswami, founder of <span>Adymire</span>
        </p>

        <div className="fv-steps">

          <div className="fv-step-card vision-trigger-ani">
            <div className="fv-icon">
              <img className="animate-pulse" src={UIUX} alt="Design" />
            </div>
            <p>Design</p>
          </div>

          <div className="fv-arrow vision-trigger-ani">➶</div>

          <div className="fv-step-card vision-trigger-ani">
            <div className="fv-icon">
              <img className="animate-pulse" src={Development} alt="Development" />
            </div>
            <p>Development</p>
          </div>

          <div className="fv-arrow vision-trigger-ani">➶</div>

          <div className="fv-step-card vision-trigger-ani">
            <div className="fv-icon">
              <img className="animate-pulse" src={DigitalMarketing} alt="Grow" />
            </div>
            <p>Grow</p>
          </div>

        </div>

        <div className="fv-description-box vision-trigger-ani">
          <p>
            <strong>Adymire</strong> was founded with a clear mission: to simplify digital growth for ambitious businesses. Our vision is to create a structured ecosystem where strategy, technology, and marketing work together seamlessly. We believe most businesses fail not because of lack of effort, but because of lack of clarity and systems. That is why we focus on building scalable digital foundations — strong branding, optimized platforms, automated workflows, and performance marketing strategies that compound over time 📈.
            The goal is not just to deliver services, but to build long-term growth partnerships. We aim to help brands move from uncertainty to predictable growth by using research-driven decisions and smart automation. Adymire’s vision is to become a trusted global digital partner for founders who want clarity, control, and consistent expansion in the digital space.
          </p>

          <span className="fv-signature">-- YashGoswami</span>
        </div>

      </div>
    </section>
  );
};

export default FounderVision;
