import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../api/Aiox";

function AdminProduct() {
  const navigate = useNavigate();
  const [state, setState] = useState([]);

  const getProductsData = async () => {
    try {
      const response = await Axios.get("/api/admin/products");
      const responseData = response.data;
      setState(responseData.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await Axios.delete(`/api/admin/products/${id}`);
      getProductsData(); // refresh product list
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">All Products</h2>
        <button
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate("/adminpage/addproduct")}
        >
          Add Product
        </button>
      </div>

      <div className="h-1 bg-gray-800 mb-6" />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Subcategory</th> {/* ✅ Added */}
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.length > 0 ? (
              state.map((post, index) => (
                <tr key={post._id} className="border-t border-gray-300 hover:bg-gray-100">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{post.title}</td>
                  <td className="py-2 px-4">
                    <img
                      className="h-20 w-20 object-cover rounded"
                      src={post.image}
                      alt="Product"
                    />
                  </td>
                  <td className="py-2 px-4">₹{post.price}</td>
                  <td className="py-2 px-4">{post.category}</td>
                  <td className="py-2 px-4">{post.subcategory || "-"}</td> {/* ✅ Show subcategory */}
                  <td className="py-2 px-4">{post.description}</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2">
                      <button
                        className="text-sm px-3 py-1 border border-gray-800 rounded hover:bg-gray-800 hover:text-white"
                        onClick={() => deleteData(post._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="text-sm px-3 py-1 border border-gray-800 rounded hover:bg-gray-800 hover:text-white"
                        onClick={() => navigate(`/adminpage/adminedit/${post._id}`)}
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="py-4 text-center text-gray-500">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProduct;
