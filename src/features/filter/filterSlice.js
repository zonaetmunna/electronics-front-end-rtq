import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: false,
  brands: [],
  keywords: "",
  minPrice: null,
  maxPrice: null,
  minRating: null,
  maxRating: null,
  sortBy: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.stock = !state.stock;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    toggleBrands: (state, action) => {
      if (!state.brands.includes(action.payload)) {
        state.brands.push(action.payload);
      } else {
        state.brands = state.brands.filter((brand) => brand !== action.payload);
      }
    },
    setKeyword: (state, action) => {
      state.keywords = action.payload;
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
    setRatingRange: (state, action) => {
      state.minRating = action.payload.minRating;
      state.maxRating = action.payload.maxRating;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const {
  toggle,
  setBrands,
  toggleBrands,
  setKeyword,
  setPriceRange,
  setRatingRange,
  setSortBy,
} = filterSlice.actions;

export default filterSlice.reducer;
