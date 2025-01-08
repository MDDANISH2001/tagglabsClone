import React from "react";

export const Work: React.FC = () => {
  return (
    <div className="w-[100vw] py-10 flex flex-col text-yellow-500 items-center justify-center gap-4 h-[100vh] bg-black verticalsHeading">
      <label className="md:text-[5rem] text-[4rem]">OUR WORK</label>

      <div className="lg:w-[60%] w-full">
        <iframe
          className="w-full h-[70vh]"
          src="https://www.youtube.com/embed/4-LgFxmsMA8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <button className="verticalDesc text-2xl text-black bg-yellow-500 p-2 px-8 font-semibold rounded-full">
        Show More
      </button>
    </div>
  );
};
