import React from 'react'

const WhyChooseAdymire2 = () => {
    const values = [
        {
            title: "Expert Team",
        },
        {
            title: "Quality Assurance",
        },
        {
            title: "On-Time Delivery",
        },
        {
            title: "Budget Friendly",
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

                        <div className="w-30 h-30 rounded-full bg-[#fff0c2] flex items-center justify-center">
                            <img
                                src=""
                                alt={item.title}
                                className="w-10 h-10 object-contain"
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