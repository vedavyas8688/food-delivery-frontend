 import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* LEFT */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Tomato logo" />
          <p>
            Experience culinary excellence with Tomato — where fresh
            ingredients meet exceptional taste. We deliver not just food,
            but unforgettable dining moments right to your doorstep.
            Quality, flavor, and satisfaction guaranteed.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>📞 +91 81250 94360</li>
            <li>✉️ contact@veda.com</li>
            <li>📍 Porumamilla, Kadapa,AndhraPradesh ,India</li>
            <li>⏰ 9:30 AM – 6:30 PM (IST)</li>
          </ul>

          <img className="Big-footer" src={assets.logo} alt="Tomato brand" />
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        © 2026 veda.com — All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
