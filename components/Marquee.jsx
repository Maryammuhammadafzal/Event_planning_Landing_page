import React from 'react'
import { LuSparkle } from "react-icons/lu";
const Marquee = () => {
  return (
    <div className='w-full h-auto flex gap-6 justify-center items-center overflow-hidden'>
     <div className="flex items-center shrink-0 min-w-full whitespace-nowrap animate-marquee gap-6">
      {[...Array(10)].map((_, i) => (
         <span key={i} className='text-primary trochut font-normal text-xl flex gap-6'>We bring your dreams to life <LuSparkle size={20} className='text-secondary' /></span>
      ))}
     </div>
      </div>
  )
}
 

export default Marquee
