import React, { useState } from "react";
import "./Products_Overview.css";
import tmtSteelImg from "./Img/tmt-steel.png";
import steelChannelImg from "./Img/steel-channel.png";

const products = [
  {
    name: "TMT Steel Bars",
    description: "IS 1786 Certified, Grade 500D",
    price: "₹52/kg",
    image: tmtSteelImg,
  },
  {
    name: "Steel Channels",
    description: "MS Channels, 150x75mm",
    price: "₹72/kg",
    image: steelChannelImg,
  },
  {
    name: "Steel Angles",
    description: "MS Angles, 50x50x5mm",
    price: "₹68/kg",
    image: steelChannelImg,
  },
  {
    name: "Steel Rods",
    description: "Mild Steel Rods, 12mm",
    price: "₹58/kg",
    image: steelChannelImg,
  },
  {
    name: "Galvanized Sheets",
    description: "0.8mm, Anti-Rust Coated",
    price: "₹90/kg",
    image: steelChannelImg,
  },
  {
    name: "Binding Wire",
    description: "Gauge 20, 1kg Roll",
    price: "₹55/kg",
    image: steelChannelImg,
  },
  {
    name: "Steel Plates",
    description: "MS Plates, 10mm",
    price: "₹75/kg",
    image: steelChannelImg,
  },
  {
    name: "Steel Pipes",
    description: "MS Round Pipes, 3 Inch",
    price: "₹62/kg",
    image: steelChannelImg,
  },
  {
    name: "Square Tubes",
    description: "MS Square Tubes, 100x100mm",
    price: "₹70/kg",
    image: steelChannelImg,
  },
  {
    name: "Chequered Plates",
    description: "MS Chequered, 5mm",
    price: "₹80/kg",
    image: steelChannelImg,
  },
  {
    name: "Steel Beams",
    description: "ISMB 200, 200x100mm",
    price: "₹78/kg",
    image: steelChannelImg,
  },
  {
    name: "HR Sheets",
    description: "Hot Rolled, 2mm",
    price: "₹65/kg",
    image: steelChannelImg,
  },
  {
    name: "CR Sheets",
    description: "Cold Rolled, 1.2mm",
    price: "₹69/kg",
    image: steelChannelImg,
  },
  {
    name: "MS Flat Bars",
    description: "25x5mm MS Flats",
    price: "₹60/kg",
    image: steelChannelImg,
  },
  {
    name: "Steel Gratings",
    description: "Industrial Gratings",
    price: "₹95/kg",
    image: steelChannelImg,
  },
  {
    name: "GI Pipes",
    description: "Galvanized Iron Pipe, 2 Inch",
    price: "₹76/kg",
    image: steelChannelImg,
  },
  {
    name: "SS Pipes",
    description: "Stainless Steel, 304 Grade",
    price: "₹130/kg",
    image: steelChannelImg,
  },
  {
    name: "MS Rings",
    description: "Fabricated MS Rings",
    price: "₹68/kg",
    image: steelChannelImg,
  },
  {
    name: "MS Square Bars",
    description: "20mm MS Squares",
    price: "₹66/kg",
    image: steelChannelImg,
  },
  {
    name: "Wire Mesh",
    description: "Chain Link, 12 Gauge",
    price: "₹52/kg",
    image: steelChannelImg,
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
                  <p className="Po-productPrice">{product.price}</p>
                  <button className="Po-enquireBtn">Enquire Now</button>
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