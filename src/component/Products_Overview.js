import React from 'react';
import './Products_Overview.css';
// Import images (replace with your actual image paths)
import tmtSteelImg from './Img/tmt-steel.png';
import steelChannelImg from './Img/steel-channel.png';
import opcCementImg from './Img/opc-cement.png';
import ppcCementImg from './Img/ppc-cement.png';

const ProductsOverview = () => {
  return (
    <div className='Po'>
    <div className="Po-container">
      <h1 className="Po-title"> Jilani Steel and Cement Materials</h1>
      
      {/* Steel Products Section */}
      <div className="Po-section">
        <h2 className="Po-subtitle">Steel Products</h2>
        
        <div className="Po-productCard">
          <img src={tmtSteelImg} alt="TMT Steel Bars" className="Po-productImage" />
          <div className="Po-productDetails">
            <h3 className="Po-productName">TMT Steel Bars</h3>
            <p className="Po-productDesc">IS 1786 Certified, Grade 500D</p>
            <p className="Po-productPrice">₹52/kg</p>
            <button className="Po-enquireBtn">Enquire Now</button>
          </div>
        </div>

        <div className="Po-productCard">
          <img src={steelChannelImg} alt="Steel Channels" className="Po-productImage" />
          <div className="Po-productDetails">
            <h3 className="Po-productName">Steel Channels</h3>
            <p className="Po-productDesc">MS Channels, 150x75mm</p>
            <p className="Po-productPrice">₹72/kg</p>
            <button className="Po-enquireBtn">Enquire Now</button>
          </div>
        </div>
      </div>

      {/* Cement Products Section */}
      <div className="Po-section">
        <h2 className="Po-subtitle">Cement Products</h2>
        
        <div className="Po-productCard">
          <img src={opcCementImg} alt="OPC Cement" className="Po-productImage" />
          <div className="Po-productDetails">
            <h3 className="Po-productName">OPC Cement</h3>
            <p className="Po-productDesc">Grade 53, 50kg Bags</p>
            <p className="Po-productPrice">₹380/bag</p>
            <button className="Po-enquireBtn">Enquire Now</button>
          </div>
        </div>

        <div className="Po-productCard">
          <img src={ppcCementImg} alt="PPC Cement" className="Po-productImage" />
          <div className="Po-productDetails">
            <h3 className="Po-productName">PPC Cement</h3>
            <p className="Po-productDesc">Pozzolana Portland Cement</p>
            <p className="Po-productPrice">₹360/bag</p>
            <button className="Po-enquireBtn">Enquire Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductsOverview;