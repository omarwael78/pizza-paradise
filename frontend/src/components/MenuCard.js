// Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const MenuCard = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item, selectedSize, quantity);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  const priceMap = {
    small: parseFloat(item.price_small),
    medium: parseFloat(item.price_medium),
    large: parseFloat(item.price_large),
  };

  return (
    <div className="menu-card">
      <div className="menu-card-image">
        {item.image ? (
          <img src={item.image} alt={item.name} loading="lazy" />
        ) : (
          <div className="image-placeholder">🍕</div>
        )}
        {item.is_featured && <span className="featured-badge">★ Featured</span>}
      </div>

      <div className="menu-card-content">
        <h3 className="menu-card-title">{item.name}</h3>
        <p className="menu-card-description">{item.description}</p>

        {item.ingredients && (
          <p className="menu-card-ingredients">
            <strong>Ingredients:</strong> {item.ingredients}
          </p>
        )}

        <div className="size-selector">
          <label>Choose Your Size</label>
          <div className="size-options">
            {['small', 'medium', 'large'].map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size === 'small' ? 'S' : size === 'medium' ? 'M' : 'L'}
                <span className="size-price">${priceMap[size].toFixed(2)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-selector">
          <label>Quantity</label>
          <div className="quantity-controls">
            <button
              className="qty-btn"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span className="qty-value">{quantity}</span>
            <button
              className="qty-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="menu-card-footer">
          <span className="current-price">
            ${(priceMap[selectedSize] * quantity).toFixed(2)}
          </span>
          <button
            className={`add-to-cart-btn ${showAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={showAdded}
          >
            {showAdded ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
