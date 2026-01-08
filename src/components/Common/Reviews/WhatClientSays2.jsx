import { useState } from "react";

export default function WhatClientSays2() {

    const testimonials = [
        {
            name: "Amit Bharadwaj",
            role: "Architect",
            rating: 4,
            image: "", 
            text:
                "Royaloak Has A Variety Of Recliner Designs To Fit Anylifestyle And Living Room Setup. Whether Relaxing Alone Or On Movie Nights With The Entire Family, There Is A Recliner That Will Fit Every Requirement.",
        },
        {
            name: "Amit Bharadwaj",
            role: "Architect",
            rating: 4,
            image: "", 
            text:
                "Royaloak Has A Variety Of Recliner Designs To Fit Anylifestyle And Living Room Setup. Whether Relaxing Alone Or On Movie Nights With The Entire Family, There Is A Recliner That Will Fit Every Requirement.",
        },
        {
            name: "Amit Bharadwaj",
            role: "Architect",
            rating: 4,
            image: "", 
            text:
                "Royaloak Has A Variety Of Recliner Designs To Fit Anylifestyle And Living Room Setup. Whether Relaxing Alone Or On Movie Nights With The Entire Family, There Is A Recliner That Will Fit Every Requirement.Royaloak Has A Variety Of Recliner Designs To Fit Anylifestyle And Living Room Setup. Whether Relaxing Alone Or On Movie Nights With The Entire Family, There Is A Recliner That Will Fit Every Requirement.",
        },
        
    ];

    const [index, setIndex] = useState(0);

    const prev = () =>
        setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

    const next = () =>
        setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

    const t = testimonials[index];

    return (
        <section className="bg-[#FFF8ED] py-4">
            <div className="max-w-5xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold">What Clients Say's</h2>
                <div className="w-40 h-1 bg-yellow-400 mx-auto mt-2 mb-5 rounded" />

                <div className="flex justify-center mb-4">
                    <img
                        src={t.image}
                        alt={t.name}
                        className="w-28 h-28 rounded-md object-cover bg-gray-300"
                    />
                </div>

                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-base font-semibold text-gray-500 mb-2">{t.role}</p>


                <div className="flex justify-center gap-1 mb-2 text-2xl">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span
                            key={i}
                            className={i < t.rating ? "text-yellow-500" : "text-gray-300"}
                        >
                            ★
                        </span>
                    ))}
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm relative">
                    <span className="absolute font-extrabold left-6 top-6 text-yellow-400 text-5xl">
                        “
                    </span>

                    <p className="text-gray-700 text-start text-xl font-bold leading-relaxed px-6">
                        {t.text}
                    </p>

                    <span className="absolute right-6 bottom-6 text-yellow-400 font-extrabold text-5xl">
                        ”
                    </span>
                </div>

                <div className="flex justify-center items-center gap-6 mt-10">
                    <button
                        onClick={prev}
                        className="w-12 h-12 rotate-180 rounded-full bg-[#fdc274] flex items-center justify-center text-xl"
                    >
                        ➔
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <span
                                key={i}
                                className={`w-3 h-3 rounded-full ${i === index ? "bg-[#fdc274]" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-12 h-12 rounded-full bg-[#fdc274] flex items-center justify-center text-xl"
                    >
                        ➔
                    </button>
                </div>
            </div>
        </section>
    );
}
