import apiSlice from "../api/apiSlice";

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrder: builder.query({
      query: () => ({
        url: "/order",
      }),
      providesTags: ["order"],
    }),
    getUserOrder: builder.query({
      query: (email) => ({
        url: `/order/${email}`,
      }),
      providesTags: ["order"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
      }),
      providesTags: ["order"],
    }),
    addOrder: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/order/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetOrderQuery,
  useGetUserOrderQuery,
  useAddOrderMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = orderApi;
