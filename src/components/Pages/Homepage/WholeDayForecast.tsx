import React from "react";
import { DayCard } from "./SubComponents";

export default function WholeDayForecast(props) {
  return (
    <div className="w-full text-white bg-side-black h-[30vh] flex flex-col justify-evenly pl-3 rounded-3xl">
      <p className="">TODAY'S FORECAST</p>
      <div className=" flex">
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </div>
    </div>
  );
}
