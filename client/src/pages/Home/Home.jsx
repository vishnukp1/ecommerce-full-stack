import Footer from "../../components/Footer/Footer";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import Navbar from "../../components/Navbar/Navbar";
import Productss from "../../components/NewItems/Products";
import Products from "../../components/Products/Products";
import CarouselItem from "../../components/Carousel/CarouselItem";
import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <MainCarousel />
      <Productss />
      <CarouselItem />
     
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
