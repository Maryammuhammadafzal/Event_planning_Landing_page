import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full h-auto my-38 overflow-hidden">
      <div className="w-full h-auto flex justify-center items-center gap-12 flex-col">
        <div className=" h-auto flex flex-col gap-4 lg:w-[36%] md:w-[50%] sm:w-[70%] w-full sm:px-0 px-3 justify-center items-center">
          <Heading text="Let’s Start Planning" />
          <p className="sunflower text-xs xs:text-sm sm:text-base font-light text-center text-secondary">
            Our team specializes in designing events tailored to your vision and
            ensuring every detail exceeds your expectations.
          </p>
        </div>
        <div className=" w-full h-auto flex flex-col gap-3 justify-center items-center">
         <div className="w-[60%] h-auto flex flex-wrap gap-16 justify-center items-center">
          
         </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
