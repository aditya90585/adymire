import React from "react";
import "./ClientReviews.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const ClientReviews = () => {
  const reviews = [
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
          {reviews.map((item, index) => (
            <SwiperSlide key={index} className="crv-card">
              <div
                className=" rounded-xl p-6 relative"
              >
                <div className="flex items-center gap-4 mb-4 ">
                  <div className="review-img-cont  absolute bg-amber-200  p-4 left-0 top-0 rounded-tl-2xl rounded-r-[90%]">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-16 w-16 rounded-full bg-gray-300"
                    />
                  </div>
                  <div className="pl-25" >
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
