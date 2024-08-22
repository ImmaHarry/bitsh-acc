import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav id="navbar" className="flex items-center justify-between mx-16 md:mx-20 lg:mx-28 xl:mx-32 py-4">
      <div className="text-2xl font-bold text-yellow-400 font-roboto_slab flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[0.875rem]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
        ACC Blogs
      </div>

      <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white font-medium">
        <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
          <a href="/placeholder">Home</a>
        </li>
        <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
          <a href="/placeholder">Explore</a>
        </li>
        <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
          <a href="/placeholder">Trending</a>
        </li>
        <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
          <a href="/placeholder">Live</a>
        </li>
      </ul>
      <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white font-medium">
        <li className="bg-white px-4 py-1 text-zinc-800 font-bold rounded-lg shadow-lg shadow-zinc-700 hover:bg-gray-300 duration-200 ease-linear transition-colors cursor-pointer">
          <a href="/">Sign Up</a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          id="navbarMobileBTN"
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-zinc-800 mx-16 text-white flex flex-col items-start space-y-4 py-4 md:hidden z-10">
          <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
            <a href="/placeholder">Home</a>
          </li>
          <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
            <a href="/placeholder">Explore</a>
          </li>
          <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
            <a href="/placeholder">Trending</a>
          </li>
          <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
            <a href="/placeholder">Live</a>
          </li>
          <li className="bg-white px-4 py-1 text-zinc-800 font-bold rounded-lg shadow-lg shadow-zinc-700 hover:bg-gray-300 duration-200 ease-linear transition-colors cursor-pointer">
            <a href="/placeholder">Sign Up</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
