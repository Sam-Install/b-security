import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero2 from '../components/Hero2'
import { apiUrl } from '../components/http'
import { toast } from 'react-toastify'

const Services = () => {
  const [services, setServices] = useState([])

  // Fetch services from backend
  const fetchServices = async () => {
    try {
      const res = await fetch(apiUrl + 'services', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const result = await res.json()
      if (result.status) {
        setServices(result.data)
      } else {
        toast.error(result.message || 'Failed to fetch services')
      }
    } catch (error) {
      console.error(error)
      toast.error('Error fetching services')
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  // Helper function to get full URL for images stored in Laravel storage
  const getImageUrl = (imageName) => {
    if (!imageName) return ''
    return 'http://127.0.0.1:8000/uploads/services/' + imageName
  }

  return (
    <div className='mt-2'>
      <Hero2 />

      <h1 className='text-center mt-8 text-2xl font-bold'>Our Services</h1>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 px-6'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {services.map(service => (
          <motion.div
            key={service.id}
            className='flex flex-col items-center text-center p-4 border rounded-xl shadow hover:shadow-lg transition'
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            {service.image && (
              <img
                src={getImageUrl(service.image)}
                alt={service.title}
                className='rounded-lg mb-3 w-full h-48 object-cover'
              />
            )}
            <h2 className='text-orange-400 font-semibold mt-2'>{service.title}</h2>
            <p className='text-sm text-gray-500 mt-1'>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services
