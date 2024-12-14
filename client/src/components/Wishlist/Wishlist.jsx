// src/components/Wishlist.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const userId = localStorage.getItem("userId");

  // Fetch Wishlist
  useEffect(() => {
    if (userId) {
      fetchWishlist();
    }
  }, [userId]);

  const fetchWishlist = async () => {
    try {
      const response = await axios.get(`/wishlist/${userId}`);
      setWishlist(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load wishlist.");
    }
  };

  // Remove from Wishlist
  const removeFromWishlist = async (productId) => {
    try {
      await axios.delete(`/wishlist/${userId}`, {
        data: { productId },
      });
      toast.success("Product removed from wishlist.");
      setWishlist((prev) =>
        prev.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove product from wishlist.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg p-4 relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">Price: ₹{product.price}</p>
              <button
                onClick={() => removeFromWishlist(product._id)}
                className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
