import PlanningCard from '@/components/PlanningCard'
import React from 'react'

const TestimonialPage = () => {
  return (
     <div className="w-full h-screen flex flex-col gap-7 justify-center items-center overflow-hidden md:mb-16 sm:mb-12 mb-6">
      <div
        className="relative w-full h-screen bg-left-top sm:bg-left-bottom md:bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="absolute w-full h-[400px] bottom-0 md:-bottom-20 md:right-20 flex justify-center md:justify-end items-center z-30">
                <PlanningCard/>
        </div>
      </div>
    </div>
  )
}

export default TestimonialPage
