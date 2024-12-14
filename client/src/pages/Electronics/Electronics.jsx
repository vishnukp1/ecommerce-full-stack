import ShoppingItems from '../../components/shopping/ShoppingItems'
import Navbar from '../../components/Navbar/Navbar'
import { items } from '../../data/CartItems'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Electronics = () => {
  
  const [toys, setToys] = useState([]);

  const getCustomersData = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/api/products/category/toys`);
      const responseData = response.data;
  
      console.log(responseData);
      setToys(responseData);
    } catch (error) {
      console.error("Error fetching customer data:", error);
      // Handle the error, show an error message, etc.
    }
  };

  useEffect(() => {
    getCustomersData();
  }, []);
  return (
    <div>
         <Navbar />
         <div className="text-center mb-10 max-w-[87.5rem] mx-auto">
  <p data-aos="fade-up" className="text-lg text-primary mt-5">
    Top Selling Gadgets for you
  </p>
  <h1 data-aos="fade-up" className="text-3xl font-bold">
    Gadgets
  </h1>
  <p data-aos="fade-up" className="text-sm text-gray-400 p-4">
    Explore our exclusive collection of gadgets, designed to combine cutting-edge technology and sleek design. 
    From innovative smartphones to versatile smartwatches, find your perfect gadget.
  </p>
</div>

        <ShoppingItems item={toys} />
        <Footer />
    </div>
  )
}

export default Electronics