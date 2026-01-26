import React from 'react'
import ServicesHero from '../components/Services/ServicesHero'
import WhatWeDo from '../components/Common/WhatWeDo'
import Header from '../components/Header/Header'
import CallToAction from '../components/Common/CallToAction'
import SpecializedIndustries from '../components/Common/SpecializedIndustries'
import WorkingProcess from '../components/Common/WorkingProcess'
import Footer from '../components/Footer/Footer'
import TrustedBy from '../components/Services/TrustedBy'
import ServicesVisulization from '../components/Services/ServicesVisualization'
import ContactEnquirySection from '../components/Footer/ContactEnquirySection'

const Services = () => {
  return (
    <div>
      <Header/>
      <ServicesHero/>
      <WhatWeDo/>
      <TrustedBy/>
      <CallToAction/>
      <SpecializedIndustries/>
      <ServicesVisulization/>
      <WorkingProcess/>
      <ContactEnquirySection/>
      <Footer/>
    </div>
  )
}

export default Services