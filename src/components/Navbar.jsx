import React, { useState } from "react";
import logo from "../assets/Navbar/whole.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import arrow from "../assets/Navbar/Vector.png";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div className="hidden sm:flex items-center justify-between w-full h-16 px-4 sm:px-6 md:px-20 bg-white shadow text-black">
      {/* Logo */}
      <img className="h-5" src={logo} alt="logo" />

      {/* Search bar */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 max-w-md mx-4 items-center"
      >
        <div className="relative flex-1">
          <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
            className="w-full h-10 border pl-10 bg-[#F2F2F2] border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-green-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>

      {/* Account link */}
      <div className="flex items-center font-medium gap-1 text-sm">
        <span>Create account.</span>
        <Link
          to="/Signup"
          className="text-[#2F6CE5] flex items-center gap-1"
        >
          It’s free! <img className="w-3" src={arrow} alt="arrow icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
