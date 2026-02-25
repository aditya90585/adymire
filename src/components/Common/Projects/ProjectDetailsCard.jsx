import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AllProjectsData } from './AllProjectsData';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";
import UIUXLastSlide2 from './UIUXLastSlide2';



const ProjectDetailsCard = () => {
    const [currentProjectCard, setcurrentProjectCard] = useState()
    const [loading, setLoading] = useState(false)
    const { projectname } = useParams()
    useEffect(() => {
        function loadCurrentProject() {
            setLoading(true)
            const filterProject = AllProjectsData.filter((projects) => projects.slug == projectname)
            setcurrentProjectCard(filterProject[0])
        }
        loadCurrentProject()
    }, [projectname])
    useEffect(() => {
        setLoading(true)
    }, [currentProjectCard])



    if (!loading) return <div className=' text-center text-xl font-semibold my-4 mt-20'>loading project...</div>

    if (!currentProjectCard) return <div className=' text-center text-xl font-semibold my-4 mt-20'>unable to find project</div>
    return (
        <div
            className="bg-white mt-22 p-10 "
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className="flex flex-col items-center">

                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        centeredSlides={true}
                        watchOverflow={false}

                        pagination={{
                            el: ".project-details-pagination",
                            clickable: true,
                        }}
                        navigation={{
                            prevEl: ".project-details-prev",
                            nextEl: ".project-details-next",
                        }}
                        modules={[Pagination, Navigation]}

                        className="mySwiper relative w-full md:h-100 h-60  rounded-xl border-2 bg-gray-800 border-gray-400 overflow-hidden mb-6">
                        {currentProjectCard.images.map((image, i) => {
                            return <SwiperSlide key={i} >
                                <img
                                    src={image}
                                    loading='lazy'
                                    alt=""
                                    className="w-full  h-full object-contain"
                                />
                            </SwiperSlide>
                        })}
                        {currentProjectCard?.type == "uiux" &&
                            <SwiperSlide
                                className={`bg-white `}
                            >
                                <UIUXLastSlide2 className="md:h-100 h-60 bg-gray-800"  />
                            </SwiperSlide>
                        }
                    </Swiper>

                    <div className="flex items-center gap-4 mb-8">
                        <button
                            className="project-details-prev w-12 h-12 rotate-180 rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
                        >
                            ➔
                        </button>

                        <div className='project-details-pagination'></div>

                        <button
                            className="project-details-next w-12 h-12 rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
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
                            {currentProjectCard?.category2?.map((c, i) => {
                                return <span key={i} className='bg-[#fadf9f] font-semibold text-sm rounded-2xl py-1 px-2'>{c}</span>
                            })}
                        </div>
                        <div className='flex justify-between mt-2 p-2'>
                            <div className='text-gray-700'><span className='font-semibold text-black'>Duration</span> : {currentProjectCard?.duration}</div>
                            <div className='text-gray-700'><span className='font-semibold text-black'>Category</span> : {currentProjectCard?.category1}</div>
                        </div>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href={currentProjectCard?.link} className="px-8 py-2 w-fit block bg-[#FFE4A3] mx-auto  rounded-lg text-base font-semibold hover:bg-[#FFD36A]">
                        {currentProjectCard?.visitText}
                    </a>
                </div>
            </div>
            <div className='border-2 border-gray-200 p-8 rounded-xl bg-[white] w-full h-fit'>
                {currentProjectCard.description &&
                    <div>

                        <h2 className="text-4xl font-bold mb-2">
                            Description:
                        </h2>

                        <p className="text-gray-700 text-base">
                            {currentProjectCard?.description}
                        </p>
                    </div>
                }


                <div>
                    {currentProjectCard?.sections?.map((section, i) => {
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
        </div >
    )
}

export default ProjectDetailsCard