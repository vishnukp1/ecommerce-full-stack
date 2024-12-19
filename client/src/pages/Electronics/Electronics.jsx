import ShoppingItems from "../../components/shopping/ShoppingItems";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { useSearchContext } from "../../context/searchContext";
import { Axios } from "../../api/Aiox";

const Electronics = () => {
  const { searchResults } = useSearchContext();
  const [electronic, setElectronic] = useState([]);

  const getCustomersData = async () => {
    try {
      const response = await Axios.get(`/api/products/category/electronic`);
      const responseData = response.data;

      console.log(responseData);
      setElectronic(responseData);
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
        (item) => item.category === "electronic"
      );
      setElectronic(filteredResults);
    }
  }, [searchResults]);
  return (
    <div>
      <div className="text-center mb-10 max-w-[87.5rem] mx-auto">
        <p data-aos="fade-up" className="text-lg text-primary mt-5">
          Top Selling Gadgets for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Gadgets
        </h1>
        <p data-aos="fade-up" className="text-sm text-gray-400 p-4">
          Explore our exclusive collection of gadgets, designed to combine
          cutting-edge technology and sleek design. From innovative smartphones
          to versatile smartwatches, find your perfect gadget.
        </p>
      </div>

      <ShoppingItems item={electronic} />
      <Footer />
    </div>
  );
};

export default Electronics;
