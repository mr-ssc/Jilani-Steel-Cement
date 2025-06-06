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
// import img9 from "./img9.jpg"



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
  {
    id: 7,
    name: "MS Angle",
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
  // Duplicate images with matching info
  {
    id: 9,
    name: "JSW Vishwas GC Sheets",
    title: "STEEL",
    image: img1,
    description: "JSW Steel's tamper-proof, non-erasable marked colour coated sheets with superior durability and weather resistance.",
  },
  {
    id: 10,
    name: "Mild Steel Plates",
    title: "STEEL",
    image: img2,
    description: "High-quality flat sheets for fabrication and construction applications, available in various thicknesses and sizes.",
  },
  {
    id: 11,
    name: "Mild Steel Round Bar",
    title: "STEEL",
    image: img3,
    description: "Versatile ferrous metal bars with excellent magnetic properties, ductility, and weldability for multiple applications.",
  },
  {
    id: 12,
    name: "Mild Steel Flat Bar",
    title: "STEEL",
    image: img4,
    description: "Precision-engineered rectangular bars ideal for fabrication, construction, and general engineering purposes.",
  },
  {
    id: 13,
    name: "Carbon Steel Square Pipe",
    title: "STEEL",
    image: img5,
    description: "Structural-grade hollow square pipes perfect for frames, supports, and various construction projects.",
  },
  {
    id: 14,
    name: "Carbon Steel Channels",
    title: "STEEL",
    image: img6,
    description: "U-shaped structural beams (C-channels) offering superior strength for construction and industrial use.",
  },
  {
    id: 15,
    name: "MS Angle",
    title: "STEEL",
    image: img7,
    description: "L-shaped structural sections providing excellent bracing and support in construction and fabrication.",
  },
  {
    id: 16,
    name: "Color-Coated Roofing Sheets",
    title: "STEEL",
    image: img8,
    description: "Durable steel sheets with protective zinc coating and decorative finish for long-lasting roofing solutions.",
  },
  {
    id: 17,
    name: "JSW Vishwas GC Sheets",
    title: "STEEL",
    image: img1,
    description: "JSW Steel's tamper-proof, non-erasable marked colour coated sheets with superior durability and weather resistance.",
  },
  {
    id: 18,
    name: "Mild Steel Plates",
    title: "STEEL",
    image: img2,
    description: "High-quality flat sheets for fabrication and construction applications, available in various thicknesses and sizes.",
  },
  {
    id: 19,
    name: "Mild Steel Round Bar",
    title: "STEEL",
    image: img3,
    description: "Versatile ferrous metal bars with excellent magnetic properties, ductility, and weldability for multiple applications.",
  },
  {
    id: 20,
    name: "Mild Steel Flat Bar",
    title: "STEEL",
    image: img4,
    description: "Precision-engineered rectangular bars ideal for fabrication, construction, and general engineering purposes.",
  },
  {
    id: 21,
    name: "Carbon Steel Square Pipe",
    title: "STEEL",
    image: img5,
    description: "Structural-grade hollow square pipes perfect for frames, supports, and various construction projects.",
  },

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
                <button className="details-button">View Details</button>
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

