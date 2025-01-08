import React from "react";
import { ImCross } from "react-icons/im";

export const Experience: React.FC = () => {
  return (
    <div className="lg:text-[28px] md:text-[22px] text-base h-[100vh] md:flex-row flex-col px-10 overflow-hidden gap-8 bg-black text-yellow-500 flex justify-center items-center">
      <label className="verticalDesc font-bold flex md:w-[25%] md:text-start text-center items-center">
        Over 13 years of experience working with largest conglomerates.
      </label>

      <div className="flex leading-none ">
        <div className="flex  w-fit">
          <ImCross className="text-red-600" />
        </div>
        <label className="text-[38vw]  verticalsHeading">13</label>
        <div className="flex  w-fit items-center">
          <ImCross className="text-red-600" />
        </div>
      </div>

      <label className=" flex md:w-[25%] md:text-start text-center items-end verticalDesc font-bold md:h-[35vw]">
        We are teenagers now and ready to conquer the world
      </label>
    </div>
  );
};
