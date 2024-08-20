import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-16 md:mx-20 lg:mx-28 xl:mx-32 py-4">
      <div className="text-2xl font-bold text-yellow-400 font-roboto_slab flex items-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className='mr-[0.875rem]' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        ACC Blogs
      </div>
      <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white font-medium">
        <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
          <a href="/">Explore</a>
        </li>
        <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
          <a href="/">Trending</a>
        </li>
        <li className="hover:text-yellow-200 cursor-pointer transition-colors duration-200 ease-linear">
          <a href="/">Live</a>
        </li>
      </ul>
      <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white font-medium">
          <li className="bg-white px-4 py-1 text-zinc-800 font-bold rounded-lg shadow-lg shadow-zinc-700 hover:bg-gray-300 duration-200 ease-linear transition-colors cursor-pointer">
            <a href="/">Sign Up</a>
          </li>
      </ul>
      <div className="md:hidden flex items-center">
        <button className="text-white focus:outline-none">
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
    </nav>
  );
};

export default Navbar;
