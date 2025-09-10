import React from 'react'
import cl from '../assets/call.jpg'

const AboutContact = () => {
  return (
    <div className='mt-2'>

        <div className='flex flex-col sm:flex-row border rounded-2xl overflow-hidden'>


            <div className=' flex flex-col w-full sm:w-1/2 text-center items-center justify-center p-6'>

            <h1 className='text-3xl text-orange-500 mt-2 font-bold'>Our Contacts</h1>
            <p className='text-center mt-4 text-sm  '>Feel Free To Reach Out</p>

            </div>

            <div className='w-full sm:w-1/2 max-h-[400px]'>

            <img src={cl} alt="" className='w-full h-full object-cover' />

            </div>

        </div>


        </div>

  )
}

export default AboutContact