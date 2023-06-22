import React from "react";
import { Link } from "react-router-dom";

export default function Sidebaritem(props) {
  return (
    <>
      <div className=" grid place-items-center mt-10 ">
        <Link to={props.link} className="w-1/2 min-w-[40px] m-2">
          <img src={props.image} alt="" className=" " />
          {props.text}
        </Link>
      </div>
    </>
  );
}
