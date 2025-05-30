"use client"
import Heading from "@/components/Heading";
import Slider from "@/components/Slider";
import React from "react";

const FeaturesPage = () => {
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
        <Slider slides={features_data} />
      </div>
    </div>
  );
};

export default FeaturesPage;
