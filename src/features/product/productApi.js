import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => {
        const {
          category,
          search,
          page,
          limit,
          minPrice,
          maxPrice,
          ...restParams
        } = params || {};
        const query = {};

        if (category) {
          query.category = category;
        }

        if (search) {
          query.search = search;
        }

        if (page && limit) {
          query.page = page;
          query.limit = limit;
        }

        if (minPrice !== undefined) {
          query.minPrice = minPrice;
        }

        if (maxPrice !== undefined) {
          query.maxPrice = maxPrice;
        }

        console.log(query);

        return {
          url: "/products",
          params: {
            ...query,
            ...restParams,
          },
        };
      },
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
} = productApi;
