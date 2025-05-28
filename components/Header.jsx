import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png"
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-[85%] bg-white rounded-full flex justify-center items-center h-[80px]">
      <div className="w-full h-auto flex items-center justify-between lg:px-20">
        <div className="logo w-auto h-auto">
                <Image 
                 src={Logo}
                 alt="Logo"
                 className="min-w-[130px]"
                 />
        </div>
        <div className="tabs w-auto h-auto flex justify-center items-center ">
              <ul className="flex justify-center items-center lg:gap-11 w-auto h-auto">
                <li><Link href="/">Home</Link></li>
                </ul>  
        </div>
      </div>
    </header>
  );
};

export default Header;
