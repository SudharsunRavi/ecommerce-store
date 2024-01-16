import { LOGO_WHITE } from "../utils/constants"

const Footer = () => {
  return (
    <footer className="bg-black h-[350px] pt-1 flex justify-between bottom-0 w-full">
        <div className="ml-44">
            <img src={LOGO_WHITE} alt="logo" className="w-32 pt-24 pl-10" />
            <h1 className="text-white text-xl font-bold pl-14">NIKE</h1>
            <p className="pl-10 pt-4 mt-6 text-white">Follow us on:</p>

            <div className="flex gap-3 pt-3 pl-10">
                <a href="www.facebook.com" target="_blank">
                    <i className="fa fa-facebook-f text-white text-xl"></i>
                </a>

                <a href="www.twitter.com" target="_blank">
                    <i className="fa fa-twitter text-white text-xl"></i>
                </a>

                <a href="www.instagram.com" target="_blank">
                    <i className="fa fa-instagram text-white text-xl"></i>
                </a>
            </div>
        </div>

        <div className="text-white mt-24 mr-52">
            <h1 className="text-lg font-bold pb-6">COMPLIANCE</h1>
            <p className="pb-2">Accessibility statement</p>
            <p className="pb-2">Privacy Policy</p>
            <p className="pb-2">Terms of use</p>
        </div>
    </footer>
  )
}

export default Footer