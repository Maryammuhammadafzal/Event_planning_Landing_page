"use client";
import Heading from "@/components/Heading";
import Slider from "@/components/Slider";
import { Progress } from "@/components/ui/progress";
import React, { useEffect, useState } from "react";

const FeaturesPage = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
    const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = features_data.length;
  const progress = (currentIndex / slideCount) * 100;
  useEffect(() => {
    if (!api) return;

    setCount(features_data.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, 3000); // slide duration in ms
    return () => clearInterval(interval);
  }, [slideCount]);
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
        <Slider
          slides={features_data}
          setApi={setApi}
          current={current}
          count={count}
        />
        <div className="md:w-[30%] sm:w-[50%] w-[70%] h-auto flex justify-center items-center">
          <Progress value={progress} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
