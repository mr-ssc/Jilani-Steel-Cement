import React from "react";
import "./About.css";
import Navbar from "./Navbar"
import Footer from "./Footer"
import {
  FaShippingFast,
  FaHeadset,
  FaRupeeSign,
  FaCheckCircle,
  FaHardHat,
  FaMapMarkerAlt,
  FaIndustry,
  FaHandshake,
  FaInfoCircle,
} from "react-icons/fa";

const About = () => {
  return (

    <>


    <Navbar/>
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-text">
          <FaInfoCircle size={36} style={{ marginBottom: "10px" }} />
          <h1>About Us</h1>
          <p>
            Learn more about our journey, values, and vision for the future.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        {/* Who We Are */}
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            Jilani Steel & Cement, established in 2014 by Mr. Zaki, is a premier
            wholesale supplier based in Modasa, Gujarat. We specialize in
            high-quality galvanized mild steel pipes, color coated roofing
            sheets, mild steel channels, and cement products designed to support
            residential and industrial construction needs.
          </p>
        </div>

        {/* Company Journey */}
        <div className="about-section">
          <h2>Our Journey</h2>
          <p>
            Starting as a modest local supplier near the Income Tax Office on
            Bherunda Road, Jilani Steel & Cement has expanded its operations
            steadily to serve multiple industries across Gujarat. With a
            dedicated team and a commitment to excellence, we’ve become a
            trusted partner in building durable infrastructure.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="about-section mission-vision">
          <div>
            <h3>Our Mission</h3>
            <p>
              To provide top-grade steel and cement products at competitive
              prices, enabling builders and contractors to create safe,
              sustainable structures.
            </p>
          </div>
          <div>
            <h3>Our Vision</h3>
            <p>
              To be recognized as Gujarat's leading supplier of construction
              materials, known for integrity, quality, and timely delivery.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="about-section">
          <h2>Our Core Values</h2>
          <ul className="values-list">
            <li>
              <FaHandshake className="icon" /> Integrity & Trust
            </li>
            <li>
              <FaCheckCircle className="icon" /> Quality Commitment
            </li>
            <li>
              <FaHeadset className="icon" /> Customer Support
            </li>
            <li>
              <FaShippingFast className="icon" /> Timely Delivery
            </li>
          </ul>
        </div>

        {/* Industries Served */}
        <div className="about-section">
          <h2>Industries We Serve</h2>
          <ul className="values-list">
            <li>
              <FaIndustry className="icon" /> Real Estate & Builders
            </li>
            <li>
              <FaIndustry className="icon" /> Infrastructure Contractors
            </li>
            <li>
              <FaIndustry className="icon" /> Residential Projects
            </li>
            <li>
              <FaIndustry className="icon" /> Commercial Developments
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="about-section">
          <h2>Our Location</h2>
          <p>
            <FaMapMarkerAlt className="icon" /> Based in Jilani Park, Modasa,
            Gujarat (near Income Tax Office, Bherunda Road), we serve clients
            across the Aravalli district and beyond with reliable logistics and
            customer support.
          </p>
          <p>
            <strong>Coordinates:</strong> 23°27'11"N, 73°17'32"E
          </p>
        </div>

        {/* Meet the Founder */}
        <div className="about-section">
          <h2>Meet the Founder</h2>
          <p>
            Mr. Zaki, an individual proprietor with a passion for building
            strong foundations, established Jilani Steel & Cement with a vision
            to provide honest service and superior products to the construction
            industry.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="about-section quick-facts">
          <h2>Quick Facts</h2>
          <div className="facts-grid">
            <div className="fact-box">
              <FaIndustry className="icon" size={40} />
              <h3>10+ Years</h3>
              <p>Experience in Steel & Cement Industry</p>
            </div>
            <div className="fact-box">
              <FaShippingFast className="icon" size={40} />
              <h3>1000+ Deliveries</h3>
              <p>Completed Successfully across Gujarat</p>
            </div>
            <div className="fact-box">
              <FaRupeeSign className="icon" size={40} />
              <h3>Competitive Pricing</h3>
              <p>Best Value for Your Construction Needs</p>
            </div>
            <div className="fact-box">
              <FaHeadset className="icon" size={40} />
              <h3>24/7 Support</h3>
              <p>Dedicated Customer Care Team</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="about-section choose-us">
          <h2>Why Choose Jilani Steel & Cement?</h2>
          <ul>
            <li>
              <FaCheckCircle className="icon" /> Best Quality Materials with
              Competitive Prices
            </li>
            <li>
              <FaCheckCircle className="icon" /> Experienced & Friendly Customer
              Support
            </li>
            <li>
              <FaCheckCircle className="icon" /> Wide Product Range for All
              Construction Needs
            </li>
            <li>
              <FaCheckCircle className="icon" /> Timely Delivery & Reliable
              Logistics
            </li>
          </ul>
        </div>

        {/* Sustainability */}
        <div className="about-section sustainability">
          <h2>Our Commitment to Environment</h2>
          <p>
            Jilani Steel & Cement is dedicated to sustainable business
            practices. We ensure eco-friendly manufacturing processes and
            encourage recycling to minimize environmental impact.
          </p>
        </div>

        {/* Testimonials */}
        <div className="about-section testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial">
            <p>
              “Jilani Steel & Cement ki quality products ne hamare construction
              project ko bahut smooth banaya. Delivery bhi time par hui, bahut
              professional service!”
            </p>
            <h4>- Ramesh Patel, Builder, Modasa</h4>
          </div>
          <div className="testimonial">
            <p>
              “Unke roofing sheets durable hain aur color finish perfect hai.
              Main unka loyal customer hoon.”
            </p>
            <h4>- Priya Shah, Contractor, Ahmedabad</h4>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-section cta">
          <h3>Let's Build Something Strong Together!</h3>
          <a href="/contact" className="contact-btn">
            Contact Us
          </a>
        </div>
      </section>
    </div>


<Footer/>
    </>
  );
};

export default About;