'use client'
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import PortfolioImage1 from "../public/port-image-1.jpg"
import PortfolioImage2 from "../public/port-image-2.jpg"
import PortfolioImage3 from "../public/port-image-3.jpg"

const PortfolioSlider = () => {
  return (
    <Carousel className="gallery lg:w-[50%] sm:w-[80%] flex lg:justify-end items-center overflow-hidden">
      <CarouselContent CarouselContent className="flex xs:flex-row flex-col gap-3">
          <CarouselItem className="pl-1 basis-[230px]">
            <Image
              src={PortfolioImage1}
              alt="img"
              className="xs:h-[300px] xs:w-[230px]"
            />
          </CarouselItem>
          <CarouselItem className="pl-1 basis-[230px]">
            {" "}
            <Image
              src={PortfolioImage2}
              alt="img"
              className="xs:h-[300px] xs:w-[230px]"
            />
          </CarouselItem>
          <CarouselItem className="pl-1 basis-[230px]">
            {" "}
            <Image
              src={PortfolioImage3}
              alt="img"
              className="xs:h-[300px] xs:w-[230px]"
            />
          </CarouselItem>
          <CarouselItem className="pl-1 basis-[230px]">
            <Image
              src={PortfolioImage1}
              alt="img"
              className="xs:h-[300px] xs:w-[230px]"
            />
          </CarouselItem>
          <CarouselItem className="pl-1 basis-[230px]">
            {" "}
            <Image
              src={PortfolioImage2}
              alt="img"
              className="xs:h-[300px] xs:w-[230px]"
            />
          </CarouselItem>
          <CarouselItem className="pl-1 basis-[230px]">
            {" "}
            <Image
              src={PortfolioImage3}
              alt="img"
              className="xs:h-[300px] xs:w-[230px]"
            />
          </CarouselItem>
        </CarouselContent>
          <CarouselPrevious />
      <CarouselNext />
      {/* <div className="flex xs:flex-row flex-col gap-3">
        <Image
          src={PortfolioImage1}
          alt="img"
          className="xs:h-[300px] xs:w-[230px]"
        />
        <Image
          src={PortfolioImage2}
          alt="img"
          className="xs:h-[300px] xs:w-[230px]"
        />
        <Image
          src={PortfolioImage3}
          alt="img"
          className="xs:h-[300px] xs:w-[230px]"
        />
      </div> */}
    </Carousel>
  );
};

export default PortfolioSlider;
