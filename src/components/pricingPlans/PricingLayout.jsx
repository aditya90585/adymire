import { useEffect, useState, useRef } from 'react'
import ServiceTypeSelector from './ServiceTypeSelector';
import PricingPlansSlide from './PricingPlansSlide';
import plansData from "./pricingPlansData.json"
import "./PricingLayout.css"
import { staggerFadeInOnScroll } from "../../animations/stagger";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const PricingLayout = () => {
  const [activeCategory, setActiveCategory] = useState("appdevelopment");
  const [dropdownisOpen, setDropdownisOpen] = useState(false);
  const [plans, setPlans] = useState([])
  const [categories, setCategories] = useState([])
  const pricingplanscontref = useRef()

  useEffect(() => {
    Promise.all([
      import('@/assets/icons/ProjectsCategory/CategoryAppDevelopment.json'),
      import('@/assets/icons/ProjectsCategory/CategoryWebDevelopment.json'),
      import('@/assets/icons/ProjectsCategory/CategoryUIUX.json'),
      import('@/assets/icons/ProjectsCategory/CategoryDigitalMarketing.json'),
      import('@/assets/icons/ProjectsCategory/CategoryAiAutomation.json'),
    ]).then(([app, web, uiux, dm, ai]) => {
      setCategories([
        { name: "App Dev",          type: "appdevelopment", icon: app.default  },
        { name: "Web Dev",          type: "webdevelopment", icon: web.default  },
        { name: "UI & UX",          type: "uiux",           icon: uiux.default },
        { name: "Digital Marketing",type: "marketing",      icon: dm.default   },
        { name: "AI Automation",    type: "aiautomation",   icon: ai.default   },
      ])
    })
  }, [])

  useEffect(() => {
    setPlans(plansData[activeCategory])
  }, [activeCategory])

  useGSAP(() => {
    if (!pricingplanscontref.current) return
    const elements = gsap.utils.toArray(".pricing-trigger-ani");
    elements.forEach((element) => {
      staggerFadeInOnScroll(element, { trigger: element })
    });
    setTimeout(() => ScrollTrigger.refresh(), 200)
  }, { scope: pricingplanscontref })

  return (
    <div ref={pricingplanscontref} className='mt-20 relative'>
      <h2 className='font-bold text-xl text-center pricing-trigger-ani'>
        Choose a service - to work with US
      </h2>
      {categories.length > 0 && (
        <ServiceTypeSelector
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          dropdownisOpen={dropdownisOpen}
          setDropdownisOpen={setDropdownisOpen}
        />
      )}
      <PricingPlansSlide plans={plans} activeCategory={activeCategory} />
    </div>
  )
}

export default PricingLayout