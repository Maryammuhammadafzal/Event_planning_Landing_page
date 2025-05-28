import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full h-auto my-38 overflow-hidden">
      <div className="w-full h-auto flex justify-center items-center gap-16 flex-col sm:p-0 px-3">
        <div className=" h-auto flex flex-col gap-4 lg:w-[50%] md:w-[60%] sm:w-[70%] w-full sm:px-0 px-3 justify-center items-center">
          <Heading text="Let’s Start Planning" />
          <p className="sunflower text-xs xs:text-sm sm:text-base font-light text-center text-secondary">
            Our team specializes in designing events tailored to your vision and
            ensuring every detail exceeds your expectations.
          </p>
        </div>
        <div className=" w-full h-auto flex flex-col gap-3 justify-center items-center">
          <div className="2xl:w-[50%] xl:w-[60%] lg:w-[80%] md:w-[90%] w-full h-auto flex flex-wrap gap-16 justify-center items-center">
            <div className="grid xs:w-[200px] w-[90%] items-center gap-1.5 sunflower">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" className="bg-neutral-100 h-[40px] border-none rounded-none" />
            </div>
            <div className="grid xs:w-[200px] w-[90%] items-center gap-1.5 sunflower">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" className="bg-neutral-100 h-[40px] border-none rounded-none" />
            </div>
            <div className="grid xs:w-[200px] w-[90%] items-center gap-1.5 sunflower">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" className="bg-neutral-100 h-[40px] border-none rounded-none" />
            </div>
            <div className="grid xs:w-[200px] w-[90%] items-center gap-1.5 sunflower">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" className="bg-neutral-100 h-[40px] border-none rounded-none" />
            </div>
            <div className="grid xs:w-[200px] w-[90%] items-center gap-1.5 sunflower">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" className="bg-neutral-100 h-[40px] border-none rounded-none" />
            </div>
            <div className="grid xs:w-[200px] w-[90%] items-center  sunflower">
             <Button className="shadow drop-shadow-xs">Let's Start Planning</Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
