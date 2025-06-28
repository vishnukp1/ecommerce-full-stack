import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center ml-12">
        {/* card section */}
        {data.map((data) => (
          <div key={data.id} className="p-5 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 duration-300">
            <div className="relative group">
              <img
                data-aos="zoom-in"
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md group-hover:opacity-100 transition-opacity duration-300"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-10 text-center justify-center items-center duration-200 rounded-md">
               
              </div>
            </div>
            <div className="leading-7 mt-4 ml-2 flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-lg">{data.title}</h2>
                <h2 className="font-bold text-xl text-primary"><span className="text-meduim">From</span> ${data.price}</h2>
              </div>
              <div className="text-center mt-4 w-28">
              <button className="bg-blue-50 text-gray-800 hover:bg-blue-100  px-3 py-1 text-[0.8rem] rounded-md shadow-md transition-colors duration-300">
                Add To Cart
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
