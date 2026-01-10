import React from 'react'
import { ExpertTeam, Quality2, OnTime, Budget } from '@/assets';

const WhyChooseAdymire2 = () => {
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
        <section className="w-full bg-[#fffaf2] py-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 tracking-wider">
                    Why Choose Adymire
                </h2>
                <div className="w-38 h-0.75 bg-yellow-400 mx-auto mt-2 rounded" />
                <p className="mt-4 text-gray-500 font-semibold text-xl tracking-wider">
                    Because Your Home Deserves The Best
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {values.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center hover:shadow-xl py-10 px-20 text-center gap-y-10 flex-col bg-white rounded-2xl border border-gray-200 shadow-sm"
                    >

                        <div className="w-30 h-30 p-4 rounded-full bg-[#fff0c2] flex items-center justify-center">
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-full aspect-square object-contain"
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