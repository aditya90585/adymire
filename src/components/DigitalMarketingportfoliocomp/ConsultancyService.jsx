import React from "react";
import threepersons from "../../assets/icons/DigitalMarketingPortfolio/threepersons.webp"
import { DiVim } from "react-icons/di";
const tools = [
  "Google",
  "Slack",
  "ChatGPT",
  "WhatsApp",
  "Analytics",
  "Notion",
];

export default function ConsultancyService() {
  return (
    <section className="w-full px-2 md:px-2 lg:px-4 py-6">
      <div className="relative  rounded-[32px] bg-[#f5f0df] ">

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full  gap-14 items-center">
          <div className="max-w-2xl px-6 py-4 md:px-4 lg:px-10 lg:py-10">

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#efb400]">Consultancy</span> <span className="text-black font-semibold">Service</span>
            </h1>

            {/* Description */}
            <div className="mt-8 space-y-3 text-xl sm:text-2xl text-black leading-relaxed">
              <p>Best Consultancy Company In India, Fell Free To</p>
              <p>Talk Our Expert</p>
            </div>

            {/* Tools Icons */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="h-14 w-14 rounded-xl flex items-center justify-center bg-transparent"
                >
                  {/* ADD TOOL ICON IMAGE HERE */}
                  {/* <img src="" alt="" className="h-full w-full object-contain" /> */}

                  <span className="text-xs text-center text-[#efb400] font-semibold">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">


              <div className="flex -space-x-4">
                <div
                  className="h-auto w-25 "
                >
                  <img src={threepersons} alt="" className="h-full w-full object-contain" />
                </div>
              </div>

              <p className="text-xl md:text-xl font-semibold leading-relaxed">
                Trusted by{" "}
                <span className="text-[#efb400] font-bold">200+</span>{" "}
                businesses across{" "}
                <span className="text-[#efb400] font-bold">15</span>{" "}
                countries
              </p>
            </div>

            <div className="mt-12">
              <button onClick={() => {
                window.open("/contact", '_blank', 'noopener,noreferrer');
              }} className="relative p-[4px] overflow-hidden bg-gradient-to-r from-[#efb400] via-[#ff8c42] to-[#8b8b8b]   rounded-full  text-2xl md:text-3xl font-semibold bg-white shadow-lg transition-all duration-300 hover:scale-105">

                <div className="relative z-10 rounded-full bg-white px-10 py-5">
                  Get Free Consultation
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className=" flex items-center justify-center h-full w-full ">

            <img className="h-full w-full object-contain" src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1780225953/donotdo-img_g6daqo.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}