import React from 'react'
import f1 from "../assets/images/f1.jpeg"
import f2 from "../assets/images/f2.jpeg"
import f3 from "../assets/images/f3.png"
import f4 from "../assets/images/f4.jpeg"
import f5 from "../assets/images/f5.jpeg"
import f6 from "../assets/images/f6.jpeg"
import f7 from "../assets/images/f7.jpeg"
import f8 from "../assets/images/f8.jpeg"

function Article4() {
  return (
    <div>
      <div className="pt-7 pl-4 ml-8">
        <h1 className="text-2xl md:text-3xl font-medium">More to love.
          <h1 className="text-gray-500 inline">Ways to get campus-ready.</h1>
        </h1>
      </div>

      <div className="mt-6 flex items-center mx-6 gap-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide  p-6 md:ml-8 ">

        <div className="relative mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 w-96">
          <img className=" rounded-2xl w-96 h-[600px] object-cover" src={f1}></img>


          <div className="absolute  top-16 left-12 text-white ">
            <h2 className='text-3xl'>iPhone 16 Pro</h2>
            <p className='text-red-700 mt-2'>Apple Intelligence ∆</p>
            <p className='mt-2'>From ₹119900.00‡</p>
          </div>
          </div>

          <div className="bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
            <h2 className='text-3xl font-semibold ml-6 '>Apple Watch Series 10</h2>
            <p className='font-semibold text-xl mt-4 ml-6'>Thinstant classic.</p>
            <p className='mt-4 ml-6'>From ₹46900.00‡</p>
            <img src={f2}></img>
          </div>

          <div className="bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
            <h2 className='text-3xl font-semibold ml-6 '>Apple Watch Pride Edition Sport Band</h2>
            <p className="font-semibold text-xl mt-4 ml-6">Show your stripes.</p>
            <p className='mt-4 ml-6'>From ₹4500.00‡</p>
            <img src={f3}></img>
          </div>

          <div className="bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
            <h2 className='text-3xl font-semibold ml-6 '>iPhone 16e</h2>
            <p className=" text-red-700 text-xl mt-4 ml-6">Apple Intelligence∆</p>
            <p className='mt-4 ml-6'>From ₹59900.00‡</p>
            <img src={f4}></img>
          </div>

          <div className="bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
            <h2 className='text-3xl font-semibold ml-6 '>AirPods 4</h2>
            <p className="font-semibold text-xl mt-4 ml-6">Iconic. Now supersonic.</p>
            <p className='mt-4 ml-6'>From ₹12900.00§</p>
            <p className='mt-4 ml-6'>With Acive Noise Cancellation ₹17900.00§</p>
            <img src={f5}></img>
          </div>

          <div className="relative mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 w-96">
          <img className=" rounded-2xl w-96 h-[600px] object-cover" src={f6}></img>


          <div className="absolute  top-16 left-12 text-white ">
            <h2 className='text-3xl'>iPhone 16</h2>
            <p className='text-red-700 mt-2'>Apple Intelligence ∆</p>
            <p className='mt-2'>From ₹79900.00‡</p>
          </div>
          </div>

          <div className="relative mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 w-96">
          <img className=" rounded-2xl w-96 h-[600px] object-cover" src={f7}></img>


          <div className="absolute  top-16 left-12 text-white ">
            <h2 className='text-3xl'>Apple Watch Ultra 2</h2>
            <p className=' font-semibold mt-2'>New finish. Never quit.</p>
            <p className='mt-2'>From ₹89900.00‡</p>
          </div>
          </div>

          <div className="bg-white mt-4 rounded-2xl p-6 flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
            <p className='font-semibold ml-4'>Apple Watch Straps</p>
            <h2 className='text-3xl font-semibold ml-4 mt-4'>Show your true colours.</h2>
            <img src={f8}></img>
          </div>







        </div>
      </div>
      )

}

      export default Article4