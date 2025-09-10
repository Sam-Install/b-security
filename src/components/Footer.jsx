import React from 'react'
import { Link } from 'react-router-dom'
import logs from '../assets/logo.jpg'


const Footer = () => {
  return (
    <div className='mt-20'>


 <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-gray-400">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                  <img src={logs} alt="" className='w-34' />
                    <p className="mt-6 text-sm text-white">
                       Belta Security provides trusted nationwide protection, combining 10+ years of expertise with modern technology to safeguard homes, businesses, and assets
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-black">Company</h2>
                        <ul className="text-sm space-y-2">
                        <Link to='/'><li className='text-white mb-2'>Home</li></Link>    
                          <Link to='/about'><li className='text-white mb-2'>About</li></Link>       
                           <Link to='/services'><li className='text-white mb-2'>Services</li></Link>   
                            <Link to='/contact'><li className='text-white mb-2'>Contact</li></Link>   
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-black">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p className='text-white'>+254 757 877787</p>
                            <p className='text-white'>Belta@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5 text-black ">
                Copyright 2025© . All Right Reserved.
            </p>
        </footer>


    </div>
  )
}

export default Footer