import { FaShippingFast, FaDollarSign, FaHeadset } from "react-icons/fa";
import Heading from "../Shared/Heading";

const HeroSection = () => {
  return (
    <>
    <div className="w-full bg-pink-100 items-center justify-center text-center relative px-4 h-[36rem] -z-10 mb-24">
      <div className="w-full max-w-6xl flex flex-col md:flex-row mx-auto relative py-16">
        <div>
          <button
            className="bg-pink-600 text-[1rem] relative text-white h-24 w-24 px-2 rounded-full z-40 "
            style={{ left: "28rem" , top: "0rem"}}
          >
            FOR MEN
          </button>
          <button
            className="bg-pink-600 text-[.8rem]  relative text-white h-20 w-20 px-2 rounded-full z-40"
            style={{ left: "58rem", top: "7rem" }}
          >
            FOR KID
          </button>
          <h1 className="text-4xl md:text-[5.2rem] text-start font-bold font-georgia text-pink-600 leading-[5rem]">
            Dressed to Be Noticed.
          </h1>
          <button className="bg-gray-800 text-[.8rem] text-white h-12 w-52 rounded-full">
            TRENDY COLLECTIONS
          </button>
        </div>
        <div className="flex w-36rem] z-0">
          <div className="relative w-[50rem] h-[63rem] top-[-8rem]">
            <div className="w-[100%] h-[75%] bg-white rounded-full flex items-center justify-center z-10">
              <div className="w-[68%] h-[70%]  bg-pink-100 rounded-full flex items-center justify-center z-10">
                <div className="w-[55%] h-[54%] bg-gray-300 rounded-full flex items-center justify-center z-10">
                  <img
                    src="/src/assets/women/women2.jpg"
                    alt="Fashion Model"
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 z-20 mt-[-4rem] -top-[35rem] relative">
        <div className="p-4 bg-snow-gradient rounded-lg shadow-md text-center flex-1">
          <FaShippingFast className="mx-auto mb-2 text-pink-600" size={40} />
          <h3 className="text-lg font-semibold">Free Delivery</h3>
          <p>Explore our edit of everything that ships within 24 hours.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-20 rounded-lg shadow-md text-center flex-1">
          <FaDollarSign className="mx-auto mb-2 text-pink-600" size={40} />
          <h3 className="text-lg font-semibold">100% Money Back Guarantee</h3>
          <p>Don't like the product? You will have your money back.</p>
        </div>
        <div className="p-4 w-96 bg-snow-gradient bg-opacity-20 rounded-lg shadow-md text-center flex-1">
          <FaHeadset className="mx-auto mb-2 text-pink-600" size={40} />
          <h3 className="text-lg font-semibold">24x7 Support</h3>
          <p>We are here to help you whenever you feel needed.</p>
        </div>
      </div>

  
  

    </div>
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        </>
  );
};

export default HeroSection;
