import React from "react";
import { StackCard } from "../Components/StickyContainer/StackCard";
import { useRefStore } from "../store/useGlobalStore";

export const Verticals: React.FC = () => {
    const { refs } = useRefStore();
  
  return (
    <>
      <StackCard className="bg-white text-black h-[100vh] w-[100vw] bg-[url('/src/assets/vertical01.png')] bg-no-repeat bg-right">
        <div className="w-full px-6 border font-semibold text-xl flex justify-between text-indigo-700 border-b-indigo-700 border-x-0 border-t-0 verticalDesc">
          <label>Vertical 01</label>
          <label>// 01</label>
        </div>

        <div ref={refs.creativeEng} className="w-full text-indigo-700 h-full flex flex-col gap-6 justify-center px-10">
          <label className="w-[60%] verticalsHeading md:text-[5.5rem] text-[3.5rem] font-medium flex flex-col md:leading-[5.5rem] leading-[3.5rem] md:min-w-[400px] min-w-[300px]">
            CREATIVE
            <span>ENGINEERING</span>
          </label>

          <label className="md:text-[2rem] text-[1.5rem] verticalDesc font-bold">
            We specialize in crafting marketing campaigns that truly stand out,
            and our secret sauce lies in harnessing the power of emerging
            technologies. Keep an eye out for our magical touch during the
            upcoming Cricket World Cup!
          </label>
        </div>
      </StackCard>

      <StackCard className="bg-indigo-700 flex flex-col justify-end items-end h-[100vh] w-[100vw] bg-[url('/src/assets/vertical02.png')] bg-no-repeat bg-left">
        <div className="w-full px-6 border font-semibold text-xl flex justify-between text-yellow-400 border-b-yellow-700 border-x-0 border-t-0 verticalDesc">
          <label>Vertical 02</label>
          <label>// 02</label>
        </div>

        <div ref={refs.digitalEng} className="w-full text-yellow-400 h-full flex flex-col gap-6 justify-center px-10">
          <label className="w-[60%] verticalsHeading md:text-[5.5rem] text-[3.5rem] font-medium flex flex-col md:leading-[5.5rem] leading-[3.5rem] md:min-w-[400px] min-w-[300px]">
            DIGITAL
            <span>ENGINEERING</span>
          </label>

          <label className="md:text-[2rem] text-[1.5rem] verticalDesc font-bold">
            We work on cutting edge feature development in Digital Products (
            Apps and softwares ), making them more capable, intuitive and
            immersive in user experience, if we succeed it looks like Sci Fi
            more often than not.
          </label>
        </div>
      </StackCard>

      <StackCard className="bg-purple-600 h-[100vh] w-[100vw] bg-[url('/src/assets/vertical03.png')] bg-no-repeat bg-right">
        <div className="w-full px-6 border font-semibold text-xl flex justify-between text-white border-b-white border-x-0 border-t-0 verticalDesc">
          <label>Vertical 03</label>
          <label>// 03</label>
        </div>

        <div ref={refs.experienceEng} className="w-full text-white h-full flex flex-col gap-6 justify-center px-10">
          <label className="w-[60%] verticalsHeading md:text-[5.5rem] text-[3.5rem] font-medium flex flex-col md:leading-[5.5rem] leading-[3.5rem] md:min-w-[400px] min-w-[300px]">
            EXPEIRIENCE
            <span>ENGINEERING</span>
          </label>

          <label className="md:text-[2rem] text-[1.5rem] verticalDesc font-bold">
            Here we create immersion, surprise and delight in real world
            experience ( at events, spaces , exhibitions ) Fun Fact : we have
            given many firsts to the event industry , some of the popular and
            regular interactive experiences at global events were just a
            campaign innovation by tagglabs in the past.{" "}
          </label>
        </div>
      </StackCard>
    </>
  );
};
