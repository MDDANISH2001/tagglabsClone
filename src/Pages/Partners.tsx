import React from "react";
import { StackCard } from "../Components/StickyContainer/StackCard";
import {
  lakme,
  nasscom,
  uber,
  amazon,
  yesBank,
  zee5,
  youtube,
  hero,
  vistara,
  netflix,
  honda,
  dubai,
  icici,
  taj,
  abbott,
  aprilia,
  novartis,
  kotak,
  loreal,
} from "../assets";

export const Partners: React.FC = () => {
  const partenrsArray = [
    lakme,
    nasscom,
    uber,
    amazon,
    yesBank,
    zee5,
    youtube,
    hero,
    vistara,
    netflix,
    honda,
    dubai,
    icici,
    taj,
    abbott,
    aprilia,
    novartis,
    kotak,
    loreal,
  ];
  return (
    <div className="text-white bg-black px-8 sticky top-0 -z-50">
      <StackCard
        contentClassName="lg:!w-[90%] !w-full"
        className="text-white z-[50] h-fit gap-6 w-full flex items-center flex-col"
      >
        <div className="w-full border font-semibold text-xl flex justify-between text-white border-b-white border-x-0 border-t-0 verticalDesc">
          <label>Our Partners</label>
          <label>// 06</label>
        </div>

        <div className="w-full text-indigo-700 h-full flex gap-6 justify-center items-center flex-col">
          <div className="w-full flex gap-6 justify-center items-center flex-wrap">
            {partenrsArray?.map((item, key) => (
              <div
                className="lg:w-[6rem] md:w-[4rem] w-[3rem] lg:h-[6rem] md:h-[4rem] h-[3rem] bg-white flex justify-center p-2 rounded-full overflow-hidden"
                key={key}
              >
                <img src={item} alt="logo" className="object-contain" />
              </div>
            ))}
          </div>

          <div className="verticalDesc md:text-[35px] text-[25px] text-center font-semibold text-white">
            We produce award worthy work, but don’t just take our word for it
          </div>
        </div>
      </StackCard>
    </div>
  );
};
