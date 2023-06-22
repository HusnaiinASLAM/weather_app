import React, { useEffect } from "react";
import { useGetAllProductsApi } from "../../Features/Api/apiSlice";
import ClipLoader from "react-spinners/ClipLoader";

export default function Forecast() {
  const { data, isSuccess } = useGetAllProductsApi({ city: "lahore" });

  if (isSuccess) {
    console.log(data);
  }

  return (
    <>
      <h1>Forecast</h1>
    </>
  );
}
