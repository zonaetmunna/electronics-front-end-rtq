import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { productsApi } from '../features/api/apiSlice';
import cartSlice from '../features/cart/cartSlice';
import counterReducer from '../features/counter/counterSlice';
import filterSlice from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]:productsApi.reducer,
    counter: counterReducer,
    cart:cartSlice,
    filter:filterSlice,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productsApi.middleware)
});
