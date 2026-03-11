import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Links from "../Links";

const formStyles = "flex flex-col gap-2";
const labelStyles = "text-white font-medium";
const inputStyles =
  "bg-white/5 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

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
    <div className="w-full px-4 py-12">
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#222] via-[#2e2e2e] to-[#4e4e4e] rounded-2xl p-6 md:p12 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
          Contact Me
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm md:text-base">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-black/40 backdrop-blur-sm shadow-lg rounded-xl p-6 md:p-8 flex flex-col gap-6 border border-white/10"
        >
          <div className={formStyles}>
            <label className={labelStyles}>Name</label>
            <input
              type="text"
              name="user_name"
              required
              className={inputStyles}
            />
          </div>

          <div className={formStyles}>
            <label className={labelStyles}>Email</label>
            <input
              type="email"
              name="user_email"
              required
              className={inputStyles}
            />
          </div>

          <div className={formStyles}>
            <label className={labelStyles}>Message</label>
            <textarea
              name="message"
              required
              rows="6"
              className={`${inputStyles} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-200 trasnform hover:scale-[1.02]"
          >
            Send Message
          </button>
          {status && (
            <p
              className={`text-center mt-2 font-medium ${
                status.includes("successfully")
                  ? "text-green-400"
                  : status.includes("Sending")
                    ? "text-blue-400"
                    : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        <div className="mt-12 flex justify-center">
          <Links />
        </div>
      </div>
    </div>
  );
}
