"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const PortfolioSlider = ({ portfolio_data }) => {
  console.log(portfolio_data);

  return (
    <Carousel className="gallery lg:w-[600px] sm:w-[500px] xs:w-[500px] w-[270px] flex lg:justify-end items-center overflow-hidden">
      <CarouselContent
        className="flex flex-row  gap-3 basis-[250px]"
      >
        {portfolio_data.map(({ image }, i) =>
          image ? (
            <CarouselItem key={i} className="pl-1 basis-[200px]">
              <Image
                src={image}
                alt="img"
                width={300}
                height={300}
                className="h-[300px] w-[230px]"
              />
            </CarouselItem>
          ) : null
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PortfolioSlider;
