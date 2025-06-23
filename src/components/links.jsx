import React from 'react'
import {FaArrowRight} from "react-icons/fa"

const Links = () => {
    return (
        <div>
            <div>
                <h1 className='font-semibold text-3xl ml-10 mt-10'>Quick Links</h1>
            </div>

            <div className='flex gap-6 mt-6 ml-8 text-sm md:text-lg overflow-x-auto overflow-y-hidden'>
                <div className='border border-black w-fit rounded-3xl p-3 hover:bg-black hover:text-white hover:underline '>
                    <p className='flex items-center gap-2'>Find a Store<FaArrowRight/> </p>
                </div>

                <div className='border border-black w-fit rounded-3xl p-3 hover:bg-black hover:text-white hover:underline '>
                    <p className='flex items-center gap-2'>Order Status<FaArrowRight/> </p>
                </div>

                <div className='border border-black w-fit rounded-3xl p-3 hover:bg-black hover:text-white hover:underline '>
                    <p className='flex items-center gap-2'>Shopping Help<FaArrowRight/> </p>
                </div>

                <div className='border border-black w-fit rounded-3xl p-3 hover:bg-black hover:text-white hover:underline '>
                    <p className='flex items-center gap-2'>Returns<FaArrowRight/> </p>
                </div>

                <div className='border border-black w-fit rounded-3xl p-3 hover:bg-black hover:text-white hover:underline '>
                    <p className='flex items-center gap-2'>Your Saves<FaArrowRight/> </p>
                </div>

            </div>

        </div>
    )
}

export default Links