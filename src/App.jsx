import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About/>}  />
          <Route path="/services" element={<Services/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/client/login" element={<ClientLogin />} />
          <Route path="/client/otp" element={<ClientOtpVerification/>}/>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/otp" element={<OTPVerification />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/payment/search" element={<PaymentSearch />} />
          <Route path="/payment/redirect" element={<PaymentRedirect />} />
          <Route path="/payment/process" element={<PaymentProcess />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

