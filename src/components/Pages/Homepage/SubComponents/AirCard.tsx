import React from "react";
export default function AirCard({ text, url, value }) {
  return (
    <>
      <div className=" w-[20%] mt-2 mr-[30%]">
        <div className=" ">
          <div className=" flex gap-2   ">
            <img className=" w-3 " src={url} alt="" />

            <p>{text}</p>
          </div>
          <p className=" text-3xl font-bold ml-6 pt-1">{value}</p>
        </div>
      </div>
    </>
  );
}
