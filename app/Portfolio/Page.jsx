import Heading from "@/components/Heading";
import PortfolioSlider from "@/components/Portfolio-Slider";
import { Button } from "@/components/ui/button";
import React from "react";
import PortfolioImage1 from "../../public/port-image-1.jpg"
import PortfolioImage2 from "../../public/port-image-2.jpg"
import PortfolioImage3 from "../../public/port-image-3.jpg"

const PortfolioPage = () => {
  let portfolio_data = [
    {
      image: PortfolioImage1.src
    },
    {
      image: PortfolioImage2.src
    },
    {
      image: PortfolioImage3.src
    },
    {
      image: PortfolioImage1.src
    },
    {
      image: PortfolioImage2.src
    },
    {
      image: PortfolioImage3.src
    },
  ]
  console.log(portfolio_data);
  
  return (
    <div className="w-full h-auto my-38 flex justify-center items-center">
      <div className="xl:w-[85%] lg:w-[95%] lg:px-0 px-3 h-auto flex lg:flex-row flex-col justify-center items-center gap-12">
        <div className="content lg:w-[50%] sm:w-[80%] h-auto flex flex-col gap-5">
          <Heading text="Our Past Events Speak for Themselves" />
          <p className="sunflower lg:w-[500px] text-xs xs:text-sm sm:text-base font-light text-secondary">
            With years of experience in event planning and a passion for
            creating memorable moments, we’re dedicated to making your special
            occasion flawless. Our team specializes in designing events tailored
            to your vision and ensuring every detail exceeds your expectations.
          </p>
          <div>
            <Button className="shadow drop-shadow-xs">Meet Our Team</Button>
          </div>
        </div>
      <PortfolioSlider portfolio_data={portfolio_data}/>
      </div>
    </div>
  );
};

export default PortfolioPage;
