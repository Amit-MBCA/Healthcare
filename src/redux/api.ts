import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// A mock baseQuery that just resolves after a timeout to simulate API latency
const mockQuery = async (args: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: args.mockResponse });
    }, 2000);
  });
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: mockQuery as any,
  endpoints: (builder) => ({
    login: builder.mutation<any, Partial<any>>({
      query: (credentials) => ({
        mockResponse: { user: { email: credentials.email }, token: 'mock-token-123' },
      }),
    }),
    uploadPrescription: builder.mutation<any, any>({
      query: (fileData) => ({
        mockResponse: { success: true, message: 'Uploaded successfully' },
      }),
    }),
  }),
});

export const { useLoginMutation, useUploadPrescriptionMutation } = api;
