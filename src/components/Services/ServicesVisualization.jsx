import React from "react";
import { Trophy, Hand, Verified, Boost } from "@/assets";


import "./ServicesVisualization.css";

const ServicesVisualization = () => {
    const steps = [
        {
            title: "Design UI & UX",
            align: "right",
            icon: Trophy,
            description:
                "Founded with vison with interior design industry in our local industry",
        },
        {
            title: "Development",
            align: "left",
            icon: Hand,
            description:
                "Founded with vison with interior design industry in our local industry",
        },
        {
            title: "Boost Your Business",
            align: "right",
            icon: Boost,
            description:
                "Founded with vison with interior design industry in our local industry",
        },
        {
            title: "Enjoy Profits",
            align: "left",
            icon: Verified,
            description:
                "Founded with vison with interior design industry in our local industry",
        },
    ];

    return (
        <section className="svz-section">
            <div className="svz-container">

                <h2 className="svz-heading">
                    Visualization
                    <span className="svz-underline"></span>
                </h2>

                <div className="svz-timeline">
                    <span className="svz-line"></span>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`svz-item svz-${step.align}`}
                        >
                            {step.align === "left" && (
                                <div className="svz-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <button className="svz-btn">View More</button>
                                </div>
                            )}

                            {step.align == "left" && (
                                <div className=" py-[1.5px] w-[5%] bg-[#bdbdbd] sm:block hidden"></div>
                            )}

                            <div className="svz-icon">
                                <img src={step.icon} alt={step.title} />
                            </div>

                            {step.align == "right" && (
                                <div className="py-[1.5px] w-[5%] bg-[#bdbdbd] sm:block hidden"></div>
                            )}


                            {step.align === "right" && (
                                <div className="svz-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <button className="svz-btn">View More</button>
                                </div>
                            )}



                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesVisualization;
