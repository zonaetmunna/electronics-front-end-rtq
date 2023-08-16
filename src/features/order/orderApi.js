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
      query: (_id) => ({
        url: `/order/user/${_id}`,
      }),
      providesTags: ["order"],
    }),
    getSingleOrder: builder.query({
      query: (_id) => ({
        url: `/order/${_id}`,
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
    updateOrder: builder.mutation({
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
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
} = orderApi;
