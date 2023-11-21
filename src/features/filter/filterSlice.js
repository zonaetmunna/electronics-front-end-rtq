/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchText: '',
	currentPage: 1,
	itemsPerPage: 12,
	selectedCategory: null,
	selectedBrand: null,
	minPrice: '',
	maxPrice: '',
	stock: false,
	sortBy: null,
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSearchText: (state, action) => {
			state.searchText = action.payload;
		},

		setSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
		setSelectedBrand: (state, action) => {
			state.selectedBrand = action.payload;
		},
		setMinPrice: (state, action) => {
			state.minPrice = action.payload;
		},
		setMaxPrice: (state, action) => {
			state.maxPrice = action.payload;
		},
		setStock: (state, action) => {
			state.stock = action.payload;
		},
		setSortBy: (state, action) => {
			state.sortBy = action.payload;
		},
		setItemsPerPage: (state, action) => {
			state.itemsPerPage = action.payload;
		},
		clearFilters: (state) => {
			state.selectedCategory = null;
			state.selectedBrand = null;
			state.minPrice = '';
			state.maxPrice = '';
			state.stock = false;
		},
	},
});

export const {
	setSearchText,
	setSelectedCategory,
	setSelectedBrand,
	setMinPrice,
	setMaxPrice,
	setStock,
	setSortBy,
	setItemsPerPage,
	clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
