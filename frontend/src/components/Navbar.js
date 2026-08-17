// Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const { getCartCount } = useCart();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🍕</span>
          <span className="logo-text">Pizza Paradise</span>
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className={`nav-link ${isActive('/menu') ? 'active' : ''}`}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/cart" className={`nav-link cart-link ${isActive('/cart') ? 'active' : ''}`}>
              Cart
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
