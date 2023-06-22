import React from "react";
import { AirCard } from "./SubComponents";
import temp from "../../../assets/temp.svg";
import wind from "../../../assets/wind.svg";
import droplet from "../../../assets/droplet.svg";
import sun from "../../../assets/sun.svg";
import bolt from "../../../assets/bolt-solid.svg";
import tornado from "../../../assets/tornado.svg";
import snowflake from "../../../assets/snowflake.svg";
import house from "../../../assets/house.svg";
export default function AirWidget(props) {
  const data = props.data;

  return (
    <div className=" w-full bg-side-black mt-5 h-[55vh]  rounded-3xl text-white">
      <div className=" ml-10 pt-6 ">
        <div className=" ">
          <p className="  ">Important Information</p>
        </div>
        <div className=" flex flex-wrap pt-3 ">
          <AirCard value={data.main.feels_like} text="Real Feel" url={temp} />
          <AirCard value={data.main.pressure} text="Air Pressure" url={wind} />
          <AirCard value={data.main.humidity} text="Humidity" url={droplet} />
          <AirCard value={data.wind.deg} text="Wind Degree" url={sun} />
          <AirCard value={data.wind.speed} text="Wind Speed" url={bolt} />
          <AirCard value={data.main.temp_max} text="Temp Max" url={tornado} />
          <AirCard value={data.main.temp_min} text="Temp Min" url={snowflake} />
          <AirCard value="88" text="Gust" url={house} />
        </div>
      </div>
    </div>
  );
}
