import c1 from "../assets/images/c1.jpeg"
import c2 from "../assets/images/c2.jpeg"
import c3 from "../assets/images/c3.jpeg"
import c4 from "../assets/images/c4.jpeg"
import c5 from "../assets/images/c5.jpeg"
import c6 from "../assets/images/c6.jpeg"

function A() {
    return (
        <>
        <div className="w-full max-w-screen-xl mx-auto overflow-x-hidden">
  {/* Header */}
  <div className="pt-7 px-4">
    <h1 className="text-2xl font-medium">
      Education essentials.
      <span className="text-gray-500 font-medium">
        {" "}
        For College students, educators, and more.
      </span>
    </h1>
  </div>

  {/* Scrollable on mobile, Grid on desktop */}
  <div className="mt-6 px-4 md:px-8">
    <div className="flex  gap-4 overflow-x-auto md:overflow-x-visible pb-4 scrollbar-hide">
      
      {/* CARD 1 */}
      <div className="min-w-[200px] md:min-w-0 bg-white p-4 rounded-2xl flex-shrink-0 hover:scale-105 transition-transform break-words shadow w-full">
        <h3 className="text-base md:text-lg font-semibold leading-snug mb-2">
          Learn about education savings available only at Apple.**
        </h3>
        <img src={c1} alt="c1" className="w-full h-auto object-contain" />
      </div>

      {/* CARD 2 */}
      <div className="min-w-[280px] md:min-w-0 bg-white p-4 rounded-2xl flex-shrink-0 hover:scale-105 transition-transform break-words shadow w-full">
        <h3 className="text-base md:text-lg font-semibold leading-snug mb-2">
          Apple Music Student Plan comes with Apple TV+ for free.°°
        </h3>
        <p className="text-sm mb-2">Special student rate available</p>
        <img src={c2} alt="c2" className="w-full h-auto object-contain" />
      </div>

      {/* CARD 3 */}
      <div className="min-w-[280px] md:min-w-0 bg-white p-4 rounded-2xl flex-shrink-0 hover:scale-105 transition-transform break-words shadow w-full">
        <p className="text-sm font-medium mb-1">PAYMENT OPTIONS</p>
        <h3 className="text-base md:text-lg font-semibold leading-snug mb-2">
          Flexible ways to pay.°°
        </h3>
        <img src={c3} alt="c3" className="w-full h-auto object-contain" />
      </div>

      {/* CARD 4 */}
      <div className="min-w-[280px] md:min-w-0 bg-white p-4 rounded-2xl flex-shrink-0 hover:scale-105 transition-transform break-words shadow w-full">
        <p className="text-sm font-medium mb-1">CUSTOMISE YOUR MAC</p>
        <h3 className="text-base md:text-lg font-semibold leading-snug mb-2">
          Build it just the way you want
        </h3>
        <p className="text-sm mb-2">Choose your memory, storage, graphics, even colour.</p>
        <img src={c4} alt="c4" className="w-full h-auto object-contain" />
      </div>

      {/* CARD 5 */}
      <div className="min-w-[280px] md:min-w-0 bg-white p-4 rounded-2xl flex-shrink-0 hover:scale-105 transition-transform break-words shadow w-full">
        <p className="text-sm font-medium mb-1">FREE ENGRAVING</p>
        <h3 className="text-base md:text-lg font-semibold leading-snug mb-2">Make them yours.</h3>
        <p className="text-sm mb-2">Engrave emoji, names, and numbers for free.</p>
        <img src={c5} alt="c5" className="w-full h-auto object-contain" />
      </div>

      {/* CARD 6 */}
      <div className="min-w-[280px] md:min-w-0 bg-white p-4 rounded-2xl flex-shrink-0 hover:scale-105 transition-transform break-words shadow w-full">
        <h3 className="text-base md:text-lg font-semibold leading-snug mb-2">
          Shop one-to-one with a Specialist. Online or in a store.
        </h3>
        <img src={c6} alt="c6" className="w-full h-auto object-contain" />
      </div>

    </div>
  </div>
</div>


        </>
    )
}

export default A