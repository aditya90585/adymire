import React, { memo, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import UIUXLastSlide from './Projects/UIUXLastSlide';
import { BiPlay } from 'react-icons/bi';
import VideoModal from './VideoModal';
import { LuLoaderCircle } from "react-icons/lu";
import { Virtual } from 'swiper/modules';

const SeeProjectsSlider = ({ projects, activeCategory }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState("")

    const navigate = useNavigate()

    const swiperRef = useRef(null)
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(0)
        }
    }, [projects])

    const [visibleProjects, setVisibleProjects] = useState([]);

    useEffect(() => {
        if (!projects) return;

        setVisibleProjects(projects.slice(0, 6));

        const timer = setTimeout(() => {
            setVisibleProjects(projects);
        }, 1000);

        return () => clearTimeout(timer);
    }, [projects]);

    if (projects?.length == 0) return <div className='text-xl font-bold my-8 flex justify-center items-center mt-20'><div className='animate-spin '><LuLoaderCircle className='size-20 text-gray-700' /></div></div>
    return (
        <div>
            <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} videoId={currentVideoId} />

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                effect={"coverflow"}
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
                modules={[EffectCoverflow, Pagination, Navigation, Virtual]}
                virtual
                style={{ '--swiper-wrapper-align-items': 'flex-start' }}
                className="mt-6 mySwiper seeprojects-swiper">

                {visibleProjects?.map((project, index) => (
                    <SwiperSlide
                        virtualIndex={index}
                        style={{ width: '340px' }}
                        key={project?.title}
                        className={`rounded-2xl border-2 overflow-hidden p-2 transition-all ease-out duration-200 border-gray-200   bg-white z-10`}
                    >
                        <div className="relative max-h-60 h-60 min-h-60 overflow-hidden bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 text-sm">
                            <img className='h-full w-full object-cover ' decoding="async" loading='lazy' src={project?.images[0].replace("/upload/", "/upload/w_600,q_auto,f_auto/")} alt="image-thumbnail" />
                            {activeCategory == "aiautomation" &&
                                <button onClick={() => {
                                    setModalOpen(true)
                                    setCurrentVideoId(project?.iframeVideoId)
                                }} className='absolute top-[41%]  rounded-full p-2 bg-amber-400 hover:bg-amber-300 transition-all ease-in cursor-pointer hover:scale-110 flex justify-center items-center'><BiPlay className='fill-black size-12' /> </button>
                            }
                        </div>

                        <div className="py-1 px-2 min-h-50  flex flex-col justify-between">
                            <h3 className="font-bold text-xl my-4">
                                {project?.title}
                            </h3>
                            <div className="flex justify-between items-center  flex-row my-2">
                                {activeCategory != "aiautomation" &&
                                    <a target="_blank" rel="noopener noreferrer"
                                        href={project?.link}
                                        className="text-sm text-blue-500 underline "
                                    >
                                        {project?.linkText}
                                    </a>}
                                {activeCategory == "aiautomation" &&
                                    <a target="_blank" rel="noopener noreferrer"
                                        href={project?.jsonFileLink}
                                        className="text-sm text-blue-500 underline "
                                        download
                                    >
                                        {project?.linkText}
                                    </a>
                                }


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
                            {((activeCategory == "appdevelopment") || activeCategory == "webdevelopment" || activeCategory == "aiautomation") &&
                                <button
                                    onClick={() => window.open(`${project?.link}`, "_blank")}
                                    className={` seeproject-button w-full border-2 border-yellow-300 mt-1 py-2.5 bg-[#FFE7B3]   text-black rounded-lg font-semibold transition ease-in duration-200 cursor-pointer`}
                                >
                                    {project?.visitText}
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
                <div className='md:block hidden'>
                    <div className="seeProjects-pagination flex justify-center items-center"></div>
                </div>

                <button className="seeProjects-next  bg-[#FDC274] h-11 w-11 text-2xl rounded-full cursor-pointer" aria-label="Next">
                    ➔
                </button>
            </div>
        </div>
    )
}

export default memo(SeeProjectsSlider)