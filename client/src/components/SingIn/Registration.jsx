import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const navigate = useNavigate();

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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
  <form
    className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md"
    onSubmit={handleSubmit}
    noValidate
  >
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
      Create an Account
    </h2>
    {["username", "password", "name", "email"].map((field) => (
      <div key={field} className="mb-4">
        <label
          htmlFor={field}
          className="block text-sm font-medium text-gray-700 capitalize"
        >
          {field}
        </label>
        <input
          id={field}
          type={field === "password" ? "password" : "text"}
          name={field}
          onChange={handleChange}
          required
          className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 text-sm text-gray-900"
          placeholder={`Enter your ${field}`}
        />
      </div>
    ))}
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300"
    >
      Register
    </button>
    <p className="text-center text-sm text-gray-500 mt-4">
      Already have an account?{" "}
      <a
          onClick={()=>navigate("/login")}
        className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Log in here
      </a>
    </p>
  </form>
</div>

  );
};

export default Register;
