import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminUser() {

  const navigate = useNavigate();
  const [customersData, setCustomersData] = useState([]);

  const getCustomersData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/admin/users");
      setCustomersData(response.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/api/delete-user/${id}`);
      getCustomersData();
    } catch (error) {
      console.error("Error deleting customer data:", error);
    }
  };

  useEffect(() => {
    getCustomersData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <div className="h-1 bg-gray-800 mb-6"></div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Username</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          {customersData.length > 0 ? (
            <tbody>
              {customersData.map((post, index) => (
                <tr key={post._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{post.name}</td>
                  <td className="px-4 py-2 border">{post.username}</td>
                  <td className="px-4 py-2 border">{post.email}</td>
                  <td className="px-4 py-2 border text-center">
                    <div className="flex space-x-2 justify-center">
                      <button
                        onClick={() => deleteData(post._id)}
                        className="text-sm px-3 py-1 border border-gray-800 rounded hover:bg-gray-800 hover:text-white"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => navigate(`/adminpage/edit-user/${post._id}`)}
                        className="text-sm px-3 py-1 border border-gray-800 rounded hover:bg-gray-800 hover:text-white"
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="5" className="px-4 py-2 text-center">
                  No users available
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default AdminUser;
