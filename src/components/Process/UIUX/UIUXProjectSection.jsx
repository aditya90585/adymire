import ProjectShowcaseTemplate from "../ProjectShowcaseTemplate";
import {
    // UI/UX Tools Icons
    Figma,
    Xd,
    Sketch,
    UIUXToolsIcons4,
    UIUXToolsIcons5,
    UIUXToolsIcons6,
    UIUXToolsIcons7
} from "@/assets"
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
