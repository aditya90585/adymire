import React, { useRef } from "react";
import { Trophy, Hand, Verified, Boost } from "@/assets";


import "./ServicesVisualization.css";
import { useGSAP } from "@gsap/react";
import { staggerFadeInOnScroll } from "../../animations/stagger";

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

     const svcontref = useRef()
          useGSAP(() => {
            staggerFadeInOnScroll(".sv-trigger-ani",{trigger:svcontref.current,stagger:0.3,y:10,x:60})
              staggerFadeInOnScroll(".sv-circle-trigger-ani",{trigger:svcontref.current,stagger:0.3,y:40,delay:0.6})
          },{scope:svcontref})
      

    return (
        <section ref={svcontref} className="svz-section">
            <div className="svz-container">

                <h2 className="svz-heading sv-trigger-ani">
                    Visualization
                    <span className="svz-underline"></span>
                </h2>

                <div className="svz-timeline">
                    <span className="svz-line"></span>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`svz-item sv-trigger-ani svz-${step.align}`}
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

                            <div className="svz-icon sv-circle-trigger-ani">
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
