import { onAuthStateChanged } from "firebase/auth";
import React, { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { getUser, toggleLoading } from "./features/auth/authSlice";
import auth from "./firebase/firebase.config";
import { router } from "./routes/routes";
import Loading from "./view/components/Loading";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Toaster />
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
