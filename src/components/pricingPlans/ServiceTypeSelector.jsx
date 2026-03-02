import React from 'react'
import Lottie from "lottie-react";

const ServiceTypeSelector = ({ dropdownisOpen, setDropdownisOpen, activeCategory, setActiveCategory, categories }) => {
    return (
        <div>
            <div className="md:hidden max-w-sm mx-auto my-4 relative">
                <button
                    onClick={() => setDropdownisOpen(!dropdownisOpen)}
                    className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-3 shadow-sm"
                >
                    <div className="flex items-center gap-2">
                        <Lottie
                            className="h-8"
                            animationData={
                                categories.find(c => c.type === activeCategory)?.icon
                            }
                        />
                        <span className="font-medium">{categories.find(c => c.type === activeCategory)?.name}</span>
                    </div>
                    <span className="text-gray-600">▼</span>
                </button>

                {dropdownisOpen && (
                    <div className="absolute z-20 mt-2 w-full bg-white border rounded-lg shadow-lg">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => {
                                    setActiveCategory(category.type);
                                    setDropdownisOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3  text-left
                              ${activeCategory === category.type
                                        ? "bg-[#FFE7B3] text-black"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }
                            `}
                            >
                                <Lottie className="h-8" animationData={category.icon} />
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="hidden md:flex justify-between my-6  gap-1 max-w-fit mx-auto bg-white rounded-xl p-2 shadow-sm border border-[#999797]">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        onClick={() => setActiveCategory(category.type)}
                        className={`flex items-center justify-center px-4 py-1 cursor-pointer rounded-lg text-sm font-medium transition
                        ${activeCategory === category.type
                                ? "bg-[#FFE7B3] text-black"
                                : "text-gray-600 hover:bg-gray-100"
                            }
                      `}
                    >
                        <span> <Lottie className="h-8" animationData={category.icon} /> </span>
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ServiceTypeSelector