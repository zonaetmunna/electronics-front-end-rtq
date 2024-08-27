import { baseApi } from '../api/baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (userInfo) => ({
				url: '/auth/login',
				method: 'POST',
				body: userInfo,
			}),
		}),
		// get me
		getMe: builder.query({
			query: () => ({
				url: '/user/me',
				method: 'GET',
			}),
		}),
	}),
});

export const { useLoginMutation, useGetMeQuery } = authApi;

/* import apiSlice from '../api/apiSlice';

const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				method: 'POST',
				url: '/user/create-customer',
				body: data,
			}),

			providesTags: ['auth'],
		}),
		login: builder.mutation({
			query: (data) => ({
				method: 'POST',
				url: '/auth/login',
				body: data,
			}),

			invalidatesTags: ['auth'],
		}),
		updateUser: builder.mutation({
			query: (data) => ({
				method: 'PATCH',
				url: '/auth/update',
				body: data,
			}),
		}),
		// all users get
		getUsers: builder.query({
			query: () => ({
				url: '/auth/users',
			}),
			providesTags: ['auth'],
		}),
		// get user
		getUser: builder.query({
			query: (id) => ({
				url: `/auth/user/${id}`,
			}),
			providesTags: ['auth'],
		}),
		// get admin
		getAdmin: builder.query({
			query: () => ({
				url: `/auth/admin`,
			}),
			providesTags: ['auth'],
		}),
	}),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useGetUsersQuery,
	useGetUserQuery,
	useGetAdminQuery,
} = authApi;
 */
