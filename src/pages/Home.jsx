import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Welcome/Hero'
import VideoWalkthrough from '../components/VideoWalkthrough'
import AgencyHelps from '../components/Welcome/AgencyHelps'
import CallToAction from '../components/Common/CallToAction'
import SpecializedIndustries from '../components/Common/SpecializedIndustries'
import WhatWeDo from '../components/Common/WhatWeDo'
import SampleVideo from '../components/SampleVideo'
import HowWeWork from '../components/Welcome/HowWeWork'
import ClientReviews from '../components/Common/Reviews/ClientReviews'
import WhyChooseUs from '../components/Welcome/WhyChooseUs'
import PaymentSystem from '../components/Welcome/PaymentSystem'
import WorkingProcess from '../components/Common/WorkingProcess'
import WhyChooseAdymire from '../components/Footer/WhyChooseAdymire'
import Footer from '../components/Footer/Footer'
import SeeProjects from '../components/Common/SeeProjects'
import ContactEnquirySection from '../components/Footer/ContactEnquirySection'

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <VideoWalkthrough />
      <WhatWeDo contentState={true} />
      <SeeProjects/>
      <AgencyHelps />
      <CallToAction />
      <SpecializedIndustries />
      {/* <SampleVideo /> */}
      <HowWeWork />
      <WorkingProcess/>
      <WhyChooseUs />
      <ClientReviews/>
      <WhyChooseAdymire/>
      <CallToAction />
      <PaymentSystem />
      <ContactEnquirySection/>
    </div>
  )
}

export default Home


