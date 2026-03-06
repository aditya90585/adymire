import { useRef } from "react";
import "./WorkingProcess.css";
import { 
  TwoPeopleSitting, 
  WorkingProcessicons1, 
  WorkingProcessicons2, 
  WorkingProcessicons3, 
  WorkingProcessicons4, 
  WorkingProcessicons5, 
  WorkingProcessicons6
} from "@/assets";
import { useGSAP } from "@gsap/react";
import { staggerFadeInOnScroll } from "../../animations/stagger";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function WorkingProcess() {
  const processData = [
    {
      id: 1,
      title: "Business understanding",
      desc: "We create smart, functional, and stylish plans that match your needs,lifestyles and design vision perfectly.",
      position: "wp-top-left",
      icon:WorkingProcessicons1
    },
    {
      id: 2,
      title: "RND",
      desc: "Quality construction with trusted materials,skilled workmanship, and smooth executionto deliver durable and beautiful spaces.",
      position: "wp-top-right",
      icon:WorkingProcessicons2
    },
    {
      id: 3,
      title: "Weekly 1:1 Update",
      desc: "We transform old or dull spaces intomodern, efficient, and stylishenvironments with minimal disruption.",
      position: "wp-left",
      icon:WorkingProcessicons3
    },
    {
      id: 4,
      title: "Design UI & UX",
      desc: "Unique design concepts crafted creatively to reflect your personality and enhancethe overall beauty of your space.",
      position: "wp-right",
      icon:WorkingProcessicons4
    },
    {
      id: 5,
      title: "Clean Architecture",
      desc: "Clean, thoughtful architecture focusingon smart layouts, functionality, andtimeless design aesthetics..",
      position: "wp-bottom-left",
      icon:WorkingProcessicons5
    },
    {
      id: 6,
      title: "Development",
      desc: "Designs that blend natural light,greenery,and eco-friendly materialsto create calm,refreshing, nature-connected spaces.",
      position: "wp-bottom-right",
      icon:WorkingProcessicons6
    },
  ];

  
    const wpcontref = useRef()
      useGSAP(() => {
        // staggerFadeInOnScroll(".wp-trigger-ani",{trigger:wpcontref.current,stagger:0.4,y:10,x:60})
          const elements = gsap.utils.toArray(".wp-trigger-ani");
            
            
                elements.forEach((element) => {
                  staggerFadeInOnScroll(element, { trigger: element,y:20,x:80,scale:1.02 })
                });
                setTimeout(() => {
                  ScrollTrigger.refresh()
                }, 100)
      },{scope:wpcontref})
  
  
  return (
    <section ref={wpcontref} className="process-section">
      <h2 className="title wp-trigger-ani">
        Working Process
        <span className="h-1 mx-auto w-40 bg-yellow-400 block rounded-full"></span>
      </h2>

      <div className="wpprocess-wrapper">

        <div className="wpcenter-box">
          <div className="wpcenter-image"><img src={TwoPeopleSitting} alt="TwoPeopleSitting-with-laptop-illustration" /></div>
        </div>

        {processData.map((item) => (
          <div key={item.id} className={`process-item wp-trigger-ani ${item.position}`}>
            <div className="icon-circle">
                <img className="animate-pulse" src={item.icon} alt={item.title} />
            </div>

            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
