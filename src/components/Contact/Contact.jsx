import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Links from "../Links";
import "./Contact.css";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_bnh81a",
        "template_b487f64",
        formRef.current,
        "sj2y9QvIJImV8Rms1",
      )
      .then(
        (res) => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (err) => {
          setStatus("Failed to send message.  Please try again.");
        },
      );
  };

  return (
    <div className="contact-container-wrapper">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="contact-form-group">
            <label className="contact-label">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="contact-input"
            />
          </div>

          <div className="contact-form-group">
            <label className="contact-label">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="contact-input"
            />
          </div>

          <div className="contact-form-group">
            <label className="contact-label">Message</label>
            <textarea
              name="message"
              required
              rows="6"
              className="contact-textarea"
            />
          </div>

          <button type="submit" className="contact-submit-button">
            Send Message
          </button>
          {status && (
            <p
              className={`contact-status ${status.includes("successfully") ? "contact-status-success" : status.includes("Sending") ? "contact-status-sending" : "contact-status-error"}`}
            >
              {status}
            </p>
          )}
        </form>

        <div className="contact-links">
          <Links />
        </div>
      </div>
    </div>
  );
}
