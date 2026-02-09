import React from "react";
import {Founder2} from "@/assets"

const AboutAdymire = () => {
  return (
    <section className="bg-[#FFF4D9] py-12 px-2">
      <div className=" md:mx-10 mx-2">
        <h2 className="text-center text-3xl font-bold mb-16 relative w-fit mx-auto">
          About Adymire
          <span className="absolute left-0 -bottom-2 h-1 w-full bg-[#F7C600] rounded"></span>
        </h2>

        <div className="flex justify-center md:gap-16 gap-0 items-center md:flex-row flex-col-reverse">

          <div className="bg-[#fffbf2] md:w-[60%] w-full rounded-3xl p-8  shadow-md border-2 border-[#a8a7a7]">
            <p className="text-gray-900 font-semibold leading-relaxed md:text-2xl text-base">
              <span className="font-bold text-black">Adymire</span> is a dynamic, all-in-one platform offering a wide
              range of services designed to empower digital entrepreneurs,
              creators, and businesses. Whether you're launching an online
              store, scaling your brand, or exploring new income streams,
              Adscy.io provides the tools, expertise, and community support
              to help you succeed.
            </p>

            <p className="mt-6 text-right text-2xl font-bold text-black">
              -- YashGoswami
            </p>
          </div>

          <div className="grid grid-cols-1 grid-rows-1  md:w-[40%] w-full justify-center items-center relative">
            <div className="w-[70%] mx-auto mb-10 aspect-square col-start-1 row-start-1 rounded-full bg-[#dfbd8c] flex items-center justify-center">

            </div>
            <div className="w-full h-full flex justify-center items-end col-start-1 row-start-1 pr-4">

              <img
                src={Founder2}
                alt="Founder"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAdymire;
