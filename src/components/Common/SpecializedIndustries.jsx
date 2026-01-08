import {
  SpecializedIndustryIcon1,
  SpecializedIndustryIcon2,
  SpecializedIndustryIcon3,
  SpecializedIndustryIcon4,
  SpecializedIndustryIcon5,
  SpecializedIndustryIcon6,
  SpecializedIndustryIcon7,
  SpecializedIndustryIcon8,
} from "@/assets";


import AdymireLogo from "@/assets/logo/AdymireLogo.png"

import "./SpecializedIndustries.css";



const industries = [
  { title: "Real E-states", subtitle: "Sector", position: "top",icon:SpecializedIndustryIcon1 },
  { title: "Education", subtitle: "Sector", position: "top-left",icon:SpecializedIndustryIcon8  },
  { title: "Social Media", subtitle: "Growth", position: "top-right",icon:SpecializedIndustryIcon2  },
  { title: "Software", subtitle: "Products", position: "left",icon:SpecializedIndustryIcon7  },
  { title: "AI", subtitle: "Products", position: "right",icon:SpecializedIndustryIcon3  },
  { title: "Online", subtitle: "Selling", position: "bottom-left",icon:SpecializedIndustryIcon6  },
  { title: "E-commerce", subtitle: "Growth", position: "bottom",icon:SpecializedIndustryIcon5  },
  { title: "More", subtitle: "Industries", position: "bottom-right",icon:SpecializedIndustryIcon4  },
];

const SpecializedIndustries = () => {
  return (
    <section className="industries-section">
      <h2 className="industries-title">Our Specialized Industries</h2>
      <p className="industries-subtitle">
        We help only Our Specialized Industries
      </p>

      <div className="industries-wrapper">

        <div className="center-circle">
          <img className="center-inner" src={AdymireLogo} alt="adymire" />
        </div>

        {industries.map((item, index) => (
          <div key={index} className={`industry-card ${item.position}`}>
            <div className="card-inner">

              <img className="industry-icon-box" src={item.icon} alt={item.title} />

              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default SpecializedIndustries;

