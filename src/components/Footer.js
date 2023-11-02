import React from "react";
import Uniname from "../Assets/Uni_name.png";
import { SiGmail } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiFacebook } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bottom-0 right-0 z-40 flex p-[10px] bg-gray-800 text-white py-6 ">
      <div className="flex">
        <img src={Uniname} className="" alt="" />
      </div>

      <div className="container flex flex-col items-center mx-auto upper-0">
        <p>&copy; 2023 University of Peradeniya. All rights reserved.</p>
        <div className="">
          <a href="./#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <span className="mx-2">•</span>
          <a href="./#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <SiGmail />
        <SiFacebook />
        <SiYoutube />
      </div>
    </footer>
  );
}
