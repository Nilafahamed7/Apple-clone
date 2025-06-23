import React from 'react'
import g1 from "../assets/images/g1.jpeg"
import g2 from "../assets/images/g2.jpeg"
import g3 from "../assets/images/g3.jpeg"
import g4 from "../assets/images/g4.jpeg"
import g5 from "../assets/images/g5.jpeg"
import g6 from "../assets/images/g6.jpeg"


const Article5 = () => {
    return (
        <div>
            <div className="pt-7 pl-4 ml-8">
                <h1 className="text-2xl  font-medium">The Apple experience.
                    <h1 className="text-gray-500 inline"> Balance work and play with apps and services.</h1>
                </h1>
            </div>

            <div className="mt-6 flex items-center mx-6 gap-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide  p-6 md:ml-8 ">

                <div className="bg-white mt-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-[450px] h-[630px]">
                    <h3 className='font-semibold text-2xl text-red-700 ml-4 p-4'>Apple Intelligence.</h3>
                    <h2 className='text-3xl font-semibold ml-6 p-2 '>Write, express yourself and get things done effortlessly..</h2>
                    <img src={g1}></img>
                </div>

                <div className="relative mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 ">
                    <img className=" rounded-2xl w-[450px] h-[630px] object-cover" src={g2}></img>


                    <div className="absolute  top-16 left-12  ">
                        <p>TODAY AT APPLE</p>
                        <h2 className='text-3xl font-bold'>Explore Apple Intelligence</h2>
                        <p className=' mt-2'>come and try it for yourself in a free sesssion at the Apple Store. </p>
                    </div>
                </div>


                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-[450px] h-[630px]">
                    <p className='ml-6'>APPLECARE+</p>
                    <h2 className='text-3xl font-semibold ml-4 p-2'>We’ve got you covered.</h2>
                    <p className='ml-7 mt-4'>Eligible students and educators save up to 10% on AppleCare+ protection for Mac or iPad.</p>
                    <img src={g3}></img>
                </div>


                <div className="bg-white mt-4 p-8 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-[450px] h-[630px]">
                    <h2 className='text-3xl font-semibold ml-4 p-2'>Apple Music Student Plan comes with Apple TV+ for free°°</h2>
                    <p className='ml-7 mt-4'>Special student rate availbale.</p>
                    <img src={g4}></img>
                </div>


                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-[450px] h-[630px]">
                    <h2 className='text-3xl font-semibold ml-4 p-2'>Four Apple services. One easy subscription.</h2>
                    <img src={g5}></img>
                </div>

                <div className="bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-[450px] h-[630px]">
                    <p className='ml-6'>ICLOUD+</p>
                    <h2 className='text-3xl font-semibold ml-4 p-2'>Get the storage you need and the privacy you deserve. Upgrade your plan today.***-</h2>
                    <img src={g6}></img>
                </div>













            </div>


        </div>
    )
}

export default Article5