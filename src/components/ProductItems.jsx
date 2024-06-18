// src/components/ProductItem.js
import React from 'react';
import './ProductItems.css';
import Home from './Home';

const ProductItems = ({ image, name, price, discount,offer }) => {
  return (
   <>

    <div className="grid-item">
      <div className="image-wrapper">
        <img src={image} alt={name} />
        <div className="product-details-overlay">
          <p className="product-name">{name}</p>
          <p className="price-container">
            <span className="product-price">${price}</span>
           <span className="product-false">${discount}</span>
          </p>
          <p className="product-discount">{offer}</p>
          <button className="add-to-cart-btn"><a href="women" class="add-to-cart-btn">See More</a></button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductItems;
