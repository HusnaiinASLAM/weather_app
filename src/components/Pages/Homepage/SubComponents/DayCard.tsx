import React from "react";
export default function DayCard() {
  return (
    <div className="flex flex-col items-center  border-whit border-r-[.5px] border-l-white w-[14%]">
      <p className=" ">6:0 Am</p>
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt="weather image"
        className="  w-20 "
      />

      <p className=" font-bold">25&deg;C</p>
    </div>
  );
}
