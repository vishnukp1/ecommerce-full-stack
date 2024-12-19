import Footer from "../../components/Footer/Footer";
import ShoppingItems from "../../components/shopping/ShoppingItems";
import { items } from "../../data/Fasion";
import HeroSection from "../../components/Herosection/Herosection";

const Fasion = () => {
  return (
    <div>
      <HeroSection />
      <ShoppingItems item={items} />
      <Footer />
    </div>
  );
};

export default Fasion;
