import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import { Homepage } from "./components/Pages/Homepage/";
import Cities from "./components/Pages/Cities/";
import Forecast from "./components/Pages/Forecast/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Sidebar />}>
      <Route index element={<Homepage />} />
      <Route path="cities" element={<Cities />} />
      <Route path="forecast" element={<Forecast />} />
    </Route>
  )
);

export default router;
