import React from 'react';
import './Footer.css';
import logo from "../component/Img/logo.png";
// import taxihover from './taxihover.jpg'

export default function Footer() {
  return (
    
    <footer className="admin-footer">   
      <div className="footer-content">
       
        <div className="footer-branding">
            <div className="logo-contain">
        <img src={logo} alt="Logo" />
            {/* <img src={taxihover} alt="logo" /> */}
          <h3>JILANI Steel & Cement</h3>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima in debitis sequi vel amet dolorum eligendi laborum iste veritatis? Consequuntur.
          </p>
        </div>
        </div>

       <div className="product-info">
  <h4>Products</h4>
  <ul>
    <li><a href="/product1">Product 1</a></li>
    <li><a href="/product2">Product 2</a></li>
    <li><a href="/product3">Product 3</a></li>
    <li><a href="/product4">Product 4</a></li>
    <li><a href="/product5">Product 5</a></li>
  </ul>
</div>



      
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/Home">Home</a></li>
             <li><a href="/About">About</a></li>
             <li><a href="/Service">Service</a></li>
            <li><a href="/Product"></a>Product</li>
            <li><a href="/Support">Support</a></li>
           
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Support</h4>
       <p>
    <a href="mailto:sales@easy2solutions.com">Email:  yourmail@mail.com </a>
  </p>
  <p>
    <a href="tel:+911234567890">Phone: +91 1234567890</a>
  </p>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© 2025 AdminPanel. All rights reserved.</p>
      </div>
    </footer>
  );
}