import React, { useState } from "react";

export const NewsLetter: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = () => {
    console.log("Subscribed to newsletter", email);
  }
  return (
    <div className="py-[8rem] text-[#dbff00] bg-black flex flex-col gap-[4rem] justify-center items-center">
      <label className="lg:text-[6rem] text-center md:text-[5rem] text-[3.5rem] verticalsHeading leading-[3.5rem]">
        JOIN OUR NEWSLETTER
      </label>

      <div className="border-b w-[80%] flex justify-center">
        <input
          type="email"
          className="w-full outline-none bg-transparent text-center"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email Id"
        />
      </div>

      <button onClick={handleSubscribe} className="bg-[#dbff00] rounded-full p-2 px-6 text-black verticalDesc font-semibold">
        Subscribe
      </button>
    </div>
  );
};
