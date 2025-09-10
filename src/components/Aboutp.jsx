import React from 'react'
import { Link } from 'react-router-dom'
import cct from '../assets/cctv.jpg'
import { motion } from "framer-motion";



const Aboutp = () => {
  return (
    <div className='mt-20'>

        <h1 className='text-2xl font-bold text-center mb-5'>Who We Are</h1>

        <div className='flex flex-col sm:flex-row mt-4'>

        <motion.div 
        
        
    
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.8,
    type: "spring", 
    stiffness: 120,
  }}
        
        className='w-full sm:w-1/2 flex flex-col justify-center items-center text-center p-6 '>

        <p className=''>Belta Security has been safeguarding homes, businesses, and institutions for over 10 years with trusted expertise.
We are a nationwide security provider, serving clients across the country with tailored protection solutions.
Our team combines cutting-edge technology with trained professionals to deliver reliable, 24/7 security.
With a proven track record, we are committed to keeping what matters most to you safe and secure.</p>

<div className='mt-4'>
 <Link to='/services'> <button className='bg-blue-600 text-black px-6 py-2 text-sm rounded'>Learn More</button> </Link>
</div>

        </motion.div>


        <div className='w-full sm:w-1/2 max-h-[400px]'>

        <img src={cct} alt="" className='w-full h-full object-cover ' />

        </div>

</div>

    </div>
  )
}

export default Aboutp