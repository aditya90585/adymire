import React from 'react'
import Header from '../components/Header/Header'
import WhatWeDo from '../components/Common/WhatWeDo'
import WhatClientSays from '../components/Common/Reviews/WhatClientSays'
import ClientReviews from '../components/Common/Reviews/ClientReviews'
import Footer from '../components/Footer/Footer'
import BookingForm from '../components/BookingForm'
import WhyChooseAdymire from '../components/WhyChooseAdymire'
import PortfolioHero from '../components/Portfolio/PortfolioHero'
import ToolsUsed from '../components/Portfolio/ToolsUsed'
import OurStory from '../components/Portfolio/OurStory'
import VisionValues from '../components/Portfolio/VisionValues'
import WhyChooseAdymire2 from '../components/Portfolio/WhyChooseAdymire2'

const Portfolio = () => {
  return (
    <div>
        <Header/>
        <PortfolioHero/>
        <WhatWeDo/>
        <ToolsUsed/>
        <WhatClientSays/>
        <ClientReviews/>
        <OurStory/>
        <VisionValues/>
        <WhyChooseAdymire2/>
        <WhyChooseAdymire/>
        <BookingForm/>
        <Footer/>
    </div>
  )
}

export default Portfolio