import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://electronics-backend-zonaetmunna.vercel.app/api' 
    }),
  tagTypes:["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url:"/products"
      }),
      providesTags:["products"]
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url:"/products",
        method:"POST",
        body:data
      }),
      invalidatesTags:["products"]
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url:`/products/${id}`,
        method:"DELETE",
        body:id
      }),
      invalidatesTags:["products"]
    }),
  }),
});

export const { 
  useGetProductsQuery,
  useAddProductMutation,
  useRemoveProductMutation} = productsApi;



