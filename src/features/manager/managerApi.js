import { baseApi } from '../api/baseApi';

const customerApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllManagers: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.forEach((item) => {
						params.append(item.name, item.value);
					});
				}

				return {
					url: '/manager',
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

		addManager: builder.mutation({
			query: (data) => ({
				url: '/user/create-manager',
				method: 'POST',
				body: data,
			}),
		}),

		getManager: builder.query({
			query: (id) => ({
				url: `/manager/${id}`,
				method: 'GET',
			}),
		}),

		updateManager: builder.mutation({
			query: (data) => ({
				url: `/manager/${data.id}`,
				method: 'PATCH',
				body: data,
			}),
		}),

		deleteManager: builder.mutation({
			query: (id) => ({
				url: `/manager/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useGetAllManagersQuery,
	useAddManagerMutation,
	useDeleteManagerMutation,
	useGetManagerQuery,
	useUpdateManagerMutation,
} = customerApi;
