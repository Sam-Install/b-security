import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import sc from '../assets/seci.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='mt-2'>
      <Hero />

      <motion.h1
        className='text-center font-semibold text-2xl mt-5'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Who We Are
      </motion.h1>

      <div className='flex flex-col sm:flex-row gap-6 mt-10 px-4 sm:px-10'>
   
        <motion.div
          className='w-full sm:w-1/2 max-w-[400px]'
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img src={sc} alt="About Belta Security" className='w-full h-full object-cover rounded-lg shadow-lg' />
        </motion.div>

 
        <motion.div
          className='w-full sm:w-1/2 flex flex-col justify-center'
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className='text-center font-semibold text-xl mb-4'>More About Us</h1>

          <p className='text-gray-600 text-center mb-6'>
            Belta Security is a trusted leader in professional security solutions with over 10 years of proven experience safeguarding homes, businesses, and individuals. Operating across the country, we combine skilled personnel, modern technology, and responsive strategies to provide unmatched protection.
            <br /><br />
            Our services range from K9 security, VIP protection, gate guarding, and CCTV installation to consulting, patrols, parcel handling, and guard training. We pride ourselves on delivering tailored solutions that ensure safety, peace of mind, and true value for money.
            <br /><br />
            At Belta Security, your safety is our mission — and your trust is our greatest achievement.
          </p>

          <div className='flex items-center justify-center'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to='/services'>
                <button className='bg-orange-400 text-white px-6 py-2 text-sm rounded shadow'>
                  Our Services
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
