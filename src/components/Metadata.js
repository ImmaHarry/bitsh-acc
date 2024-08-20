import React from 'react'

const Metadata = () => {
  return (
    <div className='max-w-screen-md my-2'>
        <div className="text-white flex items-center justify-between">
            <div className="flex space-x-1 text-xs sm:text-sm md:text-base">
                <span className="font-semibold">Harit Khera</span>
                <span className="text-yellow-300 font-bold px-[2px]">/</span>
                <span className="">6:43 PM IST</span>
                <span className="">•</span>
                <span className="">August 19<sup>th</sup> 2024</span>
            </div>
            <button className="flex items-center space-x-1 text-xs sm:text-sm md:text-base hover:text-white focus:outline-none">
                <span>Share</span>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-3 sm: md:w-5' width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
            </button>
        </div>
    </div>
  )
}

export default Metadata