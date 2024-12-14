import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ShoppingItems from "../../components/shopping/ShoppingItems";
import { items } from "../../data/BabyProduct";
import { useEffect, useState } from "react";

const BabyProducts = () => {
  const [ dress, setDress ] = useState([]);
  const getCustomersData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/products/category/dress`
      );
      const responseData = response.data;
      setDress(responseData);
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
      <ShoppingItems item={dress} />
      <Footer />
    </div>
  );
};

export default BabyProducts;
