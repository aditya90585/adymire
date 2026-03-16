import { useEffect, useState } from 'react'
import { CategoryAiAutomation, CategoryWebDevelopment, CategoryAppDevelopment, CategoryDigitalMarketing, CategoryUIUX } from "@/assets";
import ServiceTypeSelector from './ServiceTypeSelector';
import PricingPlansSlide from './PricingPlansSlide';
import plansData from "./pricingPlansData.json"
import  "./PricingLayout.css"
import { useRef } from "react";
import { staggerFadeInOnScroll } from "../../animations/stagger";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);


const PricingLayout = () => {
  const categories = [
    { name: "App Dev", type: "appdevelopment", icon: CategoryAppDevelopment },
    { name: "Web Dev", type: "webdevelopment", icon: CategoryWebDevelopment },
    { name: "UI & UX", type: "uiux", icon: CategoryUIUX },
    { name: "Digital Marketing", type: "marketing", icon: CategoryDigitalMarketing },
    { name: "AI Automation", type: "aiautomation", icon: CategoryAiAutomation },
  ];
  const [activeCategory, setActiveCategory] = useState("appdevelopment");
  const [dropdownisOpen, setDropdownisOpen] = useState(false);
  const [plans, setPlans] = useState([])

  useEffect(() => {
    setPlans(plansData[activeCategory])
  }, [activeCategory])
  
    const pricingplanscontref = useRef()
    useGSAP(() => {
      const elements = gsap.utils.toArray(".pricing-trigger-ani");

      elements.forEach((element) => {
        staggerFadeInOnScroll(element, { trigger: element })
      });
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 200)
  
    }, { scope:pricingplanscontref })



  return (
    <div ref={pricingplanscontref} className='mt-20 relative'>
      <h2 className='font-bold text-xl text-center pricing-trigger-ani'>Choose a service - to work with US</h2>
      <ServiceTypeSelector
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        dropdownisOpen={dropdownisOpen}
        setDropdownisOpen={setDropdownisOpen}
      />
      <PricingPlansSlide plans={plans} activeCategory={activeCategory}/>
    </div>
  )
}

export default PricingLayout