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
import BookingForm from '../components/BookingForm'
import WorkingProcess from '../components/Common/WorkingProcess'
import WhyChooseAdymire from '../components/WhyChooseAdymire'
import Footer from '../components/Footer/Footer'
import WhatClientSays from '../components/Common/Reviews/WhatClientSays'
import SocialProof from '../components/Common/Reviews/SocialProof'
import WhatClientSays2 from '../components/Common/Reviews/WhatClientSays2'
import SeeProjects from '../components/Common/SeeProjects'

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <VideoWalkthrough />
      <WhatWeDo />
      <SeeProjects/>
      <AgencyHelps />
      <CallToAction />
      <SpecializedIndustries />
      {/* <SampleVideo /> */}
      <HowWeWork />
      <WorkingProcess/>
      <WhyChooseUs />
      <WhatClientSays/>
      <ClientReviews />
      <SocialProof/>
      <WhatClientSays2/>
      <WhyChooseAdymire/>
      <CallToAction />
      <PaymentSystem />
      <BookingForm />
      <Footer/>
    </div>
  )
}

export default Home


