import React from 'react'
import gs from '../assets/gsd.jpg'

const Hero2 = () => {
  return (
    <div className='mt-20 relative h-[80vh] w-full'>

       <img src={gs} alt="" className='w-full h-full object-cover' />


<div className='absolute inset-0 bg-black/30'></div>


<div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4'>
    <h1 className='text-orange-600 text-2xl'>Belta Security</h1>
    <p className='mt-4 max-w-2xl text-sm md:text-lg'> Belta Security provides trusted nationwide protection, combining 10+ years of expertise with modern technology to safeguard homes, businesses, and assets.</p>


</div>

    </div>
  )
}

export default Hero2