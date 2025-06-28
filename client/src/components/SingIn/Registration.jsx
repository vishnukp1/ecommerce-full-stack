import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../api/Aiox";

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
      await Axios.post("/api/users/register", formData);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "Registration failed"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 pt-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        {/* Branding */}
        <div className="text-sm font-semibold text-[#204289] mb-2 text-center">
          Powered By <span className="text-[#F46524]">CRES</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 pt-4 mb-2">
          Create an Account
        </h1>
        <p className="text-md text-center text-gray-600 mb-6">
          Sign up to get started
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {["username", "name", "email", "password"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700 mb-1 capitalize"
              >
                {field}
              </label>
              <input
                id={field}
                type={field === "password" ? "password" : "text"}
                name={field}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#204289] text-sm"
                placeholder={`Enter your ${field}`}
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-[#F46524] hover:bg-[#d6581f] text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Navigation to Login */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#204289] hover:underline cursor-pointer"
          >
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
