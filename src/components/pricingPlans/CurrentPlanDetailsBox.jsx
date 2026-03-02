
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";
import { NavLink, useHref } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { BsStarFill } from 'react-icons/bs';



const CurrentPlanDetailsBox = ({ planId, allPlansData, detailBoxState, setDetailBoxState }) => {
    const href = useHref("/contact");
      const navigateToBookingForm = () => {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    const [currentPlanData, setcurrentPlanData] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        function loadCurrentPlan() {
            setLoading(true)
            const filterProject = allPlansData.filter((plan) => plan?.id == planId)
            setcurrentPlanData(filterProject[0])
        }
        loadCurrentPlan()
    }, [planId])
    useEffect(() => {
        setLoading(true)
    }, [currentPlanData])
    if (!detailBoxState) return null
    if (!loading) return <div className=' text-center text-xl font-semibold my-4 mt-20'>loading project...</div>

    if (!currentPlanData) return <div className=' text-center text-xl font-semibold my-4 mt-20'>unable to find project</div>
    return (
        <div
            className="bg-[#d3d3d3] mt-10  lg:mt-18 lg:p-10 p-0 lg:pt-6 pt-0 overflow-y-scroll [&::-webkit-scrollbar]:hidden fixed inset-0 z-40 top-0"
        >
            <div className='p-4 bg-white rounded-lg relative'>

                <div onClick={() => setDetailBoxState(false)} className='absolute cursor-pointer top-2 right-2 rounded-full p-1 bg-[#fcda92]'>
                    <RxCross1 />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 pt-6 lg:pt-0'>
                    <div className="flex flex-col items-center lg:col-start-1 lg:col-span-2">

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

                            className="mySwiper relative w-full md:h-70 h-60  rounded-xl border-2 bg-gray-800 border-gray-400 overflow-hidden mb-6">
                            {currentPlanData?.images?.map((image, i) => {
                                return <SwiperSlide key={i} >
                                    <img
                                        src={image}
                                        loading='lazy'
                                        alt=""
                                        className="w-full  h-full object-contain"
                                    />
                                </SwiperSlide>
                            })}
                        </Swiper>

                        <div className="flex items-center gap-4 mb-8">
                            {/* <button
                            className="project-details-prev w-12 h-12 rotate-180 rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
                        >
                            ➔
                        </button> */}

                            <div className='project-details-pagination'></div>

                            {/* <button
                            className="project-details-next w-12 h-12 rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
                        >
                            ➔
                        </button> */}
                        </div>

                    </div>
                    <div className=' p-4 pb-10 rounded-xl flex flex-col lg:gap-y-0 gap-y-4 justify-around max-h-[95%] lg:col-span-3 lg:col-start-3'>
                        <h2 className="text-2xl font-bold ">
                            {currentPlanData?.title}
                        </h2>
                        <h2 className="text-2xl font-bold ">
                            Complete work done
                        </h2>
                        <div className="flex  gap-4 font-semibold text-base text-gray-800">
                            <div className="flex items-center gap-2 ">
                                <span className='bg-[#F8EFBB] rounded-full'>
                                    <FaClockRotateLeft className='fill-[#fdb61c] size-8 p-2' />
                                </span>
                                <span>{currentPlanData?.timeline}</span>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <span className='bg-[#F8EFBB] rounded-full'>
                                    <BsStarFill className='fill-[#f5c526] size-8 p-2' />
                                </span>
                                <span>{currentPlanData?.revisions}</span>
                            </div>
                        </div>
                        <div className='flex  items-baseline-last justify-between'>

                            <div>
                                <p className="text-sm font-semibold" style={{ color: "#F59E0B" }}>
                                    Starts from
                                </p>
                                <div className="flex items-baseline gap-1 mt-0.5">
                                    <span className="text-2xl font-black text-gray-900">
                                        {currentPlanData?.pricing}
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <div  onClick={navigateToBookingForm} className="px-8 cursor-pointer py-2 w-fit block bg-[#FCD444] mx-auto  rounded-lg text-base font-semibold hover:bg-[#FFD36A]">
                                    Contact us
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' p-8 rounded-xl bg-[white] w-full h-fit'>
                    <div>
                        <h2 className='font-bold text-xl'>Details of this service</h2>
                        <div className="border-dashed border-2 inline-block border-x-0 my-6">
                            <div className="border-dashed border-2 inline-block border-x-0 my-0.5 py-2 font-semibold text-gray-800">
                                <div>
                                    SERVICE : {currentPlanData?.title}
                                </div>
                                <div>
                                    Category : {currentPlanData?.category}
                                </div>
                            </div>
                        </div>
                        <div className='my-6 font-semibold text-gray-800'>
                            <div>
                                STARTS FROM : {currentPlanData?.pricing}
                            </div>
                            <div>
                                TIMELINE : {currentPlanData?.timeline}
                            </div>
                            <div>
                                REVISIONS : {currentPlanData?.revisions}
                            </div>
                        </div>
                        <div className='my-6  text-gray-800'>
                            {currentPlanData?.description}
                        </div>

                    </div>

                    <div>
                        {currentPlanData?.sections?.map((section, i) => {
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
        </div >
    )
}

export default CurrentPlanDetailsBox