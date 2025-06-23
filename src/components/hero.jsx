import p1 from "../assets/images/p1.jpeg"
import p2 from "../assets/images/p2.jpeg"
import p3 from "../assets/images/p3.jpeg"
import p4 from "../assets/images/p4.jpeg"
import p5 from "../assets/images/p5.jpeg"
import p6 from "../assets/images/p6.jpeg"

function Hero() {
    return (
        <div>
            <div className="ml-10 ">
                <h1 className="text-2xl md:text-3xl font-bold p-4">Limited-time offer.
                    <h1 className="text-gray-500 font-bold text-2xl inline"> Limitless possibilities.</h1>
                </h1>
            </div>

            <div className="flex overflow-y-hidden scrollbar-hide gap-4 overflow-x-auto mx-6 md:ml-16">

                <div className=" mt-6 bg-white p-4 rounded-2xl flex-shrink-0  transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl" style={{ width: "40%" }}>
                    <h2 className="font-semibold text-2xl" >Save on Mac and iPad for college, choose AirPods or an eligible accessory.◊◊◊</h2>
                    <img className="md:w-3/4" src={p1}></img>
                </div>

                <div className="bg-white mt-6 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl" style={{ width: "40%" }}>
                    <p className="text-red-500">OFFER ELIGIBLE</p>
                    <h3 className="font-semibold text-2xl">ipad Air</h3>
                    <p style={{ color: "#BF4295" }}>Apple Intelligence∆</p>
                    <p>From ₹54900.00‡ with education savings</p>
                    <img className="md:w-3/4"  src={p2}></img>
                </div>

              <div className="bg-white mt-6 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl" style={{ width: "40%" }}>
                    <p className="text-red-500">OFFER ELIGIBLE</p>
                    <h3 className="font-semibold text-2xl">MacBook Air</h3>
                    <p style={{ color: "#BF4295" }}>Apple Intelligence∆</p>
                    <p className="flex-wrap">From ₹89900.00‡ with education savings</p>
                    <img className="md:w-3/4" src={p3}></img>
                </div>

                <div className="bg-white mt-6 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl" style={{ width: "40%" }}>
                    <p className="text-red-500">OFFER ELIGIBLE</p>
                    <h3 className="font-semibold text-2xl">MacBook Pro</h3>
                    <p style={{ color: "#BF4295" }}>Apple Intelligence∆</p>
                    <p>From ₹159900.00‡ with education savings</p>
                    <img className="md:w-3/4"  src={p4}></img>
                </div>

                <div className="bg-white mt-6 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl" style={{ width: "40%" }}>
                    <p className="text-red-500">OFFER ELIGIBLE</p>
                    <h3 className="font-semibold text-2xl">iPad Pro</h3>
                    <p className="font-semibold">Built for Apple Intelligence.∆</p>
                    <p>From ₹89900.00‡ with education savings</p> 
                   <img className="md:w-3/4" src={p5}></img>
                </div>

                 <div className="bg-white mt-6 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-1 hover:rotate-y-1 hover:shadow-xl" style={{ width: "40%" }}>
                    <p className="text-red-500">OFFER ELIGIBLE</p>
                    <h3 className="font-semibold text-2xl">iMac</h3>
                    <p style={{ color: "#BF4295" }}>Apple Intelligence∆</p>
                    <p>From ₹129900.00‡ with education savings</p>
                    <img className="md:w-3/4" src={p6}></img>
                </div>
            </div>
        </div>

    )

}

export default Hero