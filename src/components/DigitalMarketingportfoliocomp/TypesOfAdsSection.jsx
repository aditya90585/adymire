// TypesOfAdsSection.jsx
// Google Ads images: adtype-display-B_twmt1K.svg, adtype-demandgen-DHiC.svg, adtype-app-DoFiwZ-C.svg
//                   adtype-pmax-IhZOAqlt.svg, adtype-search-C_dP-d7e.svg, adtype-youtube-6CNNay.svg
// Meta Ads images: 1690572158685.png, 1750208155802.png, 1772403854917.png, Awareness-Objectives_E.webp, etc.
import DigitalmarketingToolsIcons1 from '@/assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons1.svg'
import DigitalmarketingToolsIcons2 from '@/assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons2.svg'
import DigitalmarketingToolsIcons14 from '@/assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons14.svg'
import DigitalmarketingToolsIcons17 from '@/assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons17.svg'

import { useState } from "react";

const tabs = [
  { id: "google", label: "Google", icon: DigitalmarketingToolsIcons14 },
  { id: "meta", label: "Meta", icon: DigitalmarketingToolsIcons2 },
  { id: "twitter", label: "Twitter", icon: DigitalmarketingToolsIcons1 },
  { id: "linkedin", label: "Linkedin", icon: DigitalmarketingToolsIcons17 },
  { id: "tiktok", label: "TikTok", icon: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1782024933/vecteezy_tiktok-logo-png-tikok-icon-transparent-png-tikok-app-logo-png_18930701_tx3nmd.png" },
  { id: "ecom", label: "Ecom", icon: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1782024931/amazon_pm7mze.png" },
];

const adsByPlatform = {
  google: [
    { id: "display", title: "Display Ads", bg: "bg-[#e8f0e4]", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435468/adtype-display-B_twmt1K_lewdqp.svg" },
    { id: "demandgen", title: "Demand Gen", bg: "bg-[#f0ead8]", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435480/adtype-demandgen-DHiQ92sX_l1wcve.svg" },
    { id: "app", title: "App Promo", bg: "bg-[#ebe8e2]", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435410/adtype-app-DoFiwZ-C_c9tats.svg" },
    { id: "pmax", title: "Performance Max", bg: "bg-[#e8f0e4]", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435472/adtype-pmax-IhZOAqlt_hvrcgp.svg" },
    { id: "search", title: "Search Ads", bg: "bg-[#f0ead8]", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435408/adtype-search-C_dP-d7e_suh0oh.svg" },
    { id: "youtube", title: "YouTube Ads", bg: "bg-[#ebe8e2]", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435486/adtype-youtube-6CNNaySt_jkcfwz.svg" },
  ],

  meta: [
    { id: "awareness", title: "Awareness", bg: "bg-[#fcc719]/20", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435471/Awareness-Objectives_-Build-Your-Brands-Presence-1024x576_nf3eut.webp" },
    { id: "traffic", title: "Traffic", bg: "bg-blue-50", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435415/1690572158685_dhkouf.png" },
    { id: "engagement", title: "Engagement", bg: "bg-purple-50", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435429/1750208155802_duksi9.png" },
    { id: "leads", title: "Leads", bg: "bg-green-50", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435421/1737494457595_xcv5cd.jpg" },
    { id: "appmeta", title: "App Promotion", bg: "bg-orange-50", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435451/download_1_s7warr.webp" },
    { id: "sales", title: "Sales", bg: "bg-red-50", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781435464/Facebook-Ads_n8sxde.jpg" },
  ],
};

export default function TypesOfAdsSection() {
  const [activeTab, setActiveTab] = useState("google");
  const ads = adsByPlatform[activeTab] || adsByPlatform.google;

  return (
    <section className="bg-white py-14 sm:py-20 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl sm:text-5xl lg:text-[68px] leading-tight text-center text-[#070707] mb-10 sm:mb-12">
          Types of <span className="text-[#fcc719]">Ads</span> We Work On
        </h2>

        <div className="flex flex-wrap border-0 lg:border-2 p-1 border-gray-300 rounded-full w-fit mx-auto items-center justify-between gap-2 mb-8 sm:mb-10">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 h-15 cursor-pointer py-1 px-6  rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-200  ${activeTab === tab.id ? "bg-[#fff0c4] text-[#070707] border-[#fff0c4] shadow-sm" : "text-[#3a3a3a]  hover:bg-gray-200"}`}>
      
                <img className='h-[80%] w-full object-contain rounded-full' src={tab.icon} alt="icon" />
                {tab.label}
          
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ads.map(ad => (
            <div key={ad.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className={` w-full flex items-center justify-center`}>
                <img src={`${ad.placeholder}`} alt={ad.title} className="w-full h-full object-contain" />
              </div>
              <div className="px-4 sm:px-5 py-4">
                <h3 className="font-bold text-lg sm:text-[20px] text-[#070707]">{ad.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
