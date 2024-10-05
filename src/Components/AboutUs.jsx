import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to our e-commerce platform! We offer a wide range of high-quality products for men, women, and kids. Our mission is to provide an exceptional shopping experience by curating the best products and offering exceptional customer service.
      </p>
      <p>
        Our team is passionate about fashion, technology, and customer satisfaction. We believe in delivering value to our customers by keeping up with the latest trends and ensuring a seamless shopping experience.
      </p>
      <p>Feel free to reach out through our <Link to="/contact-us">Contact Us</Link> page if you have any questions!</p>
    </div>
  );
};

export default AboutUs;
