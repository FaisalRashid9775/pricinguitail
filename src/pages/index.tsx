import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import IconMark from "./icon";
import MoneyBackIcon from "./MoneyBackIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div className="">
      <div className="bg-[#6B46C1] text-white text-left md:text-center w-full md:w-full h-96 pt-20 md:pt-32">
        <h1 className=" font-extrabold text-2xl md:text-6xl pl-5">
          Simple pricing for your business
        </h1>
        <h3 className="text-md md:text-2xl font-medium  pl-5 pt-5 ">
          Plans that are carefully crafted to suit your business.
        </h3>
      </div>
      <div className="bg-[#F0EAFB] h-72 w-[360px] mt-[-121px] text-center mx-4 md:ml-72 rounded-lg">
        <h1 className="text-2xl font-extrabold pt-14">Premium PRO</h1>
        <h1 className="text-5xl font-extrabold pt-4">$329</h1>
        <h1 className="text-lg font-medium pt-2 pb-4">billed just once</h1>
        <button className="bg-[#805AD5]  w-60 h-14 text-white text-xl rounded-lg ">
          Get Started
        </button>
      </div>

      <div className="bg-[#ffffff] h-80 rounded-lg md:-mt-72 md:ml-[640px] md:w-[700px]">
        <div className="p-5 text-lg ">
          <h1>
            Access these features when you get this pricing package for your
            business.
          </h1>
          <div className="flex mt-5">
            <IconMark />
            <h1 className="pl-5">International calling and messaging API</h1>
          </div>
          <div className="flex mt-4">
            <IconMark />
            <h1 className="pl-5">Additional phone numbers</h1>
          </div>
          <div className="flex mt-4">
            <IconMark />
            <h1 className="pl-5">Automated messages via Zapier</h1>
          </div>
          <div className="flex mt-4">
            <IconMark />
            <h1 className="pl-5">24/7 support and consulting</h1>
          </div>
        </div>
      </div>
      <div>
    </div>
        <div className="flex md:ml-80">
          <MoneyBackIcon />
        </div>
      </div>
    </>
  );
}
