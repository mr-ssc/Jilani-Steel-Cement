import React from "react";
import "./Products.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import p1 from "./Img/p1.png";
import p2 from "./Img/p2.png";
import p3 from "./Img/p3.png";
import p4 from "./Img/p4.png";
import p5 from "./Img/p5.png";
import p6 from "./Img/p6.png";
import p7 from "./Img/p7.png";
import p8 from "./Img/opc-cement.png";
import p9 from "./Img/ppc-cement.png";

const productsList = [
  {
    id: 1,
    name: "Steel Angle",
    category: "Steel",
    description: "L-shaped steel bars used for structural framing.",
    image: p1,
  },
  {
    id: 2,
    name: "Channel",
    category: "Steel",
    description: "U-shaped steel channels for construction support.",
    image: p2,
  },
  {
    id: 3,
    name: "Flat Strips & Slotted Metal",
    category: "Steel",
    description: "Versatile flat metal pieces used in fabrication.",
    image: p3,
  },
  {
    id: 4,
    name: "Sheet Metal",
    category: "Steel",
    description: "Thin metal sheets used in roofing and fabrication.",
    image: p4,
  },
  {
    id: 5,
    name: "Pipe",
    category: "Steel",
    description: "Metal pipes for plumbing and construction work.",
    image: p5,
  },
  {
    id: 6,
    name: "Metal Plate",
    category: "Steel",
    description: "Heavy-duty metal plates for industrial use.",
    image: p6,
  },
  {
    id: 7,
    name: "Steel Hardware",
    category: "Steel",
    description: "Nuts, bolts, brackets, and fittings.",
    image: p7,
  },
  {
    id: 8,
    name: "OPC Cement",
    category: "Cement",
    description: "Ordinary Portland Cement for general construction.",
    image: p8,
  },
  {
    id: 9,
    name: "PPC Cement",
    category: "Cement",
    description: "Portland Pozzolana Cement for durability.",
    image: p9,
  },
];

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="products-container">
        <div className="products-header">
          <h2>Our   <span>Products</span> </h2>
         
          <div className="underline"></div>
        </div>
        <div className="products-grid">
          {productsList.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <button className="product-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;