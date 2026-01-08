import React, { useRef } from "react";
import "./ToolsUsed.css";

// import UIUXsvg from "../assets/icons/UIUX.svg"
// import Developmentsvg from "../assets/icons/Development.svg"
// import DigitalMarketingsvg from "../assets/icons/DigitalMarketing.svg"
// import Aisvg from "../assets/icons/Ai.svg"


// import Figma from "../assets/icons/UIUXToolsIcons/Figma.svg"
// import Xd from "../assets/icons/UIUXToolsIcons/Xd.svg"
// import Sketch from "../assets/icons/UIUXToolsIcons/Sketch.svg"
// import UIUXToolsIcons4 from "../assets/icons/UIUXToolsIcons/UIUXToolsIcons4.svg"
// import UIUXToolsIcons5 from "../assets/icons/UIUXToolsIcons/UIUXToolsIcons5.svg"
// import UIUXToolsIcons6 from "../assets/icons/UIUXToolsIcons/UIUXToolsIcons6.svg"
// import UIUXToolsIcons7 from "../assets/icons/UIUXToolsIcons/UIUXToolsIcons7.svg"

// import Flutter from "../assets/icons/DevelopmentToolsIcons/Flutter.svg"
// import Jetpack from "../assets/icons/DevelopmentToolsIcons/Jetpack.svg"
// import Reactlogo from "../assets/icons/DevelopmentToolsIcons/Reactlogo.svg"
// import Apple from "../assets/icons/DevelopmentToolsIcons/Apple.svg"
// import Android from "../assets/icons/DevelopmentToolsIcons/Android.svg"
// import Browser from "../assets/icons/DevelopmentToolsIcons/Browser.svg"

// import Aitool1 from "../assets/icons/AutomationToolsIcons/Aitool1.svg"
// import Aitool2 from "../assets/icons/AutomationToolsIcons/Aitool2.svg"
// import Aitool4 from "../assets/icons/AutomationToolsIcons/Aitool4.svg"
// import Aitool5 from "../assets/icons/AutomationToolsIcons/Aitool5.svg"
// import Aitool6 from "../assets/icons/AutomationToolsIcons/Aitool6.svg"


// import DigitalmarketingToolsIcons1 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons1.svg";
// import DigitalmarketingToolsIcons2 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons2.svg";
// import DigitalmarketingToolsIcons3 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons3.svg";
// import DigitalmarketingToolsIcons4 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons4.svg";
// import DigitalmarketingToolsIcons5 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons5.svg";
// import DigitalmarketingToolsIcons6 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons6.svg";
// import DigitalmarketingToolsIcons7 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons7.svg";
// import DigitalmarketingToolsIcons8 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons8.svg";
// import DigitalmarketingToolsIcons9 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons9.svg";
// import DigitalmarketingToolsIcons10 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons10.svg";
// import DigitalmarketingToolsIcons11 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons11.svg";
// import DigitalmarketingToolsIcons12 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons12.svg";
// import DigitalmarketingToolsIcons13 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons13.svg";
// import DigitalmarketingToolsIcons14 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons14.svg";
// import DigitalmarketingToolsIcons15 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons15.svg";
// import DigitalmarketingToolsIcons16 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons16.svg";
// import DigitalmarketingToolsIcons17 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons17.svg";
// import DigitalmarketingToolsIcons18 from "../assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons18.svg";

import {
  UIUXsvg,
  Developmentsvg,
  DigitalMarketingsvg,
  Aisvg,
  // UI/UX Tools Icons
  Figma,
  Xd,
  Sketch,
  UIUXToolsIcons4,
  UIUXToolsIcons5,
  UIUXToolsIcons6,
  UIUXToolsIcons7,
  // Development Tools Icons
  Flutter,
  Jetpack,
  Reactlogo,
  Apple,
  Android,
  Browser,
  // Automation Tools Icons
  Aitool1,
  Aitool2,
  Aitool4,
  Aitool5,
  Aitool6,
  // Digital Marketing Tools Icons
  DigitalmarketingToolsIcons1,
  DigitalmarketingToolsIcons2,
  DigitalmarketingToolsIcons3,
  DigitalmarketingToolsIcons4,
  DigitalmarketingToolsIcons5,
  DigitalmarketingToolsIcons6,
  DigitalmarketingToolsIcons7,
  DigitalmarketingToolsIcons8,
  DigitalmarketingToolsIcons9,
  DigitalmarketingToolsIcons10,
  DigitalmarketingToolsIcons11,
  DigitalmarketingToolsIcons12,
  DigitalmarketingToolsIcons13,
  DigitalmarketingToolsIcons14,
  DigitalmarketingToolsIcons15,
  DigitalmarketingToolsIcons16,
  DigitalmarketingToolsIcons17,
  DigitalmarketingToolsIcons18
} from "@/assets";

const toolsData = [
  {
    title: "UI & UX",
    subtitle: "Design",
    icon: UIUXsvg,
    tools: [
      { name: "Figma", icon: Figma, percentage: "100%" },
      { name: "Adobe XD", icon: Xd, percentage: "100%" },
      { name: "Sketch", icon: Sketch, percentage: "60%" },
      { name: "Balsamiq", icon: UIUXToolsIcons4, percentage: "100%" },
      { name: "UX Research", icon: UIUXToolsIcons5, percentage: "100%" },
      { name: "Visily", icon: UIUXToolsIcons6, percentage: "100%" },
      { name: "Marvel", icon: UIUXToolsIcons7, percentage: "100%" },
    ],
  },
  {
    title: "App & Web",
    subtitle: "Development",
    icon: Developmentsvg,
    tools: [
      { name: "Flutter", icon: Flutter, percentage: "100%" },
      { name: "React Native", icon: Reactlogo, percentage: "100%" },
      { name: "Android", icon: Android, percentage: "100%" },
      { name: "iOS", icon: Apple, percentage: "100%" },
      { name: "Web", icon: Browser, percentage: "100%" },
      { name: "Jetpack", icon: Jetpack, percentage: "100%" },
    ],
  },
  {
    title: "Digital",
    subtitle: "Marketing",
    icon: DigitalMarketingsvg,
    tools: [
      { name: "X Ads", icon: DigitalmarketingToolsIcons1, percentage: "100%" },
      { name: "Meta Ads", icon: DigitalmarketingToolsIcons2, percentage: "100%" },
      { name: "Google Analytics", icon: DigitalmarketingToolsIcons3, percentage: "100%" },
      { name: "Google Analytics 4", icon: DigitalmarketingToolsIcons4, percentage: "100%" },
      { name: "VWO", icon: DigitalmarketingToolsIcons5, percentage: "100%" },
      { name: "Google Search Console", icon: DigitalmarketingToolsIcons6, percentage: "100%" },
      { name: "Answer The Public", icon: DigitalmarketingToolsIcons7, percentage: "100%" },
      { name: "SEMrush", icon: DigitalmarketingToolsIcons8, percentage: "100%" },
      { name: "Ubersuggest", icon: DigitalmarketingToolsIcons9, percentage: "100%" },
      { name: "Keyword Tool", icon: DigitalmarketingToolsIcons10, percentage: "100%" },
      { name: "GTmetrix", icon: DigitalmarketingToolsIcons11, percentage: "100%" },
      { name: "Google Tag Manager", icon: DigitalmarketingToolsIcons12, percentage: "100%" },
      { name: "Google Ads", icon: DigitalmarketingToolsIcons14, percentage: "100%" },
      { name: "Pingdom", icon: DigitalmarketingToolsIcons15, percentage: "100%" },
      { name: "Ahrefs", icon: DigitalmarketingToolsIcons13, percentage: "100%" },
      { name: "SEMrush (Alternate)", icon: DigitalmarketingToolsIcons16, percentage: "100%" },
      { name: "LinkedIn Ads", icon: DigitalmarketingToolsIcons17, percentage: "100%" },
      { name: "Moz", icon: DigitalmarketingToolsIcons18, percentage: "100%" }
    ],
  },
  {
    title: "AI Agents",
    subtitle: "Automation",
    icon: Aisvg,
    tools: [
      { name: "n8n", icon: Aitool1, percentage: "100%" },
      { name: "Activepieces", icon: Aitool2, percentage: "100%" },
      { name: "Langflow", icon: Aitool4, percentage: "100%" },
      { name: "AgentKit", icon: Aitool5, percentage: "100%" },
      { name: "OpenAI", icon: Aitool6, percentage: "100%" },
    ],
  },
];

const ToolsUsed = () => {
  const scrollRefs = useRef([]);

  const scroll = (index, direction) => {
    const container = scrollRefs.current[index];
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="tools-used">
      <h2 className="tools-used__title">Tools We Used</h2>

      {toolsData.map((section, index) => (
        <div className="tools-used__row" key={index}>
          <button
            className="tools-used__arrow rotate-180"
            onClick={() => scroll(index, "left")}
          >
            ➔
          </button>

          <div className="tools-used__section">
            <div className="tools-used__category">
              <div className="tools-used__category-img">
                <img src={section.icon} alt={section.title} />
              </div>
              <h3>{section.title}</h3>
              <p>{section.subtitle}</p>
            </div>

            <div
              className="tools-used__tools"
              ref={(el) => (scrollRefs.current[index] = el)}
            >
              {section.tools.map((tool, i) => (
                <div className="tools-used__tool-card" key={i}>
                  <div className="tools-used__tool-img aspect-square">
                    <img src={tool.icon} alt={tool.name} />
                  </div>
                  <span className="tools-used__tool-percent">
                    {tool.percentage}
                  </span>
                  <span className="tools-used__tool-name">
                    {tool.name}
                  </span>

                </div>
              ))}
            </div>
          </div>

          <button
            className="tools-used__arrow"
            onClick={() => scroll(index, "right")}
          >
            ➔
          </button>
        </div>
      ))}
    </section>
  );
};

export default ToolsUsed;
