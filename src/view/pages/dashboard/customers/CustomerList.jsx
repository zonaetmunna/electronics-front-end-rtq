import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../../../features/auth/authApi";

const CustomerList = () => {
  // redux toolkit query api call
  const { data, isLoading, isError, isSuccess, error } = useGetUsersQuery();
  const users = data;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Customer List</h2>

        {isLoading ? (
          <p>Loading customer data...</p>
        ) : isError ? (
          <p>Error loading customer data: {error.message}</p>
        ) : isSuccess ? (
          <div>
            {/* Customer List */}
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-sm font-semibold uppercase">
                  <th className="py-3 px-4">Customer ID</th>
                  <th className="py-3 px-4">First Name</th>
                  <th className="py-3 px-4">Last Name</th>
                  <th className="py-3 px-4">Email</th>
                  {/* ... other columns */}
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <Link to={`/dashboard/customer/${user._id}`}>
                        {user._id}
                      </Link>
                    </td>
                    <td className="py-3 px-4">{user.firstName}</td>
                    <td className="py-3 px-4">{user.lastName}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    {/* ... other columns */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <nav className="flex items-center justify-between">
            <button className="py-1 px-3 bg-gray-200 rounded-lg">
              Previous
            </button>
            <span className="mx-2 text-gray-700">Page 1 of 5</span>
            <button className="py-1 px-3 bg-gray-200 rounded-lg">Next</button>
          </nav>
        </div>

        {/* Modal */}
        {/* ... Add your modal component here */}
      </div>
    </div>
  );
};

export default CustomerList;
