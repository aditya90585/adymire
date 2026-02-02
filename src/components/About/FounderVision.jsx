import "./FounderVision.css";
import { UIUX, Development, DigitalMarketing } from "@/assets";

const FounderVision = () => {
  return (
    <section className="fv-section">
      <div className="fv-container">

        <h2 className="fv-title">
          Founder & Vision
          <span className="fv-underline"></span>
        </h2>

        <p className="fv-subtitle">
          I’m Yash Goswami, founder of <span>Adymire</span>
        </p>

        <div className="fv-steps">

          <div className="fv-step-card">
            <div className="fv-icon">
              <img className="animate-pulse" src={UIUX} alt="Design" />
            </div>
            <p>Design</p>
          </div>

          <div className="fv-arrow">➶</div>

          <div className="fv-step-card">
            <div className="fv-icon">
              <img className="animate-pulse" src={Development} alt="Development" />
            </div>
            <p>Development</p>
          </div>

          <div className="fv-arrow">➶</div>

          <div className="fv-step-card">
            <div className="fv-icon">
              <img className="animate-pulse" src={DigitalMarketing} alt="Grow" />
            </div>
            <p>Grow</p>
          </div>

        </div>

        <div className="fv-description-box">
          <p>
            <strong>Adymire</strong> is a dynamic, all-in-one platform offering a
            wide range of services designed to empower digital entrepreneurs,
            creators, and businesses. Whether you're launching an online store,
            scaling your brand, or exploring new income streams, Adscy.io
            provides the tools, expertise, and community support to help you
            succeed.
          </p>

          <span className="fv-signature">-- YashGoswami</span>
        </div>

      </div>
    </section>
  );
};

export default FounderVision;
