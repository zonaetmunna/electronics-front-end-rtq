import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import Loading from "./view/components/Loading";

function App() {
  const dispatch = useDispatch();
  /* useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch]); */

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
