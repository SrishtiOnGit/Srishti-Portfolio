import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import { FaDiscord, FaEnvelope, FaSlack } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendReview = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_ntvx02a";
    const templateID = "template_ayspp1n";
    const publicKey = "wXoPwLhSO2slX9ltl";

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      () => {
        setLoading(false);
        setStatusMessage("Thank you! Your feedback has been sent.");
        formRef.current.reset();
      },
      (error) => {
        setLoading(false);
        setStatusMessage("Something went wrong. Please try again.");
        console.error("EmailJS Error:", error);
      },
    );
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact-me">
        Wanna Connect <span className="contact-me-02">With Me?</span>
      </h1>
      <p className="description">I'm free to connect over chats or emails.</p>

      <div className="contact-icons">
        <p className="box">
          Email : <FaEnvelope /> srishtisrivastva3008@gmail.com
        </p>
        <p className="box">
          Slack : <FaSlack /> PixelDecoder
        </p>
        <p className="box">
          Discord : <FaDiscord /> PixelDecoder
        </p>
      </div>

      <div className="connect">
        <form ref={formRef} onSubmit={sendReview} className="review-form">
          <label>Name</label>
          <input type="text" name="name" required placeholder="Your Name" />
          <label>Your Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email Address"
          />
          <label>Message</label>
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        {statusMessage && <p className="status-msg">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
