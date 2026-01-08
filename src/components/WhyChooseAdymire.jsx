import { useState } from "react";
import "./WhyChooseAdymire.css";
import {BusinessManGroup} from "@/assets"

const faqData = [
  {
    question: "Why Choose Adymire Agency?",
    answer:
      "We deliver high-quality digital solutions with a strong focus on design, performance, and long-term growth.",
  },
  {
    question: "Our Uniqueness",
    answer:
      "We combine strategy, creativity, and technology to build scalable and user-friendly products.",
  },
  {
    question: "Why we are best?",
    answer:
      "Our process-driven approach ensures timely delivery and consistent quality.",
  },
  {
    question: "Does we have EMI Option?",
    answer:
      "Yes, we offer flexible payment options to make our services accessible.",
  },
  {
    question: "What we do?",
    answer:
      "We provide web development, UI/UX design, branding, and digital marketing services.",
  },
];

export default function WhyChooseAdymire() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="adymire-why-section">
      <h2 className="adymire-why-title">
        Why Choose Adymire
        <span className="adymire-why-underline"></span>
      </h2>

      <div className="adymire-why-content">
        <div className="adymire-why-image">
          <img src={BusinessManGroup} alt="Why Choose Us" />
        </div>

        <div className="adymire-why-faq">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`adymire-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="adymire-faq-question">
                <span>{item.question}</span>
                <span className="adymire-faq-arrow">▾</span>
              </div>

              <div className="adymire-faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
