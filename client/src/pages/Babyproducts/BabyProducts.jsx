import axios from "axios";
import Footer from "../../components/Footer/Footer";

import ShoppingItems from "../../components/shopping/ShoppingItems";

import { useEffect, useState } from "react";

const BabyProducts = () => {
  const [dress, setDress] = useState([]);
  const getCustomersData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/products/category/dress`
      );
      const responseData = response.data;
      setDress(responseData);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  useEffect(() => {
    getCustomersData();
  }, []);
  return (
    <div>
      <ShoppingItems item={dress} />
      <Footer />
    </div>
  );
};

export default BabyProducts;
