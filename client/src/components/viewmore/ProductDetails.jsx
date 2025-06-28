import React from "react";

const ProductDetail = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow-lg">
        {/* Left: Product Images */}
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/400"
            alt="Main Product"
            className="w-full max-w-sm rounded-lg shadow"
          />
          <div className="mt-4 flex gap-2">
            {["1", "2", "3"].map((i) => (
              <img
                key={i}
                src={`https://via.placeholder.com/80?text=${i}`}
                alt={`Thumbnail ${i}`}
                className="w-16 h-16 rounded border cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Sample Product Title with Long Name</h1>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">★★★★☆</span>
            <span className="text-sm text-gray-600">(2,540 ratings)</span>
          </div>

          <p className="text-green-600 font-semibold text-xl">
            ₹4,499 <span className="line-through text-gray-500 text-sm ml-2">₹5,999</span>
          </p>

          <p className="text-gray-600 text-sm">
            Inclusive of all taxes | Free delivery by{" "}
            <span className="font-medium">Monday, July 1</span>
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">Highlights</h2>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>8 GB RAM | 128 GB ROM</li>
              <li>6.5-inch Full HD+ Display</li>
              <li>50MP + 8MP + 2MP | 16MP Front Camera</li>
              <li>5000 mAh Battery with Fast Charging</li>
              <li>Snapdragon Processor</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow">
              Buy Now
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Sold by <span className="text-blue-600 font-medium">BestSeller Retail</span> and Fulfilled by Example
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
