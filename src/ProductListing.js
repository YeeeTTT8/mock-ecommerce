import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './productlisting.css';

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/mockData.json');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div>
      <h1>Products</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-list">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <div key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.imageUrl} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                  </Link>
                  <Link to={`/product/${product.id}`} className="button">View Product</Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
