import React from 'react';
import './Hero.css';

const Hero = () => {
  const youtubeVideoId = "sQbvs3NAAMo";

  const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playsinline=1&playlist=${youtubeVideoId}`;

  return (
    <div className="Hero-hero-container">
      <iframe
        className="Hero-youtube-video"
        src={youtubeUrl}
        title="Featured Content"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
      ></iframe>

      <div className="Hero-hero-content">
        <h1 className="Hero-hero-title">Jilani Steel & Cement</h1>
        <p className="Hero-hero-subtitle">Building the future with strength and reliability</p>
        <button className="Hero-cta-button">
          <span>Explore More</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
      
      <div className="Hero-scroll-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hero;