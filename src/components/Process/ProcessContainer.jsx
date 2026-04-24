import { useRef } from "react";
import UIUXSecond from '@/assets/illustrations/UIUXprocessImages/UIUXSecond.svg'
import "./ProcessContainer.css"
import UIUX from "@/assets/icons/UIUX.webp";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";


const ProcessContainer = ({ processStepsData }) => {
  return (
    <section className="bg-[#FFF9EE] pt-20 pb-2 overflow-hidden">
      <div className="w-full mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">
            {processStepsData?.heading}
          </h2>
          {processStepsData?.subHeading && (
            <p className="text-gray-500 font-bold text-xl mt-4">{processStepsData?.subHeading}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-y-10 items-center">
          <div className="flex col-start-1 col-span-2   justify-center">
            <img
              src={UIUXSecond}
              alt="Illustration"
              className="w-full "
            />
          </div>
          <div className="process-cont relative lg:col-start-3 lg:col-span-5">
            <Swiper
              effect={'coverflow'}
              slidesPerView={3}
              watchOverflow={true}
              centeredSlides={false}
              spaceBetween={30}
              slideToClickedSlide
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
              }}

              pagination={{
                el: ".process-pagination",
                clickable: true,
              }}
              navigation={{
                prevEl: ".process-prev",
                nextEl: ".process-next",
              }}
              modules={[Pagination, Navigation, EffectCoverflow]}
                 
              className=" mySwiper flex gap-6 pt-7 pl-7 overflow-y-visible overflow-x-auto "
            >
              {processStepsData?.steps.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="h-auto min-w-60 bg-[#edeef1] hover:bg-[#FFE7B3] rounded-xl shadow-md p-2 pb-4 relative"
                >
                  <span className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#FFE4A3] flex items-center justify-center font-semibold">
                    {item.step}
                  </span>
                  <div className="w-full h-30 bg-[white] rounded-xl flex items-center justify-center mb-4">
                    <img src={UIUX} alt="ui-ux" className="" />
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
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center gap-4 mt-6">
              <button
                className="process-prev w-10 h-10 cursor-pointer rounded-full rotate-180 bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
              >
                ➔
              </button>
              <div className="process-pagination"></div>
              <button
                className="process-next w-10 h-10 cursor-pointer rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
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
