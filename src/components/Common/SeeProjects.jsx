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
    detailuri: "firacard"
  },
  {
    id: 2,
    title: "Tavi app UI & UX Design",
    link: "tavitaxibooking.com",
    type: "Mobile App",
    detailuri: "firacard"
  },
  {
    id: 3,
    title: "Praktika app UI & UX Design",
    link: "praktika.com",
    type: "Mobile App",
    detailuri: "firacard"
  },
  {
    id: 4,
    title: "Praktika app UI & UX Design",
    link: "praktika.com",
    type: "Mobile App",
    detailuri: "firacard"
  },
  {
    id: 5,
    title: "Praktika app UI & UX Design",
    link: "praktika.com",
    type: "Mobile App",
    detailuri: "firacard"
  },
];

const SeeProjects = () => {
  const [activeCategory, setActiveCategory] = useState("UI & UX");
  const [dropdownisOpen, setDropdownisOpen] = useState(false);

  return (
    <section className="bg-[#FFF9EE] py-4">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          See Projects
          <span className="block w-30 h-1 bg-yellow-500 mx-auto mt-1 rounded" />
        </h2>

        <div className="md:hidden max-w-sm mx-auto mb-6 relative">
          <button
            onClick={() => setDropdownisOpen(!dropdownisOpen)}
            className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-3 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Lottie
                className="h-8"
                animationData={
                  categories.find(c => c.name === activeCategory)?.icon
                }
              />
              <span className="font-medium">{activeCategory}</span>
            </div>
            <span className="text-gray-600">▼</span>
          </button>

          {dropdownisOpen && (
            <div className="absolute z-20 mt-2 w-full bg-white border rounded-lg shadow-lg">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setDropdownisOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3  text-left
                      ${activeCategory === category.name
                      ? "bg-[#FFE7B3] text-black"
                      : "text-gray-600 hover:bg-gray-100"
                    }
                    `}
                >
                  <Lottie className="h-8" animationData={category.icon} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:grid  grid-cols-5 gap-1 max-w-5xl mx-auto bg-white rounded-xl p-2 shadow-sm border border-[#999797]">
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
