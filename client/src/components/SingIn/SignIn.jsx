import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3002/api/users/login", formData);
      localStorage.setItem("userId", data.id);
      alert("Login successful!");
      navigate("/cart");
    } catch (error) {
      alert("Error: " + error.response?.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="p-6 bg-white shadow-md rounded" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {["username", "password"].map((field) => (
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
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
