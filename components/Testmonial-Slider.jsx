import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import Logo2 from "../public/logo-white.png";
const TestmonialSlider = () => {
  return (
    <Carousel className="w-[560px]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-[560px] h-[400px] w-[97%] ">
            <div  className="sm:w-[560px] h-[400px] w-[97%] flex flex-col justify-center items-center gap-5 card-bg">
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
                <Button className="shadow drop-shadow-xs">Next</Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TestmonialSlider;
