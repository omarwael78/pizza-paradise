// Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMenuItems } from '../api';
import MenuCard from '../components/MenuCard';

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await getMenuItems({ featured: true });
        setFeaturedItems(response.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching featured items:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-label">★ Award-Winning Artisan Pizza</div>
          <h1 className="hero-title">
            Where Every Slice Tells a <span className="highlight">Story</span>
          </h1>
          <p className="hero-subtitle">
            Handcrafted with the finest ingredients from around the world.
            Each pizza is a masterpiece, baked to perfection in our stone ovens.
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary btn-large">
              Explore Our Menu
            </Link>
            <a href="#featured" className="btn btn-secondary btn-large">
              Featured Pizzas
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-pizza">🍕</div>
        </div>
      </section>

      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🔥</span>
            <h3>Stone-Baked Perfection</h3>
            <p>Our 900°F stone ovens create the perfect crispy-yet-chewy crust with authentic charred bubbles</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🌿</span>
            <h3>Farm-to-Table Fresh</h3>
            <p>We source organic ingredients from local farms and imported specialties from Italy and beyond</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👨‍🍳</span>
            <h3>Master Pizzaiolos</h3>
            <p>Our chefs trained in Naples bring decades of expertise to every hand-stretched dough</p>
          </div>
        </div>
      </section>

      <section id="featured" className="featured-section">
        <h2 className="section-title">Signature Creations</h2>
        <p className="section-subtitle">Our most celebrated and beloved artisan pizzas</p>

        {loading ? (
          <div className="loading">Preparing your experience...</div>
        ) : (
          <div className="menu-grid">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className="view-all">
          <Link to="/menu" className="btn btn-primary btn-large">
            View Full Menu
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Craving Perfection?</h2>
          <p>Order now and experience the art of authentic Italian pizza, delivered to your doorstep.</p>
          <Link to="/menu" className="btn btn-primary btn-large">
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
