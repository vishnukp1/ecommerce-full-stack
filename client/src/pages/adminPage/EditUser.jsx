import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../api/Aiox";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get(
          `/api/admin/users/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  // Submit updated user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.put(`/api/update-user/${id}`, {
        name: data.name,
        username: data.username,
        email: data.email,
      });
      navigate("/adminpage/adminuser");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Edit User</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handleChange}
            placeholder="Enter username"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
