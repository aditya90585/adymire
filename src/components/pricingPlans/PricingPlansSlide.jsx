import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { BiPlanet } from 'react-icons/bi';
import PricingPlanCard from './PricingPlanCard';
import CurrentPlanDetailsBox from './CurrentPlanDetailsBox';

const PricingPlansSlide = ({ plans }) => {
    const [currentPlanId, setCurrentPlanId] = useState("")
    const [detailBoxState, setDetailBoxState] = useState(false)
    const swiperRef = useRef(null)
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(0)
        }
    }, [plans])

    if (plans?.length == 0) return <div className='text-xl font-bold my-8 text-center'>no project in this category</div>
    return (
        <div>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                effect={'coverflow'}
                watchOverflow={true}
                centeredSlides={false}
                spaceBetween={50}
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
                    el: `.${plans[0]?.id}-pagination`,
                    clickable: true,
                }}
                navigation={{
                    prevEl: `.${plans[0]?.id}-prev`,
                    nextEl: `.${plans[0]?.id}-next`,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                style={{ '--swiper-wrapper-align-items': 'flex-start' }}
                className="mt-6 mySwiper pricingPlans-swiper">

                {plans?.map((plan) => (
                    <SwiperSlide
                        style={{ width: '340px' }}
                        key={plan?.title}
                        className={`rounded-2xl border-2 flex items-center justify-center overflow-hidden transition-all ease-out duration-200 border-gray-200   bg-white z-10`}
                    >
                        <PricingPlanCard plan={plan} setCurrentPlanId={setCurrentPlanId} setDetailBoxState={setDetailBoxState} />
                    </SwiperSlide>
                ))}

            </Swiper>
            <CurrentPlanDetailsBox setDetailBoxState={setDetailBoxState} allPlansData={plans} planId={currentPlanId} detailBoxState={detailBoxState} />
            <div className=" flex justify-center items-center gap-5 mt-10">
                <button className={`${plans[0]?.id}-prev rotate-180 bg-[#FDC274] h-11 w-11 text-2xl rounded-full cursor-pointer`} aria-label="Previous">
                    ➔
                </button>

                <div className={`${plans[0]?.id}-pagination all-pagination flex justify-center items-center`}></div>

                <button className={`${plans[0]?.id}-next  bg-[#FDC274] h-11 w-11 text-2xl rounded-full cursor-pointer`} aria-label="Next">
                    ➔
                </button>
            </div>
        </div>
    )
}

export default PricingPlansSlide