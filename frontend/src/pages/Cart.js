// Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { createOrder } from '../api';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    delivery_address: '',
    payment_method: 'cash',
    special_instructions: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const orderData = {
        ...formData,
        items: cartItems.map((item) => ({
          menu_item_id: item.id,
          size: item.size,
          quantity: item.quantity,
        })),
      };

      const response = await createOrder(orderData);
      clearCart();
      navigate(`/order-confirmation/${response.data.id}`);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <span className="empty-cart-icon">🛒</span>
          <h2>Your Cart is Empty</h2>
          <p>Discover our handcrafted artisan pizzas and add your favorites</p>
          <Link to="/menu" className="btn btn-primary btn-large">
            Explore Our Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Order</h1>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={`${item.id}-${item.size}`} item={item} />
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span style={{ color: 'var(--color-success)' }}>Complimentary</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>

          {!showCheckout ? (
            <button
              className="btn btn-primary btn-block"
              onClick={() => setShowCheckout(true)}
              style={{ marginTop: '1.5rem' }}
            >
              Proceed to Checkout
            </button>
          ) : (
            <form onSubmit={handleSubmitOrder} className="checkout-form">
              <h3>Delivery Details</h3>

              {error && <div className="error-message">{error}</div>}

              <div className="form-group">
                <label htmlFor="customer_name">Full Name</label>
                <input
                  type="text"
                  id="customer_name"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="customer_email">Email Address</label>
                <input
                  type="email"
                  id="customer_email"
                  name="customer_email"
                  value={formData.customer_email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="customer_phone">Phone Number</label>
                <input
                  type="tel"
                  id="customer_phone"
                  name="customer_phone"
                  value={formData.customer_phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="delivery_address">Delivery Address</label>
                <textarea
                  id="delivery_address"
                  name="delivery_address"
                  value={formData.delivery_address}
                  onChange={handleInputChange}
                  placeholder="Full delivery address with apartment/unit number"
                  required
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="payment_method">Payment Method</label>
                <select
                  id="payment_method"
                  name="payment_method"
                  value={formData.payment_method}
                  onChange={handleInputChange}
                  required
                >
                  <option value="cash">Cash on Delivery</option>
                  <option value="card">Credit / Debit Card</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="special_instructions">Special Instructions</label>
                <textarea
                  id="special_instructions"
                  name="special_instructions"
                  value={formData.special_instructions}
                  onChange={handleInputChange}
                  placeholder="Any allergies or special requests..."
                  rows="2"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
                style={{ marginTop: '0.5rem' }}
              >
                {isSubmitting ? 'Placing Order...' : `Place Order — $${getCartTotal().toFixed(2)}`}
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={() => setShowCheckout(false)}
                style={{ marginTop: '0.5rem' }}
              >
                Back to Cart
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
