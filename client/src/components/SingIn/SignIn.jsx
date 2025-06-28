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
      const { data } = await Axios.post("/api/users/login", formData);
      localStorage.setItem("userId", data.id);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "Login failed"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Branding */}
        <div className="text-sm font-semibold text-[#204289] mb-2 text-center">
          Powered By <span className="text-[#F46524]">CRES</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 pt-4 mb-2">
          Welcome Back!
        </h1>
        <p className="text-md text-center text-gray-600 mb-6">
          Please login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {["username", "password"].map((field) => (
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
                value={formData[field]}
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
            Log In
          </button>
        </form>

        {/* Navigation to Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#204289] hover:underline cursor-pointer"
          >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
