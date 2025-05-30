'use client'
import Aos from 'aos'
import React from 'react'
import 'aos/dist/aos.css'
const ServiceCard = ({service_data}) => {
        Aos.init({
                duration: 1000,
                once: true,
        })
  return (
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
                    <div data-aos="zoom-in" className=" hover:scale-110 w-[200px] shadow-xl h-[160px] bg-white flex flex-col justify-center items-center absolute bottom-0 right-0 ">
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
  )
}

export default ServiceCard
