import c1 from "../assets/images/c1.jpeg"
import c2 from "../assets/images/c2.jpeg"
import c3 from "../assets/images/c3.jpeg"
import c4 from "../assets/images/c4.jpeg"
import c5 from "../assets/images/c5.jpeg"
import c6 from "../assets/images/c6.jpeg"


function Article() {
    return (
        <div>
            <div className=" md:ml-16 ml-10 mt-10 pt-4 "  >
                <h1 className="text-2xl md:text-3xl font-medium">Education essentials.
                    <h1 className="text-gray-500 font-medium inline"> For College students, educators, and more.</h1>
                </h1>
            </div>

            <div className="mt-6 flex items-center justify-between mx-6 gap-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide p-6 md:ml-8">
                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]" >
                    <h3 className="text-3xl font-semibold ">Learn about education savings available only at Apple.**</h3>
                    <img src={c1}></img>
                </div>

                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
                    <h3 className="text-3xl font-semibold ">Apple Music Student Plan comes with Apple TV+ for free.°°</h3>
                    <p>Special student rate vailable</p>
                    <img src={c2}></img>
                </div>

                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]" >
                    <p>PAYMENT OPTIONS</p>
                    <h3 className="text-3xl font-semibold ">Flexible ways to pay.</h3>
                    <img src={c3}></img>
                </div>

                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px] " >
                    <p>CUSTOMISE YOUR MAC</p>
                    <h3 className="text-3xl font-semibold ">Build it just the way you want</h3>
                    <p>Choose your memory, storage, graphics ,even colour.</p>


                    <img src={c4}></img>
                </div>

                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 [600-px]">
                    <p>FREE ENGRAVING</p>
                    <h3 className="text-3xl font-semibold ">Make them yours.</h3>
                    <p>Engrave a mix of emoji, names and numbers for free..</p>
                    <img src={c5}></img>
                </div>

                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]" >
                    <h3 className="text-lg md:text-2xl font-semibold leading-snug"> Shop one-to-one with a Specialist. Online or in a store.</h3>
                    <img className="w-full h-auto object-contain" src={c6}></img>
                </div>
            </div>
        </div>
    )

}

export default Article