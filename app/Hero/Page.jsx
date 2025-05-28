import React from "react";
import HeroImage from "../../public/hero-image.jpg";
import Header from "@/components/Header";
import PlanningCard from "@/components/PlanningCard";
import Marquee from "@/components/Marquee";
const HeroPage = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-7 justify-center items-center overflow-x-hidden md:mb-16 sm:mb-12 mb-6">
      <div
        className="relative w-full h-screen bg-left-top sm:bg-left-bottom md:bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="header absolute  top-12 left-0 w-full h-[80px] flex justify-center items-center">
                <Header/>
        </div>
        <div className="absolute w-full h-[400px] bottom-0 md:-bottom-20 md:right-20 flex justify-center md:justify-end items-center z-30">
                <PlanningCard/>
        </div>
      </div>
        <div className="marquee-line w-full h-auto">
                <Marquee/>
        </div>
    </div>
  );
};

export default HeroPage;
