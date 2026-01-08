import React, { useState } from "react";
import "./BookingForm.css";
import { BoyWithLaptop } from "@/assets";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    service: "",
    phone: "",
    budget: "",
    whatsapp: "",
    bestTime: "",
    whoYouAre: "",
    projectField: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bf-section">
      <div className="bf-img">
        <img src={BoyWithLaptop} alt="booking-form" />
        <div className="bf-img-text">Book Free Call Now</div>
      </div>
      <form className="bf-form" onSubmit={handleSubmit}>
        <input
          className="bf-input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          className="bf-input"
          name="companyName"
          placeholder="Compeny Name"
          onChange={handleChange}
        />


        <input
          className="bf-input"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <select
          className="bf-input bf-select"
          name="service"
          onChange={handleChange}
        >
          <option value="">What service do you need?</option>
          <option>Design</option>
          <option>Development</option>
          <option>Marketing</option>
          <option>AI Automation</option>
        </select>

        <input
          className="bf-input"
          name="phone"
          placeholder="+91   7045875115"
          onChange={handleChange}
        />
        <input
          className="bf-input"
          name="budget"
          placeholder="What's your budget"
          onChange={handleChange}
        />

        <input
          className="bf-input"
          name="whatsapp"
          placeholder="WhatsApp No"
          onChange={handleChange}
        />
        <input
          className="bf-input"
          name="bestTime"
          placeholder="Best time to connect"
          onChange={handleChange}
        />

        <input
          className="bf-input"
          name="whoYouAre"
          placeholder="Who Your Are"
          onChange={handleChange}
        />
        <input
          className="bf-input"
          name="projectField"
          placeholder="Projects Related Field"
          onChange={handleChange}
        />

        <button className="bf-submit">Submit</button>
      </form>
    </section>
  );
};

export default BookingForm;
