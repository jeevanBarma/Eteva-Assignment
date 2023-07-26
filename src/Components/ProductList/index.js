import React from "react";
import data from "../Data.json";

import ProductCard from "../ProductCard";
import "./index.css";

const ProductList = () => {
  return (
    <div className="all-product-main-container">
      <h1 className="heading">Products List</h1>
      <ul className="ul">
        {data.map((Product) => (
          <ProductCard Product={Product} key={Product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
