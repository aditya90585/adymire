import { useGSAP } from "@gsap/react";
import "./HowWeWork.css";

import { ManWithPhone_inYellowJacket, PhoneYellow } from "@/assets";
import { staggerFadeInOnScroll } from "../../animations/stagger";
import { useRef } from "react";
import BookCallButton from "../UI/NavButtons/BookCallButton";


export default function HowWeWork() {

  const hwwcontref = useRef()
  useGSAP(() => {
    staggerFadeInOnScroll(".hww-trigger-ani", { trigger: hwwcontref.current, stagger: 0.3 })
  }, { scope: hwwcontref })


  return (
    <section className="how-section">

      <div className="how-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 120"
        >
          <g
            id="Group_567"
            data-name="Group 567"
            transform="matrix(-0.921, 0.391, -0.391, -0.921, 300, 100)"
          >
            <path
              id="Path_151-2"
              data-name="Path 151"
              d="M0,8.2S20.4,86.449,55.361,87.069s43.831-74.18,74.613-67.312
           28,88.091,62.211,78.867,91.3-69.219,91.3-69.219"
              transform="translate(0 16.505)"
              fill="none"
              stroke="#1c1c1c"
              strokeWidth="4"
            />
            <path
              id="Polygon_6-2"
              data-name="Polygon 6"
              d="M11.612,0,23.223,20.127H0Z"
              transform="matrix(0.643, 0.766, -0.766, 0.643, 289.495, 30.718)"
              fill="#1c1c1c"
            />
          </g>
        </svg>

        <h2>How We Work</h2>
      </div>

      <div ref={hwwcontref} className="how-wrapper">

        <div className="how-left">

          <div className="steps-area">
            <div className="step step-1 hww-trigger-ani">
              <span className="num">01</span>
              <span className="tag">RND</span>
            </div>

            <div className="step step-2 hww-trigger-ani">
              <span className="num">02</span>
              <span className="tag">Design</span>
            </div>

            <div className="step step-3 hww-trigger-ani">
              <span className="num">03</span>
              <span className="tag">Develop</span>
            </div>


          </div>
          <div className="step step-4 hww-trigger-ani">
            <span className="num">04</span>
            <span className="tag big">Marketing</span>

            <div className="cta ml-auto">
              <BookCallButton className=" text-sm md:text-base h-10 md:h-15 font-bold  rounded-xl" textSize="base" paddingX="4" rounded="xl" />
            </div>
          </div>
        </div>

        <div className="how-right hww-trigger-ani">

          <img className="img-box" src={ManWithPhone_inYellowJacket} alt="Advertisement" />


        </div>

      </div>
    </section>
  );
}
