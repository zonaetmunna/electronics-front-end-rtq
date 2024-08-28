import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { baseApi } from '../features/api/baseApi';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import counterReducer from '../features/counter/counterSlice';
import filterReducer from '../features/filter/filterSlice';
import settingsReducer from '../features/settings/settingsSlice';
import modalReducer from '../features/theme/modalSlice';
import wishlistReducer from '../features/wishlist/wishListSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'auth',
		'brand',
		'category',
		'message',
		'order',
		'product',
		'cart',
		'wishlist',
		'settings',
	], // List of reducers to persist
};
const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		[baseApi.reducerPath]: baseApi.reducer,
		auth: authReducer,
		cart: cartReducer,
		wishlist: wishlistReducer,
		counter: counterReducer,
		filter: filterReducer,
		settings: settingsReducer,
		modals: modalReducer,
	})
);

export const store = configureStore({
	reducer: persistedReducer, // Use the persisted reducer
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export const persistor = persistStore(store);
