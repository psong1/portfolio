import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Loading");

    emailjs
      .sendForm(
        "service_bnhq81a",
        "template_b487f64",
        formRef.current,
        "sj2y9QvIJImV8Rms1"
      )
      .then(
        (res) => {
          setStatus("Message sent!");
          formRef.current.reset();
          console.log(res);
        },
        (err) => {
          setStatus("Failed to send message. Please try again.");
          console.error(err);
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
        Contact Me
      </h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-black/50 backdrop-blur-sm shadow-lg rounded-lg p-8 flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label className="text-white font-medium">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-white/10 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white font-medium">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-white/10 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="bg-white/10 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Send Message
        </button>
        {status && (
          <p className="text-center mt-2 text-sm text-gray-300">{status}</p>
        )}
      </form>
    </div>
  );
}
