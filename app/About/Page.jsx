import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";
import aboutImage1 from "../../public/card-image-4.jpg";
import aboutImage2 from "../../public/about-image-2.jpg";
import aboutImage3 from "../../public/about-image-3.jpg";
import { Button } from "@/components/ui/button";

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
        <div className="gallery lg:w-[50%] sm:w-[80%] flex lg:justify-end items-center">
          <div className="flex xs:flex-row flex-col gap-3">
            <Image src={aboutImage1} alt="img" className="xs:h-[300px] xs:w-[230px] h-[160px] w-[330px]" />
            <div className="flex flex-col gap-3">
              <Image src={aboutImage2} alt="img" className="h-[140px] w-[330px]" />
              <Image src={aboutImage3} alt="img" className="h-[140px] w-[330px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
