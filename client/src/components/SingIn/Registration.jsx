import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/api/users/register", formData);
      alert("Registration successful!");
    } catch (error) {
      alert("Error: " + error.response?.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="p-6 bg-white shadow-md rounded" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {["username", "password", "name", "email"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-gray-700 capitalize">{field}</label>
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
        ))}
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
