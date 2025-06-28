import React, { useRef } from "react";
import { Axios } from "../../api/Aiox";

function AdminAddproducts() {
  const formRef = useRef(null);

  const addItem = async (e) => {
    e.preventDefault();

    const items = {
      title: formRef.current.title.value,
      price: formRef.current.price.value,
      category: formRef.current.category.value,
      subcategory: formRef.current.subcategory.value, // ✅ New field
      image: formRef.current.image.value,
      description: formRef.current.description.value,
    };

    try {
      const response = await Axios.post(`/api/admin/products`, items);
      console.log(response.data);
      formRef.current.reset();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        ref={formRef}
        onSubmit={addItem}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add Product</h2>

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-bold mb-2 text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter product title"
            className="input"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-bold mb-2 text-gray-700">
            Image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image URL"
            className="input"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-bold mb-2 text-gray-700">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price"
            className="input"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-bold mb-2 text-gray-700">
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Enter description"
            className="input"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-bold mb-2 text-gray-700">
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            placeholder="Enter category (e.g. electronic)"
            className="input"
          />
        </div>

        {/* ✅ Subcategory */}
        <div className="mb-4">
          <label htmlFor="subcategory" className="block text-sm font-bold mb-2 text-gray-700">
            Subcategory
          </label>
          <input
            id="subcategory"
            name="subcategory"
            type="text"
            placeholder="Enter subcategory (e.g. laptop)"
            className="input"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminAddproducts;
