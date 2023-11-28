import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='bg-white rounded-md w-[80%] h-auto md:sticky top-3 m-auto py-1 px-5 flex flex-row justify-between items-center drop-shadow-2xl shadow-2xl'>
        <div className='w-18 h-7 cursor-pointer flex'>
            <Link to='/' className='w-full h-full cursor-pointer'>
                <img src={logo} alt="Golio" className='w-full h-full' />
            </Link>
        </div>

        <ul className='flex flex-row items-center justify-between p-3 list-none gap-8 text-sm'>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Testimonial</li>
            <li>Price Plan</li>
            <li>FAQs</li>
        </ul>

        {/* <div className='flex items-center justify-center'> */}
            <button type="submit" className='bg-[#0B63E5] text-white tracking-wider text-sm font-medium'>Contact Us</button>
        {/* </div> */}
    </div>
  )
}

export default Navigation