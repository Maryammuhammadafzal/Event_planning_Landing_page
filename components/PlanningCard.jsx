import React from "react";
import Logo2 from "../public/logo-white.png";
import Image from "next/image";
import { Button } from "./ui/button";

const PlanningCard = () => {
  return (
    <div className="sm:w-[560px] h-[400px] w-[95%] flex flex-col justify-center items-center gap-5 card-bg">
      <div className="logo w-auto h-auto">
        <Image src={Logo2} alt="Logo" className="min-w-[130px]" />
      </div>
      <div className="content w-full h-auto flex flex-col gap-3 px-6 text-center justify-center items-center text-white">
        <h1 className="trochut font-bold text-3xl sm:text-4xl md:text-5xl">
          Transforming Your Vision Into Unforgettable Events
        </h1>
        <p className="sunflower text-base font-light px-20">
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
