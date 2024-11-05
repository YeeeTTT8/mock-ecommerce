import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import ProductListing from './ProductListing';
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';
import PaymentStatus from './PaymentResult';
import './productdetail.css';
import { CartProvider } from './CartContext';
import Cart from './Cart';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-status/:success" element={<PaymentStatus />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
