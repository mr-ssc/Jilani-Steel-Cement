import React from 'react';
import './Hero.css';
import hero from "./Img/hero.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={hero} alt="Hero Visual" />
      </div>
    </section>
  );
};

export default Hero;