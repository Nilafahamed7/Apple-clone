import d1 from "../assets/images/d1.jpeg"
import d2 from "../assets/images/d2.jpeg"
import d3 from "../assets/images/d3.jpeg"
import d4 from "../assets/images/d4.png"
import d5 from "../assets/images/d5.jpeg"
import d6 from "../assets/images/d6.jpeg"




function Article3() {
    return (
        <div>
            <div className="pt-7 pl-4 ml-8">
                <h1 className="text-2xl md:text-3xl font-medium">Endless potential.
                    <h1 className="text-gray-500 inline"> Take teaching and learning further with Apple.</h1>
                </h1>
            </div>

            <div className="mt-6 flex items-center  mx-6 gap-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide  p-6 md:ml-8 ">

                <div className="relative mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 w-96">
                    <div>
                        <img className=" rounded-2xl w-96 h-[600px] object-cover" src={d1}></img>
                    </div>


                    <div className="absolute top-6 left-8 text-white">
                        <p>MAC FOR STUDENTS</p>
                        <h2 className="text-3xl mt-2">Best in class.</h2>
                        <h2 className="text-3xl">In college and beyond.</h2>
                        <p className="mt-2">Whatever college throws your way,</p>
                        <p>Mac has Your back</p>
                    </div>
                </div>

                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
                    <p>LEARN TO BUILD APPS</p>
                    <h2 className="text-2xl font-semibold mt-1">Brush up on Swift.</h2>
                    <p className="mt-1">Our College Essentials video playlist shows how to use your devices to max potential.</p>
                    <img src={d2}></img>
                </div>

                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
                    <p>WATCH AND LEARN</p>
                    <h2 className="text-2xl font-semibold mt-1">Surprise yourself with what’s possible.</h2>
                    <p className="mt-1">Discover tools that take you from your first line of code to building your first app.</p>
                    <img src={d3}></img>
                </div>

                <div className="bg-white mt-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
                    <div className="p-3">
                        <h2 className="text-3xl font-medium mt-1">Set your sights high.</h2>
                        <p className="mt-3 font-medium">Build your career connections with placement and job opportunities.</p>
                    </div>
                    <img className="rounded-2xl" src={d4}></img>
                </div>

                <div className="bg-white mt-4  rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
                    <div className="p-4">
                    <h2 className="text-2xl font-semibold mt-1">Explore success stories.</h2>
                    <p className="mt-1">Get inspired by students and educators sharing their breakthroughs with Apple.</p>
                    </div>
                    <img className="rounded-2xl" src={d5}></img>
                </div>

                <div className="bg-white mt-4 p-4 rounded-2xl flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-xl w-96 h-[600px]">
                    <p>APPLE EDUCATION COMMUNITY</p>
                    <h2 className="text-2xl font-semibold mt-1">Empowering teachers to inspire students..</h2>
                    <p className="mt-1">Get free resources and fresh ideas for teaching with Apple..</p>
                    <img src={d6}></img>
                </div>





            </div>
        </div>


    )

}

export default Article3