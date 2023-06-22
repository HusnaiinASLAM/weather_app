import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org`,
  }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ city }) =>
        `/data/2.5/weather?q=${city}&appid=8157fd39ec60ef33f77d6b3e76bd2bc0&units=metric`,
    }),
    getAllWeek: builder.query({
      query: ({ city }) =>
        `/data/2.5/forecast?q=${city}&appid=8157fd39ec60ef33f77d6b3e76bd2bc0&units=metric`,
    }),
  }),
});

export const useGetAllProductsApi =
  productsApi.endpoints.getAllProducts.useQuery;

export const useGetAllWeekApi = productsApi.endpoints.getAllWeek.useQuery;

export default productsApi;
