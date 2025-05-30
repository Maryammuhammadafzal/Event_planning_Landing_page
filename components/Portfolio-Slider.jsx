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
    <Carousel className="gallery lg:w-[50%] sm:w-[80%] flex lg:justify-end items-center">
      <CarouselContent
        CarouselContent
        className="flex xs:flex-row flex-col gap-3"
      >
        {/* {portfolio_data &&
          portfolio_data.map((image, index) => (
            <CarouselItem key={index} className="pl-1 basis-[230px]">
              {console.log(image)}
              <Image
                src={image}
                alt="img"
                className="xs:h-[300px] xs:w-[230px]"
              />
            </CarouselItem>
          ))} */}
        {portfolio_data.map(({ image }, i) =>
          image ? (
            <CarouselItem key={i} className="pl-1 basis-[230px]">
              <Image
                src={image}
                alt="img"
                width={300}
                height={300}
                className="xs:h-[300px] xs:w-[230px]"
              />
            </CarouselItem>
          ) : null
        )}

        {/* <CarouselItem className="pl-1 basis-[230px]">
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
          </CarouselItem> */}
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
