import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";
import UIUXLastSlide from '../Common/Projects/UIUXLastSlide';
import UIUXLastSlide2 from '../Common/Projects/UIUXLastSlide2';



const ProjectShowcaseCard = ({ project }) => {
    const navigate = useNavigate()


    return (
        <div
            className="bg-white rounded-2xl border shadow-sm md:p-10 p-2 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
            <div>
                <h2 className="text-2xl font-bold mb-1">
                    {project.title}
                </h2>

                <a
                    href={project.link}
                    className="text-blue-600 text-xl my-2 block underline"
                >
                    {project.linkText}
                </a>
                {project.description &&
                    <h3 className="font-semibold text-xl mt-6 mb-2">
                        Details:
                    </h3>}


                <p className="text-gray-500 text-base font-semibold  pr-15">
                    {project?.description}
                </p>

                <h3 className="font-bold text-3xl text-gray-800 mt-6 mb-6">
                    Technology We used
                </h3>

                <div className="flex w-fit px-4 py-2 gap-5 border-2 border-gray-300 rounded-xl">
                    {project.technologies.map((tech, i) => (
                        <div
                            key={i}
                            className="md:w-14 md:h-14 w-6 h-6  flex items-center justify-center bg-gray-50"
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

            <div className="flex flex-col justify-between items-center">

                <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    centeredSlides={true}
                    watchOverflow={false}

                    pagination={{
                        el: `.project-showcase-pagination-${project?.slug}`,
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: `.project-showcase-prev-${project?.slug}`,
                        nextEl: `.project-showcase-next-${project?.slug}`,
                    }}
                    modules={[Pagination, Navigation]}
                    className="relative mySwiper w-full md:h-100 h-60 rounded-xl border-2 bg-gray-800 border-yellow-400 overflow-hidden mb-6">
                    {project?.images?.map((image, i) => {
                        return <SwiperSlide key={i}>
                            <img
                                src={image}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </SwiperSlide>
                    })}
                    {project?.type == "uiux" &&
                        <SwiperSlide className='bg-white' >
                            <UIUXLastSlide2 className="w-full md:h-100 h-60 bg-gray-800" />
                        </SwiperSlide>
                    }

                </Swiper>

                <div className="flex items-center gap-4 mb-8">
                    <button
                        className={`project-showcase-prev-${project?.slug} w-12 h-12 rotate-180 rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]`}
                    >
                        ➔
                    </button>
<div className='md:block hidden'>

                    <div className={`project-showcase-pagination project-showcase-pagination-${project?.slug}`}></div>
</div>

                    <button
                        className={`project-showcase-next-${project?.slug} w-12 h-12 rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]`}
                    >
                        ➔
                    </button>
                </div>
                {project?.type == "uiux" &&
                    <button onClick={() => navigate(`/projectDetails/${project?.slug}`)} className="w-full cursor-pointer py-4 bg-[#FFE4A3] rounded-xl font-semibold hover:bg-[#FFD36A]">
                        See Project
                    </button>}
                {((project?.type == "appdevelopment") || project?.type == "webdevelopment") &&
                    <button onClick={() => window.open(`${project?.link}`, "_blank")} className="w-full cursor-pointer py-4 bg-[#FFE4A3] rounded-xl font-semibold hover:bg-[#FFD36A]">
                        See Project
                    </button>}


            </div>
        </div>
    )
}

export default ProjectShowcaseCard