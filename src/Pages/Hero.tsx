import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import heroStamp from "../assets/heroStamp.png";

export const Hero: React.FC = () => {
  return (
    <div className="h-fit p-4">
      <Navbar />

      <div className="flex items-end p-8">
        <div
          className={`flex w-full md:px-12 lg:bg-[url('/src/assets/heroPerson.png')] bg-no-repeat bg-contain h-[80vh]`}
          style={{
            backgroundPositionX: "right",
          }}
          >
          <div className="h-full w-full lg:w-[65%] bg-no-repeat bg-contain bg-transparent lg:bg-[url('/src/assets/heroTags.png')] bg-[url('/src/assets/heroResTags.png')]" 
            style={{
              backgroundPositionX: "left",
              backgroundPositionY: "center",
            }}
          />
        </div>

        <div className="md:flex hidden">
          <img src={heroStamp} alt="stamp" className="w-[8rem] bg-transparent animate-[spin_4s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};
