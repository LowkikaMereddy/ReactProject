import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend API (replace with your actual API endpoint)
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
