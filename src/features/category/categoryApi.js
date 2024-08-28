import { baseApi } from '../api/baseApi';

const categoryApi = baseApi.injectEndpoints({
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
					url: '/categories',
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
				url: `/categories/${id}`,
			}),
			providesTags: ['category'],
		}),
		addCategory: builder.mutation({
			query: (data) => ({
				url: '/categories',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['category'],
		}),
		updateCategory: builder.mutation({
			query: (id) => ({
				url: `/categories/${id}`,
			}),
		}),
		removeCategory: builder.mutation({
			query: (id) => ({
				url: `/categories/${id}`,
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
