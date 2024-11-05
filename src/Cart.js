import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext'; 
import './cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('₹', '').replace(',', '')); 
    return total + (price * item.quantity);
  }, 0);

  const handleCheckout = () => {
    clearCart(); 
    navigate('/checkout', { state: { totalPrice } }); 
  };

  const handleContinueShopping = () => {
    navigate('/products'); 
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.name} (Quantity: {item.quantity})</h3>
                <p>Price: {item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Price: ₹{totalPrice.toLocaleString()}</h3>
        </>
      )}
      <button className="button" onClick={handleCheckout}>Proceed to Checkout</button>
      <button className="button" onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default Cart;
