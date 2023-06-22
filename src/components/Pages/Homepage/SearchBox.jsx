import React, { useState } from "react";
import { citiesActions } from "../../Features/cities/citiesSlice";
import { store } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBox() {
  const cities = useSelector((state) => state.cityReducer.cities);
  const defaultCity = useSelector((state) => state.cityReducer.defaultCity);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  console.log(defaultCity);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(citiesActions.setDefault(city));
      console.log(city);
      setCity("");
      console.log(defaultCity);
    }
  };

  return (
    <div className="bg-side-black w-full rounded-2xl">
      <input
        type="text"
        placeholder="Search Cities"
        className="w-full rounded-2xl h-9 p-3 text-white bg-side-black outline-0"
        value={city}
        onKeyDown={handleKey}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}
