import React from "react";
import "./Footer.css"; // Include the CSS for styling
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          Copyright &copy; 2024-25 Students Associations and Arts Society of CEG
        </p>
        <p
          className="designed-by"
          style={{
            background:
              "linear-gradient(90deg, rgba(40, 184, 190, 1) 54%, rgba(0, 212, 255, 1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Designed by Technical Design, SAAS
        </p>
        <ul className="social-links">
          <li>
            <a
              href="https://www.facebook.com/techofes.co.in"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/saas_ceg" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/saasceg/"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/saas_ceg" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
