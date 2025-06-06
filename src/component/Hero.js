import React, { useEffect } from 'react';
import './Hero.css';
import hero from "./Img/hero.png"
const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        const scrollPosition = window.scrollY;
        const parallaxValue = scrollPosition * 0.3;
        hero.style.backgroundPositionY = `${parallaxValue}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="gradient-overlay">
        <div className="hero-content">
          <h1 className="hero-title"></h1>
          <p className="hero-subtitle"></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;