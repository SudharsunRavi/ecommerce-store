import { LANDING_BG } from "../utils/constants"
import FAQSection from "./FAQ"
import ShoeFeaturesSection from "./Features"

const LandingPage = () => {
  return (
    <div className="">
      <div className="bg-neutral-800">
        <img src={LANDING_BG} alt="bg" className="object-cover w-full opacity-60"/>
        <h1 className="absolute top-[45%] left-[39%] text-[150px] text-neutral-100 tracking-widest">NIKE</h1>
      </div>
      <ShoeFeaturesSection/>
      <FAQSection/>
    </div>
  )
}

export default LandingPage