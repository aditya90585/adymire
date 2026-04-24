import { useRef } from "react";
import "./WorkingProcess.css";
import WorkingProcessicons1 from '@/assets/icons/WorkingProcessicons/WorkingProcessicons1.svg'
import WorkingProcessicons2 from '@/assets/icons/WorkingProcessicons/WorkingProcessicons2.svg'
import WorkingProcessicons3 from '@/assets/icons/WorkingProcessicons/WorkingProcessicons3.svg'
import WorkingProcessicons4 from '@/assets/icons/WorkingProcessicons/WorkingProcessicons4.svg'
import WorkingProcessicons5 from '@/assets/icons/WorkingProcessicons/WorkingProcessicons5.svg'
import WorkingProcessicons6 from '@/assets/icons/WorkingProcessicons/WorkingProcessicons6.svg'

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
      desc: "We understand your business goals, target audience, and market needs to build a strong digital strategy for long-term growth.",
      position: "wp-top-left",
      icon:WorkingProcessicons1
    },
    {
      id: 2,
      title: "RND",
      desc: "We research your industry, competitors, and latest trends to create smart solutions using modern technology and proven strategies.",
      position: "wp-top-right",
      icon:WorkingProcessicons2
    },
    {
      id: 3,
      title: "Weekly 1:1 Update",
      desc: "We provide weekly updates, clear reports, and quick feedback calls to keep you informed and your project moving smoothly.",
      position: "wp-left",
      icon:WorkingProcessicons3
    },
    {
      id: 4,
      title: "Design UI & UX",
      desc: "We design clean, user-friendly interfaces that improve user experience, increase engagement, and boost conversions across web and apps.",
      position: "wp-right",
      icon:WorkingProcessicons4
    },
    {
      id: 5,
      title: "Clean Architecture",
      desc: "We create scalable and secure system architecture for web and mobile apps, ensuring fast performance and easy future upgrades.",
      position: "wp-bottom-left",
      icon:WorkingProcessicons5
    },
    {
      id: 6,
      title: "Development",
      desc: "We build high-quality websites, mobile apps, and AI-powered solutions with strong performance, security, and seamless functionality.",
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
          <div className="wpcenter-image"><img src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1776852641/TwoPeopleSitting_dd6w2h.png"
           alt="TwoPeopleSitting-with-laptop-illustration" /></div>
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
