import ProjectShowcaseTemplate from "../ProjectShowcaseTemplate";
import UIUXToolsIcons4 from '@/assets/icons/UIUXToolsIcons/UIUXToolsIcons4.svg'
import UIUXToolsIcons5 from '@/assets/icons/UIUXToolsIcons/UIUXToolsIcons5.svg'
import UIUXToolsIcons6 from '@/assets/icons/UIUXToolsIcons/UIUXToolsIcons6.svg'
import UIUXToolsIcons7 from '@/assets/icons/UIUXToolsIcons/UIUXToolsIcons7.svg'

import Figma from '@/assets/icons/UIUXToolsIcons/Figma.svg'
import Xd from '@/assets/icons/UIUXToolsIcons/Xd.svg'
import Sketch from '@/assets/icons/UIUXToolsIcons/Sketch.svg'
import UIUX from "@/assets/icons/UIUX.webp";
export const projectData = [
  {
    title: "FiraCard",
    website: "https://www.firacard.com",
    description:
      "Firacard is an environmentally friendly, cost-effective and convenient way to send good wishes to your loved ones throughout the year.",
    technologies: [Figma, Xd, Sketch],
    images: [UIUX, UIUXToolsIcons4, UIUXToolsIcons5, UIUXToolsIcons7, UIUXToolsIcons6], 
  },
  {
    title: "Soothing Crystals",
    website: "https://www.soothingcrystals.com",
    description:
      "Soothing Crystals is a wellness-focused platform designed to promote calm, balance, and positive energy through a clean and intuitive user experience.",
    technologies: [Figma, Xd, Sketch],
    images: [Figma, UIUX, Xd, UIUXToolsIcons5, UIUXToolsIcons7],
  },
];



const UIUXProjectSection = () => {
  return <ProjectShowcaseTemplate projects={projectData} heading="UI & UX Projects" />;
};

export default UIUXProjectSection;
