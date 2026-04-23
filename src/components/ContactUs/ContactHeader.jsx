import React from "react";
import ContactFormHeaderImage from "@/assets/largeicons/CantactEnquiryicons/ContactFormHeaderImage.webp"

import Logo from "../Logo";

const ContactHeader = () => {
  return (
    <section className="w-full bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center md:items-start flex-col md:flex-row justify-between">
          <div className="">
            <div className="h-50 w-50 rounded-2xl shadow-[1px_1px_8px_gray] bg-[#FFF1C1] flex items-center justify-center ">
              <img
                src={ContactFormHeaderImage}
                alt="Contact illustration"
                className="h-full w-full "
              />
            </div>
          </div>

          <div className="flex-1 px-10">
            <h1 className="text-5xl text-center md:text-start mt-4 md:mt-0 font-bold text-black">
              Contact US
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-gray-900">
              5+ years | 511+ Brands | 60+ Crore Ad spent
              <br />
              A dedicated team of specialists, delivering remarkable work
              <br />
              to our clients worldwide!
            </p>
          </div>
          <div className="relative ">
            <Logo textSize="4xl" imgClass="md:h-50 h-30" />
            <div className="absolute right-2 md:top-30 top-20 font-semibold text-2xl text-gray-500" >Digital</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
