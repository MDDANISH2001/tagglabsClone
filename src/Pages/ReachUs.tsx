import React, { useState } from "react";
import { MdOutlinePhoneInTalk, MdEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";

export const ReachUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
      <div className="p-10 text-white bg-[#1c1b1b] grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[#e5ff00]">Reach Us</h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MdOutlinePhoneInTalk className="w-6 h-6 text-white" />
              <a
                href="tel:+919810017599"
                className="hover:text-[#e5ff00] transition-colors"
              >
                +91 9810017599
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <MdEmail className="w-6 h-6 text-white" />
              <a
                href="mailto:sales@tagg.in"
                className="hover:text-[#e5ff00] transition-colors"
              >
                sales@tagglabs.in
              </a>
            </div>

            <div className="flex items-start space-x-4">
              <IoMdPin className="w-6 h-6 text-white flex-shrink-0" />
              <p className="leading-relaxed">
                2nd Floor, Eros City Square, Sector49,
                <br />
                Gurugram, Haryana : 122001
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[#e5ff00]">
            How can we help?
          </h2>

          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-6 items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border-b outline-none bg-transparent border-gray-600 text-white"
              />

              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border-b outline-none bg-transparent border-gray-600 text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border-b outline-none bg-transparent border-gray-600 text-white"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border-b outline-none bg-transparent border-gray-600 text-white"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border-b max-h-fit outline-none bg-transparent w-full border-gray-600 text-white h-32 resize-none"
            />

            <button
              type="submit"
              className="bg-[#e5ff00] w-fit text-black hover:bg-[#ccff00] px-8 py-2 rounded-full font-medium"
            >
              Send
            </button>
          </form>
        </div>
      </div>
  );
};
