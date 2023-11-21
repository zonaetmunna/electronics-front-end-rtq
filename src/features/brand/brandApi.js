import apiSlice from '../api/apiSlice';

const brandApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getBrands: builder.query({
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
					url: '/brand',
					params: {
						...query,
						...restParams,
					},
				};
			},
			providesTags: ['brand'],
		}),
		getBrand: builder.query({
			query: (id) => ({
				url: `/brand/${id}`,
			}),
			providesTags: ['brand'],
		}),
		addBrand: builder.mutation({
			query: (data) => ({
				url: '/brand',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['brand'],
		}),
		updateBrand: builder.mutation({
			query: (id) => ({
				url: `/brand/${id}`,
			}),
		}),
		deleteBrand: builder.mutation({
			query: (id) => ({
				url: `/brand/${id}`,
				method: 'DELETE',
				body: id,
			}),
			invalidatesTags: ['brand'],
		}),
	}),
});

export const {
	useGetBrandsQuery,
	useGetBrandQuery,
	useAddBrandMutation,
	useUpdateBrandMutation,
	useDeleteBrandMutation,
} = brandApi;
