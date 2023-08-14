import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetUserOrderQuery } from "../../../features/order/orderApi";
import Loading from "../../components/common/Spinner/Loading";

const ProfileOrders = () => {
  const {
    user: {_id, email, role },
  } = useSelector((state) => state.auth);
  const { data, isLoading, isError, isSuccess } = useGetUserOrderQuery(_id);
  const orderData = data;

  useEffect(() => {
    if (isSuccess) {
      console.log(orderData);
    }
    if (isLoading) {
      return <Loading />;
    }
    if (isError) {
      return <p>{isError.message}</p>;
    }
  }, [isSuccess, isLoading, orderData, isError]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Total Amount</th>
              {/* ... other header columns */}
            </tr>
          </thead>
          <tbody>
            {orderData &&
              orderData?.map((order) => (
                <tr key={order._id} className="border-t border-gray-200">
                  <td className="py-2 px-4">{order._id}</td>
                  <td className="py-2 px-4">{order.status}</td>
                  <td className="py-2 px-4">${order.totalAmount.toFixed(2)}</td>
                  {/* ... other columns */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileOrders;
