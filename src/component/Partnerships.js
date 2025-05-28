import React from 'react';
import './Partnerships.css';

const Partnerships = () => {
  const steelBrands = [
    {
      id: 1,
      title: "Jilani TMT 500D",
      description: "Premium thermo-mechanically treated steel bars",
      website: "https://jilani.com/tmt-500d"
    },
    {
      id: 2,
      title: "Jilani Structural Steel",
      description: "High-tensile strength steel for construction",
      website: "https://jilani.com/structural"
    },
    {
      id: 3,
      title: "Jilani Corrosion Shield",
      description: "Weather and corrosion resistant steel",
      website: "https://jilani.com/corrosion-shield"
    },
  ];

  const cementBrands = [
    {
      id: 7,
      title: "Jilani Ultra Premium Cement",
      description: "Highest grade OPC cement",
      website: "https://jilani.com/ultra-premium"
    },
    {
      id: 8,
      title: "Jilani Rapid Hardening",
      description: "Fast-setting cement for quick projects",
      website: "https://jilani.com/rapid-hardening"
    },
    {
      id: 9,
      title: "Jilani Weatherproof Cement",
      description: "For extreme weather conditions",
      website: "https://jilani.com/weatherproof"
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="Partnerships-container">
      <h2 className="Partnerships-title">Our Product Range</h2>
      
      <div className="Partnerships-section">
        <h3 className="Partnerships-category-title">Steel Products</h3>
        <div className="Partnerships-grid">
          {steelBrands.map((brand) => (
            <div 
              key={brand.id} 
              className="Partnerships-card Partnerships-steel"
              onClick={() => handleCardClick(brand.website)}
            >
              <h3 className="Partnerships-card-title">{brand.title}</h3>
              <p className="Partnerships-card-description">{brand.description}</p>
              <div className="Partnerships-card-badge">Steel</div>
            </div>
          ))}
        </div>
      </div>

      <div className="Partnerships-section">
        <h3 className="Partnerships-category-title">Cement Products</h3>
        <div className="Partnerships-grid">
          {cementBrands.map((brand) => (
            <div 
              key={brand.id} 
              className="Partnerships-card Partnerships-cement"
              onClick={() => handleCardClick(brand.website)}
            >
              <h3 className="Partnerships-card-title">{brand.title}</h3>
              <p className="Partnerships-card-description">{brand.description}</p>
              <div className="Partnerships-card-badge">Cement</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partnerships;