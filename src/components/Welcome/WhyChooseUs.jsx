import "./WhyChooseUs.css";
import { Clock, Handshake, Shield } from "@/assets";

const cards = [
  {
    title: "100 %",
    text: "Deliver on time",
    icon:Clock,

  },
  {
    title: "Many",
    text: "Client Trust",
    icon:Handshake,
  },
  {
    title: "100 %",
    text: "Secure Payment",
    icon:Shield,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why">
      <h2 className="why-title">
        Why You Chose Us
        <span></span>
      </h2>

      <div className="why-grid">
        {cards.map((item, i) => (
          <div className="why-card" key={i}>
            <svg
              className="blob"
              viewBox="0 0 360 387"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M194.664,0c107.51,0,164.53,78.718,165.492,176.414s.049,168.862.049,168.862-2.336,17.467-17.249,28.92c-16.105,12.49-39.826,13.064-59.5,13.064H70.4C31.525,387.26,0,355.734,0,316.86V70.4C0,31.525,31.525,0,70.4,0Z" />
            </svg>

            <div className="why-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

            <div className="icon-box">
              <img src={item.icon} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
