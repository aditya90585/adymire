import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AllProjectsData } from './AllProjectsData';

const ProjectDetailsCard = () => {
    const [currentProjectCard, setcurrentProjectCard] = useState()
    const { projectname } = useParams()
    useEffect(() => {
        setcurrentProjectCard(AllProjectsData[projectname])
    }, [projectname])

    const [activeImg, setActiveImg] = useState(0)
    const handleSlide = (dir) => {
        setActiveImg((prev) => {
            let copy = prev;
            let total = currentProjectCard?.images?.length;

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
            className="bg-white mt-22 p-10 "
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className="flex flex-col items-center">

                    <div className="relative w-full h-100 rounded-xl border-2 border-yellow-400 overflow-hidden mb-6">
                        <img
                            src={currentProjectCard?.images[activeImg]}
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
                            {currentProjectCard?.images?.map((_, i) => (
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

                </div>
                <div className='border-2 border-gray-400 p-4 rounded-xl bg-[#f7f6f6] h-[95%]'>
                    <h2 className="text-3xl font-bold mb-2">
                        {currentProjectCard?.title}
                    </h2>

                    <p className="text-gray-700 text-base max-h-[40%] overflow-x-scroll  [scrollbar-width:none]">
                        {currentProjectCard?.description}
                    </p>
                    <div className='bg-white rounded-xl p-4 my-4'>
                        <h3 className='text-base font-semibold mb-2'>Category</h3>
                        <div className='flex gap-x-2'>
                            {currentProjectCard?.category2?.map((c) => {
                                return <span className='bg-[#fadf9f] font-semibold text-sm rounded-2xl py-1 px-2'>{c}</span>
                            })}
                        </div>
                        <div className='flex justify-between mt-2 p-2'>
                            <div className='text-gray-700'><span className='font-semibold text-black'>Duration</span> : {currentProjectCard?.duration}</div>
                            <div className='text-gray-700'><span className='font-semibold text-black'>Category</span> : {currentProjectCard?.category1}</div>
                        </div>
                    </div>
                    <button className="px-8 py-2 bg-[#FFE4A3] mx-auto  block rounded-lg text-base font-semibold hover:bg-[#FFD36A]">
                        Visit Behance
                    </button>
                </div>
            </div>
            <div className='border-2 border-gray-200 p-8 rounded-xl bg-[white] w-full h-fit'>
                <h2 className="text-4xl font-bold mb-2">
                    Description:
                </h2>

                <p className="text-gray-700 text-base">
                    {currentProjectCard?.description}
                </p>
                  <div className='text-gray-700 my-6'><span className='font-semibold text-black'>Purpose</span> : {currentProjectCard?.purpose}</div>
                  <div className='text-gray-700 my-6'><span className='font-semibold text-black'>Functionality</span> : {currentProjectCard?.functionality}</div>
                        
                
            </div>
        </div>
    )
}

export default ProjectDetailsCard