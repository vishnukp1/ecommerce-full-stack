import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../api/Aiox";

const AdminEdit = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    image: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Axios.get(
          `/api/admin/products/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/admin/products/${id}`, {
        title: data.title,
        image: data.image,
        price: data.price,
        category: data.category,
        description: data.description,
      });
      navigate("/adminpage/adminproduct");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Edit Product</h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="title"
            name="title"
            placeholder="Enter product title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            value={data.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="price"
            name="price"
            placeholder="Enter price"
            value={data.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="description"
            name="description"
            placeholder="Enter description"
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="category"
            name="category"
            placeholder="Enter category"
            value={data.category}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminEdit;
