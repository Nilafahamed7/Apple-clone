import e1 from "../assets/images/e1.jpeg"
import e2 from "../assets/images/e2.jpeg"
import e3 from "../assets/images/e3.jpeg"
import e4 from "../assets/images/e4.jpeg"
import e5 from "../assets/images/e5.jpeg"
import e6 from "../assets/images/e6.jpeg"
import e7 from "../assets/images/e7.jpeg"
import e8 from "../assets/images/e8.jpeg"



function Article2() {
    return (
        <div>
            <div className="ml-12 mt-10 pt-4 "  >
                <h1 className="text-2xl md:text-3xl font-medium">Accessories.
                    <h1 className="text-gray-500 font-medium inline"> Add some electives.</h1>
                </h1>
            </div>

            <div className="mt-6 flex items-center  mx-6 gap-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide p-6 md:ml-8 ">

                <div className=" bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[500px]  ">
                    <h2 className="font-semibold text-2xl">Make the ultimate study group</h2>
                    <img src={e1}></img>
                </div>

                <div className=" bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 " >
                    <img className="w-full h-full object-cover" src={e2}></img>
                    <p className="text-red-500">Free Engraving</p>
                    <h2 className="text-xl font-semibold">Apple Pencil Pro</h2>
                    <p className="mt-4">MRP ₹10900.00 (Incl. of all taxes) with education savings</p>
                </div>


                <div className=" bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96" >
                    <img className="w-full h-full object-cover" src={e3}></img>
                    <h2 className="text-xl font-semibold">Smart Folio for iPad Air 11"  (M3) - Sage</h2>
                    <p className="text-white">hufhuf</p>
                    <p className="mt-4">MRP ₹8500.00 (Incl. of all taxes)</p>
                </div>

                <div className=" bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96" >
                    <img className="w-full h-full object-cover" src={e4}></img>
                    <h2 className="text-xl font-semibold">Magic Keyboard (USB–C) - US English</h2>
                    <p className="text-white">hufhuf</p>
                    <p className="mt-4">MRP ₹9500.00 (Incl. of all taxes)</p>
                </div>


                <div className=" bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96" >
                    <img className="w-full h-full object-cover" src={e5}></img>
                    <h2 className="text-xl font-semibold">Magic Keyboard for iPad Pro 13" (M4) - US English - Black</h2>
                    <p className="mt-4">MRP ₹31900.00 (Incl. of all taxes) with education savings</p>
                </div>


                <div className=" bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96" >
                    <img className="w-full h-full object-cover" src={e6}></img>
                    <h2 className="text-xl font-semibold">Magic Mouse (USB‑C) - White Multi-Touch Surface</h2>
                    <p className="text-white">hufhuf</p>
                    <p className="mt-4">MRP ₹7500.00 (Incl. of all taxes)</p>
                </div>


                <div className=" bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96" >
                    <img className="w-full h-full object-cover" src={e7}></img>
                    <h2 className="text-xl font-semibold">iPhone 16 Pro Silicone Case with MagSafe - Periwinkle</h2>
                    <p className="text-white">hufhuf</p>
                    <p className="mt-4">MRP ₹4900.00 (Incl. of all taxes)</p>
                </div>


                <div className=" bg-white mt-4 p-6 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96" >
                    <img className="w-full h-full object-cover" src={e8}></img>
                    <p className="text-red-500">Free Engraving</p>
                    <h2 className="text-xl font-semibold">AirPods 4 with Active Noise Cancellation</h2>
                    <p className="mt-4">MRP ₹17900.00 (Incl. of all taxes)</p>
                </div>






            </div>
        </div>
    )
}

export default Article2