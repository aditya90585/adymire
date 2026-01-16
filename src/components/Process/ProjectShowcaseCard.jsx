import React, { useState } from 'react'

const ProjectShowcaseCard = ({ project }) => {

    const [activeImg, setActiveImg] = useState(0)
    const handleSlide = (dir) => {
        setActiveImg((prev) => {
            let copy = prev;
            let total = project.images.length;

            copy = dir === "left" ?
                copy === 0
                    ? total - 1
                    : copy - 1
                : copy === total - 1
                    ? 0
                    : copy + 1;

            return copy;
        });
    };
    return (
        <div
            className="bg-white rounded-2xl border shadow-sm p-10 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
            <div>
                <h2 className="text-5xl font-bold mb-1">
                    {project.title}
                </h2>

                <a
                    href="#"
                    className="text-blue-600 text-xl my-2 block underline"
                >
                    {project.website}
                </a>

                <h3 className="font-semibold text-3xl mt-6 mb-2">
                    Details:
                </h3>

                <p className="text-gray-500 text-base font-semibold  pr-15">
                    {project.description}
                </p>

                <h3 className="font-bold text-3xl text-gray-800 mt-6 mb-6">
                    Technology We used
                </h3>

                <div className="flex w-fit px-4 py-2 gap-5 border-2 border-gray-300 rounded-xl">
                    {project.technologies.map((tech, i) => (
                        <div
                            key={i}
                            className="w-14 h-14  flex items-center justify-center bg-gray-50"
                        >
                            <img
                                src={tech}
                                alt="tools"
                                className=""
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center">

                <div className="relative w-full h-80 rounded-xl border-2 border-yellow-400 overflow-hidden mb-6">
                    <img
                        src={project.images[activeImg]}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => handleSlide("left")}
                        className="w-12 h-12 rotate-180 rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
                    >
                        ➔
                    </button>

                    <div className="flex gap-2">
                        {project.images.map((_, i) => (
                            <span
                                key={i}
                                className={`w-2.5 h-2.5 rounded-full ${i === activeImg
                                    ? "bg-yellow-500"
                                    : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => handleSlide("right")}
                        className="w-12 h-12 rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
                    >
                        ➔
                    </button>
                </div>

                <button className="w-full py-4 bg-[#FFE4A3] rounded-xl font-semibold hover:bg-[#FFD36A]">
                    See Project
                </button>
            </div>
        </div>
    )
}

export default ProjectShowcaseCard