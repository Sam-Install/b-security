import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AboutContact from '../components/AboutContact'
import img from '../assets/imag.jpg'
import { toast } from 'react-toastify'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const result = await res.json()

      if (result.status) {
        toast.success(result.message)
        setForm({ name: "", email: "", phone: "", message: "" }) 
      } else {
        if (result.errors) {
          
          const firstError = Object.values(result.errors)[0][0]
          toast.error("Failed: " + firstError)
        } else {
          toast.error("Failed: " + (result.message || "Something went wrong"))
        }
      }
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <div className='mt-10'>
      

      <div className='flex flex-col sm:flex-row gap-6 mt-10 px-4 sm:px-10'>
        {/* Left Side Image */}
        <motion.div
          className='w-full sm:w-1/2 max-w-[400px]'
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src={img}
            alt="Contact Belta Security"
            className='w-full h-full object-cover rounded-lg shadow-lg'
          />
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className='w-full sm:w-1/2 flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg'
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col'>
            <label className='mb-1 font-medium text-black'>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='Enter Name'
              className='px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400'
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-1 font-medium text-black'>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='Enter Email'
              className='px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400'
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-1 font-medium text-black'>Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder='Enter Phone'
              className='px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="message" className="mb-1 font-medium text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Enter Message"
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button type="submit" className='bg-orange-400 text-white px-6 py-3 text-sm rounded shadow'>
              Submit
            </button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
