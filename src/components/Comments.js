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
                    <div class="flex items-start gap-2.5">
                        <img class="w-10 h-10 rounded-full" src="https://picsum.photos/100" alt="image 1"/>
                        <div class="flex flex-col w-full leading-1.5 p-4 border-zinc-500 bg-zinc-700 rounded-e-xl rounded-es-xl">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <span class="text-sm font-semibold text-white">John Doe</span>
                                <span class="text-sm font-normal text-gray-400">{new Date().getHours() + ":" + new Date().getMinutes() + " hrs"}</span>
                            </div>
                            <p class="text-sm font-normal py-1 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-2.5">
                        <img class="w-10 h-10 rounded-full" src="https://picsum.photos/101" alt="image 2"/>
                        <div class="flex flex-col w-full leading-1.5 p-4 border-zinc-500 bg-zinc-700 rounded-e-xl rounded-es-xl">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <span class="text-sm font-semibold text-white">John Doe</span>
                                <span class="text-sm font-normal text-gray-400">{new Date().getHours() + ":" + new Date().getMinutes() + " hrs"}</span>
                            </div>
                            <p class="text-sm font-normal py-1 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-2.5">
                        <img class="w-10 h-10 rounded-full" src="https://picsum.photos/102" alt="image 3"/>
                        <div class="flex flex-col w-full leading-1.5 p-4 border-zinc-500 bg-zinc-700 rounded-e-xl rounded-es-xl">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <span class="text-sm font-semibold text-white">John Doe</span>
                                <span class="text-sm font-normal text-gray-400">{new Date().getHours() + ":" + new Date().getMinutes() + " hrs"}</span>
                            </div>
                            <p class="text-sm font-normal py-1 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <textarea maxLength={128} className='w-full h-24 mt-4 p-2 text-white bg-transparent border border-white rounded-md' placeholder='Share your thoughts...'></textarea>
                    <button className='w-full h-10 mt-2 text-black bg-white rounded-md'>Post Comment</button>
                </div>
            </div>
        </div>
    )
}

export default Comments