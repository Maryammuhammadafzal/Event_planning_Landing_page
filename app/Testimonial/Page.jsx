
import React from "react";
import TestimonialImage from "../../public/testimonial-image.jpg";
import TestimonialCard from "@/components/TestimonialCard";
const TestimonialPage = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div
        className="relative w-full h-[500px] bg-left-top sm:bg-left-bottom md:bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${TestimonialImage.src})` }}
      >
        <div className="absolute w-full h-[400px] bottom-0 md:-bottom-20 md:right-20 flex justify-center md:justify-end items-center z-30">
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
