import React from 'react'
import Metadata from './Metadata'
import BlogImage from './BlogImage'
import BlogWriteup from './BlogWriteup'
import Tags from './Tags'
import Comments from './Comments'

const BlogContent = () => {
  return (
    <div id='blog-heading' className='max-w-screen-md mx-auto'>
        <div className="flex items-center space-x-2 md:space-x-4 mt-4 text-left">
            <div className="h-12 md:h-20 w-1 md:w-2 bg-white"></div>
            <h1 className="text-lg sm:text-xl md:text-3xl font-medium text-white font-roboto_slab">
                Inductions for the Academic Counselling Cell Are Now Officially Underway
            </h1>
        </div>
        <Metadata/>
        <BlogImage/>
        <BlogWriteup/>
        <hr className='mt-4 mb-2 md:mt-4 md:mb-4 border-[1px] rounded-full'/>
        <Tags/>
        <hr className='mb-4 mt-2 md:mb-4 md:mt-4 border-[1px] rounded-full'/>
        <Comments/>
    </div>
  )
}

export default BlogContent