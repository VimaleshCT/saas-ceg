import React from "react";
import "./ContactUs.css"; // Include the CSS for styling

const ContactUs = () => {
  return (
    <section id="contact">
      <div className="contact-us-container">
        <h1 className="contact-title">
          Contact <span className="us-highlight">Us</span>
        </h1>
        <div className="contact-content">
          <div className="map-container w-full h-64 sm:h-80 md:h-96 lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.8453655503242!2d80.23493748810208!3d13.01136300609664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267bd5b04ad03%3A0x69b07dae4de00e30!2sSAAS%20CEG!5e0!3m2!1sen!2sin!4v1678982627551!5m2!1sen!2sin"
              className="w-full h-full border-0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="contact-details">
            <h2 className="details-title">Contact Details</h2>
            <p className="contact-item">
              <strong>Address:</strong> SAAS , CEG
            </p>
            <p className="contact-item">
              <strong>Name:</strong> Ansh Bomb
            </p>
            <p className="contact-item">
              <strong>Phone:</strong> +91 9940342069
            </p>
            <br></br>
            <br></br>
            <p className="contact-item">
              <strong>Name:</strong> Kamali K
            </p>
            <p className="contact-item">
              <strong>Phone:</strong> +91 9444315017
            </p>
            <p className="contact-item">
              <strong>Email:</strong> corporaterelations@saasceg.in
            </p>
            <br></br>
            <p className="contact-item">
              <strong>Email:</strong> saasceg25@gmail.com
            </p>
          </div>
        </div>
        <form className="contact-form">
          <h2 className="form-title">Feel free to ask</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
