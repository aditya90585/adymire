import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AllProjectsData } from './AllProjectsData';

const ProjectDetailsCard = () => {
    const [currentProjectCard, setcurrentProjectCard] = useState()
    const [loading, setLoading] = useState(false)
    const { projectname } = useParams()
    useEffect(() => {
        function loadCurrentProject(){
        setLoading(true)
        const filterProject =AllProjectsData.filter((projects) => projects.slug == projectname)
        setcurrentProjectCard(filterProject[0])
       }
       loadCurrentProject()
    }, [projectname])
    useEffect(() => {
      setLoading(true)
    }, [currentProjectCard])
    

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
  if (!loading) return <div className=' text-center text-xl font-semibold my-4 mt-20'>loading project...</div>
 
    if (!currentProjectCard) return <div className=' text-center text-xl font-semibold my-4 mt-20'>unable to find project</div>
    return (
        <div
            className="bg-white mt-22 p-10 "
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className="flex flex-col items-center">

                    <div className="relative w-full h-100 rounded-xl border-2 bg-gray-800 border-gray-400 overflow-hidden mb-6">
                        <img
                            src={currentProjectCard?.images[activeImg]}
                            loading='lazy'
                            alt=""
                            className="w-full h-full object-contain"
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
                <div className='border-2 border-gray-400 p-4 rounded-xl bg-[#f7f6f6] max-h-[95%]'>
                    <h2 className="text-xl font-bold mb-2">
                        {currentProjectCard?.title}
                    </h2>

                    <p className="text-gray-700 text-base max-h-[40%] min-h-[40%] overflow-x-scroll  [scrollbar-width:none]">
                        {currentProjectCard?.description}
                    </p>
                    <div className='bg-white rounded-xl p-4 my-4'>
                        <h3 className='text-base font-semibold mb-2'>Category</h3>
                        <div className='flex gap-x-2'>
                            {currentProjectCard?.category2?.map((c,i) => {
                                return <span key={i} className='bg-[#fadf9f] font-semibold text-sm rounded-2xl py-1 px-2'>{c}</span>
                            })}
                        </div>
                        <div className='flex justify-between mt-2 p-2'>
                            <div className='text-gray-700'><span className='font-semibold text-black'>Duration</span> : {currentProjectCard?.duration}</div>
                            <div className='text-gray-700'><span className='font-semibold text-black'>Category</span> : {currentProjectCard?.category1}</div>
                        </div>
                    </div>
                    <a  href={currentProjectCard?.link} className="px-8 py-2 w-fit block bg-[#FFE4A3] mx-auto  rounded-lg text-base font-semibold hover:bg-[#FFD36A]">
                    {currentProjectCard?.visitText}
                    </a>
                </div>
            </div>
            <div className='border-2 border-gray-200 p-8 rounded-xl bg-[white] w-full h-fit'>
                <h2 className="text-4xl font-bold mb-2">
                    Description:
                </h2>

                <p className="text-gray-700 text-base">
                    {currentProjectCard?.description}
                </p>

                <div>
                    {currentProjectCard?.sections?.map((section,i) => {
                        return <div key={i} className='text-gray-700 my-6'>
                            <h2 className='font-semibold text-xl my-1 text-black'>{section?.heading}</h2>
                            {section.content && <div>
                                {section.content?.map((text, idx) => (
                                    <p key={idx} className="  mb-3">
                                        {text}
                                    </p>
                                ))}
                            </div>
                            }
                            {section.bullets && (
                                <ul className="list-none pl-2 space-y-2 mt-4 mb-3">
                                    {section.bullets.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailsCard