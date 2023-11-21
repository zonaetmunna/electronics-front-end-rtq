/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	wishlist: [],
};

const wishlistSlice = createSlice({
	name: 'wishlist',
	initialState,
	reducers: {
		addToWishlist: (state, action) => {
			state.wishlist.push(action.payload);
		},
		removeFromWishlist: (state, action) => {
			// eslint-disable-next-line no-underscore-dangle
			state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);
		},
	},
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
