import React from 'react'

const PortfolioSlider = () => {
  return (
      <div className="gallery lg:w-[50%] sm:w-[80%] flex lg:justify-end items-center overflow-hidden">
          <div className="flex xs:flex-row flex-col gap-3">
            <Image
              src={PortfolioImage1}
              alt="img"
              className="xs:h-[300px] xs:w-[230px]"
            />
            <Image
              src={PortfolioImage2}
              alt="img"
              className="xs:h-[300px] xs:w-[230px]"
            />
            <Image
              src={PortfolioImage3}
              alt="img"
              className="xs:h-[300px] xs:w-[230px]"
            />
              
          </div>
        </div>
  )
}

export default PortfolioSlider
