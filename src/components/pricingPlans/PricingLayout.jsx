import { useEffect, useState } from 'react'
import { CategoryAiAutomation, CategoryWebDevelopment, CategoryAppDevelopment, CategoryDigitalMarketing, CategoryUIUX } from "@/assets";
import ServiceTypeSelector from './ServiceTypeSelector';
import PricingPlansSlide from './PricingPlansSlide';
import plansData from "./pricingPlansData.json"
import  "./PricingLayout.css"


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
  



  return (
    <div className='mt-20 relative'>
      <h2 className='font-bold text-xl text-center'>Choose a service - to work with US</h2>
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