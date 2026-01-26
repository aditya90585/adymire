import React from 'react'
import ContactHeader from '../components/ContactUs/ContactHeader'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ApplyContactForm from '../components/ContactUs/ApplyContactForm'
import ContactEnquirySection from '../components/Footer/ContactEnquirySection'

const ContactUs = () => {
  return (
    <div>
        <Header/>
        <ApplyContactForm/>
        <ContactEnquirySection/>
        <Footer/>
    </div>
  )
}

export default ContactUs