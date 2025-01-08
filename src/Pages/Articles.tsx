import React from "react";
import {
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
} from "../assets";

export const Articles: React.FC = () => {
  const articles = [
    {
      cardHead:
        "Tagglabs and boAt get AI to paint a vivid picture of India in the World Cup season.",
      cardDesc:
        "As the ICC Men's Cricket World Cup takes center stage in India, Tagglabs and BOAT bring to life 'India India,' a music video that's a first of its kind. Made with AI, this video, composed and penned by Prashant Ingole and voiced by Vishal Dadlani, captures the heart and soul of Indian cricket",
      cardFunc: "#",
      cardImg: article1,
    },
    {
      cardHead:
        "Revolutionising Experiential Campaigns With AI: A Conversation With TaggLabs Founder Hariom Seth.",
      cardDesc:
        "Seth provides a glimpse into the future of experiential campaigns and the transformative power of AI",
      cardFunc: "#",
      cardImg: article2,
    },
    {
      cardHead:
        "Seagram's Royal Stag Packaged Drinking Water unveils AI campaign for World Cup.",
      cardDesc:
        "The campaign gives each fan an opportunity to become part of a personalized film featuring the cricketers.",
      cardFunc: "#",
      cardImg: article3,
    },
    {
      cardHead:
        "Tagglabs Powers Lava Mobiles' Guinness World Record Achievement.",
      cardDesc:
        "In an awe-inspiring display of technological brilliance, Tagglabs, the industry leader in crafting unparalleled experiences, has masterminded a groundbreaking campaign for Lava Mobiles...",
      cardFunc: "#",
      cardImg: article4,
    },
    {
      cardHead:
        "AI Decoded: Comprehensive Guide to Types, Applications, and Ethical Considerations",
      cardDesc:
        "AI Decoded: Comprehensive Guide to Types, Applications, and Ethical ConsiderationsThe term ‘Artificial Intelligence’ can be perceived to be an enabler that is helping change the globe due to its significant impact on the ongoing technological advancements...",
      cardFunc: "#",
      cardImg: article5,
    },
    {
      cardHead:
        "Exploring the World of AI and Predictive Analytics in Marketing.",
      cardDesc:
        "The market landscape in this age is being transformed by AI and Predictive Analytics. Here is an article examining more closely how new technologies enable companies to predict trends...",
      cardFunc: "#",
      cardImg: article6,
    },
  ];

  return (
    <div className="overflow-hidden h-[100vh] gap-8 bg-black flex flex-col justify-center items-center text-[#dbff00] ">
      <label className="md:text-[5rem] text-[4rem] verticalsHeading text-center leading-[4rem] ">
        ARTICLES & BLOGS
      </label>

      <div className="p-10 flex w-full gap-10 overflow-x-auto whitespace-nowrap text-white verticalDesc font-medium">
        {articles?.map((item, key) => (
          <a
            href={item?.cardFunc}
            key={key}
            className="h-full flex flex-col gap-2 p-2 min-w-[300px] max-w-[300px]"
          >
            <div className="h-[160px] w-[280px]">
              <img
                src={item.cardImg}
                alt=""
                className="object-cover w-full h-full md:rounded-[30px] rounded-[20px]"
              />
            </div>

            <label className="text-2xl line-clamp-1 text-wrap">
              {item.cardHead}
            </label>

            <hr />

            <label className="line-clamp-3 text-wrap ">{item.cardDesc}</label>
          </a>
        ))}
      </div>

      <label>Swipe to see more →</label>
    </div>
  );
};
