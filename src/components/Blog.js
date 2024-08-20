import React from 'react'
import BlogTitle from './BlogTitle'
import Metadata from './Metadata'

const Blog = () => {
  return (
    <section className='mx-16 md:mx-20 lg:mx-28 xl:mx-32 flex flex-col justify-center bg-zinc-800'>
        <BlogTitle/>
    </section>
  )
}

export default Blog