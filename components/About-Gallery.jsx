'use client'
import Aos from 'aos'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Image from "next/image";
import aboutImage1 from "../public/card-image-4.jpg";
import aboutImage2 from "../public/about-image-2.jpg";
import aboutImage3 from "../public/about-image-3.jpg";

const AboutGallery = () => {
        useEffect( ()=> {
                Aos.init({
                        duration : 2000,
                        once: true,
                })
        })
  return (
     <div className="gallery lg:w-[50%] sm:w-[80%] flex lg:justify-end items-center">
          <div className="flex xs:flex-row flex-col gap-3">
            <Image data-aos="fade-down" src={aboutImage1} alt="img" className="xs:h-[300px] xs:w-[230px] h-[160px] w-[330px]" />
            <div className="flex flex-col gap-3">
              <Image data-aos="fade-left" src={aboutImage2} alt="img" className="h-[140px] w-[330px]" />
              <Image data-aos="fade-up"  src={aboutImage3} alt="img" className="h-[140px] w-[330px]" />
            </div>
          </div>
        </div>
  )
}

export default AboutGallery
