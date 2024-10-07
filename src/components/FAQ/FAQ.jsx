import React, { useState } from "react";
import "./FAQ.css"; // Include the CSS for styling and animations

const faqData = [
  {
    id: 1,
    question: "What is SAAS?",
    answer:
      "The SAAS(Students Association and Arts Society) of CEG is a non profitable student run body with a rich heritage established in the year 1948.",
  },
  {
    id: 2,
    question: "What is the purpose of SAAS?",
    answer:
      "SAAS is responsible for ensuring the welfare of the student community by addressing their grievances and framing suggestions for the betterment of the academic environment..",
  },
  {
    id: 3,
    question: "What are the other activities of SAAS?",
    answer:
      "SAAS primarily aims to find the dormant talents amongst students and assist them to harness their resources well to become top notch individuals by organising various cultural activities.",
  },
  {
    id: 4,
    question: "What are the events conducted by SAAS?",
    answer:
      "* Techofes, the inter college cultural fest is the biggest such event in South India witnessing a humongous turnout of around 30,000 students. * Agni, the intra college cultural fest to identify the radiant talents and nurture them to compete on a global scale. * Freshers day to welcome the first year students who had just set their feet in the campus aspiring to reach immense heights.",
  },
];

const FAQ = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="faq">
      <div className="faq-container">
        <h1 className="faq-title">
          Frequently Asked <span>Questions</span>
        </h1>
        <div className="faq-list">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="faq-item"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`faq-question ${
                  hovered === item.id ? "show-answer" : ""
                }`}
              >
                {item.question}
              </div>
              <div
                className={`faq-answer ${
                  hovered === item.id ? "show" : "hide"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
