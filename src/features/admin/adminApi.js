import { baseApi } from '../api/baseApi';

const adminApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllAdmins: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.forEach((item) => {
						params.append(item.name, item.value);
					});
				}

				return {
					url: '/admin',
					method: 'GET',
					params,
				};
			},
			transformResponse: (response) => {
				return {
					data: response.data,
					meta: response.meta,
				};
			},
		}),

		addAdmin: builder.mutation({
			query: (data) => ({
				url: '/admin',
				method: 'POST',
				body: data,
			}),
		}),

		getAdmin: builder.query({
			query: (id) => ({
				url: `/admin/${id}`,
				method: 'GET',
			}),
		}),

		updateAdmin: builder.mutation({
			query: (data) => ({
				url: `/admin/${data.id}`,
				method: 'PATCH',
				body: data,
			}),
		}),

		deleteAdmin: builder.mutation({
			query: (id) => ({
				url: `/admin/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useGetAllAdminsQuery,
	useAddAdminMutation,
	useDeleteAdminMutation,
	useGetAdminQuery,
	useUpdateAdminMutation,
} = adminApi;
