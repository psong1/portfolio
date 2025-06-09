import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Loading");

    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", formRef.current, "PUBLIC_KEY")
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
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white shadow-md rounded-lg p-8 flex flex-col gap-4"
      >
        <div>
          <span className="text-black font-bold mr-6">Name</span>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <span className="text-black font-bold mr-6">Email</span>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="inline-flex justify-center">
          <span className="text-black font-bold mr-4">Message</span>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
        {status && (
          <p className="text-center mt-2 text-sm text-gray-600">{status}</p>
        )}
      </form>
    </div>
  );
}
