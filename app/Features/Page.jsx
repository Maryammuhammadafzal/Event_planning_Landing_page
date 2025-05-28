import Heading from "@/components/Heading";
import { Progress } from "@/components/ui/progress";
import React from "react";
import cardImage1 from "../../public/card-image-1.jpg";
import cardImage2 from "../../public/card-image-2.jpg";
import cardImage3 from "../../public/card-image-3.jpg";
import cardImage4 from "../../public/card-image-4.jpg";

import { GoArrowUpRight } from "react-icons/go";

const FeaturesPage = () => {
  let features_data = [
    {
      feature_name: "Personalized Event Planning",
      feature_image: cardImage1,
    },
    {
      feature_name: "Expert Vendor Coordination",
      feature_image: cardImage2,
    },
    {
      feature_name: "Unique Design and Décor",
      feature_image: cardImage3,
    },
    {
      feature_name: "Hassle-Free Execution",
      feature_image: cardImage4,
    },
  ];
  return (
    <div className="w-full h-auto my-38">
      <div className="w-full h-auto flex justify-center items-center gap-12 flex-col">
        <div className=" h-auto flex flex-col gap-4 w-[36%] justify-center items-center">
          <Heading text="Features Highlight" />
          <p className="sunflower text-base font-light text-center text-secondary">
            A captivating slideshow showcasing elegant weddings, corporate
            events, and vibrant parties.
          </p>
        </div>
        <div className=" w-full h-auto flex flex-col gap-3 justify-center items-center">
          <div className="slide-card w-full h-auto flex justify-center items-center">
            <div
              className="card relative w-[365px] h-[240px] bg-cover bg-no-repeat bg-center text-white flex items-end"
              style={{ backgroundImage: `url(${cardImage1.src})` }}
            >
              <div className="overlay bg-black/30 w-[365px] h-[240px] absolute top-0 left-0 "></div>
              <div className="content flex absolute bottom-0 left-0 z-10 justify-center items-center w-full h-[50px] ">
                <p className="text-lg font-medium sunflower flex gap-3">
                  Personalized Event Planning <GoArrowUpRight size={20} />
                </p>
              </div>
            </div>
          </div>
          <div className="w-[40%] h-auto flex justify-center items-center">
            <Progress value={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
