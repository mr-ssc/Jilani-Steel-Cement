import React, { useState } from "react";
import "./Products.css";
import Navbar from "./Navbar";
import Footer from "./Footer"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"
import img7 from "./img7.jpg"
import img8 from "./img8.jpg"
import img9 from "./img9.jpg"
import img10 from "./img10.jpg"



const products = [
  {
    id: 1,
    name: "JSW galvenaiz roofing sheets",
    title: "STEEL",
    image: img1,
    description: "JSW Steel's tamper-proof, non-erasable marked colour coated sheets with superior durability and weather resistance.",
  },
  {
    id: 2,
    name: "HR plates",
    title: "STEEL",
    image: img2,
    description: "High-quality flat sheets for fabrication and construction applications, available in various thicknesses and sizes.",
  },
  {
    id: 3,
    name: "MS bright Bar",
    title: "STEEL",
    image: img3,
    description: "Versatile ferrous metal bars with excellent magnetic properties, ductility, and weldability for multiple applications.",
  },
  {
    id: 4,
    name: "MS flat Bar",
    title: "STEEL",
    image: img4,
    description: "Precision-engineered rectangular bars ideal for fabrication, construction, and general engineering purposes.",
  },
  {
    id: 5,
    name: "MS pipes",
    title: "STEEL",
    image: img5,
    description: "Structural-grade hollow square pipes perfect for frames, supports, and various construction projects.",
  },
  {
    id: 6,
    name: "MS channel",
    title: "STEEL",
    image: img6,
    description: "U-shaped structural beams (C-channels) offering superior strength for construction and industrial use.",
  },
  {
    id: 7,
    name: "MS angles",
    title: "STEEL",
    image: img7,
    description: "L-shaped structural sections providing excellent bracing and support in construction and fabrication.",
  },
  {
    id: 8,
    name: "Color-Coated Roofing Sheets",
    title: "STEEL",
    image: img8,
    description: "Durable steel sheets with protective zinc coating and decorative finish for long-lasting roofing solutions.",
  },


  {
    id: 9,
    name: "Cement roofing sheets",
    title: "CEMENT",
    image: img9,
    description: "Strong and durable cement roofing sheets ideal for all-weather protection, offering reliable coverage for residential, commercial, and industrial buildings.",
  },


  {
    id: 10,
    name: "Color-Coated Sheets",
    title: "STEEL",
    image: img10,
    description: "Durable steel sheets with protective zinc coating and decorative finish for long-lasting roofing solutions.",
  },


  {
    id: 11,
    name: "HR plates",
    title: "STEEL",
    image: img2,
    description: "High-quality flat sheets for fabrication and construction applications, available in various thicknesses and sizes.",
  },


  {
    id: 12,
    name: "MS pipes",
    title: "STEEL",
    image: img5,
    description: "Structural-grade hollow square pipes perfect for frames, supports, and various construction projects.",
  }
  






];

function Products() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <>
      <Navbar />
      <div className="product-page">
        <h2 className="product-header">Our <span className="product-title1">Products</span></h2>

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-title">{product.title}</p>
                <p className="product-description">{product.description}</p>
                {/* <button className="details-button">View Details</button> */}
              </div>
            </div>
          ))}
        </div>
        {!showAll && products.length > 6 && (
          <button
            className="view-more-btn"
            onClick={() => setShowAll(true)}
          >
            View More Products
          </button>
        )}
      </div>
      <Footer />

    </>
  );
}

export default Products;

