import apiSlice from '../api/apiSlice';

const categoryApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: (params) => {
				const { category, search, page, limit, ...restParams } = params || {};
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

				return {
					url: '/category',
					params: {
						...query,
						...restParams,
					},
				};
			},
			providesTags: ['category'],
		}),
		getCategory: builder.query({
			query: (id) => ({
				url: `/category/${id}`,
			}),
			providesTags: ['category'],
		}),
		addCategory: builder.mutation({
			query: (data) => ({
				url: '/category',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['category'],
		}),
		updateCategory: builder.mutation({
			query: (id) => ({
				url: `/category/${id}`,
			}),
		}),
		removeCategory: builder.mutation({
			query: (id) => ({
				url: `/category/${id}`,
				method: 'DELETE',
				body: id,
			}),
			invalidatesTags: ['category'],
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetCategoryQuery,
	useAddCategoryMutation,
	useUpdateCategoryMutation,
	useRemoveCategoryMutation,
} = categoryApi;
