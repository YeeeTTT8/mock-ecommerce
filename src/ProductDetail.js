import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './productdetail.css';
import CartContext from './CartContext'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('/mockData.json'); 
        const product = response.data.products.find(p => p.id === parseInt(id));
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product); 
    } else {
      console.log("Add to Cart: ", product);
    }
    navigate('/cart'); 
  };
  if (!product) return <div className="loading">Loading...</div>;
  return (
    <div className="product-detail-container">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-image-container">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
      </div>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
