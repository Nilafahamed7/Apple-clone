import React from 'react'
import h1 from "../assets/images/h1.jpeg"
import h2 from "../assets/images/h2.jpeg"
import h3 from "../assets/images/h3.jpeg"
import h4 from "../assets/images/h4.jpeg"

const Article6 = () => {
    return (
        <div>
            <div className="pt-7 pl-4 ml-8">
                <h1 className="text-2xl  font-medium">Explore Apple Services.
                    <h1 className="text-gray-500 inline"> World-class apps and entertainment.</h1>
                </h1>
            </div>

            <div className="mt-6 flex items-center mx-6 gap-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide  p-6 md:ml-8 ">

                <div className="relative mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 ">
                    <img className=" rounded-2xl w-[500px] h-[600px] object-cover" src={h1}></img>

                    <div className="absolute  top-16 left-12  ">
                        <p className="mt-2 "> APPLE MUSIC</p>
                        <h2 className='text-3xl font-semibold'>Deep Focus</h2>
                        <p className='mt-2'>Stay in concentration mode for homework and study with this playlist.</p>
                    </div>
                </div>

                   <div className="relative mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 ">
                    <img className=" rounded-2xl w-[500px] h-[600px] object-cover" src={h2}></img>

                    <div className="absolute  top-16 left-12  ">
                        <p className="mt-2 "> APP STORE</p>
                        <h2 className='text-3xl font-semibold'>Your college survival kit.</h2>
                        <p className='mt-2'>The essential guide to campus life.</p>
                    </div>
                </div>

                   <div className="relative mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 ">
                    <img className=" rounded-2xl w-[500px] h-[600px] object-cover" src={h3}></img>

                    <div className="absolute  top-16 left-12  ">
                        <p className="mt-2 "> APPLE PODCASTS</p>
                        <h2 className='text-3xl font-semibold'>Ted Talks Daily</h2>
                        <p className='mt-2'>Thought-provoking ideas to ignite your curiosity.</p>
                    </div>
                </div>

                   <div className="relative mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 ">
                    <img className=" rounded-2xl w-[510px] h-[600px] object-cover" src={h4}></img>

                    <div className="absolute  top-16 left-12  ">
                        <p className="mt-2 "> APPLE TV+</p>
                        <h2 className='text-3xl font-semibold'>Lessons in Chemistry</h2>
                        <p className='mt-2'>Brie Larson stars in this novel adaptation exploring ’60s feminism.</p>
                    </div>
                </div>





            </div>

        </div>
    )
}

export default Article6