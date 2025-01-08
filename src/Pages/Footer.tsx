import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { navLogo } from "../assets";

export const Footer: React.FC = () => {
  return (
      <div className="bg-black px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo Section */}
          <img src={navLogo} alt="navLogo" className="h-14 bg-transparent" />

          {/* Social Icons */}
          <div className="flex items-center md:w-fit gap-10 w-full justify-between">
            <a href="#" className="hover:text-[#e5ff00] transition-colors p-2">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#e5ff00] transition-colors p-2">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#e5ff00] transition-colors p-2">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#e5ff00] transition-colors p-2">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
  );
};
