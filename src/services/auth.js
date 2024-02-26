import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://attendance-backend-0482ce4fc96b.herokuapp.com/api/auth' }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (loginInput) => ({
        url: '/login',
        method: 'POST',
        body: loginInput,
      }),
    }),
    validateOtp: builder.mutation({
      query: (otpInput) => ({
        url: '/otp',
        method: 'POST',
        body: otpInput,
      }),
    }),
  }),
});

export const { useSignInMutation, useValidateOtpMutation } = authApi;
