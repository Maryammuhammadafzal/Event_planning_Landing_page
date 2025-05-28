import React from 'react'
import Logo from "../public/logo.png";
const Footer = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <div className='xl:w-[60%] flex flex-col justify-center items-center gap-6 w-full lg:w-[80%] md:w-full md:px-0 px-3'>
<footer className='w-full flex justify-center items-center h-auto gap-12'>
<div className="w-auto h-auto flex flex-col gap-4">
<div className="logo w-auto h-auto">
          <Image src={Logo} alt="Logo" className="max-w-[100px] md:min-w-[130px]" />
        </div>
        <div className="icons flex gap-2"></div>
</div>
<div className='w-auto h-auto flex flex-col gap-2'>

  <ul className='w-auto h-auto flex flex-col gap-1'>
    <li className='flex gap-1 sunflower text-secondary text-base font-light'><span className='w-2 h-2 rounded-full bg-primary'></span> Home</li>
    <li className='flex gap-1 sunflower text-secondary text-base font-light'><span className='w-2 h-2 rounded-full bg-primary'></span> About</li>
    <li className='flex gap-1 sunflower text-secondary text-base font-light'><span className='w-2 h-2 rounded-full bg-primary'></span> Services</li>
    <li className='flex gap-1 sunflower text-secondary text-base font-light'><span className='w-2 h-2 rounded-full bg-primary'></span> Portfolio</li>
    <li className='flex gap-1 sunflower text-secondary text-base font-light'><span className='w-2 h-2 rounded-full bg-primary'></span> Blog</li>
    <li className='flex gap-1 sunflower text-secondary text-base font-light'><span className='w-2 h-2 rounded-full bg-primary'></span> Contact</li>
  </ul>
</div>
</footer>
      </div>
    </div>
  )
}

export default Footer
