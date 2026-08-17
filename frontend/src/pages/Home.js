// Copyright (c) 2026 Eng. Omar Wael. All Rights Reserved.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMenuItems } from '../api';
import MenuCard from '../components/MenuCard';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Food Blogger',
    avatar: '👩‍🍳',
    text: 'The Truffle Margherita is hands down the best pizza I\'ve ever had. The flavors are extraordinary!',
    rating: 5,
    color: '#e74c3c',
  },
  {
    name: 'Ahmed K.',
    role: 'Local Chef',
    avatar: '👨‍🍳',
    text: 'As a chef myself, I appreciate the quality of ingredients. This is authentic Italian craftsmanship.',
    rating: 5,
    color: '#3498db',
  },
  {
    name: 'Maria L.',
    role: 'Regular Customer',
    avatar: '👩',
    text: 'We order from Pizza Paradise every weekend. The family loves the Prosciutto & Fig pizza!',
    rating: 5,
    color: '#e67e22',
  },
  {
    name: 'Omar H.',
    role: 'Food Critic',
    avatar: '🧑‍💼',
    text: 'A true gem in Kafr Elzayat. The attention to detail in every dish is remarkable.',
    rating: 5,
    color: '#27ae60',
  },
];

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-bg-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400&q=80)'}}></div>
        <div className="hero-overlay"></div>
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
          <div className="hero-image-wrapper">
            <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=80" alt="Artisan Pizza" className="hero-main-image" />
            <div className="hero-image-badge">
              <span className="badge-number">27+</span>
              <span className="badge-text">Menu Items</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-icon">🍕</span>
            <span className="stat-number">27+</span>
            <span className="stat-label">Menu Items</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-icon">🏆</span>
            <span className="stat-number">6</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <span className="stat-number">4.9</span>
            <span className="stat-label">Rating</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-icon">🚚</span>
            <span className="stat-number">30</span>
            <span className="stat-label">Min Delivery</span>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-image-wrapper">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" alt="Our Restaurant" className="about-image" />
          <div className="about-image-accent"></div>
        </div>
        <div className="about-content">
          <span className="section-tag">Our Story</span>
          <h2 className="section-title about-title">A Legacy of Flavor</h2>
          <p className="about-text">
            Since 2026, Pizza Paradise has been the heart of Algalaa, Kafr Elzayat.
            We blend traditional Italian techniques with the finest local ingredients
            to create unforgettable dining experiences.
          </p>
          <p className="about-text">
            Every pizza tells a story — from our hand-stretched dough to our
            slow-rising sauces, each element is crafted with love and precision
            by our master pizzaiolos.
          </p>
          <div className="about-highlights">
            <div className="about-highlight">
              <span className="highlight-icon">🥇</span>
              <div>
                <strong>Premium Quality</strong>
                <span>Only the finest ingredients</span>
              </div>
            </div>
            <div className="about-highlight">
              <span className="highlight-icon">⏱️</span>
              <div>
                <strong>Fast Delivery</strong>
                <span>30 minutes or less</span>
              </div>
            </div>
            <div className="about-highlight">
              <span className="highlight-icon">💰</span>
              <div>
                <strong>Best Prices</strong>
                <span>Quality at fair prices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Crafted With Passion</h2>
          <p className="section-subtitle">Every detail matters in our pursuit of pizza perfection</p>
        </div>
        <div className="features-grid">
          <div className="feature-card feature-card-colored" style={{'--accent': '#e74c3c'}}>
            <div className="feature-image-wrapper">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80" alt="Stone Oven" className="feature-image" />
            </div>
            <span className="feature-icon">🔥</span>
            <h3>Stone-Baked Perfection</h3>
            <p>Our 900°F stone ovens create the perfect crispy-yet-chewy crust with authentic charred bubbles</p>
          </div>
          <div className="feature-card feature-card-colored" style={{'--accent': '#27ae60'}}>
            <div className="feature-image-wrapper">
              <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=80" alt="Fresh Ingredients" className="feature-image" />
            </div>
            <span className="feature-icon">🌿</span>
            <h3>Farm-to-Table Fresh</h3>
            <p>We source organic ingredients from local farms and imported specialties from Italy and beyond</p>
          </div>
          <div className="feature-card feature-card-colored" style={{'--accent': '#f39c12'}}>
            <div className="feature-image-wrapper">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80" alt="Master Chef" className="feature-image" />
            </div>
            <span className="feature-icon">👨‍🍳</span>
            <h3>Master Pizzaiolos</h3>
            <p>Our chefs trained in Naples bring decades of expertise to every hand-stretched dough</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-header">
          <span className="section-tag">Our Gallery</span>
          <h2 className="section-title">A Feast for the Eyes</h2>
          <p className="section-subtitle">Visual glimpses of our culinary artistry</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item gallery-item-large">
            <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80" alt="Pizza Making" />
            <div className="gallery-overlay">
              <span>Signature Pizzas</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" alt="Fresh Ingredients" />
            <div className="gallery-overlay">
              <span>Fresh Ingredients</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" alt="Artisan Pizza" />
            <div className="gallery-overlay">
              <span>Artisan Craft</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" alt="Pizza Slices" />
            <div className="gallery-overlay">
              <span>Perfect Slices</span>
            </div>
          </div>
          <div className="gallery-item gallery-item-tall">
            <img src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&q=80" alt="Gourmet Pizza" />
            <div className="gallery-overlay">
              <span>Gourmet Selection</span>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="featured-section">
        <div className="section-header">
          <span className="section-tag">Our Best Sellers</span>
          <h2 className="section-title">Signature Creations</h2>
          <p className="section-subtitle">Our most celebrated and beloved artisan pizzas</p>
        </div>

        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            Preparing your experience...
          </div>
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

      <section className="testimonials-section">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real stories from our beloved community</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card ${i === currentTestimonial ? 'active' : ''}`}
              style={{'--card-accent': t.color}}
            >
              <div className="testimonial-stars">
                {'★'.repeat(t.rating)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar">{t.avatar}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(i)}
            />
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">From Oven to Doorstep</h2>
          <p className="section-subtitle">Three simple steps to pizza perfection</p>
        </div>
        <div className="process-grid">
          <div className="process-step">
            <div className="process-number">01</div>
            <div className="process-image-wrapper">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80" alt="Choose" className="process-image" />
            </div>
            <h3>Choose Your Pizza</h3>
            <p>Browse our curated menu of artisan pizzas, sides, and beverages</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="process-number">02</div>
            <div className="process-image-wrapper">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&q=80" alt="Prepare" className="process-image" />
            </div>
            <h3>We Prepare It</h3>
            <p>Our master chefs handcraft your order with love and precision</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="process-number">03</div>
            <div className="process-image-wrapper">
              <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=300&q=80" alt="Deliver" className="process-image" />
            </div>
            <h3>Fast Delivery</h3>
            <p>Hot and fresh pizza delivered to your doorstep in 30 minutes</p>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-content">
          <span className="section-tag">Stay Connected</span>
          <h2 className="newsletter-title">Get Exclusive Offers</h2>
          <p className="newsletter-text">Subscribe to our newsletter for special deals, new menu items, and seasonal promotions.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1400&q=80)'}}></div>
        <div className="cta-overlay"></div>
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
