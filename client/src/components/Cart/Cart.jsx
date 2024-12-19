import  { useState, useEffect } from "react";
import { Axios } from "../../api/Aiox";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const userId = localStorage.getItem("userId");


  const fetchCart = async () => {
    try {
    
      
      const response = await Axios.get(
        `/api/users/${userId}/cart`
      );
      setCart(response.data);

      updateTotalPrice(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [userId]);


  const updateTotalPrice = (cartItems) => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };


  const updateQuantity = async (productId, action) => {
    try {
      await Axios.patch(
        `/api/users/${userId}/cart`,
        { productId, action }
      );

  
      fetchCart();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      await Axios.delete(
        `/api/users/${userId}/deleteCart/${productId}`
      );
      fetchCart(); 
    } catch (error) {
      console.error("Error deleting product from cart:", error);
    }
  };

  const handlePayment = async () => {
    try {
      const response = await Axios.post(
        `/api/payment/${userId}`
      );
      window.location.href = response.data.paymentUrl; 
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          {cart.length > 0 ? (
            <>
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium text-lg">
                          {item.product.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Price: ₹{item.product.price}
                        </p>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product._id, "decrement")
                            }
                            className="text-sm border border-gray-800  hover:bg-gray-800 hover:text-white text-gray-800 font-bold py-1 px-3 rounded"
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          <p className="text-sm text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                          <button
                            onClick={() =>
                              updateQuantity(item.product._id, "increment")
                            }
                            className="text-sm border border-gray-800  hover:bg-gray-800 hover:text-white text-gray-800 font-bold py-1 px-3 rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-medium text-lg text-gray-800">
                        Subtotal: ₹{item.product.price * item.quantity}
                      </p>
                      <button
                        onClick={() => deleteFromCart(item.product._id)}
                        className="text-sm px-3 py-1 border border-gray-800 rounded hover:bg-gray-800 hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-right">
                <h2 className="text-2xl font-bold mb-4">
                  Total Price: ₹{totalPrice}
                </h2>
                <button
                  onClick={handlePayment}
                  className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded-lg shadow"
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-600 text-center py-10">
              Your cart is empty. Add some products!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
