import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { apiUrl, token } from '../../http'
import { toast } from 'react-toastify'

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [previewImage, setPreviewImage] = useState(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(apiUrl + `services/${id}`, {
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token()}`
          }
        })
        const result = await res.json()
        if (result.status) {
          setValue("title", result.data.title)
          setValue("description", result.data.description)
          if (result.data.image) {
            setPreviewImage("http://127.0.0.1:8000/uploads/services/" + result.data.image)
          }
        } else {
          toast.error(result.message || "Service not found")
        }
      } catch (error) {
        console.error(error)
        toast.error("Failed to load service")
      }
    }
    fetchService()
  }, [id, setValue])

  // Upload image to temp-images
  const uploadImage = async (file) => {
    const imgForm = new FormData()
    imgForm.append("image", file)

    try {
      const res = await fetch(apiUrl + 'temp-images', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token()}`
        },
        body: imgForm
      })
      const result = await res.json()
      if (result.status) {
        return result.data.id
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

  // update service
  const onSubmit = async (data) => {
    let imageId = null

    if (data.image && data.image[0]) {
      imageId = await uploadImage(data.image[0])
    }

    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("description", data.description)

    if (imageId) {
      formData.append("imageId", imageId)
    }

    // Important: simulate PUT using POST + _method
    formData.append("_method", "PUT")

    try {
      const res = await fetch(apiUrl + `services/${id}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token()}`
        },
        body: formData
      })

      const result = await res.json()
      if (result.status) {
        toast.success(result.message)
        navigate('/admin/services')
      } else {
        toast.error(result.message || "Update failed")
      }
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong")
    }
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <div className='mt-5'>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className="w-full sm:w-1/3 bg-gray-500 shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">Menu</h2>
          <ul className="space-y-3">
            <li><NavLink to="/admin/services" className="block px-3 py-2 rounded hover:bg-orange-100">Services</NavLink></li>
          </ul>
        </div>

        <div className='w-full sm:w-2/3'>
          <div className='flex justify-between items-center p-2 bg-orange-400'>
            <h1 className='text-black text-sm ml-5'>Edit Service</h1>
            <Link to='/admin/services'>
              <button className='bg-red-700 text-white px-8 py-4 text-sm rounded'>Back</button>
            </Link>
          </div>

          <div className='mt-4 bg-white shadow-md rounded-lg p-6'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
              <div className='flex flex-col'>
                <label className='font-medium text-black mb-1'>Title</label>
                <input {...register('title', { required: true })} type="text" placeholder='Enter Title' className='border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-300' />
                {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
              </div>

              <div className='flex flex-col'>
                <label className='text-black mb-1'>Description</label>
                <input {...register('description', { required: true })} type="text" placeholder='Enter description' className='border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-orange-300' />
                {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
              </div>

              <div className='flex flex-col'>
                <label className='mb-1 text-black'>Upload Image</label>
                <input {...register('image')} type="file" onChange={handleImageChange} className='border rounded px-3 py-2 bg-gray-50 focus:outline-none' />
              </div>

              {previewImage && (
                <div className='mt-3'>
                  <p className='text-sm text-gray-700 mb-1'>Current Image Preview:</p>
                  <img src={previewImage} alt="Preview" className='w-40 h-40 object-cover rounded border' />
                </div>
              )}

              <div>
                <button type='submit' className='w-full bg-orange-400 py-2'>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
