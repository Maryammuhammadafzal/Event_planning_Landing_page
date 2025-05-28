import { Heading } from "lucide-react";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ServicesPage = () => {
  let service_data = [
    {
      service_image: cardImage1,
      service_title: "Weddings",
      service_desc:
        "From classic ceremonies to unique celebrations, we make your wedding day unforgettable.",
    },
    {
      service_image: cardImage2,
      service_title: "Corporate Events",
      service_desc:
        "Professional planning for conferences, seminars, and team-building events.",
    },
    {
      service_image: cardImage3,
      service_title: "Social Gatherings",
      service_desc:
        "Perfectly curated parties, anniversaries, baby showers, and more.",
    },
    {
      service_image: cardImage4,
      service_title: "Custom Events",
      service_desc:
        "Have something specific in mind? We’ll make it happen!",
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
          <div className="slide-card w-full h-auto flex justify-center items-center animate-marquee whitespace-nowrap  overflow-hidden">
            {features_data.map(
              ({ service_image, service_title, service_desc }, index) => (
                <div key={index} className="card relative w-[300px] h-[260px]">
                  <div
                    className="card w-[260px] h-[213px] bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${service_image.src})` }}
                  >
                    <div className=" w-[200px] h-[160px] bg-white flex justify-center items-center absolute bottom-0 right-0 ">
                      <div className="content flex justify-center items-center w-full h-auto">
                        <h2 className="text-primary trochut text-2xl font-bold">
                          {service_title}
                        </h2>
                        <p className="sunflower text-xs font-light text-center text-secondary">
                          {service_desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="w-full h-auto flex justify-center items-center">
            <Button className="shadow drop-shadow-xs">Explore Packages</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
