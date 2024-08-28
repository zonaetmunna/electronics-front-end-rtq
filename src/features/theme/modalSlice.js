/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	addProductModal: false,
	editProductModal: false,
	deleteProductModal: false,
};

const modalSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		openModal: (state, action) => {
			state[action.payload] = true;
		},
		closeModal: (state, action) => {
			state[action.payload] = false;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
