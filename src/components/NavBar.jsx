import apple from "../assets/images/apple.png"
import {FaSearch,FaShoppingBag} from "react-icons/fa"

function Navbar() {
    return (
        <>
            <nav className="container justify-center gap-6 flex  items-center mx-auto py-3 px-2 text-sm min-w-full" >
                <img width={20} src={apple}></img>
                <div className="gap-5 cursor-pointer items-center  hidden md:flex">
                    <p>Store</p>
                    <p>Mac</p>
                    <p>iPad</p>
                    <p>iPhone</p>
                    <p>Watch</p>
                    <p>Airpods</p>
                    <p>TV & Home</p>
                    <p>Entertainment</p>
                    <p>Accessories</p>
                    <p>Support</p>
                    <p><FaSearch/></p>
                    <p><FaShoppingBag/></p>
                </div>
            </nav>
            <div className="flex bg-white text-center justify-center pb-4 items-center">
                <p className="text-center min-w-full text-sm mt-6">Buy Mac or iPad with education savings, get AirPods or an eligible accessory of your choice.◊◊◊
                    <a href="#" className="text-blue-500 hover:underline cursor-pointer"> Learn more</a>
                </p>
            </div>
        </>
    )


}

export default Navbar