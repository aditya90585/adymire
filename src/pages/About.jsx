import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ClientReviews from '../components/Common/Reviews/ClientReviews'
import WhyChooseAdymire from '../components/Footer/WhyChooseAdymire'
import AboutHero from '../components/About/AboutHero'
import AboutAdymire from '../components/About/AboutAdymire'
import MyTeam from '../components/About/MyTeam'
import WhatMakesUsDifferent from '../components/About/WhatMakesUsDifferent'
import FounderVision from '../components/About/FounderVision'
import CallToAction from "../components/Common/CallToAction"

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutAdymire />
      <FounderVision />
      <CallToAction />
      <WhatMakesUsDifferent />
      <MyTeam />
      <ClientReviews />
      <WhyChooseAdymire />
    </div>
  )
}

export default About