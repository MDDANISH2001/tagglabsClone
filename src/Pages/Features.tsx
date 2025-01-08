import React from "react";
import { FeaturesCards } from "../Components/FeaturesCard/FeaturesCards";
import { useRefStore } from "../store/useGlobalStore";

export const Features: React.FC = () => {
  const { refs } = useRefStore();
  
  const featuresCards = [
    {
      cardHead: "Creative Engineering",
      cardDesc:
        "We specialize in crafting marketing campaigns that truly stand out, and our secret sauce lies in harnessing the power of emerging technologies. Keep an eye out for our magical touch during the upcoming Cricket World Cup!",
      cardFunc: () => refs.creativeEng.current?.scrollIntoView({ behavior: "smooth" }),
      cardClass: "bg-white text-black verticalDesc",
    },
    {
      cardHead: "Digital Engineering",
      cardDesc:
        "We work on cutting edge feature development in Digital Products ( Apps and softwares ), making them more capable, intuitive and immersive in user experience, if we succeed it looks like Sci Fi more often than not.",
      cardFunc: () => refs.digitalEng.current?.scrollIntoView({ behavior: "smooth" }),
      cardClass: "bg-indigo-700 verticalDesc",
    },
    {
      cardHead: "Experience Engineering",
      cardDesc:
        "Here we create immersion, surprise and delight in real world experience.Fun Fact : we have given many firsts to the event industry , some of the popular and regular interactive experiences at global events.",
      cardFunc: () => refs.experienceEng.current?.scrollIntoView({ behavior: "smooth" }),
      cardClass: "bg-purple-700 verticalDesc",
    },
  ];

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-8 p-10">
      <label className="text-yellow-500 md:text-[5rem] text-[4rem] font-medium verticalsHeading">
        WHAT WE DO
      </label>

      <div className="w-full xl:px-10 flex gap-8 overflow-auto justify-between ">
        {featuresCards?.map((item, key) => (
          <FeaturesCards
            key={key}
            mainClassName={item.cardClass}
            cardHeading={item.cardHead}
            cardDesc={item.cardDesc}
            cardFunc={item.cardFunc}
          />
        ))}
      </div>
    </div>
  );
};
