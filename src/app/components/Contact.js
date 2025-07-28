"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "General Contact",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const time = new Date().toLocaleString(); // 👈 used in template

    emailjs.send(
      "Rahul@123",           // 🔁 Your Service ID
      "Rahul@123",           // 🔁 Your Template ID
      {
        name: formData.name,
        email: formData.email,
        purpose: formData.purpose,
        message: formData.message,
        time: time,
      },
      "hqkE_jtB4KlRPg3ku"     // 🔑 Your Public Key
    ).then(
      () => {
        alert("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          purpose: "General Contact",
          message: "",
        });
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Try again.");
      }
    );
  };

  return (
    <div className="min-h-[850px] flex flex-col items-center justify-center px-6 py-20 text-white">
      <h1 className="text-4xl font-bold text-primary text-center">Let’s Connect</h1>
      <p className="text-secondary text-sm mt-2 text-center max-w-lg">
        Whether it’s a project, an opportunity, or just a hello — I’d love to hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full min-w-[332px] h-[560px] gap-6 md:w-[600px] md:h-[360px] md:gap-4 flex flex-col justify-around px-4 md:p-4 border-2 border-primary rounded-3xl"
        >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-lg  text-white border-secondary bg-transparent border-2 "
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-lg  text-white border-secondary  bg-transparent border-2 "
        />
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="p-3 rounded-lg  text-white border-secondary bg-transparent border-2 "
        >
          <option value="General Contact" style={{padding:"12px", background:"#1a1a1a", color:"white", minWidth:"150px" }}>General Contact</option>
          <option value="Hire Me" style={{padding:"12px", background:"#1a1a1a", color:"white", minWidth:"150px" }}>Hire Me</option>
        </select>
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-lg  text-white border-secondary bg-transparent border-2 "
        />
        <button
          type="submit"
          className="bg-[#0984E3] flex max-w-[160px] min-h-[66px] justify-center items-center gap-2 text-sm self-center w-full  text-white font-montserrat py-3 rounded-full "
        >
          Send Message <Icon icon="ep:right" width="16" height="16" />
        </button>
      </form>
    </div>
  );
}
