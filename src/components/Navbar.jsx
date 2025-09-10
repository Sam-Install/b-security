import React, { useState } from 'react'
import logs from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <img src={logs} alt="" className='w-20' />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'> 
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
        </NavLink>
        <NavLink to='/services' className='flex flex-col items-center gap-1'>
          <p>Services</p>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6 relative'>

        {/* Profile dropdown */}
        <div className='relative'>
          <CgProfile
            className='text-4xl cursor-pointer'
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-md z-50">
              <NavLink 
                to="/admin/login" 
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setShowProfileMenu(false)}
              >
                Admin
              </NavLink>
              <NavLink 
                to="/" 
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setShowProfileMenu(false)}
              >
                User
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile menu icon */}
        <CiMenuBurger className='text-3xl md:hidden' onClick={() => setVisible(true)} />
      </div>

      {/* Mobile slide menu */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-black'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
            <FaArrowRight className='h-4 rotate-180' />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/services' className='py-2 pl-6'>Services</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6'>Contact</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar
