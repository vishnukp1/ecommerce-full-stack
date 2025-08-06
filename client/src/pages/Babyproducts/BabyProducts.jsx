import Footer from "../../components/Footer/Footer";
import ShoppingItems from "../../components/shopping/ShoppingItems";
import { useEffect, useRef, useState } from "react";
import { useSearchContext } from "../../context/searchContext.jsx";
import { Axios } from "../../api/Aiox.jsx";
import kidheader from "../../assets/assets/kidsitem/headern.webp";
import kidbanner from "../../assets/assets/kidsitem/kides.png";
import kidbanner2 from "../../assets/assets/kidsitem/kides2.png";

const BabyProducts = () => {
  const { searchResults } = useSearchContext();
  const [dress, setDress] = useState([]);
  const initialDataRef = useRef([]);

  const getCustomersData = async () => {
    try {
      const response = await Axios.get(`/api/products/category/dress`);
      setDress(response.data);
      initialDataRef.current = response.data; // ✅ Save original data
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
    } else {
      setDress(initialDataRef.current); // ✅ Reuse original data when no search
    }
  }, [searchResults]);

  return (
    <div className="bg-pink-50 min-h-screen">
      {/* Hero Banner */}
      <section className="w-full bg-pink-50 text-center py-10  rounded-b-[1rem] shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Adorable Baby Outfits
        </h1>
        <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
          Soft, safe, and stylish clothing for your little ones. Discover our
          baby-friendly picks designed for comfort and cuteness.
        </p>
      </section>

      <img
        src={kidheader}
        alt="Baby Products"
        className="w-full mx-auto mt-2 shadow-lg"
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6 px-4">
        <img
          src={kidbanner}
          alt="Baby Banner 1"
          className="w-full md:w-[48%] rounded-xl shadow-lg"
        />
        <img
          src={kidbanner2}
          alt="Baby Banner 2"
          className="w-full md:w-[48%] rounded-xl shadow-lg"
        />
      </div>

      <div className="text-center bg-pink-100 py-8 px-4">
        <h3 className="text-4xl font-light text-gray-800 mb-2">
          The Gift Of
        </h3>
        <h3 className="text-4xl font-medium text-gray-800">
          Endless Fusion Choices
        </h3>
      </div>

      {/* Products Section */}
      <section className=" mx-auto py-10">
        {dress.length > 0 ? (
          <ShoppingItems item={dress} />
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-600">No baby products found.</h2>
            <p className="text-sm text-gray-500">
              Try searching with different terms.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default BabyProducts;
