import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Autoplay from "embla-carousel-autoplay";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const Slider = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  return (
    <div className=" w-full h-auto flex flex-col gap-3 justify-center items-center">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="slide-card w-full h-auto flex justify-center items-center"
      >
        <CarouselContent className="-ml-4 flex">
          {slides.map(({ feature_image, feature_name }, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[380px] shrink-0 grow-0"
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
          ))}
        </CarouselContent>
      </Carousel>
      <div className="md:w-[30%] sm:w-[50%] w-[70%] h-auto flex justify-center items-center">
        <Progress value={20} />
      </div>
    </div>
  );
};

export default Slider;
