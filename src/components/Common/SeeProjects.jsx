import React, { useState } from "react";
import "./SeeProjects.css"
import SeeProjectsSlider from "./SeeProjectsSlider";
import { CategoryAiAutomation, CategoryWebDevelopment, CategoryAppDevelopment, CategoryDigitalMarketing, CategoryUIUX } from "@/assets";
import Lottie from "lottie-react";

const categories = [
  { name: "UI & UX", icon: CategoryUIUX },
  { name: "Marketing", icon: CategoryDigitalMarketing },
  { name: "Web Development", icon: CategoryWebDevelopment },
  { name: "App Development", icon: CategoryAppDevelopment },
  { name: "AI Automation", icon: CategoryAiAutomation },
];

const projects = [
  {
    id: 1,
    title: "Praktika app UI & UX Design",
    link: "praktika.com",
    type: "Mobile App",
  },
  {
    id: 2,
    title: "Tavi app UI & UX Design",
    link: "tavitaxibooking.com",
    type: "Mobile App",
  },
  {
    id: 3,
    title: "Praktika app UI & UX Design",
    link: "praktika.com",
    type: "Mobile App",
  },
  {
    id: 4,
    title: "Praktika app UI & UX Design",
    link: "praktika.com",
    type: "Mobile App",
  },
  {
    id: 5,
    title: "Praktika app UI & UX Design",
    link: "praktika.com",
    type: "Mobile App",
  },
];

const SeeProjects = () => {
  const [activeCategory, setActiveCategory] = useState("Designing");
  return (
    <section className="bg-[#FFF9EE] py-4">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          See Projects
          <span className="block w-30 h-1 bg-yellow-500 mx-auto mt-1 rounded" />
        </h2>

        <div className="grid  grid-cols-5 gap-1 max-w-5xl mx-auto bg-white rounded-xl p-2 shadow-sm border border-[#999797]">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center justify-center px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition
                ${activeCategory === category.name
                  ? "bg-[#FFE7B3] text-black"
                  : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <span> <Lottie className="h-10" animationData={category.icon} /> </span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <SeeProjectsSlider projects={projects} />
    </section>
  );
};

export default SeeProjects;
