import React from "react";
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
    redirectUrl: "/about",
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
    redirectUrl: "/company/privacy-policy",
  },
  {
    name: "Refund Policy",
    redirectUrl: "/company/refund-policy",
  },
  {
    name: "Cancellation Policy",
    redirectUrl: "/company/cancellation-policy",
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
    redirectUrl: "/faqs",
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
  return (
    <footer className="ad-footer">
      <div className="bf-img">
        <img src={BoyWithLaptop} alt="booking-form" />
      </div>
      <div className="ad-footer-container">


        <div className="ad-footer-brand">
          <div className="ad-footer-logo">
            <img src={AdymireLogo2} alt="Logo" />
            <div className="ad-footer-logo-text">
              <span className="ad-footer-logo-text-1">Ady</span>
              <span className="ad-footer-logo-text-2">mire</span>
            </div>
          </div>

          <div className="ad-footer-store">
            <img src={GooglePlay} alt="Google Play" />
            <img src={AppStore} alt="App Store" />
          </div>

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
            <p>Compeny Helpline : +91 7056847526</p>
            <p>Email: support@ycomskills.com</p>
          </div>
        </div>

        <div className="ad-footer-links">
          <h3>Follow US</h3>
          <ul>
            {followUsLinks.map((item, index) => (
              <a key={index} href={item?.redirectUrl}><li >{item?.name}</li></a>
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
