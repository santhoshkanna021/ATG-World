import React, { useState } from "react";
import headerImage from "../assets/Header/bg.jpg";

const Header = () => {
  const [isJoined, setIsJoined] = useState(true); // initially joined

  const handleButtonClick = () => {
    setIsJoined((prev) => !prev);
  };

  return (
    <div
      className="w-full h-[30rem] bg-cover bg-center flex flex-col justify-center items-start text-white relative"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      {/* Back arrow and Leave/Join button */}
      <div className="sm:hidden absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <button className="text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleButtonClick}
          className="bg-opacity-50 text-white px-4 py-2 border border-white rounded-lg text-sm font-medium"
        >
          {isJoined ? "Leave Group" : "Join Group"}
        </button>
      </div>

      {/* Main content */}
      <div className="relative px-4 sm:px-[7.5rem] mt-auto mb-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4">
          Computer Engineering
        </h1>
        <p className="text-base sm:text-xl">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
};

export default Header;
