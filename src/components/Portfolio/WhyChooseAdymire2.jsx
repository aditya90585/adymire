import React, { useRef } from 'react'
import { ExpertTeam, Quality2, OnTime, Budget } from '@/assets';
import { useGSAP } from '@gsap/react';
import { staggerFadeInOnScroll } from '../../animations/stagger';

const WhyChooseAdymire2 = () => {
    const wca2contref = useRef()
        useGSAP(() => {
          staggerFadeInOnScroll(".wca2-trigger-ani",{trigger:wca2contref.current,y:70,stagger:0.3,delay:0.8})
        },{scope:wca2contref})
    const values = [
        {
            title: "Expert Team",
            icon: ExpertTeam,
        },
        {
            title: "Quality Assurance",
            icon: Quality2
        },
        {
            title: "On-Time Delivery",
            icon: OnTime
        },
        {
            title: "Budget Friendly",
            icon: Budget
        },
    ];

    return (
        <section ref={wca2contref} className="w-full bg-[#fffaf2] py-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 tracking-wider wca2-trigger-ani">
                    Why Choose Adymire
                </h2>
                <div className="w-38 h-0.75 bg-yellow-400 mx-auto mt-2 rounded" />
                <p className="mt-4 text-gray-500 font-semibold text-xl tracking-wider wca2-trigger-ani">
                    Because Your Home Deserves The Best
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {values.map((item, index) => (
                    <div
                        key={index}
                        className="flex wca2-trigger-ani justify-center items-center hover:shadow-xl py-10 px-20 text-center gap-y-10 flex-col bg-white rounded-2xl border border-gray-200 shadow-sm"
                    >

                        <div className="w-30 h-30 p-4 rounded-full bg-[#fff0c2] flex items-center justify-center">
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-full aspect-square object-contain animate-pulse"
                            />
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyChooseAdymire2