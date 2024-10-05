import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // State variables for error messages
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const newErrors = validateInputs();
    if (Object.keys(newErrors).length === 0) {
      // Submit form (for demonstration, we'll just log the data)
      console.log("Form submitted successfully:", { name, email, subject, message });

      // Reset form fields if submission is successful
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      // Set errors to display on the form
      setErrors(newErrors);
    }
  };

  // Validation function
  const validateInputs = () => {
    const errors = {};

    // Name validation
    if (!name.trim()) {
      errors.name = "Name is required.";
    } else if (name.length < 3) {
      errors.name = "Name must be at least 3 characters long.";
    }

    // Email validation (basic pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailPattern.test(email)) {
      errors.email = "Invalid email address.";
    }

    // Subject validation
    if (!subject.trim()) {
      errors.subject = "Subject is required.";
    } else if (subject.length < 5) {
      errors.subject = "Subject must be at least 5 characters long.";
    }

    // Message validation
    if (!message.trim()) {
      errors.message = "Message cannot be empty.";
    } else if (message.length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    return errors;
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Subject Field */}
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label>Message</label>
          <textarea
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
