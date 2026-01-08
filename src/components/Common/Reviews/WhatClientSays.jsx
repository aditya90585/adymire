import React from "react";
import "./WhatClientSays.css";

const testimonials = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

const WhatClientSays = () => {
  return (
    <section className="ct-section">
      <div className="ct-container">

        <h2 className="ct-title">
          What clients say
          <span className="ct-title-underline"></span>
        </h2>

        <div className="ct-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="ct-star">★</span>
          ))}
        </div>

        <p className="ct-subtitle">
          Experience how fast We Delever projects
        </p>

        <div className="ct-scroll-wrapper">
          {testimonials.map((item) => (
            <div key={item.id} className="ct-card">
              <div className="ct-media">
                <img src="" alt="Client videos" />
                <div className="ct-play-btn">▶</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatClientSays;
