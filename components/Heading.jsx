import React from 'react'

const Heading = ({text}) => {
  return (
    <h2 className='text-primary trochut lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>
      {text}
    </h2>
  )
}

export default Heading
