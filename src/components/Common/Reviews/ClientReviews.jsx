import React from "react";
import "./ClientReviews.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import clientReviewData from "./clientReviewData.json"
import { MdStar, MdStarHalf } from "react-icons/md";

const ClientReviews = () => {
  return (
    <section className="crv-section">
      <div className="crv-container">

        <h2 className="crv-title">
          Client Review
          <span className="crv-underline"></span>
        </h2>

        <div className="crv-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="crv-star">★</span>
          ))}
        </div>

        <p className="crv-subtitle">
          See why thousands of business owners can’t stop talking about US
        </p>

        <Swiper
          effect={'coverflow'}
          watchOverflow={true}
          centeredSlides={false}
          slidesPerView={3}
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
            el: ".clientReview-pagination",
            clickable: true,
          }}
          navigation={{
            prevEl: ".clientReview-prev",
            nextEl: ".clientReview-next",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="crv-grid MySwiper">
          {clientReviewData?.map((item, index) => (
            <SwiperSlide key={index} className="crv-card">
              <div
                className=" rounded-xl p-6 relative"
              >
                <div className="flex items-center gap-4 mb-4 ">
                  <div className="review-img-cont  absolute bg-amber-200  p-4 left-0 top-0 rounded-tl-2xl rounded-r-[90%]">
                    <img
                      src={item?.imageUrl}
                      alt={item?.clientName}
                      className="h-16 w-16 rounded-full object-cover bg-gray-300"
                    />
                  </div>
                  <div className="pl-25" >
                    <h4 className="font-semibold text-gray-900">
                      {item.clientName}
                    </h4>
                    <p className="text-sm text-gray-600">{item?.country} <span className="text-xs">{item?.countryFlag}</span></p>
                    {/* <div className="flex text-gray-900 text-xl">
                      {"★".repeat(item?.rating)}
                      {"☆".repeat(5 - item?.rating)}
                    </div> */}
                    {/* <div className="flex text-yellow-400 text-xl">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={star <= item?.rating ? "text-yellow-400" : "text-gray-300"}>
                          {star <= item?.rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div> */}
                    <div className="flex text-base my-1">

                      {[1, 2, 3, 4, 5].map((star) => (
                        star <= item?.rating
                          ? <MdStar key={star} className="text-gray-900" />
                          : star - 0.5 <= item?.rating
                            ? <MdStarHalf key={star} className="text-gray-900" />
                            : <MdStar key={star} className="text-gray-300" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.review}
                </p>

                <span className="absolute top-6 right-6 text-4xl text-gray-800">
                  “
                </span>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
        <div className="clientReview-controls flex justify-center items-center gap-5 mt-10">
          <button className="clientReview-prev rotate-180 bg-[#FDC274] h-11 w-11 text-2xl rounded-full cursor-pointer" aria-label="Previous">
            ➔
          </button>

          <div className="clientReview-pagination flex justify-center items-center"></div>

          <button className="clientReview-next  bg-[#FDC274] h-11 w-11 text-2xl rounded-full cursor-pointer" aria-label="Next">
            ➔
          </button>
        </div>

      </div>
    </section>
  );
};

export default ClientReviews;
