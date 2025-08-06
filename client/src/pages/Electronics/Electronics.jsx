import { useEffect, useState, useRef } from "react";
import ShoppingItems from "../../components/shopping/ShoppingItems";
import Footer from "../../components/Footer/Footer";
import { useSearchContext } from "../../context/searchContext";
import music from "../../assets/assets/electic/Music.jpg";
import tech from "../../assets/assets/electic/Tech.jpg";
import headerimg from "../../assets/assets/electic/Header.gif";
import { Axios } from "../../api/Aiox";

const Electronics = () => {
  const { searchResults } = useSearchContext();
  const [electronics, setElectronics] = useState([]);
  const [phones, setPhones] = useState([]);
  const [earphones, setEarphones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const initialDataRef = useRef([]);

  // Group items into phones, earphones, laptops
  const groupBySubcategory = (items) => {
    setPhones(items.filter((item) => item.subcategory === "phone"));
    setEarphones(items.filter((item) => item.subcategory === "earphone"));
    setLaptops(items.filter((item) => item.subcategory === "laptop"));
  };

const getCustomersData = async () => {
  try {
    const response = await Axios.get(`/api/products/category/electronic`);
    const responseData = response.data;

    console.log("electric", responseData);

    setElectronics(responseData);
    initialDataRef.current = responseData; // <-- Save for fallback
    groupBySubcategory(responseData);      // <-- Group after fetch
  } catch (error) {
    console.error("Error fetching customer data:", error);
  }
};


  useEffect(() => {
    getCustomersData();
  }, []);

  // Search results filtering
  useEffect(() => {
    if (searchResults.length > 0) {
      const filtered = searchResults.filter(
        (item) => item.category === "electronic"
      );
      setElectronics(filtered);
      groupBySubcategory(filtered);
    } else {
      const fallback = initialDataRef.current;
      setElectronics(fallback);
      groupBySubcategory(fallback);
    }
  }, [searchResults]);

  const renderSection = (title, items) => {
    if (items.length === 0) return null;
    return (
      <section className="mt-16 -mx-14">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 ml-16">{title}</h3>
        <ShoppingItems item={items} />
      </section>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-10 px-6 rounded-b-[3rem] shadow-md">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
            Smart Tech, Smarter Living
          </h1>
          <p className="text-md md:text-lg max-w-2xl mx-auto text-gray-300">
            Explore cutting-edge gadgets with sleek aesthetics and smart features.
          </p>
          <img
            src={headerimg}
            alt="Tech Banner"
            className="w-full mt-8 rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Section Intro */}
      <div className="text-center mt-16 max-w-[87.5rem] mx-auto px-4">
        <p className="text-lg text-blue-500 font-semibold mb-1">
          Top Selling Gadgets for You
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Gadgets
        </h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Explore our exclusive collection of gadgets, combining cutting-edge
          technology with sleek design. From innovative smartphones to
          smartwatches, find your perfect tech companion.
        </p>
      </div>

      {/* Product Sections with Banners */}
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-1 py-8">
        {phones.length + earphones.length + laptops.length > 0 ? (
          <>
            {renderSection("Smartphones", phones)}

            {/* Banner 1 */}
            <div className="my-12">
              <img
                src={music}
                alt="Mid Banner 1"
                className="w-full max-h-96 object-cover rounded-xl shadow-md"
              />
            </div>

            {renderSection("Earphones", earphones)}

            {/* Banner 2 */}
            <div className="my-12">
              <img
                src={tech}
                alt="Mid Banner 2"
                className="w-full max-h-96 object-cover rounded-xl shadow-md"
              />
            </div>

            {renderSection("Laptops", laptops)}
          </>
        ) : (
          <div className="text-center text-gray-500 py-20">
            <h3 className="text-xl font-medium">No electronics found</h3>
            <p className="text-sm">
              Try searching for another category or product.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Electronics;
