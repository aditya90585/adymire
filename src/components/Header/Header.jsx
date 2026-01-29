import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { staggerFadeIn } from '../../animations/stagger';
import ChatOnWhatsappButton from '../UI/NavButtons/ChatOnWhatsappButton';
import BookCallButton from '../UI/NavButtons/BookCallButton';
import { MdMenu } from "react-icons/md";
import Sidebar from './Sidebar'
import gsap from 'gsap'
import { CgClose } from 'react-icons/cg'
import SocialIcons from '../Common/SocialIcons'


const Header = () => {

  const links = [
    {
      text: "Welcome",
      routeLink: "/"
    },
    {
      text: "About me",
      routeLink: "/about"
    },
    {
      text: "My services",
      routeLink: "/services"
    },
    {
      text: "Portfolio",
      routeLink: "/portfolio"
    },
    {
      text: "Pricing Plans",
      routeLink: "/pricingplans"
    }
  ]

  const headerRef = useRef()
  const sidebarRef = useRef()
  const [sidebarState, setSidebarState] = useState(false)
  const tlRef = useRef()


  const { contextSafe } = useGSAP(() => {
    staggerFadeIn(".header-text-ani", {
      opacity: 0,
      y: -20,
      duration: 0.4,
      stagger: 0.2,
      delay: 0.2,
      ease: "power1.out",
    })
    staggerFadeIn(".logo-ani", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0,
      ease: "slow(0.7,0.7,false)",

    })

    tlRef.current = gsap.timeline({ paused: true })
    tlRef.current.to(sidebarRef.current, {
      left: 0,
      duration: 0.5,
    })


  }, { scope: headerRef })


  const toggleSidebar = contextSafe(() => {
    if (sidebarState == false) {
      tlRef.current.play()
      setSidebarState(true)
    }
    else {
      tlRef.current.reverse()
      setSidebarState(false)
    }
  })


  return (
    <header ref={headerRef} className="header">
      <div className="header-container">
        <Link to="/" className="logo-link logo-ani" >
          <Logo className="h-10 md:h-18" imgClass="h-full " />
        </Link>
        <nav className="nav">
          {links?.map((link) => (
            <NavLink key={link.text} className={({ isActive }) => isActive ? `bg-[#ffe2bc] header-text-ani -translate-y-0.5 hover:text-white rounded py-1 px-3 text-sm` : "bg-none hover:scale-105 header-text-ani"} to={link.routeLink ? `${link.routeLink}` : "/"}>{link.text}</NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <ChatOnWhatsappButton className="h-10" />
          <BookCallButton className='h-10' />
          {/* <NavLink to={"/client/login"} className="btn-login hover:bg-gray-800 text-white">Login</NavLink>
          <NavLink to={"/user/signup"} className="btn-signup">SignUP</NavLink> */}
          <SocialIcons className="grid grid-cols-5 gap-2 bg-gray-100 rounded-xl py-0.5 px-1" imgClass="h-[40px] w-[40px]"/>
        </div>

        {sidebarState ? <CgClose onClick={toggleSidebar} className='slidebar-buttons hidden' /> :
          <MdMenu onClick={toggleSidebar} className='slidebar-buttons hidden'  />}


      </div>
      <div ref={sidebarRef}  className='slidebar-cont w-full h-screen  hidden absolute left-full '>
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
    </header >

  )

}

export default Header

