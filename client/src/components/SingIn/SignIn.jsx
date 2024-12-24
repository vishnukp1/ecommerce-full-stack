import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../api/Aiox";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post(
        "/api/users/login",
        formData
      );
      localStorage.setItem("userId", data.id);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert("Error: " + error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <form
        className="p-8 bg-white shadow-lg rounded-lg w-full max-w-sm"
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        {["username", "password"].map((field) => (
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
              value={formData[field]} 
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 text-sm text-gray-700"
              placeholder={`Enter your ${field}`}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300"
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            Sign up here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
