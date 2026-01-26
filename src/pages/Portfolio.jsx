import React from 'react'
import Header from '../components/Header/Header'
import WhatWeDo from '../components/Common/WhatWeDo'
import ClientReviews from '../components/Common/Reviews/ClientReviews'
import Footer from '../components/Footer/Footer'
import WhyChooseAdymire from '../components/Footer/WhyChooseAdymire'
import PortfolioHero from '../components/Portfolio/PortfolioHero'
import ToolsUsed from '../components/Portfolio/ToolsUsed'
import OurStory from '../components/Portfolio/OurStory'
import VisionValues from '../components/Portfolio/VisionValues'
import WhyChooseAdymire2 from '../components/Portfolio/WhyChooseAdymire2'
import ContactEnquirySection from '../components/Footer/ContactEnquirySection'
import SeeProjects from '../components/Common/SeeProjects'

const Portfolio = () => {
  return (
    <div>
      <Header />
      <PortfolioHero />
      <SeeProjects/>
      <WhatWeDo />
      <ToolsUsed />
      <ClientReviews />
      <OurStory />
      <VisionValues />
      <WhyChooseAdymire2 />
      <WhyChooseAdymire />
      <ContactEnquirySection />
      <Footer />
    </div>
  )
}

export default Portfolio