import React from 'react'

const Comments = () => {
    
    return (
        <div>
            <p className="text-white text-base sm:text-lg lg:text-xl font-roboto_slab font-medium">
                Comments Section
            </p>
            <p className="text-white text-sm md:text-base">
                This is what the community has to say about this blog post...
            </p>
            <div>
                <div className="flex flex-col space-y-4 mt-4">
                    <div className="flex space-x-2">
                        <img className="w-12 h-12 rounded-full" src="https://picsum.photos/100"/>
                        <div className="flex flex-col">
                            <p className="text-white text-sm md:text-base font-semibold">John Doe</p>
                            <p className="text-white text-xs md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <img className="w-12 h-12 rounded-full" src="https://picsum.photos/102"/>
                        <div className="flex flex-col">
                            <p className="text-white text-sm md:text-base font-semibold">Jane Doe</p>
                            <p className="text-white text-xs md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <img className="w-12 h-12 rounded-full" src="https://picsum.photos/101"/>
                        <div className="flex flex-col">
                            <p className="text-white text-sm md:text-base font-semibold">Lawn Doe</p>
                            <p className="text-white text-xs md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <textarea maxLength={128} className='w-full h-24 mt-4 p-2 text-white bg-transparent border border-white rounded-md' placeholder='Share your thoughts...'></textarea>
                    <button className='w-full h-10 mt-2 text-black bg-white rounded-md'>Post Comment</button>
                </div>
            </div>
        </div>
    )
}

export default Comments