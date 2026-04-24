import { useRef, useState } from "react";
import FourCustomers from '@/assets/icons/FourCustomers.svg'

const testimonials = [
    {
        name: "Amit Bharadwaj",
        role: "Architect",
        rating: 4,
        text: "Royaloak has a variety of recliner designs to fit any lifestyle and living room setup. Whether relaxing alone or on movie nights with the family, there is a recliner that will fit every requirement.",
        avatar: "",
    },
    {
        name: "Amit Bharadwaj",
        role: "Architect",
        rating: 4,
        text: "Royaloak has a variety of recliner designs to fit any lifestyle and living room setup. Whether relaxing alone or on movie nights with the family, there is a recliner that will fit every requirement.",
        avatar: "",
    },
    {
        name: "Amit Bharadwaj",
        role: "Architect",
        rating: 4,
        text: "Royaloak has a variety of recliner designs to fit any lifestyle and living room setup. Whether relaxing alone or on movie nights with the family, there is a recliner that will fit every requirement.",
        avatar: "",
    },
    {
        name: "Amit Bharadwaj",
        role: "Architect",
        rating: 4,
        text: "Royaloak has a variety of recliner designs to fit any lifestyle and living room setup. Whether relaxing alone or on movie nights with the family, there is a recliner that will fit every requirement.",
        avatar: "",
    },
];

export default function SocialProof() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (direction) => {
        if (!scrollRef.current) return;

        const cardWidth = 360;
        const newIndex =
            direction === "left"
                ? Math.max(activeIndex - 1, 0)
                : Math.min(activeIndex + 1, testimonials.length - 1);

        scrollRef.current.scrollTo({
            left: cardWidth * newIndex,
            behavior: "smooth",
        });

        setActiveIndex(newIndex);
    };

    return (
        <section className="w-full bg-[#FFF9EE] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
                        Social Proof
                        <span className="block h-0.5 w-40 bg-yellow-400 mt-2" />
                    </h2>
                    <p className="mt-1 text-gray-600 text-xl font-semibold">
                        Trusted by Thousands of Happy Customers
                    </p>
                </div>

                <div className="flex mr-4   relative items-center">
                    <div className=" w-[70%] pr-[8%] bg-white">
                        <div
                            ref={scrollRef}
                            className="flex w-full gap-6 bg-white overflow-x-auto scroll-smooth  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                        >
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="min-w-85 bg-[#FFF1C8] rounded-xl p-6 relative"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-14 h-14 rounded-full bg-gray-300"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-gray-600">{item.role}</p>
                                            <div className="flex text-yellow-500 text-sm">
                                                {"★".repeat(item.rating)}
                                                {"☆".repeat(5 - item.rating)}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {item.text}
                                    </p>

                                    <span className="absolute top-6 right-6 text-2xl text-gray-500">
                                        “
                                    </span>
                                </div>
                            ))}
                        </div>


                    </div>

                    <div className="w-[35%] flex justify-center  absolute right-0 ">
                        <div className="w-full aspect-square p-20 rounded-full bg-[#FFF1C8] flex flex-col items-center justify-center text-center">
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                                Trusted By Our Customer
                            </h3>

                            <div className="">
                                
                                    <img
                                      
                                        src={FourCustomers}
                                        alt="customer"
                                        className="w-full h-auto "
                                    />
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  items-center justify-center gap-6 mt-6 w-full bg-[#FFF9EE]">
                            <button
                                onClick={() => scroll("left")}
                                className="w-12 h-12 text-3xl rotate-180 rounded-full bg-[#fdc274] flex items-center justify-center"
                            >
                                ➔
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-2.5 h-2.5 rounded-full ${i === activeIndex
                                            ? "bg-[#fdc274]"
                                            : "bg-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => scroll("right")}
                                className="w-12 h-12 text-3xl rounded-full bg-[#fdc274] flex items-center justify-center"
                            >
                                ➔
                            </button>
                        </div>
            </div>
        </section>
    );
}
