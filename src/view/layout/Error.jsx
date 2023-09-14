import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="bg-red-100 p-4 rounded-lg shadow-md">
      <h1 className="text-3xl text-red-600 font-bold">Oops!</h1>
      <p className="text-lg text-gray-800">
        Sorry, an unexpected error has occurred.
      </p>
      {error && (
        <p className="text-sm text-gray-600 mt-2">
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </div>
  );
};

export default Error;
