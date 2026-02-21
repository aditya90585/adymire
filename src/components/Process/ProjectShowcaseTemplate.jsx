import { useState } from "react";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

const ProjectShowcaseTemplate = ({ projects, heading }) => {
  return (
    <section className="bg-[#FFF9EE] py-16">
      <div className="max-w-7xl mx-auto px-6" >
        <div className="flex items-center text-5xl font-bold mb-16">
          <span className="h-16 w-4 bg-yellow-500 mr-4" />
          {heading}
        </div>

        <div className="flex flex-col gap-5">
          {projects?.length == 0 &&<div className="text-xl font-semibold text-center">currently no project in this category</div>}
          {projects.map((project, index) => (
            <ProjectShowcaseCard key={index} project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseTemplate;
