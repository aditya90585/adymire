import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Whatsapp} from "@/assets"
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import OTPVerification from './pages/OTPVerification'
import AdminDashboard from './pages/AdminDashboard'
import PaymentSearch from './pages/PaymentSearch'
import PaymentRedirect from './pages/PaymentRedirect'
import PaymentProcess from './pages/PaymentProcess'
import './App.css'
import Services from './pages/Services'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop'
import Portfolio from './pages/Portfolio'
import Signup from './components/ClientArea/SignUp'
import ClientLogin from './components/ClientArea/ClientLogin'
import ClientOtpVerification from './components/ClientArea/ClientOtpVerification'
import UIUXProcess from './pages/ProcessPages/ProcessPage'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProjectDetailsCard from './components/Common/Projects/ProjectDetailsCard'
import PoliciesPage from './components/Policies/PoliciesPage'
import { BiBot } from 'react-icons/bi'

function App() {
 const navigateToWhatsapp = () => {
    const phoneNumber = "917302356804";
    const message = "Hello, I want to know more about your services";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/process/:service" element={<UIUXProcess />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/projectDetails/:projectname' element={<ProjectDetailsCard/>}/>

            <Route path="/policy/:policytype" element={<PoliciesPage />} />
          {/* <Route path="/user/signup" element={<Signup />} />
          <Route path="/client/login" element={<ClientLogin />} />
          <Route path="/client/otp" element={<ClientOtpVerification />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/otp" element={<OTPVerification />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/payment/search" element={<PaymentSearch />} />
          <Route path="/payment/redirect" element={<PaymentRedirect />} />
          <Route path="/payment/process" element={<PaymentProcess />} /> */}
        </Routes>
        <Footer />
        <div className="fixed max-w-10 right-8 bottom-10 z-100 flex flex-col items-center justify-center gap-y-2">
        <div onClick={navigateToWhatsapp} className="bg-white p-2 rounded-full hover:shadow-md cursor-pointer">
          <img src={Whatsapp} alt="whatsapp" />
        </div>
        <div className="w-full p-1 rounded-full hover:shadow-md cursor-pointer bg-white flex items-center justify-center aspect-square"><BiBot className="aspect-square w-full" /></div>
      </div>
      </div>
    </Router>
  )
}

export default App

