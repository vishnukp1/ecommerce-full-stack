import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../api/Aiox"; // ✅ use this everywhere

const AdminEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    title: "",
    image: "",
    price: "",
    category: "",
    subcategory: "", // ✅ added subcategory
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Axios.get(`/api/admin/products/${id}`);
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
      await Axios.put(`/api/admin/products/${id}`, {
        title: data.title,
        image: data.image,
        price: data.price,
        category: data.category,
        subcategory: data.subcategory, // ✅ include subcategory in PUT
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

        {/* Title */}
        <InputField id="title" label="Title" value={data.title} onChange={handleChange} />

        {/* Image */}
        <InputField id="image" label="Image URL" value={data.image} onChange={handleChange} />

        {/* Price */}
        <InputField id="price" label="Price" value={data.price} onChange={handleChange} />

        {/* Description */}
        <InputField id="description" label="Description" value={data.description} onChange={handleChange} />

        {/* Category */}
        <InputField id="category" label="Category" value={data.category} onChange={handleChange} />

        {/* ✅ Subcategory */}
        <InputField id="subcategory" label="Subcategory" value={data.subcategory} onChange={handleChange} />

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

const InputField = ({ id, label, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={`Enter ${label.toLowerCase()}`}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
);

export default AdminEdit;
