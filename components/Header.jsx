import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";
import Link from "next/link";
import { MdOutlineMenuOpen } from "react-icons/md";
const Header = () => {
  return (
    <header className="w-[85%] bg-white rounded-full flex justify-center items-center h-[80px]">
      <div className="w-full h-auto flex items-center justify-between px-6 md:px-7 lg:px-15">
        <div className="logo w-auto h-auto">
          <Image src={Logo} alt="Logo" className="max-w-[100px] md:min-w-[130px]" />
        </div>
        <div className="tabs w-auto h-auto flex justify-center items-center ">
          <ul className=" justify-center items-center md:flex hidden lg:gap-11 md:gap-4 w-auto h-auto sunflower text-secondary xl:pr-10">
            <li>
              <Link
                href="/"
                className="hover:text-primary focus:text-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-primary focus:text-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-primary focus:text-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-primary focus:text-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-primary focus:text-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-primary focus:text-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-primary focus:text-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="menu-icon text-secondary md:hidden flex justify-center items-center">
            <MdOutlineMenuOpen size={35} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
