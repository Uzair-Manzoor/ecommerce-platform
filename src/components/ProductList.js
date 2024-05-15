// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const mockProducts = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for product 1',
    price: 29.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for product 2',
    price: 39.99,
    image: 'https://via.placeholder.com/150'
  }
];

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
    }, 1000);

  }, []);

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
