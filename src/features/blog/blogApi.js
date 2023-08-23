import apiSlice from "../api/apiSlice";

const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (params) => {
        console.log(params);
        const {
          category,

          search,
          page,
          limit,

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

        console.log(query);

        return {
          url: "/blogs",
          params: {
            ...query,
            ...restParams,
          },
        };
      },
      providesTags: ["blog"],
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
      }),
      providesTags: ["blog"],
    }),
    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data.id}`,
        method: "PUT",
        body: { data },
      }),
      invalidatesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useAddBlogMutation,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
