import React from 'react'
import aside from '../assets/Spinning Geometric Shapes.svg'

const Newsletter = () => {
  return (
    <div className='bg-transparent flex items-center justify-center mt-4'>
        <div className='bg-white lg:w-[60%] w-[90%] flex items-center lg:py-7 lg:px-10'>
            <div className='rounded-lg bg-blue-50 flex flex-row p-[5%] lg:p-[5%] relative'>
                <div className='flex items-start justify-between w-[90%] lg:w-[65%] flex-col gap-1.5'>
                    <h4  className='font-extrabold text-sm lg:text-3xl tracking-normal leading-3 '>Enter your e-mail address and get started for free</h4>
                    <p className='text-xs lg:text-sm font-normal leading-3 py-2 drop-shadow-2xl'>Stay up to date with the most relevant information, our new collections, news and special offers!</p>
                    <div className='flex flex-row items-center w-[80%] justify-between gap-1'>
                        <input type="email" name="email" value="" placeholder='Your e-mail address' className='text-xs py-1 px-1.5 self-stretch w-[70%] rounded-md' />
                        <button type="submit" className='bg-[#0B63E5] text-white tracking-wider hover:bg-neutral-700/90 text-xs lg:text-sm font-normal py-1 px-1 lg:font-medium'>Subscribe</button>
                    </div>
                </div>
                <div className='flex items-center w-[10%] lg:w-[30%] absolute top-0 right-0 bottom-0'>
                    <img src={aside} alt="/" className='w-full object-cover' />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Newsletter