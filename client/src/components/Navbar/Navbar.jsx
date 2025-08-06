import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSearchContext } from "../../context/searchContext";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Fashion", href: "/fashion", current: false },
  { name: "Baby Products", href: "/babyproducts", current: false },
  { name: "Mobiles, Tablets & More", href: "/electronics", current: false },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");
  const { setSearchResults } = useSearchContext();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = async () => {
    if (!searchTerm) return;

    if (isPreviewMode) {
      setPreviewHtml(searchTerm);
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3002/api/stock/${searchTerm}`
      );
      setSearchResults(response.data);
      setPreviewHtml("");
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <nav className="bg-white shadow-sm font-sans relative">
      <div className="bg-pink-500 text-white text-center py-1 text-xs">
        <p>Flash Sale! Up to 50% off on selected items. Shop now!</p>
      </div>

      <div className="container mx-auto px-4 py-3 flex items-center ">
        <div className="flex items-center">
          <img
            src="https://placehold.co/100x30/F3006B/FFFFFF?text=NYKAA"
            alt="Nykaa Logo"
            className="h-7 w-auto mr-6"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/100x30/F3006B/FFFFFF?text=NYKAA";
            }}
          />
        </div>

        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700 flex-grow">
          {navigation.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.href)}
              className="hover:text-pink-600 transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex-grow max-w-md mx-4 hidden lg:block ml-56 ">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              placeholder={
                isPreviewMode
                  ? "Write HTML/CSS/JS to preview"
                  : "Search on Nykaa"
              }
              className="w-80 pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6 ml-auto">
          <button className="hidden lg:flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-200 text-sm font-medium"   onClick={() => navigate("/login")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          
          </button>
          <button className="text-gray-700 hover:text-pink-600 transition-colors duration-200 relative"   onClick={() => navigate("/cart")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>

          <button
            className="lg:hidden text-gray-700 hover:text-pink-600"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
  <div className="lg:hidden bg-white py-2 shadow-md absolute w-full z-10">
    <div className="container mx-auto px-4">
      {/* Mobile Navigation Links */}
      <div className="flex flex-col space-y-2 text-sm font-medium text-gray-700 mb-4">
        {navigation.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              navigate(item.href);
              setIsMenuOpen(false); // Optional: close menu after navigation
            }}
            className="text-left hover:text-pink-600 transition-colors duration-200"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Search Input */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search on Nykaa"
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
)}


      {isPreviewMode && previewHtml && (
        <div className="p-4 mt-4 bg-white rounded shadow max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Live Code Preview
          </h2>
          <iframe
            title="code-preview"
            srcDoc={previewHtml}
            sandbox="allow-scripts"
            className="w-full h-[300px] border"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
