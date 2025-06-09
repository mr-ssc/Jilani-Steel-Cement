import React from 'react';
import './Highlights.css';
import h1 from "./Img/h1.png";
import h2 from "./Img/h2.png";
import h3 from "./Img/h3.png";

const highlightsData = [
  {
    title: "MS Structural Steel",
    description: "Angles, channels, pipes, flats, and bars for construction needs.",
    image: h1,
  },
  {
    title: "Roofing Solutions",
    description: "Galvanized and color-coated roofing sheets for durable performance.",
    image: h2,
  },
  {
    title: "Cement Products",
    description: "High-quality cement for all types of construction projects.",
    image: h3,
  },
];

const Highlights = () => {
  return (
    <div className="highlights-section">
      <div className="highlights-container">
        <h2 className="highlight-heading">Our <span>Highlights</span></h2>
        <div className="highlights-grid">
          {highlightsData.map((item, index) => (
            <div className="highlight-card" key={index}>


              
              <div className="highlight-image-container">
                <img src={item.image} alt={item.title} className="highlight-image" />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
                <button className="highlight-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;