import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "electronicsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DEV_API,
  }),
  tagTypes: ["products", "auth"],
  endpoints: (builder) => ({}),
});
