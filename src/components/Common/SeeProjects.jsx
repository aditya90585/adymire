import React, { Suspense, useMemo, useRef, useState } from "react";
import "./SeeProjects.css"
// import SeeProjectsSlider from "./SeeProjectsSlider";
import { CategoryAiAutomation, CategoryWebDevelopment, CategoryAppDevelopment, CategoryDigitalMarketing, CategoryUIUX } from "@/assets";
import Lottie from "lottie-react";
import { AllProjectsData } from "./Projects/AllProjectsData";
import { LuLoaderCircle } from "react-icons/lu";

const SeeProjectsSlider = React.lazy(() => import('./SeeProjectsSlider'));

const categories = [
  { name: "UI & UX", type: "uiux", icon: CategoryUIUX },
  { name: "Marketing", type: "marketing", icon: CategoryDigitalMarketing },
  { name: "Web Development", type: "webdevelopment", icon: CategoryWebDevelopment },
  { name: "App Development", type: "appdevelopment", icon: CategoryAppDevelopment },
  { name: "AI Automation", type: "aiautomation", icon: CategoryAiAutomation },
];



const SeeProjects = () => {
  const [activeCategory, setActiveCategory] = useState("uiux");
  const [dropdownisOpen, setDropdownisOpen] = useState(false);
  // const [projects, setProjects] = useState([])

  // useEffect(() => {
  //   const filterProjects = AllProjectsData.filter((projects) => projects.type == activeCategory)
  //   setProjects(filterProjects)
  // }, [activeCategory])



  const projects = useMemo(() => {
    return AllProjectsData.filter(p => p.type === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-[#FFF9EE] py-4">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-10 ">
          See Projects
          <span className="block w-30 h-1 bg-yellow-500 mx-auto mt-1 rounded" />
        </h2>

        <div className="md:hidden max-w-sm mx-auto mb-6 z-20 relative">
          <button
            onClick={() => setDropdownisOpen(!dropdownisOpen)}
            className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-3 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Lottie
                className="h-8"
                animationData={
                  categories.find(c => c.type === activeCategory)?.icon
                }
              />
              <span className="font-medium">{categories.find(c => c.type === activeCategory)?.name}</span>
            </div>
            <span className="text-gray-600">▼</span>
          </button>

          {dropdownisOpen && (
            <div className="absolute z-20 mt-2 w-full bg-white border rounded-lg shadow-lg">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.type);
                    setDropdownisOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3  text-left
                      ${activeCategory === category.type
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
              onClick={() => setActiveCategory(category.type)}
              className={`flex items-center justify-center px-4 py-1.5 cursor-pointer rounded-lg text-sm font-medium transition
                ${activeCategory === category.type
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
      <div className="">

        {/* <SeeProjectsSlider projects={projects} activeCategory={activeCategory} /> */}

        <Suspense fallback={<div className="h-[300px] flex justify-center items-center">
          <LuLoaderCircle className="animate-spin size-8" />
        </div>}>
          <SeeProjectsSlider projects={projects} activeCategory={activeCategory} />
        </Suspense>
      </div>
    </section>
  );
};

export default SeeProjects;
