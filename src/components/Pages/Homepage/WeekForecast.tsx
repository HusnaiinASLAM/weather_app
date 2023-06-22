import React from "react";
import OneDay from "./SubComponents/OneDay";
import { useGetAllWeekApi } from "../../Features/Api/apiSlice";
import ClipLoader from "react-spinners/ClipLoader";

export default function WeekForecast() {
  const { data, isSuccess } = useGetAllWeekApi({
    city: "Lahore",
  });

  // console.log(data.list[0]);

  return (
    <>
      <div className=" bg-side-black h-[73vh] w-[35%] ml-10 rounded-2xl pt-5 text-white mt-20">
        {isSuccess ? (
          <div>
            <p className=" pl-3 font-bold">5-Day Forecast</p>
            <OneDay data={data.list[0]} />
            <OneDay data={data.list[8]} />
            <OneDay data={data.list[16]} />
            <OneDay data={data.list[24]} />
            <OneDay data={data.list[32]} />
          </div>
        ) : (
          <ClipLoader
            color="white"
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            className=" mt-[35%]  ml-[70%]"
          />
        )}
      </div>
    </>
  );
}
