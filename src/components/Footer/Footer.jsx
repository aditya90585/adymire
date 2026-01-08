import React from "react";
import "./Footer.css";
import {
  AppStore,
  GooglePlay,
  AdymireLogo2,
  Facebook3dLogo,
  Instagram3dLogo,
  Linkedin3dLogo,
  X3dLogo,
  Youtube3dLogo,
} from "@/assets";
import OurStartups from "./OurStartups";


const socialIcons = [
  { img: Youtube3dLogo, alt: "Youtube" },
  { img: Linkedin3dLogo, alt: "LinkedIn" },
  { img: X3dLogo, alt: "X" },
  { img: Instagram3dLogo, alt: "Instagram" },
  { img: Facebook3dLogo, alt: "Facebook" },
];

const followUsLinks = [
  "Instagram",
  "Facebook",
  "LinkedIN",
  "Twitter",
  "Youtube",
  "WhatsApp help",
  "WhatsApp Channel",
  "WhatsApp Group",
  "Telegram Group",
  "Telegram Channel",
];

const companyLinks = [
  "Our Team",
  "About US",
  "Contact US",
  "Privacy Policy",
  "Refund Policy",
  "Cancelation Policy",
  "Plans",
  "Carriers& Jobs",
  "Blogs",
  "FAQ's",
];

const serviceLinks = [
  "Digital Marketing",
  "App & Web Dev",
  "UI UX Design ( App & Web)",
  "AI Automation",
  "White Board Animation",
];


const Footer = () => {
  return (
    <footer className="ad-footer">
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

          <div className="ad-footer-social">
            {socialIcons.map((item, index) => (
              <img key={index} src={item.img} alt={item.alt} />
            ))}
          </div>

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
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="ad-footer-links">
          <h3>Company</h3>
          <ul>
            {companyLinks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="ad-footer-links">
          <h3>Services</h3>
          <ul>
            {serviceLinks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
      <OurStartups />
    </footer>
  );
};

export default Footer;
