import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { apiUrl, token } from '../../http'
import { toast } from 'react-toastify'

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  // Function to upload image to temp-images
  const uploadImage = async (file) => {
    const imgForm = new FormData()
    imgForm.append("image", file)

    try {
      const res = await fetch(apiUrl + 'temp-images', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token()}`
        },
        body: imgForm
      })

      const result = await res.json()
      if (result.status) {
        return result.data.id // return the uploaded temp image ID
      } else {
        toast.error("Image upload failed")
        return null
      }
    } catch (error) {
      console.error(error)
      toast.error("Error uploading image")
      return null
    }
  }

  // Main form submit
  const onSubmit = async (data) => {
    let imageId = null

    // If an image is selected, upload it first
    if (data.image && data.image[0]) {
      imageId = await uploadImage(data.image[0])
    }

    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("description", data.description)
    if (imageId) {
      formData.append("imageId", imageId)
    }

    try {
      const res = await fetch(apiUrl + 'services', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token()}`
        },
        body: formData
      })

      const result = await res.json()
      if (result.status) {
        toast.success(result.message)
        navigate('/admin/services')
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <div className='mt-5'>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className="w-full sm:w-1/3 bg-gray-500 shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">Menu</h2>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/admin/services"
                className="block px-3 py-2 rounded hover:bg-orange-100"
              >
                Services
              </NavLink>
            </li>
            
          </ul>
        </div>

        <div className='w-full sm:w-2/3'>
          <div className='flex justify-between items-center p-2 bg-orange-400'>
            <h1 className='text-black text-sm ml-5'>Services</h1>
            <Link to='/admin/services'>
              <button className='bg-red-700 text-white px-8 py-4 text-sm rounded'>Back</button>
            </Link>
          </div>

          <div className='mt-4 bg-white shadow-md rounded-lg p-6'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
              <div className='flex flex-col'>
                <label className='font-medium text-black mb-1'>Title</label>
                <input
                  {...register('title', { required: true })}
                  type="text"
                  placeholder='Enter Title'
                  className='border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-300'
                />
                {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
              </div>

              <div className='flex flex-col'>
                <label className='text-black mb-1'>Description</label>
                <input
                  {...register('description', { required: true })}
                  type="text"
                  placeholder='Enter description'
                  className='border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-300'
                />
                {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
              </div>

              <div className='flex flex-col'>
                <label className='mb-1 text-black'>Upload Image</label>
                <input
                  {...register('image')}
                  type="file"
                  className='border rounded px-3 py-2 bg-gray-50 focus:outline-none'
                />
              </div>

              <div>
                <button type='submit' className='w-full bg-orange-400 py-2'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
