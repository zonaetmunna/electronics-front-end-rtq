import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import counterReducer from "../features/counter/counterSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cart: cartReducer,
    counter: counterReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
