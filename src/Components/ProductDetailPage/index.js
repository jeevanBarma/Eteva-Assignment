import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";

import data from "../Data.json";

import "./index.css";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const product = data.find((product) => product.id === parseInt(id));

  const quantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-detail-view-main-container">
      <div className="product-detail-view-sub-container">
        <img
          className="product-detail-view-img"
          src={product.imageUrl}
          alt={product.title}
        />
        <div className="title-price-container">
          <h1 className="product-detail-view-title">{product.title}</h1>
          <p className="product-detail-view-brand">{product.brand}</p>
          <div className="product-detail-view-price-rating-container">
            <p className="product-detail-view-price">Rs {product.price}</p>
            <div className="rating-star-container">
              <p className="product-list-rating">{product.rating}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                alt="star"
                className="star"
              />
            </div>
          </div>
          <div className="quantity-container">
            <button
              className="quantity-button"
              type="button"
              onClick={quantityDecrease}
            >
              <BsDashSquare className="quantity-icon" />
            </button>
            <p className="quantity">{quantity}</p>
            <button className="quantity-button" type="button">
              <BsPlusSquare
                className="quantity-icon"
                onClick={() => setQuantity(quantity + 1)}
              />
            </button>
          </div>
          <div className="add-cart-button-container" type="button">
            <button className="btn">ADD CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
