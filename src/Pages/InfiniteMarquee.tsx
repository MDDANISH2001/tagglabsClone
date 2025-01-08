import React from 'react';

export const InfiniteMarquee: React.FC = () => {
  const text = [
    "CREATING UNIQUE EXPERIENCES",
    "BUILDING HIGH IMPACT AND GROWTH LED EXPERIENCES",
    "DELIVERING SEAMLESSLY INTERACTIVE PRODUCTS",
  ];

  return (
    <div className="marqueeContainer">
      <div className="marquee">
        <div className="marqueeContent">
          {text.map((item, index) => (
            <span key={index} className="marqueeItem lg:text-[20vh] md:text-[16vh] text-[12vh]">
              {item}
            </span>
          ))}
          {text.map((item, index) => (
            <span key={`${index}-duplicate`} className="marqueeItem lg:text-[20vh] md:text-[16vh] text-[12vh]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
