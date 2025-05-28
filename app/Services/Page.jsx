import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import CardImage1 from "../../public/service-image-1.jpg";
import CardImage2 from "../../public/service-image-2.jpg";
import CardImage3 from "../../public/service-image-3.jpg";
import CardImage4 from "../../public/service-image-4.jpg";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";
const ServicesPage = () => {
  let service_data = [
    {
      service_image: CardImage1,
      service_title: "Weddings",
      service_desc:
        "From classic ceremonies to unique celebrations, we make your wedding day unforgettable.",
    },
    {
      service_image: CardImage2,
      service_title: "Corporate Events",
      service_desc:
        "Professional planning for conferences, seminars, and team-building events.",
    },
    {
      service_image: CardImage3,
      service_title: "Social Gatherings",
      service_desc:
        "Perfectly curated parties, anniversaries, baby showers, and more.",
    },
    {
      service_image: CardImage4,
      service_title: "Custom Events",
      service_desc: "Have something specific in mind? We’ll make it happen!",
    },
  ];
  return (
    <div className="w-full h-auto my-38 overflow-hidden">
      <div className="w-full h-auto flex justify-center items-center gap-12 flex-col">
        <div className=" h-auto flex flex-col gap-4 lg:w-[36%] md:w-[50%] sm:w-[70%] w-full sm:px-0 px-3 justify-center items-center">
          <Heading text="What We Offer" />
          <p className="sunflower text-xs xs:text-sm sm:text-base font-light text-center text-secondary">
            Our team specializes in designing events tailored to your vision and
            ensuring every detail exceeds your expectations.
          </p>
        </div>
        <div className=" w-full h-auto flex flex-col gap-3 justify-center items-center">
          <div className="slide-card w-full h-auto flex gap-3 flex-wrap justify-center items-center ">
            {service_data.map(
              ({ service_image, service_title, service_desc }, index) => (
                <div key={index} className="card relative w-[300px] h-[260px]">
                  <div
                    className="card w-[260px] h-[213px] bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${service_image.src})` }}
                  >
                  </div>
                    <div className=" w-[200px] shadow-xl h-[160px] bg-white flex flex-col justify-center items-center absolute bottom-0 right-0 ">
                      <div className="w-full h-[160px] px-3 text-center flex flex-col gap-2 justify-center items-center">
                        <h2 className="text-primary trochut text-xl font-bold">
                          {service_title}
                        </h2>
                        <p className=" sunflower text-xs font-light  text-secondary">
                          {service_desc}
                        </p>
                      </div>
                    </div>
                </div>
              )
            )}
          </div>
        </div>
          <div className="w-full h-auto flex justify-center items-center">
            <Button className="shadow drop-shadow-xs">Explore Packages</Button>
          </div>
      </div>
    </div>
  );
};

export default ServicesPage;
