import React, { useState } from "react";

const categories = [
  { name: "Designing", icon: "💡" },
  { name: "Marketing", icon: "📣" },
  { name: "Animation", icon: "⚡" },
  { name: "Development", icon: "🧩" },
  { name: "AI Automation", icon: "🤖" },
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
];

const SeeProjects = () => {
  const [activeCategory, setActiveCategory] = useState("Designing");
  const [activeTab, setActiveTab] = useState("Apps");
  const [activeProjectId, setActiveProjectId] = useState(null)

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
              className={`flex items-center justify-center px-4 py-4 cursor-pointer rounded-lg text-sm font-medium transition
                ${activeCategory === category.name
                  ? "bg-[#FFE7B3] text-black"
                  : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
        {(activeCategory == "Development")||(activeCategory=="Designing")
          && <div className="flex justify-center mt-8">
            <div className="bg-white rounded-xl p-1 flex gap-x-3 shadow-sm border border-[#a19f9f]">
              {["Apps", "Websites"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-lg text-sm font-medium transition  cursor-pointer
                  ${activeTab === tab
                      ? "bg-[#FFE7B3] text-black"
                      : "text-gray-600"
                    }
                `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        }

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {projects.map((project) => (
            <div
            onMouseOver={()=>setActiveProjectId(project.id)}
              key={project.id}
              className={`rounded-2xl border  overflow-hidden p-2 transition-all ease-out duration-200
                ${activeProjectId == project.id
                  ? "border-yellow-400 shadow-lg bg-[#FFE7B3]  scale-110"
                  : "border-gray-200 bg-[white] scale-100"
                }
              `}
            >
              <div className="h-60 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
                Image Placeholder
              </div>

              <div className="p-5">
                <h3 className="font-bold text-xl my-4">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center  flex-row my-4">
                  <a
                    href="#"
                    className="text-sm text-blue-500  "
                  >
                    {project.link}
                  </a>

                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold bg-[#FFE7B3] px-2 py-2 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>

                <button
                  className={`w-full mt-5 py-2.5 rounded-lg font-medium transition
                    ${activeProjectId == project.id
                      ? "bg-yellow-400 text-black"
                      : "bg-[#FFE7B3] text-black"
                    }
                  `}
                >
                  See Project
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeeProjects;
