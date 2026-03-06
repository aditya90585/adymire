import React, { useRef, useState } from 'react'


import {
  UIUXsvg,
  Developmentsvg,
  DigitalMarketingsvg,
  Aisvg,
  Figma,
  Xd,
  Sketch,
  Flutter,
  Jetpack,
  Reactlogo,
  Apple,
  Android,
  Browser,
  AToolIcon,
  FireBallToolIcon,
  BlueArrowIcon,
  Aitool1,
  Aitool2,
  Aitool3,
} from "@/assets";

import './WhatWeDo.css'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";
import { useGSAP } from '@gsap/react';
import { staggerFadeInOnScroll } from '../../animations/stagger';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const WhatWeDo = ({ contentState = false }) => {

  const services = [
    {
      title: "UI & UX",
      subtitle: "Design",
      icon: UIUXsvg,
      tools: [Figma, Xd, Sketch],
      button_link: "/process/uiux",
      items: [
        "Modern UI design",
        "Fix site UX factors",
        "Prototyping",
        "Wireframing",
        "Visual Communication",
        "Web Mockup",
        "Visual test",
        "Mobile App & Web Design",
        "Neo & Glassmorphism UI",
      ],
    },
    {
      title: "App & Web",
      subtitle: "Development",
      icon: Developmentsvg,
      button_link: "/process/development",
      tools: [Flutter, Jetpack, Reactlogo, Android, Apple, Browser],
      items: [
        "Interface Design",
        "Landing Pages",
        "eCommerce Site",
        "Mobile Applications",
        "Web Applications",
        "WordPress",
        "All type- website & apps",
      ],
    },
    {
      title: "Digital",
      subtitle: "Marketing",
      icon: DigitalMarketingsvg,
      button_link: "/process/digitalmarketing",
      tools: [AToolIcon, FireBallToolIcon, BlueArrowIcon],
      items: [
        "Meta, Google, LinkedIn",
        "Twitter (X) Ads Google",
        "PPC",
        "SEM",
        "Link Building",
        "White Label Service",
        "Email Marketing",
        "E-Commerce Marketing",
        "Dropshipping Marketing",
      ],
    },
    {
      title: "AI Agents",
      subtitle: "Automation",
      icon: Aisvg,
      button_link: "/process/aiautomation",
      tools: [Aitool1, Aitool2, Aitool3],
      items: [
        "Lead Capture",
        "CRM Sync",
        "Email Triggers",
        "Data Integration",
        "Task Scheduling",
        "API Orchestration",
        "Chatbot Flows",
        "Report Automation",
        "Marketing Funnels",
      ],
    },

  ];

   const wwdocontref = useRef()
        useGSAP(() => {
      
            const elements = gsap.utils.toArray(".wwdo-ani-element");
            elements.forEach((element) => {
                staggerFadeInOnScroll(element,{trigger:element})
            });
             setTimeout(() => {
                    ScrollTrigger.refresh()
                }, 100)
        }, { scope: wwdocontref });
    

  return (
    <section ref={wwdocontref} className="services-wrapper">
      <h2 className="section-title-WhatWeDo wwdo-ani-element">Our Services</h2>

      <Swiper
        spaceBetween={60}
        slideToClickedSlide

        breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              centeredSlides:true,
               watchOverflow:false
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              centeredSlides:false,
               watchOverflow:false
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              centeredSlides:false,
               watchOverflow:false
            },
          }}
         
        pagination={{
          el: ".services-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: ".services-prev",
          nextEl: ".services-next",
        }}
        modules={[Pagination, Navigation]}
        className="services-row mySwiper services-swiper wwdo-ani-element"
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="service-card "
          >
            <div className="service-card-inner">

              <div className="service-header">
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>

                <h3>{service.title}</h3>
                <p className="subtitle">{service.subtitle}</p>
              </div>
              {contentState && <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>}


              <div className="tech-icons">
                {
                  service.tools?.map((icon, index) => (
                    <img key={index} src={icon} alt="tools-icons" />
                  ))
                }

              </div>

              <NavLink to={service.button_link} className="process-btn">What’s The Process</NavLink>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
      <div className="services-controls">
        <button className="services-prev rotate-180" aria-label="Previous">
          ➔
        </button>

        <div className="services-pagination"></div>

        <button className="services-next" aria-label="Next">
          ➔
        </button>
      </div>

    </section>
  );

}

export default WhatWeDo

