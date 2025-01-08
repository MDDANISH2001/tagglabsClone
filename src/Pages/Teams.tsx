import React from "react";
import { teams } from "../assets";

export const Teams: React.FC = () => {
  return (
    <div className="py-10 text-[#dbff00] bg-black flex flex-col justify-center items-center">
      <button className="bg-[#dbff00] text-black p-2 px-6 rounded-full font-semibold md:text-base text-sms">
        Let's Talk
      </button>

      <label className="lg:text-[5rem] md:text-[4rem] text-[2.5rem] verticalsHeading">
        THE TEAM
      </label>

      <img src={teams} alt="teamsImg" />
    </div>
  );
};
