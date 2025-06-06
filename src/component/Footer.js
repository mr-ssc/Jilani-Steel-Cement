import React from 'react';
import './Footer.css';
import logo from "../component/Img/logo.png";


export default function Footer() {
  return (

    <footer className="admin-footer">
      <div className="footer-content">

        <div className="footer-branding">
          <div className="footer-logo-contain">
            <img src={logo} alt="Logo" />
            <h3>JILANI Steel & Cement</h3>

            <p>Jilani Steel & Cement – Tamara construction mate ek visvasniya naam. Amare paase premium quality na steel ane cement ni vistarit range chhe, je tamari building ne majbooti ane tikaupan aape chhe.</p>

          </div>
        </div>






        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Products">Products</a></li>
            {/* <li><a href="/Gallery">Gallery</a></li> */}
            <li><a href="/Contact">Contact</a></li>

          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Support</h4>
          <p>
            <a href="mailto: zakiattari777@gmail.com">Email:  zakiattari777@gmail.com</a>
          </p>
          <p>
            <a href="tel:+91 9601345304">Phone: +91 9601345304</a>
          </p>
        </div>
      </div>


      <div className="footer-bottom">
        <p>© 2025 AdminPanel. All rights reserved.</p>
      </div>
    </footer>
  );
}