import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import Loading from "./view/components/common/Spinner/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
