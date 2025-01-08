import React from "react";

interface IFeaturesCards {
  mainClassName?: string;
  cardHeading: string;
  cardDesc: string;
  cardFunc: () => void;
}
export const FeaturesCards: React.FC<IFeaturesCards> = ({
  mainClassName,
  cardHeading,
  cardDesc,
  cardFunc,
}) => {
  return (
    <div
      className={`${mainClassName} rounded-[2rem] flex flex-col p-8 gap-6 py-12 justify-center lg:max-w-[400px] md:max-w-[350px] max-w-[300px] md:min-w-[350px] min-w-[70vw]`}
    >
      <label className="md:text-[2.5rem] text-[1.5rem] font-bold flex flex-col md:leading-10 leading-7">
        {cardHeading.split(" ")[0]}
        <span className="font-normal">{cardHeading.split(" ")[1]}</span>
      </label>

      <label className="md:text-[1.5rem] font-semibold line-clamp-5 text-wrap h-fit leading-5">
        {cardDesc}
      </label>

      <a
        href="#"
        onClick={cardFunc}
        className="p-4 px-10 rounded-full font-bold bg-yellow-500 w-fit text-black"
      >
        Read More
      </a>
    </div>
  );
};
