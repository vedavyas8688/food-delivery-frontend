 import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Experience culinary excellence with Tomato - where fresh ingredients meet exceptional taste. We're committed to delivering not just food, but unforgettable dining moments right to your doorstep. Quality, flavor, and satisfaction guaranteed with every order.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>PH.NO :+91 8125094360</li>
                    <li>EMAIL:contact@veda.com</li>
                    <li>Physical Address : *516505----------------------------------------------------------------------------------------------------------------------------*</li>
                    <li>Business Hours:  9:30 AM to 6:30 PM IST </li>
                </ul>
                <div>
                    <img className='Big-footer' src={assets.logo} alt="" />
                </div>
            </div>

        </div>

        <hr />

        <p className='footer-copyright'>Copyright 2026 © veda.com - All rights reserved</p>
      
    </div>
  )
}

export default Footer