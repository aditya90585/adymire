import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import UIUXLastSlide from './Projects/UIUXLastSlide';

const SeeProjectsSlider = ({ projects, activeCategory }) => {
    const navigate = useNavigate()
    if (projects?.length == 0) return <div className='text-xl font-bold my-8 text-center'>no project in this categoty</div>
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                watchOverflow={true}
                centeredSlides={false}
                spaceBetween={30}
                slideToClickedSlide
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                }}

                pagination={{
                    el: ".seeProjects-pagination",
                    clickable: true,
                }}
                navigation={{
                    prevEl: ".seeProjects-prev",
                    nextEl: ".seeProjects-next",
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                style={{ '--swiper-wrapper-align-items': 'flex-start' }}
                className="mt-6 mySwiper seeprojects-swiper">

                {projects?.map((project) => (
                    <SwiperSlide
                        style={{ width: '340px' }}
                        key={project?.title}
                        className={`rounded-2xl border-2 overflow-hidden p-2 transition-all ease-out duration-200 border-gray-200   bg-white z-10`}
                    >
                        <div className=" max-h-60 h-60 min-h-60 overflow-hidden bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 text-sm">
                            <img className='h-full w-full object-cover ' loading='lazy' src={project?.images[0]} alt="image-thumbnail" />
                        </div>

                        <div className="py-1 px-2 min-h-50  flex flex-col justify-between">
                            <h3 className="font-bold text-xl my-4">
                                {project?.title}
                            </h3>
                            <div className="flex justify-between items-center  flex-row my-2">
                                <a target="_blank" rel="noopener noreferrer"
                                    href={project?.link}
                                    className="text-sm text-blue-500 underline "
                                >
                                    {project?.linkText}
                                </a>

                                <div className="flex justify-between items-center">
                                    <span className="seeproject-projecttype text-xs font-bold bg-[#FFE7B3] px-2 py-2 rounded-full">
                                        {project?.category2[0]}
                                    </span>
                                </div>
                            </div>
                            {activeCategory == "uiux" &&
                                <button
                                    onClick={() => navigate(`/projectDetails/${project?.slug}`)}
                                    className={` seeproject-button w-full border-2 border-yellow-300 mt-1 py-2.5 bg-[#FFE7B3]   text-black rounded-lg font-semibold transition ease-in duration-200 cursor-pointer`}
                                >
                                    See Project
                                </button>}
                            {((activeCategory == "appdevelopment") || activeCategory == "webdevelopment") &&
                                <button
                                    onClick={() => window.open(`${project?.link}`, "_blank")}
                                    className={` seeproject-button w-full border-2 border-yellow-300 mt-1 py-2.5 bg-[#FFE7B3]   text-black rounded-lg font-semibold transition ease-in duration-200 cursor-pointer`}
                                >
                                    See Project
                                </button>}

                        </div>
                    </SwiperSlide>
                ))}
                {activeCategory == "uiux" &&
                    <SwiperSlide
                        style={{ width: '340px' }}

                        className={`rounded-2xl min-h-115 flex  border-2 overflow-hidden  transition-all ease-out duration-200 border-gray-200   bg-white z-10`}
                    >
                        <UIUXLastSlide className="h-115 w-full" />
                    </SwiperSlide>
                }
            </Swiper>
            <div className="seePojects-controls flex justify-center items-center gap-5 mt-10">
                <button className="seeProjects-prev rotate-180 bg-[#FDC274] h-11 w-11 text-2xl rounded-full cursor-pointer" aria-label="Previous">
                    ➔
                </button>

                <div className="seeProjects-pagination flex justify-center items-center"></div>

                <button className="seeProjects-next  bg-[#FDC274] h-11 w-11 text-2xl rounded-full cursor-pointer" aria-label="Next">
                    ➔
                </button>
            </div>
        </div>
    )
}

export default SeeProjectsSlider