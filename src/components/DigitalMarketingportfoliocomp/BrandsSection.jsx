import cashfree from "@/assets/icons/DigitalMarketingPortfolio/cashfree.svg"
import adobe from "@/assets/icons/DigitalMarketingPortfolio/adobe.svg"
import aisency from "@/assets/icons/DigitalMarketingPortfolio/aisency.svg"
import sortlist from "@/assets/icons/DigitalMarketingPortfolio/sortlist.svg"
import ey from "@/assets/icons/DigitalMarketingPortfolio/ey.svg"
import clutch from "@/assets/icons/DigitalMarketingPortfolio/clutch.svg"

const brandLogos = [cashfree, adobe, aisency, sortlist, ey, clutch];

export default function BrandsSection() {
  return (
    <section className="bg-white">
      <div className="relative overflow-hidden">
        <div className="flex w-[100%] md:w-[50%] mx-auto flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 pt-3 sm:pt-4 px-5 sm:px-8">
          <img loading="lazy" src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1782018219/partner-logos-strip-DNdatcnh_fsuwfd.svg" alt="partners" />
        </div>

        <div className="w-full h-full px-10 relative overflow-hidden bg-white flex items-end justify-center">
          <img loading="lazy" src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1779985445/V54wQ37npojgs1aAjKydM33KigM_1_rdk5wm.webp" alt="Marketian Team" className="w-full h-full object-cover object-top" />
          <div class="absolute inset-0 shadow-[inset_2px_-20px_10px_white] md:shadow-[inset_2px_-40px_30px_white] pointer-events-none"></div>
        </div>
      </div>

      <div className="bg-white pt-6 sm:pt-6 pb-6 sm:pb-8 px-5 sm:px-8 lg:px-20 text-center">
        <h2 className="font-bold text-4xl sm:text-5xl lg:text-[60px] leading-tight text-[#070707] mb-4">
          Worked with <span className="text-[#fcc719]">Amazing Brands</span>
        </h2>
        <p className="text-[#1d1c1c] text-base font-semibold sm:text-[18px] max-w-2xl mx-auto mb-10 sm:mb-12">
          Connected digital marketing strategies work together to drive revenue while custom-built technology makes it all attributable.
        </p>
        <div className="flex flex-wrap items-center h-10  justify-center gap-6 sm:gap-10 lg:gap-12">
          {brandLogos.map((b, i) => (
            <span key={i} className="text-[#3a3a3a] w-[10%] h-[100%]  font-bold text-lg sm:text-[22px] transition-opacity cursor-pointer">
              <img src={b} alt="tech" className="w-full h-full object-contain" loading="lazy" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
