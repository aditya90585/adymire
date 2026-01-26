import React, { useState } from "react";
import { YashveerGiri, rohan, ashish, abhisekhgiri, abhisekhmannu, aditya, neeraj, rakesh, santosh, ritugupta, ravikumar } from "@/assets";


export const teamMembers = [
    { name: "Rohan", role: "Co-Founder & CTO", image: rohan },
    { name: "Yashveer Giri Goswami", role: "Founder & CEO", image: YashveerGiri },
    { name: "Abhisekh Giri", role: "COO", image: abhisekhgiri },
    { name: "Ashish Kumar", role: "Full Stack MERN Developer", image: ashish },
    { name: "Aditya Rajput", role: "Full Stack MERN Developer", image: aditya },
    { name: "Abhisekh P", role: "Full Stack Web Developer", image: abhisekhmannu },
    { name: "Rakesh Giri", role: "Flutter Developer", image: rakesh },
    { name: "Neeraj Dahit", role: "Flutter Developer", image: neeraj },
    { name: "Santosh Patel", role: "Flutter Developer", image: santosh },
    { name: "Ritu Gupta", role: "Android Developer", image: ritugupta },
    { name: "Ravi Kumar", role: "Backend Developer", image: ravikumar },
];

const MyTeam = () => {
    const [current, setCurrent] = useState(2);

    const prev = () => {
        if (current > 1) setCurrent(current - 1);
    };

    const next = () => {
        if (current < teamMembers.length - 2) setCurrent(current + 1);
    };

    const visibleMembers = teamMembers.slice(
        current - 1,
        current + 2
    );

    return (
        <section className="bg-[#fff8ec] py-16 px-6 relative">
            <div className="mx-auto max-w-7xl relative">
                <div className="mb-14 text-center">
                    <h2 className="text-3xl font-semibold text-black">My Team</h2>
                    <div className="mx-auto mt-3 h-1 w-36 rounded-full bg-yellow-400" />
                </div>
                <button
                    onClick={prev}
                    disabled={current === 1}
                    className=" absolute left-0 md:top-1/2 top-full md:mt-0 mt-10 w-12 h-12 disabled:opacity-40 cursor-pointer rotate-180 rounded-full bg-[#fdc274] flex items-center justify-center text-xl"
                >
                    ➔
                </button>
                <button
                    onClick={next}
                    disabled={current === teamMembers.length - 2}
                    className=" absolute right-0 md:top-1/2 top-full w-12 h-12 md:mt-0 mt-10 disabled:opacity-40 cursor-pointer rounded-full bg-[#fdc274] flex items-center justify-center text-xl"
                >
                    ➔
                </button>

                <div className="flex justify-center gap-10">
                    {visibleMembers.map((member, index) => (
                        <div
                            key={member.name}
                            className={`relative w-[320px] flex flex-col items-center transition-transform ease-in duration-300 ${index == 1 ? "scale-110" : "scale-90"}`}
                        >
                            <div className={`absolute bottom-20 w-full h-70 rounded-tl-4xl rounded-tr-[90%] transition-colors ease-out ${index == 1 ? "bg-[#fde8b5]" : "bg-[#F2F5F5]"} `}>
                            </div>
                            <div className={`relative z-10  h-full transition-all duration-200 delay-200 ease-in ${index == 1 ? "-translate-y-6 " : "-translate-y-1"}`}>

                                <img
                                    src={member?.image}
                                    alt={member.name}
                                    loading="lazy"
                                    className="h-full object-cover"
                                />
                            </div>

                            <div className="relative z-10 -mt-6 w-full rounded-b-3xl border border-gray-400 border-t-0 bg-white py-4 text-center shadow-md">
                                <h3 className="text-2xl font-bold text-black">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-lg font-medium text-gray-600">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MyTeam;
