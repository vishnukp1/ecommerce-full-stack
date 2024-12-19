import Footer from "../../components/Footer/Footer";
import ShoppingItems from "../../components/shopping/ShoppingItems";
import { useEffect, useState } from "react";
import { useSearchContext } from "../../context/searchContext.jsx";
import { Axios } from "../../api/Aiox.jsx";

const BabyProducts = () => {
  const { searchResults } = useSearchContext();

  const [dress, setDress] = useState([]);

  const getCustomersData = async () => {
    try {
      const response = await Axios.get(
        `/api/products/category/dress`
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

  useEffect(() => {
    if (searchResults.length > 0) {
      const filteredResults = searchResults.filter(
        (item) => item.category === "dress"
      );
      setDress(filteredResults);
    }
  }, [searchResults]);
  return (
    <div>
      <ShoppingItems item={dress} />
      <Footer />
    </div>
  );
};

export default BabyProducts;
