import React, { useState } from 'react'

import { 
  UIUXsvg, 
  Developmentsvg, 
  DigitalMarketingsvg, 
  Aisvg, 
  Whiteboardsvg,
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
  WhiteboardTool1, 
  WhiteboardTool2, 
  WhiteboardTool3 
} from "@/assets";

import './WhatWeDo.css'


const WhatWeDo = () => {

  const services = [
    {
      title: "UI & UX",
      subtitle: "Design",
      icon: UIUXsvg,
      tools: [Figma, Xd, Sketch],
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
    {
      title: "WhiteBoard",
      subtitle: "Animation",
      icon: Whiteboardsvg,
      tools: [WhiteboardTool1, WhiteboardTool2, WhiteboardTool3],
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
  ];


  return (
    <section className="services-wrapper">
      <h2 className="section-title-WhatWeDo">Our Services</h2>

      <div className="services-row">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
          >
            <div className="service-card-inner">

              <div className="service-header">
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>

                <h3>{service.title}</h3>
                <p className="subtitle">{service.subtitle}</p>
              </div>

              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="tech-icons">
                {
                  service.tools?.map((icon,index) => (
                    <img key={index} src={icon} alt="tools-icons" />
                  ))
                }

              </div>

              <button className="process-btn">What’s The Process</button>

            </div>
          </div>

        ))}
      </div>

    </section>
  );

}

export default WhatWeDo

