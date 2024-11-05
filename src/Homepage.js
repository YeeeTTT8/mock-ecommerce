import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-banner"></div>
      <h1 className="homepage-title">Welcome to the ZoR0zz e-Commerce Site</h1>
      <p>Discover a range of high-quality products tailored just for you!</p>
      <div className="category-section">
        <div className="category-card">
          <img src="/images/mob.jpg" alt="Mobile Phones" className="category-image" />
          <h2 className="category-title">Mobile Phones</h2>
          <Link to="/products?category=Mobile Phones">
            <button className="category-button">Shop Now</button>
          </Link>
        </div>
        <div className="category-card">
          <img src="/images/lap.jpg" alt="Laptops" className="category-image" />
          <h2 className="category-title">Laptops</h2>
          <Link to="/products?category=Laptops">
            <button className="category-button">Shop Now</button>
          </Link>
        </div>
        <div className="category-card">
          <img src="/images/head.jpg" alt="Headphones" className="category-image" />
          <h2 className="category-title">Headphones</h2>
          <Link to="/products?category=Headphones">
            <button className="category-button">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
