import React from "react";
import HeroImage from "../../public/hero-image.jpg";
import Header from "@/components/Header";
import PlanningCard from "@/components/PlanningCard";
const HeroPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        className="relative w-full h-screen bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="header absolute  top-12 left-0 w-full h-[80px] flex justify-center items-center">
                <Header/>
        </div>
        <div className="absolute w-full h-auto -bottom-20 right-20 flex justify-end items-center">
                <PlanningCard/>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
