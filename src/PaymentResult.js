import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaymentResult = () => {
  const location = useLocation();
  const isSuccess = new URLSearchParams(location.search).get('success') === 'true';

  return (
    <div className="checkout-page">
      {isSuccess ? (
        <div className="message success">Payment Successful! Thank you for your purchase.</div>
      ) : (
        <div className="message failure">Payment Failed. Please try again.</div>
      )}
      <Link to="/" className="button">Continue Shopping</Link>
    </div>
  );
};

export default PaymentResult;
