import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "../Features/cities/citiesSlice";
import productsApi from "../Features/Api/apiSlice";

export const store = configureStore({
  reducer: { cityReducer, [productsApi.reducerPath]: productsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
