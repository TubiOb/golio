import React from 'react'
import hexa from '../assets/Hexa Logo.svg'
import tech from '../assets/Tech Logo.svg'
import realEstate from '../assets/Real Estate Logo.svg'
import realEstate1 from '../assets/Real Estate Logo1.svg'
import realEstate2 from '../assets/Real Estate Logo2.svg'

const Partners = () => {
  return (
    <div className='bg-[#F5F5F5] w-full h-auto flex flex-row items-end gap-4 justify-center flex-wrap py-3 mt-8'>
        <div className='flex items-center lg:w-[10%] w-[14%] h-auto justify-center'>
            <img src={hexa} alt="" className='lg:w-full lg:h-full object-cover' />
        </div>
        <div className='flex items-center lg:w-[10%] w-[14%] h-auto justify-center'>
            <img src={tech} alt="" className='lg:w-full lg:h-full objec-cover' />
        </div>
        <div className='flex items-center lg:w-[10%] w-[14%] h-auto justify-center'>
            <img src={realEstate} alt="" className='lg:w-full lg:h-full object-cover' />
        </div>
        <div className='flex items-center lg:w-[10%] w-[14%] h-auto justify-center'>
            <img src={realEstate1} alt="" className='lg:w-full lg:h-full object-cover' />
        </div>
        <div className='flex items-center lg:w-[10%] w-[14%] h-auto justify-center'>
            <img src={realEstate2} alt="" className='lg:w-full lg:h-full object-cover' />
        </div>
    </div>
  )
}

export default Partners