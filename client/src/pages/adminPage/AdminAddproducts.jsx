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
      image: formRef.current.image.value,
      description: formRef.current.description.value,
    };

    await Axios
      .post(`/api/admin/products`, items)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.error("Error fetching customer data:", error);
     
      });

    formRef.current.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        ref={formRef}
        onSubmit={addItem}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add Product</h2>
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
          />
        </div>
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
