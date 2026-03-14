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
import { BiChevronDown } from 'react-icons/bi'
import Magnet from '../UI/Magnet'


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
      routeLink: "/pricing-plans"
    },
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
             <Magnet key={link.text}  padding={15} disabled={false} magnetStrength={6}>
            <NavLink className={({ isActive }) => isActive ? `bg-[#ffe2bc] header-text-ani -translate-y-0.5 hover:font-semibold rounded py-1 px-3 text-sm` : "hover:text-gray-700 hover:text-shadow-lg text-base hover:text-shadow-gray-300  header-text-ani"} to={link.routeLink ? `${link.routeLink}` : "/"}>{link.text}</NavLink>
             </Magnet>
          ))}
        </nav>
        <div className="header-actions">
          <ChatOnWhatsappButton className="h-10" />
          <BookCallButton className='h-10' />
          {/* <NavLink to={"/client/login"} className="btn-login hover:bg-gray-800 text-white">Login</NavLink>
          <NavLink to={"/user/signup"} className="btn-signup">SignUP</NavLink> */}
          <div className="hidden xl:flex relative group/social">
            <button className="flex items-center gap-1.5 bg-white border-2 border-[#f8cd30] text-[#f8cd30] hover:bg-[#f8cd30] hover:text-white px-4 py-2 rounded-xl font-bold text-sm 2xl:text-base transition-all hover:scale-105 shadow-sm whitespace-nowrap">
              Follow US
              <BiChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/social:rotate-180" />
            </button>
            <div className="absolute top-full right-0 mt-3 invisible opacity-0 translate-y-2 group-hover/social:visible group-hover/social:opacity-100 group-hover/social:translate-y-0 transition-all duration-200 ease-out z-50 pt-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-1 min-w-70">
                <div className="flex items-center justify-center gap-3">
                  <SocialIcons className="grid grid-cols-5 gap-2 bg-white rounded-xl py-0.5 px-1" imgClass="h-[40px] w-[40px] animate-pulse " />

                </div>
              </div>
            </div>
          </div>


        </div>

        {sidebarState ? <CgClose onClick={toggleSidebar} className='slidebar-buttons hidden' /> :
          <MdMenu onClick={toggleSidebar} className='slidebar-buttons hidden' />}


      </div>
      <div ref={sidebarRef} className='slidebar-cont w-full h-screen  hidden absolute left-full '>
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
    </header >

  )

}

export default Header

