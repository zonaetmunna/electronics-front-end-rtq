import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleOrderQuery } from "../../../../features/order/orderApi";

const OrderDetails = () => {
  const { id } = useParams(); // Get the orderId from URL parameter
  const { data: order, isLoading, isError } = useGetSingleOrderQuery(id);
  const orderDetails = order?.data;
  console.log(orderDetails);
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Order Detail</h2>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-xl font-semibold mb-4">Order ID: {id}</h1>
          {isLoading ? (
            <p>Loading order details...</p>
          ) : isError ? (
            <p className="text-red-500">Error loading order details.</p>
          ) : (
            <div>
              <p className="mb-2">
                Total Amount:{" "}
                <span className="font-semibold">
                  ${orderDetails?.totalAmount}
                </span>
              </p>
              <p className="mb-2">
                Status:{" "}
                <span className="capitalize font-semibold">
                  {orderDetails?.status}
                </span>
              </p>
              {/* ... other order details */}
            </div>
          )}
        </div>

        {/* ... other components */}
      </div>
    </div>
  );
};

export default OrderDetails;
