// Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        {item.image ? (
          <img src={item.image} alt={item.name} />
        ) : (
          <div className="image-placeholder">🍕</div>
        )}
      </div>

      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-size">{item.size.charAt(0).toUpperCase() + item.size.slice(1)}</p>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
          >
            −
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
          >
            +
          </button>
        </div>

        <p className="cart-item-subtotal">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id, item.size)}
          title="Remove item"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;
