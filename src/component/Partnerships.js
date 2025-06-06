import React from 'react';
import './Partnerships.css';

const Partnerships = () => {
  const steelBrands = [
    {
      id: 1,
      title: "TATA Steel",
      description: "TATA Steel is one of the world's most trusted steel producers, known for innovation, quality, and sustainability in steel manufacturing.",
      website: "https://www.tatasteel.com/"
    },
    {
      id: 2,
      title: "SAIL",
      description: "SAIL is a government-owned steel giant, delivering a wide range of steel products and playing a vital role in India's industrial growth.",
      website: "https://sail.co.in/"
    },
    {
      id: 3,
      title: "JSW Steel",
      description: "JSW Steel is a leading Indian steel company offering high-quality and advanced steel products for infrastructure, automotive, and industrial use.",
      website: "https://www.jswsteel.in/"
    },
  ];

  const cementBrands = [
    {
      id: 7,
      title: "UltraTech Cement",
      description: "UltraTech Cement is India's largest manufacturer of grey cement, ready mix concrete, and white cement, known for its high quality and durability.",
      website: "https://www.ultratechcement.com/"
    },
    {
      id: 8,
      title: "Ambuja Cement",
      description: "Ambuja Cement is a leading cement brand in India, recognized for its sustainable practices and superior strength performance.",
      website: "https://www.ambujacement.com/"
    },
    {
      id: 9,
      title: "ACC Cement",
      description: "ACC Cement has a strong legacy of over 80 years in India, offering reliable and eco-friendly cement solutions for various construction needs.",
      website: "https://www.acclimited.com/"
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="partnerships-container">
      <h2 className="partnerships-title">Our <span>Partnerships</span></h2>
      <p className="partnerships-subtitle">We collaborate with industry leaders to bring you the best quality materials</p>

      <div className="partnerships-section">
        <h3 className="partnerships-category-title">Steel Products</h3>
        <div className="partnerships-grid">
          {steelBrands.map((brand) => (
            <div
              key={brand.id}
              className="partnerships-card partnerships-steel"
              onClick={() => handleCardClick(brand.website)}
            >
              <div className="card-content">
                <h3 className="card-title">{brand.title}</h3>
                <p className="card-description">{brand.description}</p>
                <div className="card-badge">Steel</div>
              </div>
              <div className="visit-website-btn">
                Visit Website <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="partnerships-section">
        <h3 className="partnerships-category-title-1">Cement Products</h3>
        <div className="partnerships-grid">
          {cementBrands.map((brand) => (
            <div
              key={brand.id}
              className="partnerships-card partnerships-cement"
              onClick={() => handleCardClick(brand.website)}
            >
              <div className="card-content">
                <h3 className="card-title">{brand.title}</h3>
                <p className="card-description">{brand.description}</p>
                <div className="card-badge">Cement</div>
              </div>
              <div className="visit-website-btn">
                Visit Website <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partnerships;