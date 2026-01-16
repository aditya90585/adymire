import { useRef } from "react";
import { UIUXSecond } from "@/assets";

import { UIUXsvg } from "@/assets"

const ProcessContainer = ({ heading, subHeading, steps }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 320;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#FFF9EE] pt-20 pb-2 overflow-hidden">
      <div className="w-full mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">
            {heading}
          </h2>
          {subHeading && (
            <p className="text-gray-500 font-bold text-xl mt-4">{subHeading}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 items-center">
          <div className="flex col-start-1 col-span-2  justify-center">
            <img
              src={UIUXSecond}
              alt="Illustration"
              className="w-full "
            />
          </div>
          <div className="relative col-start-3 col-span-5">
            <div
              ref={sliderRef}
              className="flex gap-6 pt-7 pl-7 overflow-y-visible overflow-x-auto  scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="min-w-60 bg-[#edeef1] rounded-xl shadow-md p-2 relative"
                >
                  <span className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#FFE4A3] flex items-center justify-center font-semibold">
                    {item.step}
                  </span>
                  <div className="w-full h-30 bg-[white] rounded-xl flex items-center justify-center mb-4">
                    <img src={UIUXsvg} alt="ui-ux" className="" />
                  </div>

                  <h3 className="text-lg font-semibold mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-sm text-gray-600">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-1 font-medium  items-center">
                        <span className="bg-orange-400 rounded-full h-2 w-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full rotate-180 bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
              >
                ➔
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
              >
                ➔
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessContainer;
