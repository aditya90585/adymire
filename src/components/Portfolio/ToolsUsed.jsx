import React, { useRef } from "react";
import "./ToolsUsed.css";
import {
  
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
import ToolsUsedContainer from "../Common/ToolsUsedContainer";
import Development from "@/assets/icons/Development.webp";
import DigitalMarketing  from "@/assets/icons/DigitalMarketing.webp";
import UIUX from "@/assets/icons/UIUX.webp";
const toolsData = [
  {
    title: "UI & UX",
    subtitle: "Design",
    icon: UIUX,
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
    icon: Development,
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
    icon: DigitalMarketing,
    tools: [
      { name: "Google Ads", icon: DigitalmarketingToolsIcons14, percentage: "100%" },
      { name: "Meta Ads", icon: DigitalmarketingToolsIcons2, percentage: "100%" },
      { name: "X Ads", icon: DigitalmarketingToolsIcons1, percentage: "100%" },
      { name: "LinkedIn Ads", icon: DigitalmarketingToolsIcons17, percentage: "100%" },
      { name: "Google Analytics", icon: DigitalmarketingToolsIcons3, percentage: "100%" },
      { name: "Google Analytics 4", icon: DigitalmarketingToolsIcons4, percentage: "100%" },
      { name: "Google Search Console", icon: DigitalmarketingToolsIcons6, percentage: "100%" },
      { name: "VWO", icon: DigitalmarketingToolsIcons5, percentage: "100%" },
      { name: "Answer The Public", icon: DigitalmarketingToolsIcons7, percentage: "100%" },
      { name: "SEMrush", icon: DigitalmarketingToolsIcons8, percentage: "100%" },
      { name: "Ubersuggest", icon: DigitalmarketingToolsIcons9, percentage: "100%" },
      { name: "Keyword Tool", icon: DigitalmarketingToolsIcons10, percentage: "100%" },
      { name: "GTmetrix", icon: DigitalmarketingToolsIcons11, percentage: "100%" },
      { name: "Google Tag Manager", icon: DigitalmarketingToolsIcons12, percentage: "100%" },
      { name: "Pingdom", icon: DigitalmarketingToolsIcons15, percentage: "100%" },
      { name: "Ahrefs", icon: DigitalmarketingToolsIcons13, percentage: "100%" },
      { name: "SEMrush", icon: DigitalmarketingToolsIcons16, percentage: "100%" },
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

  return (
    <ToolsUsedContainer title="Tools We Used" toolsData={toolsData}/>
  );
};

export default ToolsUsed;
