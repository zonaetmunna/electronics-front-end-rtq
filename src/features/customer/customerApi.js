import { baseApi } from '../api/baseApi';

const customerApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllCustomers: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.forEach((item) => {
						params.append(item.name, item.value);
					});
				}

				return {
					url: '/customer',
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

		addCustomer: builder.mutation({
			query: (data) => ({
				url: '/user/create-customer',
				method: 'POST',
				body: data,
			}),
		}),

		getCustomer: builder.query({
			query: (id) => ({
				url: `/customer/${id}`,
				method: 'GET',
			}),
		}),

		updateCustomer: builder.mutation({
			query: (data) => ({
				url: `/customer/${data.id}`,
				method: 'PATCH',
				body: data,
			}),
		}),

		deleteCustomer: builder.mutation({
			query: (id) => ({
				url: `/customer/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useGetAllCustomersQuery,
	useGetCustomerQuery,
	useAddCustomerMutation,
	useUpdateCustomerMutation,
	useDeleteCustomerMutation,
} = customerApi;
