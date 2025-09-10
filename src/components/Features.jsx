import React from 'react'
import { motion } from 'framer-motion'
import { IoMdTime } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { TbMoneybag } from "react-icons/tb";

const Features = () => {
  const features = [
    {
      icon: <IoMdTime className='text-4xl text-blue-500' />,
      title: "Quick Response",
      desc: "Always on protection and quick response round the clock"
    },
    {
      icon: <MdOutlineCalendarMonth className='text-4xl text-blue-500' />,
      title: "10+ years Experience",
      desc: "A proven track record of safeguarding people and property"
    },
    {
      icon: <HiMiniComputerDesktop className='text-4xl text-blue-500' />,
      title: "Modern Technology",
      desc: "We offer state of the art Technology"
    },
    {
      icon: <TbMoneybag className='text-4xl text-blue-500' />,
      title: "Value for Money",
      desc: "We offer services worth every penny"
    }
  ];

  return (
    <div className='mt-20'>
      <h1 className='text-xl text-center mt-2 text-orange-500 font-bold mb-5'>
        Our Features
      </h1>

 
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
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
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center text-center p-4 rounded-lg shadow hover:shadow-lg transition'
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {feature.icon}
            <h2 className='font-bold mt-5'>{feature.title}</h2>
            <p className='mb-4 text-gray-600'>{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Features
