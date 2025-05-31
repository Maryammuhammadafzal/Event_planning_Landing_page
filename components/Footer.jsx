import React from "react";
import Logo from "../public/logo.png";
import Image from "next/image";
import { BiLogoInstagram } from "react-icons/bi";
import { PiPhoneLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="xl:w-[60%] flex flex-col justify-center items-center gap-6 w-full lg:w-[80%] md:w-full md:px-0 px-3">
        <footer className="w-full flex flex-wrap px-3 h-auto gap-40">
          <div className="w-auto h-auto flex flex-col gap-4">
            <div className="logo w-auto h-auto">
              <Image
                src={Logo}
                alt="Logo"
                className="max-w-[100px] md:min-w-[130px]"
              />
            </div>
            <div className="icons flex gap-2 text-primary">
              <BiLogoInstagram size={30}/>
              <RiWhatsappLine size={30}/>
              <CiFacebook size={30}/>
              <RiLinkedinLine size={30}/>
            </div>
          </div>
          <div className="w-auto h-auto flex flex-col gap-2">
            <h2 className="text-primary trochut text-xl font-bold">
              Quick links
            </h2>
            <ul className="w-auto h-auto flex flex-col gap-1">
              <li className="flex gap-2 sunflower items-center text-secondary text-base font-light">
                <span className="w-1 h-1 rounded-full bg-primary"></span> Home
              </li>
              <li className="flex gap-2 sunflower items-center text-secondary text-base font-light">
                <span className="w-1 h-1 rounded-full bg-primary"></span> About
              </li>
              <li className="flex gap-2 sunflower items-center text-secondary text-base font-light">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Services
              </li>
              <li className="flex gap-2 sunflower items-center text-secondary text-base font-light">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Portfolio
              </li>
              <li className="flex gap-2 sunflower items-center text-secondary text-base font-light">
                <span className="w-1 h-1 rounded-full bg-primary"></span> Blog
              </li>
              <li className="flex gap-2 sunflower items-center text-secondary text-base font-light">
                <span className="w-1 h-1 rounded-full bg-primary"></span>{" "}
                Contact
              </li>
            </ul>
          </div>
          <div className="flex w-auto h-auto flex-col gap-2">
            <h2 className="text-primary trochut text-xl font-bold">Contact</h2>
            <ul className="w-auto h-auto flex flex-col gap-1">
              <li className="flex gap-1 sunflower items-center text-secondary text-base font-light">
               <PiPhoneLight size={15} className="text-primary" />  (123) 456-7890
              </li>
              <li className="flex gap-1 sunflower items-center text-secondary text-base font-light">
                <AiOutlineMail size={15} className="text-primary" /> info@havenplanner.com
              </li>
              <li className="flex gap-1 sunflower items-center text-secondary text-base font-light">
                {" "}
               <CiLocationOn size={15} className="text-primary" /> 2464 Royal Ln. Mesa, New Jersey 45463
              </li>
            </ul>
          </div>
        </footer>
        <div className="w-full h-auto justify-center items-center text-secondary text-sm">
          © 2025 Haven Planner. All Rights Reserved by <span className="text-primary">Rootletsolutions.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
