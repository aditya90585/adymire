import { useRef } from "react";
import "./WhyChooseUs.css";
import Handshake from '@/assets/icons/Handshake.svg'

import Clock from "@/assets/icons/Clock.webp";
import Shield from "@/assets/icons/Shield.webp";
import { staggerFadeInOnScroll } from "../../animations/stagger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "100 %",
    text: "Deliver on time",
    icon:Clock,

  },
  {
    title: "Many",
    text: "Client Trust",
    icon:Handshake,
  },
  {
    title: "100 %",
    text: "Secure Payment",
    icon:Shield,
  },
];

export default function WhyChooseUs() {
   
      const wcucontref = useRef()
        useGSAP(() => {
          // staggerFadeInOnScroll(".wcu-trigger-ani",{trigger:wcucontref.current,stagger:0.4,delay:0.8,y:40})
          const elements = gsap.utils.toArray(".wcu-trigger-ani");
        
        
            elements.forEach((element) => {
              staggerFadeInOnScroll(element, { trigger: element,y:200,scale:2 })
            });
            setTimeout(() => {
              ScrollTrigger.refresh()
            }, 100)
        
        },{scope:wcucontref})
    
  return (
    <section ref={wcucontref} className="why">
      <h2 className="why-title wcu-trigger-ani">
        Why You Chose Us
        <span></span>
      </h2>

      <div className="why-grid">
        {cards.map((item, i) => (
          <div className="why-card wcu-trigger-ani" key={i}>
            <svg
              className="blob"
              viewBox="0 0 360 387"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M194.664,0c107.51,0,164.53,78.718,165.492,176.414s.049,168.862.049,168.862-2.336,17.467-17.249,28.92c-16.105,12.49-39.826,13.064-59.5,13.064H70.4C31.525,387.26,0,355.734,0,316.86V70.4C0,31.525,31.525,0,70.4,0Z" />
            </svg>

            <div className="why-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

            <div className="icon-box">
              <img className="animate-pulse" src={item.icon} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
