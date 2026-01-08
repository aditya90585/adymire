import "./WhatMakesUsDifferent.css";
import { 
  WhatMakesUsDifferentImages1, 
  WhatMakesUsDifferentImages2, 
  WhatMakesUsDifferentImages3,
  WhatMakesUsDifferentImages4, 
  Whatsapp 
} from "@/assets";

const WhatMakesUsDifferent = () => {
    return (
        <section className="wmd-section">
            <div className="wmd-container">

                <h2 className="wmd-title">What makes us different</h2>
                <div className="wmd-card wmd-design">
                    <div className="wmd-content">
                        <h3>End-to-end Design</h3>

                        <div className="wmd-tags">
                            <span className="wmd-tag">Dev</span>
                            <span className="wmd-tag">Design</span>
                            <span className="wmd-tag">Ads</span>
                        </div>
                    </div>

                    <div className="wmd-image">
                        <img src={WhatMakesUsDifferentImages1} alt="End to End Design" />
                    </div>
                </div>

                <div className="wmd-card wmd-promise">
                    <div className="wmd-content">
                        <h3>Our promise</h3>
                        <p>
                            Clear scopes, regular demos, and a one-page SLA in every proposal.<br/>
                            We aim for fast response and predictable delivery.
                        </p>
                    </div>

                    <div className="wmd-image">
                        <img src={WhatMakesUsDifferentImages2} alt="Our Promise" />
                    </div>
                </div>

                <div className="wmd-card wmd-premium">
                    <div className="wmd-content">
                        <h3>Premium focus</h3>
                        <p>
                            We accept limited clients monthly to ensure executive attention.<br/>
                            Only 10–20 clients are onboarded globally per month.
                        </p>
                    </div>

                    <div className="wmd-image">
                        <img src={WhatMakesUsDifferentImages3} alt="Premium Focus" />
                    </div>
                </div>

                <div className="wmd-card wmd-support">
                    <div className="wmd-content">
                        <h3>Team Support</h3>
                    

                        <div className="wmd-support-btn">
                            Message Us On 
                            <img src={Whatsapp} alt="whatsapp" />
                        </div>
                        <span >24×7</span>
                    </div>

                    <div className="wmd-image">
                        <img src={WhatMakesUsDifferentImages4} alt="Team Support" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhatMakesUsDifferent;
