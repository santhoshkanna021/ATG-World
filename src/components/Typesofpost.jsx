import React, { useState, useEffect, useRef } from "react"; 
import { Link } from "react-router-dom"; 
import { ChevronDown } from "lucide-react";
import arrow from "../assets/Navbar/Vector.png"; 

const navLinks = ["All Post", "Article", "Event", "Education", "Job"]; 

const Typesofpost = () => { 
  const [joined, setJoined] = useState(false); 
  const [isSticky, setIsSticky] = useState(false); 
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef(null); 

  const handleJoinClick = () => setJoined(!joined); 

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);
  };

  useEffect(() => { 
    const handleScroll = () => { 
      if (ref.current) { 
        const top = ref.current.getBoundingClientRect().top; 
        setIsSticky(top <= 0); 
      } 
    }; 
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []); 

  return ( 
    <> 
      {/* Navbar Container */} 
      <div ref={ref}> 
        {/* Desktop Navigation */}
        <nav 
          className={`hidden sm:flex w-full h-17 justify-between items-center px-10 md:px-35 bg-white transition-all duration-200 ${ 
            isSticky ? "fixed top-0 left-0 z-40" : "relative" 
          }`} 
        > 
          {/* Navigation Links */} 
          <div className="flex gap-6 text-gray-500 text-md"> 
            {navLinks.map((link) => ( 
              <Link 
                key={link} 
                to="/" 
                className="hover:text-black hover:border-b-2 hover:border-black transition-all pb-1" 
              > 
                {link} 
              </Link> 
            ))} 
          </div> 

          {/* Action Buttons */} 
          <div className="flex gap-4"> 
            <button className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 transition"> 
              Write Post 
              <img className="w-3" src={arrow} alt="arrow icon" />
            </button> 
            <button 
              className={`px-4 py-2 rounded transition ${ 
                joined 
                  ? "bg-white text-black border border-gray-300" 
                  : "bg-blue-600 text-white hover:bg-blue-700" 
              }`} 
              onClick={handleJoinClick} 
            > 
              {joined ? "Leave Group" : "Join Group"} 
            </button> 
          </div> 
        </nav> 

        {/* Mobile Navigation */}
        <nav 
          className={`sm:hidden flex w-full justify-between items-center px-4 py-3 bg-white border-b border-gray-200 transition-all duration-200 ${ 
            isSticky ? "fixed top-0 left-0 z-40" : "relative" 
          }`} 
        >
          {/* Posts Count */}
          <div className="text-black font-medium text-base">
            Posts
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-2 text-gray-600 text-sm font-medium"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Filter: {selectedFilter}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg min-w-[120px] z-50">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                    onClick={() => handleFilterChange(link.replace(' Post', ''))}
                  >
                    {link.replace(' Post', '')}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div> 

      {/* Spacer to maintain layout when navbar becomes fixed */} 
      {isSticky && <div className="h-17 sm:block block"></div>} 

      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="sm:hidden fixed inset-0 z-30" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </> 
  ); 
}; 

export default Typesofpost;