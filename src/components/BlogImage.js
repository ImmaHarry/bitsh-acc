import React from 'react'

const BlogImage = () => {
  return (
    <div className="max-w-screen-md bg-zinc-800">
      <div className="w-full bg-gray-700 flex items-center justify-center">
        <img src="https://images.pexels.com/photos/6878199/pexels-photo-6878199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog Post" className="h-64 w-full object-cover" />
      </div>
      <p className="mt-2 text-sm text-gray-400 text-left">
        Image Courtesy: <a href="https://www.pexels.com/@cottonbro/" target='_blank' className='underline font-medium'>cottonbro studio</a> on Pexels.com
      </p>
    </div>
  )
}

export default BlogImage