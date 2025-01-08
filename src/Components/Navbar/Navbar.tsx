import React, { useEffect, useState } from "react";
import navLogo from "../../assets/navLogo.png";
import { TbMenu3 } from "react-icons/tb";
import { useRefStore } from "../../store/useGlobalStore";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { refs } = useRefStore();

  const navButtons = [
    {
      name: "Impact",
      func: () => refs.impact.current?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      name: "Our Work",
      func: () => refs.work.current?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      name: "Careers",
      func: () => {},
    },
  ];

  useEffect(() => {
    window.addEventListener('resize', () => setIsOpen(false));
    return () => {
      window.removeEventListener('resize', () => setIsOpen(false));
    };
  }, [isOpen]);

  return (
    <div
      className={`w-full py-2 px-6 flex text-xl justify-between items-center rounded-[2rem] transition-all duration-300 ${
        isOpen ? "bg-indigo-700 flex-col" : "flex-row"
      }`}
    >
      <div className="flex items-center md:w-fit w-full justify-between bg-transparent">
        <img src={navLogo} alt="navLogo" className="h-14 bg-transparent" />

        <button className="md:hidden flex" onClick={() => setIsOpen(!isOpen)}>
          <TbMenu3 className="w-6 h-6 bg-transparent" />
        </button>
      </div>

      <div className="md:flex gap-8 hidden">
        {navButtons?.map((item, key) => (
          <a href="#" 
            key={key}
            onClick={item.func}
            className="hover:text-gray-400">
            {item.name}
          </a>
        ))}
      </div>

      <button className="md:flex hidden bg-green-500 hover:bg-red-500 text-black font-medium px-4 rounded-full h-fit py-2 hover:text-white font-[Darker Grotesque]">
        Schedule a Meeting
      </button>

      <div className={`${isOpen ? "flex h-fit" : "hidden"} transition-all duration-300 flex-col space-y-8 bg-transparent w-full py-4`}>
        {navButtons.map((item, key) => (
          <a
            key={key}
            href="#"
            onClick={item.func}
            className="text-white hover:text-gray-200 transition-colors bg-transparent"
          >
            {item.name}
          </a>
        ))}
        <button className="bg-green-400 text-base font-medium hover:bg-green-500 text-black px-6 py-2 rounded-full transition-colors">
          Schedule a Meeting
        </button>
      </div>
    </div>
  );
};
