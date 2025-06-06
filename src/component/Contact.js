import React from "react";
import "./Contact.css";
import { FaMailBulk, FaAddressBook } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaRegCalendarDays } from "react-icons/fa6";
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="CONTACT-contact-header">
                <h1 className="CONTACT-contact-title">
                    <IoMdCall />
                    Contact Us
                </h1>
                <p className="CONTACT-contact-description">
                    Steel is a strong and durable metal commonly used in construction to
                    provide structural supports
                </p>
            </div>

            {/* Two Cards Container */}
            <div className="CONTACT-cards-container">
                {/* Contact Form Card */}
                <div className="CONTACT-form-card">
                    <div className="CONTACT-card-content">
                        <h2 className="CONTACT-form-title">
                            <span className="CONTACT-title-underline">Contact Us</span>
                        </h2>

                        <form className="CONTACT-contact-form">
                            {/* Name Field */}
                            <div className="CONTACT-form-group" style={{ animationDelay: "0.1s" }}>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="What's your name?"
                                    required
                                    className="CONTACT-form-input"
                                />
                                <span className="CONTACT-input-focus-effect"></span>
                            </div>

                            {/* Email Field */}
                            <div className="CONTACT-form-group" style={{ animationDelay: "0.2s" }}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    required
                                    className="CONTACT-form-input"
                                />
                                <span className="CONTACT-input-focus-effect"></span>
                            </div>

                            {/* Phone Field */}
                            <div className="CONTACT-form-group" style={{ animationDelay: "0.3s" }}>
                                <label htmlFor="phone">Phone No:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Type your phone number"
                                    className="CONTACT-form-input"
                                />
                                <span className="CONTACT-input-focus-effect"></span>
                            </div>

                            {/* Message Field */}
                            <div className="CONTACT-form-group" style={{ animationDelay: "0.4s" }}>
                                <label htmlFor="feedback">Message:</label>
                                <textarea
                                    id="feedback"
                                    name="feedback"
                                    rows="4"
                                    placeholder="Write your message here"
                                    required
                                    className="CONTACT-form-textarea"
                                ></textarea>
                                <span className="CONTACT-textarea-focus-effect"></span>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="CONTACT-submit-btn"
                                style={{ animationDelay: "0.5s" }}
                            >
                                <span className="CONTACT-btn-text">Send Message</span>
                                <span className="CONTACT-btn-icon">→</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Location Card */}
                <div className="CONTACT-location-card">
                    <div className="CONTACT-card-content">
                        <h2 className="CONTACT-location-title">
                            <span className="CONTACT-title-underline">Our Location</span>
                        </h2>

                        {/* Google Map */}
                        <div className="CONTACT-map-container">
                            <iframe
                                title="Google Maps Location"
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3660.191293043431!2d73.28908327532679!3d23.453563378874104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDI3JzEyLjgiTiA3M8KwMTcnMzAuMCJF!5e0!3m2!1sen!2sin!4v1748596366242!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="CONTACT-map-iframe"
                            />
                        </div>

                        {/* Contact Info */}
                        <div className="CONTACT-location-info">
                            <p className="CONTACT-info-item">
                                <FaAddressBook className="CONTACT-white-icon" />
                                Address: Jilani Park, Opp. College Campus, Modasa, Gujarat, India
                            </p>
                            <p className="CONTACT-info-item">
                                <IoMdCall className="CONTACT-white-icon" />
                                <a href="tel:+91 9601345304" className="CONTACT-info-item">+91 9601345304</a>
                            </p>
                            <p className="CONTACT-info-item">
                                <FaMailBulk className="CONTACT-white-icon" />
                                <a href="mailto: zakiattari777@gmail.com" className="CONTACT-info-item"> zakiattari777@gmail.com</a>
                            </p>
                            <p className="CONTACT-info-item">
                                <FaRegCalendarDays className="CONTACT-white-icon" />
                                Mon-Fri: 9AM - 5PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}