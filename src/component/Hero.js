import React from 'react';
import './Hero.css';

const Hero = () => {
  // Extracted video ID from your URL
  const youtubeVideoId = "sQbvs3NAAMo";
  
  // YouTube embed URL with autoplay, mute, loop, and mobile optimization
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playsinline=1&playlist=${youtubeVideoId}`;

  return (
    <div className="hero-container">
      {/* YouTube iframe - now using your Shorts video */}
      <iframe
        className="youtube-video"
        src={youtubeUrl}
        title="Featured Content"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        frameBorder="0"
      ></iframe>
      
      {/* Optional overlay content */}
      <div className="hero-content">
        <h1>Your Brand Message</h1>
        <button className="cta-button">Explore More</button>
      </div>
    </div>
  );
};

export default Hero;