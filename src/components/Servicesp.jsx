import React from 'react'
import { motion } from 'framer-motion'
import dg from '../assets/dog.jpg'
import frsk from '../assets/frisk.jpg'
import cctv from '../assets/install.jpg'
import vp from '../assets/vip.jpg'

const Servicesp = () => {
  const servicesp = [
    {
      img: cctv,
      title: "CCTV installation",
      Desc: "We offer CCTV installation"
    },
    {
      img: dg,
      title: "K9 security",
      Desc: "We lend trained guard dogs to guard premises"
    },
    {
      img: vp,
      title: "VIP protection",
      Desc: "We offer trained and upclose vip protection"
    },
    {
      img: frsk,
      title: "Gateman, company gate guards",
      Desc: "We offer guards to your businesses"
    },
  ]

  return (
    <div className='mt-20'>
      <h1 className='text-center text-black font-bold mb-5'>What We Do</h1>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 }
          }
        }}
      >
        {servicesp.map((service, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition'
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 50 },
              visible: { opacity: 1, scale: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
          
            <motion.img
              src={service.img}
              alt={service.title}
              className='w-38 h-38 object-cover rounded-full mb-4'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            <h2 className='text-black font-semibold'>{service.title}</h2>
            <p className='mt-2 text-gray-600'>{service.Desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Servicesp
