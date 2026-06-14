// InterestedSection.jsx
// IMAGE: Adobe Express - file.svg (yellow thumbs up icon)
import thubmsup from "../../assets/icons/DigitalMarketingPortfolio/thubmsup.webp"
export default function InterestedSection() {
  return (
    <section className="bg-[#FFFBF3] py-6 sm:py-10 px-5 sm:px-8 lg:px-20 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
        <img src={thubmsup} className="w-24 h-24 sm:w-28 sm:h-28 object-contain" />

        </div>
        <h2 className="font-black text-6xl sm:text-7xl lg:text-[70px] leading-tight text-[#070707] mb-4">Interested?</h2>
        <p className="text-[#6f7071] font-semibold text-lg sm:text-[26px] mb-8 sm:mb-10">Sound familiar? Let's fix this together.</p>
        <button  onClick={() => {
                window.open("/contact", '_blank', 'noopener,noreferrer');
              }} className="bg-[#fcc719] text-[#070707] font-black text-base sm:text-[20px] px-10 sm:px-16 py-4 sm:py-5 rounded-full hover:bg-[#e6b300] hover:scale-105 transition-all duration-200 shadow-lg tracking-wide">BOOK A CALL <span className="-rotate-30 inline-block">→</span></button>
      </div>
    </section>
  );
}
