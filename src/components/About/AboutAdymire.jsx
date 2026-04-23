import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { staggerFadeInOnScroll } from "../../animations/stagger";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutAdymire = () => {
  const aboutadycontref = useRef()
  useGSAP(() => {
  const elements = gsap.utils.toArray(".aboutady-trigger-ani");
      elements.forEach((element) => {
        staggerFadeInOnScroll(element, { trigger: element })
      });
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
  }, { scope: aboutadycontref })

  return (
    <section ref={aboutadycontref} className="bg-[#FFF4D9] py-12 px-2">
      <div className=" md:mx-10 mx-2">
        <h2 className="text-center text-3xl font-bold mb-16 relative w-fit mx-auto aboutady-trigger-ani">
          About Adymire
          <span className="absolute left-0 -bottom-2 h-1 w-full bg-[#F7C600] rounded"></span>
        </h2>

        <div className="flex justify-center md:gap-16 gap-0 items-center md:flex-row flex-col-reverse">

          <div className="bg-[#fffbf2] md:w-[60%] w-full rounded-3xl p-8  shadow-md border-2 border-[#a8a7a7] aboutady-trigger-ani">
            <p className="text-gray-900 font-semibold leading-relaxed md:text-lg text-base ">
              <span className="font-bold text-black">Adymire</span> is your complete digital growth partner focused on building, scaling, and optimizing modern businesses 🚀. We combine UI/UX design, web development, app development, digital marketing, and AI automation into one powerful ecosystem. Instead of working with multiple agencies, our clients get a structured, performance-driven system under one roof. From research and strategy to design, development, launch, and scaling — every step is data-backed and conversion-focused.

              We work with startups, SaaS platforms, e-commerce brands, real-estate businesses, B2B companies, healthcare, education, and AI-driven products. Our process is simple: understand your market, build the right product, drive targeted traffic, and continuously optimize performance. Every campaign is tracked. Every design has purpose. Every system is built for measurable growth. At Adymire, we don’t just create websites or run ads — we engineer digital growth that converts attention into revenue and long-term brand value.


            </p>

            <p className="mt-6 text-right text-2xl font-bold text-black">
              -- YashGoswami
            </p>
          </div>

          <div className="grid grid-cols-1 grid-rows-1  md:w-[40%] w-full justify-center items-center relative">
            <div className=" w-[70%]  mx-auto mb-10 aspect-square col-start-1 row-start-1 rounded-full bg-[#dfbd8c] flex items-center justify-center">

            </div>
            <div className="w-full h-full flex justify-center items-end col-start-1 row-start-1 pr-4 aboutady-trigger-ani">

              <img
                src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1776852694/Founder2_hufkwr.png"
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
