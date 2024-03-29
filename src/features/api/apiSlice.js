import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_DEV_API,
	}),
	tagTypes: ['product', 'category', 'brand', 'auth', 'order', 'blog', 'message'],
	// eslint-disable-next-line no-unused-vars
	endpoints: (builder) => ({}),
});

export default apiSlice;
