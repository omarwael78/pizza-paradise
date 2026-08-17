// Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOrder } from '../api';

const OrderConfirmation = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getOrder(id);
        setOrder(response.data);
      } catch (err) {
        setError('Failed to load order details.');
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading order details...</div>;
  }

  if (error || !order) {
    return (
      <div className="error-page">
        <h2>Oops!</h2>
        <p>{error || 'Order not found.'}</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="order-confirmation">
      <div className="confirmation-header">
        <span className="success-icon">✓</span>
        <h1>Order Confirmed</h1>
        <p>Thank you for your order. Our chefs are already preparing your meal!</p>
      </div>

      <div className="order-details-card">
        <div className="order-info">
          <h2>Order Details</h2>
          <p><strong>Order ID:</strong> {order.id.slice(0, 8).toUpperCase()}</p>
          <p><strong>Status:</strong> <span className={`status-badge ${order.status}`}>{order.status_display}</span></p>
          <p><strong>Payment:</strong> {order.payment_method === 'cash' ? 'Cash on Delivery' : 'Credit / Debit Card'}</p>
          <p><strong>Placed:</strong> {new Date(order.created_at).toLocaleString()}</p>
        </div>

        <div className="delivery-info">
          <h2>Delivery Information</h2>
          <p><strong>Name:</strong> {order.customer_name}</p>
          <p><strong>Email:</strong> {order.customer_email}</p>
          <p><strong>Phone:</strong> {order.customer_phone}</p>
          <p><strong>Address:</strong> {order.delivery_address}</p>
          {order.special_instructions && (
            <p><strong>Notes:</strong> {order.special_instructions}</p>
          )}
        </div>

        <div className="order-items">
          <h2>Items Ordered</h2>
          {order.items.map((item) => (
            <div key={item.id} className="order-item-row">
              <span>{item.quantity}× {item.menu_item_name} <span style={{ color: 'var(--color-text-dim)' }}>({item.size})</span></span>
              <span>${parseFloat(item.subtotal).toFixed(2)}</span>
            </div>
          ))}
          <div className="order-total">
            <span>Total</span>
            <span>${parseFloat(order.total_amount).toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="confirmation-actions">
        <Link to="/menu" className="btn btn-primary">
          Order More
        </Link>
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
