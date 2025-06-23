import { FaArrowRight, } from "react-icons/fa"
import mac from "../assets/images/mac.png"
import ipad from "../assets/images/ipad.png"
import iphone from "../assets/images/iphone.png"
import watch from "../assets/images/apple watch.png"
import homepod from "../assets/images/homepod.png"
import airpods from "../assets/images/airpods.png"
import airtag from "../assets/images/airtags.png"
import tv from "../assets/images/apple tv.png"
import access from "../assets/images/accessories.png"



import location from "../assets/images/location.png"
function Header() {
    return (
        <div>
            <div>
                <div className="flex justify-between items-center p-10 mt-4 ">
                    <div className="now">
                        <h1 className="text-4xl font-bold" style={{ color: "#0A827B" }}>Education Store.
                            <h1 className="text-gray-500 inline ">The most</h1>
                        </h1>
                        <h1 className="text-4xl font-bold text-gray-500">powerful tools for learning.</h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center gap-2 ">
                            <div>
                                <img width={30} src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-chat-bts-specialist-icon-202505?wid=70&hei=70&fmt=jpeg&qlt=90&.v=M1hyRGM0MzViSGl1eVpUekJPcGcxOU9UbkJlRUVtM2VXamdkNWFyeE53NVpEQUNiSjVpQ1U5cWlHS0pDckh2ZkozZ243MkhSa3VZM0pFUXd0a3pwWE1pYlFZREEvSGFxYVFzUUlhL0YycmdFWlhWbjJZd3pzQzhoS0VxZlZvKzM"></img>
                            </div>
                            <div className="container mx-auto">
                                <p>Need shopping help?</p>
                                <p className="flex items-center gap-2 text-blue-400 hover:underline cursor-pointer">Ask a specialist<FaArrowRight /></p>

                            </div>

                        </div>

                        <div className="flex items-center mx-auto gap-2 mt-4">
                            <div>
                                <img width={30} src={location}></img>
                            </div>
                            <div className="container mx-auto">
                                <p>Visit an Apple Store</p>
                                <p className="flex items-center gap-2 text-blue-400 hover:underline cursor-pointer">Find one near you<FaArrowRight /></p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className=" mt-6 flex items-center justify-between gap-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide p-6 md:ml-8" >
                <div className="text-center flex-shrink-0">
                    <img width={150} src={mac}></img>
                    <p className="hover:underline cursor-pointer mt-2">Mac</p>
                </div>

                <div className="text-center flex-shrink-0">
                    <img width={150} src={ipad}></img>
                    <p className="hover:underline cursor-pointer mt-2">Ipad</p>
                </div>

                <div className="text-center flex-shrink-0 ">
                    <img width={150} src={iphone}></img>
                     <p className="hover:underline cursor-pointer mt-2">Iphone</p>
                </div>

                <div className="text-center flex-shrink-0 ">
                    <img width={150} src={watch}></img>
                     <p className="hover:underline cursor-pointer mt-2">Apple Watch</p>
                </div>

                <div className="text-center flex-shrink-0">
                    <img width={150} src={airpods}></img>
                     <p className="hover:underline cursor-pointer mt-2">AirPods</p>
                </div>

                <div className="text-center flex-shrink-0">
                    <img width={150} src={airtag}></img>
                     <p className="hover:underline cursor-pointer mt-2">AirTag</p>
                </div>

                <div className="text-center flex-shrink-0">
                    <img width={150} src={tv}></img> 
                    <p className="hover:underline cursor-pointer mt-2">Apple TV 4K</p>
                </div>

                <div className="text-center flex-shrink-0">
                    <img width={150} src={homepod}></img>
                    <p className="hover:underline cursor-pointer mt-2">Homepod</p>
                </div>

                <div className="text-center flex-shrink-0">
                    <img width={150} src={access}></img>
                    <p className="hover:underline cursor-pointer mt-2">Accessoires</p>
                </div>

            </div>
        </div>
    )

}

export default Header