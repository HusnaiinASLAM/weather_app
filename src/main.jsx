import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Approuter.tsx";
import productsApi from "./components/Features/Api/apiSlice.js";
import { Provider } from "react-redux";
import { store } from "./components/app/store.js";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ApiProvider api={productsApi}>
          <App />
        </ApiProvider>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
