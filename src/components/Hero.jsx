import React from 'react'
import seci from '../assets/sec.jpg'
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className='mt-2'>

        <div className='flex flex-col sm:flex-row border rounded-2xl overflow-hidden'>

            <motion.div  
            
            
             initial={{ opacity: 0, y: 50 }}  
  animate={{ opacity: 1, y: 0 }}      
  transition={{ duration: 0.8 }}
            
            className='flex flex-col justify-center items-center text-center w-full sm:w-1/2 p-6'>

            <h1 className='text-orange-500 text-3xl font-bold'>BELTA SECURITY</h1>
            <h2 className='text-xl mt-2'>Best Security Company</h2>
            <p className='mt-4 text-gray-600'>Secure Your Home, Company and Garages with us amd let us maximise your security</p>

            <div className='mt-4'>
                <button  
                
                onClick={() => {
      window.open(
        "https://wa.me/254753879163?text=Hello,%20I%20would%20like%20to%20get%20a%20quote.", 
        "_blank"
      );
    }}
                
                className='bg-orange-500 text-black px-6 py-2 text-sm rounded'>Get A Quote</button>
            </div>

            </motion.div>


            <div className='w-full sm:w-1/2 max-h-[400px]'>

            <img src={seci} alt="" className='w-full h-full object-cover' />

            </div>

        </div>

    </div>
  )
}

export default Hero