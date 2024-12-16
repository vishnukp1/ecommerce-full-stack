import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import LOGO from "../../assets/assets/Screenshot__1925_-removebg-preview.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Fashion", href: "/fashion", current: false },
  { name: "Baby Products", href: "/babyproducts", current: false },
  { name: "Mobiles, Tablets & More", href: "/electronics", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchTerm) return;
    try {
      const response = await axios.get(`http://localhost:3002/api/stock/${searchTerm}`);

      console.log(response.data);
      
 
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="items-center -ml-32 mt-4">
                <img className="h-20 w-32" src={LOGO} alt="Your Company" />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => navigate(item.href)}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 xl:w-90">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="search"
                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-100 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-100 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-gray-600 text-white rounded"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => navigate("/cart")}
                >
                  <FaShoppingCart className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="relative ml-3">
                  {/* User profile dropdown */}
                </Menu>
              </div>
            </div>
            {searchResults.length > 0 && (
              <div className="bg-white p-4 mt-2 rounded shadow-lg">
                <ul>
                  {searchResults.map((item) => (
                    <li key={item._id} className="py-1">
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </Disclosure>
  );
}
