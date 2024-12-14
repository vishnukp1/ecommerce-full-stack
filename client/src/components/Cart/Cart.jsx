import React, { useState, useEffect } from "react";
import axios from "axios";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const userId = localStorage.getItem("userId");

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/api/users/${userId}/cart`);
        console.log(response);
        
        setCart(response.data);

        // Calculate total price based on quantity
        const total = response.data.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        setTotalPrice(total);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [userId]);

  // Handle payment process
  const handlePayment = async () => {
    try {
      const response = await axios.post(`http://localhost:3002/api/payment/${userId}`);
      window.location.href = response.data.paymentUrl; // Redirect to Stripe payment page
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item._id}>
            <img src={item.image} alt={item.name} style={{ width: "100px" }} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ₹{item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
      <h2>Total Price: ₹{totalPrice}</h2>
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default CartPage;
