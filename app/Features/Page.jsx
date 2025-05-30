"use client"
import Heading from "@/components/Heading";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const FeaturesPage = () => {
  //  var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

  let features_data = [
    {
      feature_name: "Personalized Event Planning",
      feature_image: "/card-image-1.jpg",
    },
    {
      feature_name: "Expert Vendor Coordination",
      feature_image: "/card-image-2.jpg",
    },
    {
      feature_name: "Unique Design and Décor",
      feature_image: "/card-image-3.jpg",
    },
    {
      feature_name: "Hassle-Free Execution",
      feature_image: "/card-image-4.jpg",
    },
    {
      feature_name: "Personalized Event Planning",
      feature_image: "/card-image-1.jpg",
    },
    {
      feature_name: "Expert Vendor Coordination",
      feature_image: "/card-image-2.jpg",
    },
    {
      feature_name: "Unique Design and Décor",
      feature_image: "/card-image-3.jpg",
    },
    {
      feature_name: "Hassle-Free Execution",
      feature_image: "/card-image-4.jpg",
    },
  ];
  return (
    <div className="w-full h-auto my-38 overflow-hidden">
      <div className="w-full h-auto flex justify-center items-center gap-12 flex-col">
        <div className=" h-auto flex flex-col gap-4 lg:w-[36%] md:w-[50%] sm:w-[70%] w-full sm:px-0 px-3 justify-center items-center">
          <Heading text="Features Highlight" />
          <p className="sunflower text-xs xs:text-sm sm:text-base font-light text-center text-secondary">
            A captivating slideshow showcasing elegant weddings, corporate
            events, and vibrant parties.
          </p>
        </div>
        <div className=" w-full h-auto flex flex-col gap-3 justify-center items-center">
          {/* <Slider {...settings}> */}
          <div className="slide-card w-full h-auto flex justify-center items-center">
            <Carousel>
              <CarouselContent>
                  {features_data.map(
                    ({ feature_image, feature_name }, index) => (
                      <CarouselItem
                        key={index}
                      >
                      <div
                        key={index}
                        className="card  relative w-[380px] h-[240px] bg-cover bg-no-repeat bg-center text-white flex items-end"
                        style={{ backgroundImage: `url(${feature_image})` }}
                      >
                        <div className="overlay bg-black/30 w-[380px] h-[240px] absolute top-0 left-0 "></div>
                        <div className="content flex absolute bottom-0 left-0 z-10 justify-center items-center w-full h-[50px] ">
                          <p className="text-lg font-medium sunflower flex gap-3">
                            {feature_name} <GoArrowUpRight size={20} />
                          </p>
                        </div>
                      </div>
                      </CarouselItem>
                    )
                  )}
              
              </CarouselContent>
            </Carousel>
          </div>
          {/* </Slider> */}
          <div className="md:w-[30%] sm:w-[50%] w-[70%] h-auto flex justify-center items-center">
            <Progress value={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
