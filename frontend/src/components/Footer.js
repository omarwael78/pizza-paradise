// Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🍕 Pizza Paradise</h3>
          <p>
            Crafting authentic artisan pizzas with the finest ingredients since 2026.
            Every slice is a testament to our passion for quality and tradition.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/cart">Order Now</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
          <li>Algalaa, Kafr Elzayat, Egypt</li>
          <li>+20 1285786006</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Hours</h4>
          <ul>
            <li>Mon — Thu: 11am – 10pm</li>
            <li>Fri — Sat: 11am – 11pm</li>
            <li>Sunday: 12pm – 9pm</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Eng. Omar Wael — Pizza Paradise. All Rights Reserved. | Algalaa, Kafr Elzayat, Egypt</p>
      </div>
    </footer>
  );
};

export default Footer;
