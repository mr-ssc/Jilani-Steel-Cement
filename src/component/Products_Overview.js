import React, { useState } from "react";
import "./Products_Overview.css";
import tmtSteelImg from "./Img/tmt-steel.png";
import steelChannelImg from "./Img/steel-channel.png";
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"

const products = [
  {
    id: 1,
    name: "JSW Vishwas GC Sheets",
    title: "STEEL",
    image: img1,
    description: "JSW Steel's tamper-proof, non-erasable marked colour coated sheets with superior durability and weather resistance.",
  },
  {
    id: 2,
    name: "Mild Steel Plates",
    title: "STEEL",
    image: img2,
    description: "High-quality flat sheets for fabrication and construction applications, available in various thicknesses and sizes.",
  },
  {
    id: 3,
    name: "Mild Steel Round Bar",
    title: "STEEL",
    image: img3,
    description: "Versatile ferrous metal bars with excellent magnetic properties, ductility, and weldability for multiple applications.",
  },
  {
    id: 4,
    name: "Mild Steel Flat Bar",
    title: "STEEL",
    image: img4,
    description: "Precision-engineered rectangular bars ideal for fabrication, construction, and general engineering purposes.",
  },
  {
    id: 5,
    name: "Carbon Steel Square Pipe",
    title: "STEEL",
    image: img5,
    description: "Structural-grade hollow square pipes perfect for frames, supports, and various construction projects.",
  },
  {
    id: 6,
    name: "Carbon Steel Channels",
    title: "STEEL",
    image: img6,
    description: "U-shaped structural beams (C-channels) offering superior strength for construction and industrial use.",
  },
];

const Products_Overview = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="Po">
      <div className="Po-container">
        <h1 className="Po-title">Jilani Steel and Cement Materials</h1>

        {/* Steel Products Section */}
        <div className="Po-section">
          <h2 className="Po-subtitle">Steel Products</h2>
          <div className="Po-productsGrid">
            {products.slice(0, visibleCount).map((product, index) => (
              <div className="Po-productCard" key={index}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="Po-productImage"
                />
                <div className="Po-productDetails">
                  <h3 className="Po-productName">{product.name}</h3>
                  <p className="Po-productDesc">{product.description}</p>
                  {/* <p className="Po-productPrice">{product.price}</p> */}
                  <a href="/Products">
                    <button className="Po-enquireBtn">Enquire Now</button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < products.length && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button className="Po-toggleBtn" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products_Overview;