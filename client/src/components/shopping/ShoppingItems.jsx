import React from "react";
import Aos from "aos";
import axios from "axios";
import { toast } from "react-toastify";

const ShoppingItems = ({ item }) => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  // Add to Cart Handler
  const addToCart = async (productId) => {
    try {
      const userId = localStorage.getItem("userId"); 
      if (!userId) {
        toast.error("Please log in to add items to your cart.");
        return;
      }

      const response = await axios.post(`http://localhost:3002/api/users/${userId}/cart`, {
        productId,
        quantity: 1, 
      });
      
       console.log(response.data.message);
       

      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error("Failed to add item to cart.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the item to your cart.");
    }
  };

  

  return (
    <div className="mb-10 pt-6 bg-slate-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
        {/* Card Section */}
        {item?.map((data) => (
          <div key={data.id} className="p-4 bg-white shadow-lg rounded-lg">
            <img
              data-aos="fade-in"
              src={data.image}
              alt={data.name}
              className="h-[180px] w-[260px] object-cover rounded-md"
            />
            <div className="leading-7 mt-4 flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-lg">{data.title}</h2>
                <h2 className="font-bold text-xl text-primary">${data.price}</h2>
              </div>
            </div>
            <div className="text-center mt-1">
              <button
                onClick={() => addToCart(data._id)}
                className="bg-blue-50 text-gray-800 hover:bg-blue-300 py-2 px-4 rounded-md shadow-md transition-colors duration-300"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingItems;
