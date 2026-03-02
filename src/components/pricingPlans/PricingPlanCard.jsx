import React from 'react'
import {  BsStarFill } from 'react-icons/bs'
import { FaClockRotateLeft } from 'react-icons/fa6'
import { useHref } from 'react-router-dom';

const PricingPlanCard = ({ plan, setCurrentPlanId, setDetailBoxState }) => {
    const href = useHref("/contact");
      const navigateToBookingForm = () => {
        window.open(href, '_blank', 'noopener,noreferrer');
      }

    return (
        <div
            className={`rounded-2xl h-full flex flex-col justify-between items-stretch overflow-hidden transition-all duration-300 ease-in-out`}
            style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            <div className="bg-gray-200 max-h-50 h-50 min-h-50 flex items-center justify-center  rounded-b-xl border-b border-gray-100">
                <div className="text-center select-none">
                    <h2
                        className="text-4xl font-bold leading-tight"
                        style={{ color: "#F59E0B" }}
                    >
                        Custom
                    </h2>
                    <h2 className="text-4xl font-black text-gray-900 leading-tight">
                        Apps
                    </h2>
                </div>
            </div>

            <div className="p-5  h-100 justify-between flex flex-col gap-4">
                <div>
                    <h3 className="text-base font-bold text-gray-900 leading-6">
                        {plan?.title}
                    </h3>
                </div>

                <div>
                    <p className="text-sm font-semibold" style={{ color: "#F59E0B" }}>
                        Starts from
                    </p>
                    <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-black text-gray-900">
                            {plan?.pricing}
                        </span>
                    </div>
                </div>

                <p className="text-xs max-h-10 overflow-y-hidden font-semibold text-gray-800 leading-relaxed">
                    {plan?.description}
                    <span
                        className="font-semibold cursor-pointer"
                        style={{ color: "#F59E0B" }}
                    >
                        more
                    </span>
                </p>

                <p className="text-xs text-gray-900 font-semibold">
                    <span className="font-semibold">Best For : </span>
                    {plan?.bestFor}
                </p>

                <div className="flex flex-col gap-2 font-semibold">
                    <div className="flex items-center gap-2 text-xs text-gray-900">
                        <span className='bg-[#F8EFBB] rounded-full'>
                            <FaClockRotateLeft className='fill-[#fdb61c] size-6 p-1' />
                        </span>
                        <span>{plan?.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-900">
                        <span className='bg-[#F8EFBB] rounded-full'>
                            <BsStarFill className='fill-[#f5c526] size-6 p-1' />
                        </span>
                        <span>{plan?.revisions}</span>
                    </div>
                </div>

                <div className="flex gap-3 mt-1">
                    <button onClick={() => {
                        setCurrentPlanId(plan?.id)
                        setDetailBoxState(true)
                    }}
                        className="flex-1 cursor-pointer py-2.5 rounded-xl  text-sm font-semibold text-gray-800
                                      bg-[#f8efbb] hover:bg-[#fced99] transition-all duration-200"
                    >
                        About
                    </button>
                    <button
                    onClick={navigateToBookingForm}
                        className="flex-1 cursor-pointer py-2.5 rounded-xl text-sm font-bold text-gray-900
                                             hover:brightness-90 transition-all duration-200"
                        style={{ backgroundColor: "#F59E0B" }}
                    >
                        Contect us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PricingPlanCard