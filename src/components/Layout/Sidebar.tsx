import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebaritem from "./SidebarItem";
import home_image from "../../assets/home.png";
import cities_image from "../../assets/cities.png";
import forecast_image from "../../assets/forecast.png";

export default function Navbar() {
  return (
    <>
      <div className="flex bg-main-black">
        <div className="bg-side-black text-gray-200 inline-flex flex-col h-[95vh] w-1/9 min-w-fit m-6 rounded-xl">
          <Sidebaritem link="/" text="Home" image={home_image} />
          <Sidebaritem link="cities" text="Cities" image={cities_image} />
          <Sidebaritem
            link="forecast"
            text="Cast"
            image={forecast_image as string}
          />
        </div>
        <div className="h-screen overflow-auto flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  );
}
