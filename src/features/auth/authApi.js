import apiSlice from "../api/apiSlice";
// import { signInWithGoogle } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/auth/signup",
        body: data,
      }),

      providesTags: ["auth"],
    }),
    login: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/auth/login",
        body: data,
      }),

      invalidatesTags: ["auth"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        method: "PATCH",
        url: "/auth/update",
        body: data,
      }),
    }),
    // all users get
    getUsers: builder.query({
      query: () => ({
        url: "/auth/users",
      }),
      providesTags: ["auth"],
    }),
    // get user
    getUser: builder.query({
      query: (id) => ({
        url: `/auth/user/${id}`,
      }),
      providesTags: ["auth"],
    }),
    // get admin
    getAdmin: builder.query({
      query: () => ({
        url: `/auth/admin`,
      }),
      providesTags: ["auth"],
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
