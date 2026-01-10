import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './Header.css'
import { PhoneYellow, Whatsapp } from "@/assets";

import { NavLink } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Header = () => {

  const links = [
    {
      text: "Welcome",
      routeLink: "/"
    },
    { text: "About me",
      routeLink: "/about"
     },
    { text: "My services",
      routeLink: "/services"
     },
    { text: "Portfolio",
      routeLink: "/portfolio"
     },
    {
      text: "Pricing Plans",
      routeLink: "/payment/search"
    }
  ]

  useGSAP(() => {
          gsap.from(".header-text-ani", {
              opacity: 0,
              y: -20,
              duration: 0.4,
              stagger: 0.2,
              delay: 0.2,
              ease: "power1.out",
          })

          gsap.from(".logo-ani",{
            
            y:20,
            opacity:0,
            duration:0.6,
          })
      }, {})
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link logo-ani">
          <Logo />
        </Link>
        <nav className="nav">
          {links?.map((link) => (
            <NavLink key={link.text} className={({isActive})=> isActive?`bg-[#ffe2bc] header-text-ani -translate-y-0.5 hover:text-white rounded py-1 px-3 text-sm`:"bg-none hover:scale-105 header-text-ani"} to={link.routeLink ? `${link.routeLink}` : "/"}>{link.text}</NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button className="btn-icon-whatsapp"><img src={Whatsapp} alt="whatsapp" /> Chat on whatsapp</button>
          <button className="btn-icon-call"><img src={PhoneYellow} alt="call" /> Book Free Call</button>
          <NavLink to={"/client/login"} className="btn-login hover:bg-gray-800 text-white">Login</NavLink>
          <NavLink to={"/user/signup"} className="btn-signup">SignUP</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header

