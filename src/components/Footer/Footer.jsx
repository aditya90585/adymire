import React, { useState } from "react";
import "./Footer.css";
import {
  AppStore,
  GooglePlay,
  AdymireLogo2,
} from "@/assets";
import OurStartups from "./OurStartups";
import { BoyWithLaptop } from "@/assets";
import SocialIcons from "../Common/SocialIcons";
import { NavLink } from "react-router-dom";
import AlertBox from "../UI/AlertBox";
import { BiDownload } from "react-icons/bi";
import { MdDownload } from "react-icons/md";
import { useRef } from "react";
import { staggerFadeInOnScroll } from "../../animations/stagger";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const followUsLinks = [
  {
    name: "Instagram",
    redirectUrl: "https://www.instagram.com/adymire_",
  },
  {
    name: "Facebook",
    redirectUrl: "https://www.facebook.com/adymiredigital",
  },
  {
    name: "LinkedIn",
    redirectUrl: "https://www.linkedin.com/company/adymire/",
  },
  {
    name: "Twitter",
    redirectUrl: "https://x.com/Adymire_",
  },
  {
    name: "YouTube",
    redirectUrl: "https://youtube.com/@adymire",
  },
  {
    name: "Telegram",
    redirectUrl: "https://t.me/adymiredigital",
  },
  {
    name: "WhatsApp",
    redirectUrl: "https://whatsapp.com/channel/0029VbCCQg0HFxP7cByy1a0m",
  },
  {
    name: "Reddit Profile",
    redirectUrl: "https://www.reddit.com/user/adymire",
  },
  {
    name: "Pinterest",
    redirectUrl: "https://pin.it/5ZJVkLibz",
  },
  {
    name: "Quora Profile",
    redirectUrl: "https://www.quora.com/profile/Adymire-Digital",
  },
  {
    name: "Slack Community",
    redirectUrl: "https://adymiredigital.slack.com/archives/C0A6BU77EDQ",
  },
  {
    name: "Reddit Community",
    redirectUrl: "https://www.reddit.com/r/Adymire/",
  },
  {
    name: "Quora Community",
    redirectUrl: "https://adymiredigital.quora.com/",
  },
  {
    name: "Discord Community",
    redirectUrl: "https://discord.gg/QHQCDPYVK",
  },
];


const companyLinks = [
  {
    name: "Our Team",
    redirectUrl: "/about#my-team",
  },
  {
    name: "About Us",
    redirectUrl: "/about",
  },
  {
    name: "Contact Us",
    redirectUrl: "/contact",
  },
  {
    name: "Privacy Policy",
    redirectUrl: "/policy/privacy-policy",
  },
  {
    name: "Refund Policy",
    redirectUrl: "/policy/refund-policy",
  },
  {
    name: "Cancellation Policy",
    redirectUrl: "/policy/cancellation-policy",
  },
  {
    name: "Plans",
    redirectUrl: "/plans",
  },
  {
    name: "Careers & Jobs",
    redirectUrl: "/company/careers",
  },
  {
    name: "Blogs",
    redirectUrl: "/blogs",
  },
  {
    name: "FAQs",
    redirectUrl: "/#faqs",
  },
];

const serviceLinks = [
  {
    name: "Digital Marketing",
    redirectUrl: "/process/digitalmarketing",
  },
  {
    name: "App & Web Dev",
    redirectUrl: "/process/development",
  },
  {
    name: "UI UX Design (App & Web)",
    redirectUrl: "/process/uiux",
  },
  {
    name: "AI Automation",
    redirectUrl: "/process/aiautomation",
  },
];


const Footer = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const footercontref = useRef()
  useGSAP(() => {
    const elements = gsap.utils.toArray(".footer-trigger-ani");


    elements.forEach((element) => {
      staggerFadeInOnScroll(element, { trigger: element })
    });
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)

  }, { scope: footercontref })



  return (
    <footer ref={footercontref} className="ad-footer">
      <div className="bf-img footer-trigger-ani">
        <img src={BoyWithLaptop} alt="booking-form" />
      </div>
      <div className="ad-footer-container footer-trigger-ani">
        <div className="ad-footer-brand flex flex-col justify-between">
          <div className="ad-footer-logo">
            <img src={AdymireLogo2} alt="Logo" />
            <div className="ad-footer-logo-text">
              <span className="ad-footer-logo-text-1">Ady</span>
              <span className="ad-footer-logo-text-2">mire</span>
            </div>
          </div>

          <div onClick={() => setAlertOpen(true)} className="ad-footer-store cursor-pointer">
            <img src={GooglePlay} alt="Google Play" />
            <img src={AppStore} alt="App Store" />
          </div>
          <AlertBox
            message="We are working on it our Android & iOS App will release Soon , Thanks for your interest "
            isOpen={alertOpen}
            onClose={() => setAlertOpen(false)}
          />

          <p className="ad-footer-follow-text">Follow us</p>
          <SocialIcons className="grid grid-cols-5 gap-2 w-fit  rounded-xl py-0.5 px-1" imgClass="h-[40px] w-[40px] bg-gray-200" />

          <div className="ad-footer-block">
            <h4>Address</h4>
            <p>
              City Gajraula , District Amroha , uttarpradesh<br />
              244242 , India
            </p>
          </div>

          <div className="ad-footer-block">
            <h4>Contact</h4>
            <p>Compeny Helpline :  +91 7302356804</p>
            <p>Email: helloadymire.com@gmail.com</p>
          </div>
          <a
            href="/company-deck.pdf"
            download
            className="flex items-center gap-4 my-2 group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-black group-hover:scale-110 transition">
              <MdDownload size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-black text-lg font-medium">
                Company Deck
              </span>
              <span className="text-gray-400 text-sm">
                PDF, 3 MB
              </span>
            </div>
          </a>
        </div>

        <div className="ad-footer-links">
          <h3>Follow US</h3>
          <ul>
            {followUsLinks.map((item, index) => (
              <a target="_blank" rel="noopener noreferrer" key={index} href={item?.redirectUrl}><li >{item?.name}</li></a>
            ))}
          </ul>
        </div>

        <div className="ad-footer-links">
          <h3>Company</h3>
          <ul>
            {companyLinks.map((item, index) => (
              <li key={index}><NavLink to={item?.redirectUrl}>{item?.name}</NavLink></li>
            ))}
          </ul>
        </div>

        <div className="ad-footer-links">
          <h3>Services</h3>
          <ul>
            {serviceLinks.map((item, index) => (
              <li key={index}><NavLink to={item?.redirectUrl} >{item?.name}</NavLink></li>
            ))}
          </ul>
        </div>

      </div>
      <OurStartups />
    </footer>
  );
};

export default Footer;
