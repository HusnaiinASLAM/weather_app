import React from "react";
export default function CityForecast(props) {
  const z = 0;
  const data = props.data;
  const id = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className=" h-[30vh] w-full flex text-white">
      <div>
        <div className="pl-7">
          <p className="  font-sans font-bold text-3xl pt-7 ">{data.name}</p>
          <p>{data.weather[0].description}</p>
          <p className="  font-sans font-bold text-5xl pt-10">
            {data.main.temp_max}&deg;C
          </p>
        </div>
      </div>
      <div>
        <img
          src={id}
          alt="weather image"
          className="  m-0 aspect-square w-49 ml-[24%]"
        />
      </div>
    </div>
  );
}
