import Heading from "@/components/Heading";
import React from "react";
import { Button } from "@/components/ui/button";
import AboutGallery from "@/components/About-Gallery";

const AboutPage = () => {
    
  return (
    <div className="w-full h-auto my-38 flex justify-center items-center">
      <div className="xl:w-[85%] lg:w-[95%] lg:px-0 px-3 h-auto flex lg:flex-row flex-col justify-center items-center gap-12">
        <div className="content lg:w-[50%] sm:w-[80%] h-auto flex flex-col gap-5">
          <Heading text="Your Event, Our Passion" />
          <p className="sunflower lg:w-[500px] text-xs xs:text-sm sm:text-base font-light text-secondary">
            With years of experience in event planning and a passion for
            creating memorable moments, we’re dedicated to making your special
            occasion flawless. Our team specializes in designing events tailored
            to your vision and ensuring every detail exceeds your expectations.
          </p>
          <div><Button className="shadow drop-shadow-xs">Meet Our Team</Button></div>
        </div>
       <AboutGallery />
      </div>
    </div>
  );
};

export default AboutPage;
