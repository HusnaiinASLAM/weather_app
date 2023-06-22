import React from "react";
export default function OneDay(props) {
  const data = props.data;

  const epochTime = data.dt;
  const dateObj = new Date(epochTime * 1000); // Multiply by 1000 to convert seconds to milliseconds
  const dayOfWeek = dateObj.toLocaleDateString("en-US", { weekday: "long" });

  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const des = data.weather[0].description;
  const temp = data.main.temp;
  return (
    <>
      <div className=" p-4 pt-2 w-full">
        <div
          className="  w-full flex  items-center justify-between  border-b-[.5px] border-l-white
      "
        >
          <p className=" font-bold "> {dayOfWeek}</p>
          <div>
            <img src={icon} alt="" className=" w-16" />
          </div>
          <p> {des}</p>
          <p> {temp}&deg;C</p>
        </div>
      </div>
    </>
  );
}
