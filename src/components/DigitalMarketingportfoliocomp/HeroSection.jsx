import { useHref } from "react-router-dom";
import threepersons from "../../assets/icons/DigitalMarketingPortfolio/threepersons.webp"

export default function HeroSection() {
  return (
    <section className="bg-white mt-4  flex items-center min-h-screen px-5 sm:px-8 lg:px-20 pt-12 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
        <div className="flex-1 z-10 w-full">
          <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-[#070707] mb-6">
            Better <span className="bg-linear-to-r from-[#fbc501] via-[#ff5700] to-[#070707] bg-clip-text text-transparent">ROAS</span>
            <br />
            At Less <span className="text-[#fcc719]">Ad Spend!</span>
          </h1>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 mb-8 max-w-xl">
            <p className="text-[#3a3a3a] text-base sm:text-[17px] leading-relaxed">
              Stop wasting money. Hire a certified Google Ads expert with{" "}
              <span className="text-[#ff8c00] font-semibold">$325K+ ad spend</span>{" "}
              managed in the last 5 years.{" "}
              <span className="text-[#ff8c00] font-semibold italic">Get 15 days moneyback guarantee.</span>{" "}
              No boring lectures. Just practical learning that helps you think, create, and execute like a pro.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                window.open("/contact", '_blank', 'noopener,noreferrer');
              }}
              className="bg-[#070707] cursor-pointer text-white font-bold text-[15px] sm:text-[16px] px-7 py-4 rounded-full hover:bg-[#333] transition-all duration-200">
              Book a Free Call →
            </button>
            <button
              onClick={() => {
                window.open("/portfolio", '_blank', 'noopener,noreferrer');
              }}
              className="p-[2px] bg-gradient-to-r hover:scale-105 cursor-pointer from-[#fbc501] via-[#ff5700] to-[#070707] text-[#070707] font-bold text-[15px] sm:text-[16px]  rounded-full transition-all duration-200">
              <div className="bg-white rounded-full px-7 py-4">
                See Our Portfolio →
              </div>
            </button>
          </div>
          <div className="flex items-center w-full gap-3 px-5 sm:px-8 lg:px-15 pt-8">
            <div className="w-auto h-10   flex items-center justify-center">
              <img className="h-full w-auto" src={threepersons} alt="trusted-persons" />
            </div>
            <span className="text-[#3a3a3a] font-semibold text-lg">
              Trusted by <span className="text-[#ff8c00] font-bold">20+</span> Brands
            </span>
          </div>
        </div>

        <div className="relative flex justify-center items-end h-[320px] sm:h-[380px] lg:h-[480px] md:pt-10 pt-0   w-auto">
          <div className="relative z-10 w-[260px] sm:w-[340px] lg:w-auto h-[280px] sm:h-[380px] lg:h-full flex items-end justify-center">
            <img loading="lazy" src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1779983859/Group_2681_oyschk.webp" alt="Adymire Expert" className="h-full object-contain w-auto" />
          </div>
        </div>
      </div>
    </section>

  );
}
