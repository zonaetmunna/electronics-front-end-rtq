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
    })
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
