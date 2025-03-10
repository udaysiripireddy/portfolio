import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To handle form status (success or error)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service setup
    emailjs
      .sendForm("service_kgjrvkt", "template_do88u5t", e.target, "4xYwNAIXMxgeX-Cd8") // Replace with your actual service, template, and user ID
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          alert("Your message has been sent successfully!"); // Alert on success
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
          alert("Failed to send the message. Please try again."); // Alert on error
        }
      );
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p><i>implement using emailJS</i></p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="form-input"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your email and message here also...."
          required
          className="form-textarea"
        ></textarea>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
};

export default Contact;
