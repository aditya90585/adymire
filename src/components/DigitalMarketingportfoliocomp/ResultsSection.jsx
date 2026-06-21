

import { useState } from "react";
import adsresult from "../../assets/icons/DigitalMarketingPortfolio/adsresult.svg"

const tabs = [
  { id: "google", label: "Google", icon: "G" },
  { id: "meta", label: "Meta", icon: "∞" },
  { id: "twitter", label: "Twitter", icon: "X" },
  { id: "linkedin", label: "Linkedin", icon: "in" },
  { id: "tiktok", label: "TikTok", icon: "♪" },
  { id: "ecom", label: "Ecom", icon: "🛒" },
];

export default function ResultsSection() {
  const [activeTab, setActiveTab] = useState("google");
  return (
    <section className="bg-white py-4 sm:py-8 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-bold text-5xl sm:text-6xl lg:text-[72px] leading-tight text-[#070707]">
            Here is <span className="text-[#fcc719]">Results</span>
          </h2>
          <p className="text-[#3a3a3a] font-semibold text-base sm:text-[18px] max-w-2xl mx-auto mt-4">
            Connected digital marketing strategies work together to drive revenue while custom-built technology makes it all attributable.
          </p>
        </div>


        {/* <div className="flex flex-wrap border-0 lg:border-2 p-1 border-gray-300 rounded-full w-fit mx-auto items-center justify-center gap-2 mb-8 sm:mb-10">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 cursor-pointer px-4 sm:px-10 py-2.5 sm:py-4 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-200  ${activeTab === tab.id ? "bg-[#fff0c4] text-[#070707] border-[#fff0c4] shadow-sm" : "text-[#3a3a3a]  hover:bg-gray-200"}`}>
              <span className="font-bold">{tab.icon}</span>{tab.label}
            </button>
          ))}
        </div> */}

        <div className="rounded-3xl overflow-hidden border-2 border-[#fcc719]/40 shadow-xl bg-[#f8dca3] p-2 sm:p-3">
          <img src={adsresult} alt="Dashboard" className="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
