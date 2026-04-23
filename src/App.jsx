import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// import AdminLogin from './pages/AdminLogin'
// import OTPVerification from './pages/OTPVerification'
// import AdminDashboard from './pages/AdminDashboard'
// import PaymentSearch from './pages/PaymentSearch'
// import PaymentRedirect from './pages/PaymentRedirect'
// import PaymentProcess from './pages/PaymentProcess'
import './App.css'
// import Signup from './components/ClientArea/SignUp'
// import ClientLogin from './components/ClientArea/ClientLogin'
// import ClientOtpVerification from './components/ClientArea/ClientOtpVerification'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ScrollToHash from './components/Common/ScrollToHash'
import ScrollToTop from './components/ScrollToTop'
import PageLoader from './components/PageLoader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const UIUXProcess = lazy(() => import('./pages/ProcessPages/ProcessPage'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const ProjectDetailsCard = lazy(() => import('./components/Common/Projects/ProjectDetailsCard'))
const PoliciesPage = lazy(() => import('./components/Policies/PoliciesPage'))
const PricingPlans = lazy(() => import('./pages/PricingPlans'))
const FloatingButtons = lazy(() => import('./components/FloatingButtons'))

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
        <ScrollToHash />
        <Header />
        <Suspense  fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/process/:service" element={<UIUXProcess />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path='/projectDetails/:projectname' element={<ProjectDetailsCard />} />

            <Route path="/policy/:policytype" element={<PoliciesPage />} />
            <Route path="/pricing-plans" element={<PricingPlans />} />
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
        </Suspense>
        <Footer />
        <Suspense fallback={null}>
          <FloatingButtons />
        </Suspense>
      </div>
    </Router>
  )
}

export default App

