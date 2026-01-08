import React from "react";
import "./ClientReviews.css";

const ClientReviews = () => {
  const reviews = [
    {
      name: "Mohit Saini",
      location: "India",
      date: "Aug 05, 2024",
      rating: 4,
      text: `YashBusinessman sir ka "Digital Marketing for Beginner" 
      course is a solid starting point for newbies. Sir ne topics 
      ko simple language mein explain kiya hai, which is great.
      Basics jaise SEO, social media, aur content marketing cover karte hain.
      Thoda aur in-depth case studies hote toh aur bhi mazaa aata.
      Overall, agar aap digital marketing mein just start kar rahe ho 
      aur confusion dur karna chahte ho, toh yeh course useful hai.`,
      reply: `Hii Kunal Saini thanks sharing your review and support 
      we are glad you purchased our course and more peaceful review 
      you give thanks for comming and if like this course please share your thoughts`,
    },
    {
      name: "Mohit Saini",
      location: "India",
      date: "Aug 05, 2024",
      rating: 5,
      text: `YashBusinessman sir ka "Digital Marketing for Beginner" 
      course is a solid starting point for newbies. Sir ne topics 
      ko simple language mein explain kiya hai, which is great.`,
      reply: `Thanks for your valuable feedback and support.`,
    },
    {
      name: "Mohit Saini",
      location: "India",
      date: "Aug 05, 2024",
      rating: 5,
      text: `Good value for money and a good foundation to build upon.`,
      reply: `Thanks for your review.`,
    },
  ];

  return (
    <section className="crv-section">
      <div className="crv-container">

        <h2 className="crv-title">
          Client Review
          <span className="crv-underline"></span>
        </h2>

        <div className="crv-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="crv-star">★</span>
          ))}
        </div>

        <p className="crv-subtitle">
          See why thousands of business owners can’t stop talking about US
        </p>

        <div className="crv-grid">
          {reviews.map((review, index) => (
            <div key={index} className="crv-card">

              <div className="crv-card-header">
                <div className="crv-user">
                  <img src="" alt="user" />
                  <div>
                    <h4>{review.name}</h4>
                    <p>5 (Star) • {review.location}</p>
                  </div>
                </div>

                <div className="crv-google">
                  <img src="" alt="google" />
                </div>
              </div>

              <div className="crv-rating">
                {"★".repeat(review.rating)}
                <span className="crv-date">{review.date}</span>
              </div>

              <p className="crv-text">{review.text}</p>

              <p className="crv-exp">
                <strong>Date of experience :</strong> {review.date}
              </p>

              <div className="crv-reply">
                <strong>↳ Reply from YashBusinessman</strong>
                <p>{review.reply}</p>
                <span className="crv-thanks">Thanks<br />YashBusinessman</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientReviews;
