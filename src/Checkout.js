import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './checkout.css'; 

const Checkout = () => {
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };
  const [paymentResult, setPaymentResult] = useState(null); 

  const handlePayment = (isSuccessful) => {
    if (isSuccessful) {
      setPaymentResult(`Payment Of ₹${totalPrice.toLocaleString()} was Successful!. Thank you for your purchase.`);
    } else {
      setPaymentResult(`Payment Of ₹${totalPrice.toLocaleString()} was Failed. Please try again.`);
    }
  };

  return (
    <div className="payment-container">
      <h2>Checkout</h2>
      <div className="payment-buttons">
        <button className="button" onClick={() => handlePayment(true)}>Simulate Successful Payment</button>
        <button className="button" onClick={() => handlePayment(false)}>Simulate Failed Payment</button>
      </div>
      {paymentResult && ( 
        <div className="payment-result">
          <h3>{paymentResult}</h3>
        </div>
      )}
      {paymentResult && (
        <Link to="/" className="button">Continue Shopping</Link>
      )}
    </div>
  );
};

export default Checkout;
