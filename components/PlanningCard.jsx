"use client"
import React, { useEffect } from "react";
import Logo2 from "../public/logo-white.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Aos from "aos";
import "aos/dist/aos.css"

const PlanningCard = () => {
    useEffect(()=> {
    Aos.init({
duration : 1000,
once : true,
    })
  })
  return (
    <div data-aos="fade-left" duration='1000'  className="sm:w-[560px] h-[400px] w-[97%] flex flex-col justify-center items-center gap-5 card-bg">
      <div className="logo w-auto h-auto">
        <Image src={Logo2} alt="Logo" className="min-w-[130px]" />
      </div>
      <div className="content w-full h-auto flex flex-col gap-3 px-3 sm:px-6 text-center justify-center items-center text-white">
        <h1 className="trochut font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
          Transforming Your Vision Into Unforgettable Events
        </h1>
        <p className="sunflower text-sm sm:text-base font-light sm:px-10 md:px-20">
                From intimate gatherings to grand celebrations, we bring your dreams to life.
        </p>
      </div>
      <div className="button flex justify-center items-center">
        <Button className="shadow drop-shadow-xs">Let's Start Planning!</Button>
      </div>
    </div>
  );
};

export default PlanningCard;
