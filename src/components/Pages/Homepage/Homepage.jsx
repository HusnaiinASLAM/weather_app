import React from "react";
import SearchBox from "./SearchBox";
import CityForecast from "./CityForecast";
import WholeDayForecast from "./WholeDayForecast";
import AirWidget from "./AirWidget";
import WeekForecast from "./WeekForecast";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../app/store";
import { citiesActions } from "../../Features/cities/citiesSlice";
import {
  useGetAllProductsApi,
  useGetAllWeekApi,
} from "../../Features/Api/apiSlice";
import { PersistGate } from "redux-persist/integration/react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Index() {
  const getDef = useSelector((state) => state.cityReducer.defaultCity);
  const { data, isSuccess, isError } = useGetAllProductsApi({
    city: "lahore",
  });
  console.log(getDef);

  store.dispatch(citiesActions.addCity("Lahore"));

  return (
    <div className=" w-full">
      {isSuccess ? (
        <div className="h-[150vh] w-full mt-6 flex">
          <div>
            <SearchBox />
            <CityForecast data={data} isSuccess={isSuccess} />

            <AirWidget data={data} />
          </div>
          <WeekForecast />
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
  );
}
//  ( ) : ( )}
