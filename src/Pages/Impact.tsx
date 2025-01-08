import React from "react";
import { StackCard } from "../Components/StickyContainer/StackCard";

export const Impact: React.FC = () => {
  return (
    <div className=" text-white bg-black px-8 sticky top-0 -z-50">
      <StackCard
        contentClassName="xl:!w-[90%] !w-full"
        className="text-white z-[50] h-[100vh] w-full flex items-center flex-col"
      >
        <div className="w-full border font-semibold text-xl flex justify-between border-b-white border-x-0 border-t-0 verticalDesc">
          <label>Impact</label>
          <label>// 05</label>
        </div>

        <div className="w-full py-10 verticalDesc md:text-[25px] text-base font-bold text-black h-full grid xl:grid-cols-3 xl:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
          <div className="impactContainer md:p-6 p-2 md:rounded-[30px] rounded-[20px] bg-gradient-to-r from-[#ffde59] to-[#ff914d]">
            <label>Successfully Delivered</label>

            <label className="impactContainerLargeLabel xl:text-[130px] lg:text-[90px] md:text-[70px] text-[50px]">
              2000+
            </label>

            <label>Projects</label>
          </div>

          <div className="impactContainer md:p-6 p-2 md:rounded-[30px] rounded-[20px] bg-[#c1ff72]">
            <label>Engaged More Than</label>

            <label className="impactContainerLargeLabel xl:text-[130px] lg:text-[90px] md:text-[70px] text-[50px]">
              100M
            </label>

            <label>People</label>
          </div>

          <div className="impactContainer md:p-6 p-2 md:rounded-[30px] rounded-[20px] bg-gradient-to-r from-[#ffde59] to-[#ff914d]">
            <label>Market Leader For</label>

            <label className="impactContainerLargeLabel xl:text-[130px] lg:text-[90px] md:text-[70px] text-[50px]">
              13+
            </label>

            <label>Years</label>
          </div>

          <div className="impactContainer md:p-6 p-2 md:rounded-[30px] rounded-[20px] bg-[#ff5757]">
            <label>Generated More Than</label>

            <label className="impactContainerLargeLabel xl:text-[130px] lg:text-[90px] md:text-[70px] text-[50px]">
              200+
            </label>

            <label>Happy Clients</label>
          </div>

          <div className="col-span-2 impactContainer md:p-6 p-2 md:rounded-[30px] rounded-[20px] bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9]">
            <label>Successfully Shipped Products To</label>

            <label className="impactContainerLargeLabel text-nowrap xl:text-[130px] lg:text-[90px] md:text-[70px] text-[50px]">
              10+ Countries
            </label>

            <label>and Counting</label>
          </div>
        </div>
      </StackCard>
    </div>
  );
};
