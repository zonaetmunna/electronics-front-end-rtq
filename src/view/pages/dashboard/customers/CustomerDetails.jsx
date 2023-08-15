import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../../../features/auth/authApi";

const CustomerDetails = () => {
  const { id } = useParams(); // Assuming you have a dynamic parameter named "customerId"
  // redux toolkit query api call
  const { data, isLoading, isError, error } = useGetUserQuery(id);
  const user = data;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {isLoading ? (
          <p>Loading customer details...</p>
        ) : isError ? (
          <p>Error loading customer details: {error.message}</p>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Customer Details - {user?.firstName}
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <p>
                <strong>Customer ID:</strong> {user?._id}
              </p>
              <p>
                <strong>First Name:</strong> {user.firstName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              {/* ... other customer details */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
