"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import Logo2 from "../public/logo-white.png";


const TestmonialSlider = () => {

  const countRef = useRef(null)
const [currentIndex, setCurrentIndex] = useState(0);
console.log(countRef);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => prev + 1);
  //   }, 500); // slide duration in ms
  //   return () => clearInterval(interval);
  // }, [slideCount])
  return (
    <Carousel className="sm:w-[560px] w-[300px]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-[560px] h-[400px] basis-[300px] "
          >
            <div className="sm:w-[560px] h-[400px] w-[280px] flex flex-col justify-center items-center gap-5 card-bg">
              <div className="logo w-auto h-auto">
                <Image src={Logo2} alt="Logo" className="min-w-[130px]" />
              </div>
              <div className="content w-full h-auto flex flex-col gap-3 px-3 sm:px-6 text-center justify-center items-center text-white">
                <h1 className="trochut font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
                  Kind Words From Our Clients
                </h1>
                <p className="sunflower text-sm sm:text-base font-light sm:px-10 md:px-20">
                  They made our wedding day magical. Everything was beyond
                  perfect!”
                </p>
                <p className="text-lg">Jane & Mike</p>
              </div>
              <div className="button flex justify-center items-center">
                <Button onClick={(prev)=> prev + 1} className="shadow drop-shadow-xs">
                  Next
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="sm:block hidden" />
      <CarouselNext className="sm:block hidden" />
    </Carousel>
  );
};

export default TestmonialSlider;
