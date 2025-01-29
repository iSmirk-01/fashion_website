import { AiOutlineFacebook } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import { roboto_Slab } from "../lib/fonts";
import LinkLi from "../components/LinkLi";

function Footer() {
  return (
    <div className="center-flex gap-5 bg-greenDark text-white min-h-[300px] w-full py-14 px-6 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-16 lg:gap-20 py-7 h-full ">
        <div className="center-flex gap-6 lg:col-span-3">
          <h1 className={`${roboto_Slab.className} font-extrabold text-4xl`}>
            Rivo
          </h1>
          <h4 className="text-2xl font-semibold">Social Media</h4>
          <div className="flex items-center gap-4">
            <AiOutlineFacebook className="text-3xl text-lime cursor-pointer" />
            <LuTwitter className="text-3xl text-lime cursor-pointer" />
            <FiInstagram className="text-3xl text-lime cursor-pointer" />
          </div>
        </div>
        <div className="center-flex gap-4">
          <h3 className={`${roboto_Slab.className} text-2xl`}>Shop</h3>
          <ul className="center-flex text-lime gap-6">
            <LinkLi href={"/"} li={"Products"} />
            <LinkLi href={"/"} li={"Overview"} />
            <LinkLi href={"/"} li={"Pricing"} />
            <LinkLi href={"/"} li={"Releases"} />
          </ul>
        </div>
        <div className="center-flex gap-4">
          <h3 className={`${roboto_Slab.className} text-2xl`}>Company</h3>
          <ul className="center-flex text-lime gap-6">
            <LinkLi href={"/"} li={"About Us"} />
            <LinkLi href={"/"} li={"Contact"} />
            <LinkLi href={"/"} li={"News"} />
            <LinkLi href={"/"} li={"Support"} />
          </ul>
        </div>
        <div className="flex items-start flex-col w-full lg:col-span-3 gap-6">
          <h3 className={`${roboto_Slab.className} text-2xl self-center lg:self-start`}>
            STAY UP TO DATE
          </h3>
          <div className="flex flex-col sm:flex-row border-2 border-lime w-full max-w-[387px] sm:h-[47px] rounded-md overflow-hidden">
            <input
              className="bg-transparent flex-1 outline-none p-3 text-sm placeholder-gray-400 focus:border-lime focus:ring-0"
              placeholder="Enter your email"
              aria-label="email-address"
            />
            <button className="bg-lime text-black px-4 sm:px-6 font-medium hover:bg-lime-600 transition-all sm:h-full">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
