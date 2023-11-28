import React from 'react'
import baseImage from '../assets/Base-img-1.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img src={baseImage} alt="Golio Experts" className='top-0 left-0 w-full h-screen object-cover' loading='lazy' />

        <div className='bg-black/40 absolute top-0 left-0 w-full h-screen'>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:right-[8%] max-w-[600px] m-auto absolute p-4'>
                    <h4 className='text-[#0B63E5] font-bold tracking-widest leading-7 text-[14px]'>MDAS</h4>
                    <h1 className='text-5xl font-medium leading-[60px]'>Come work with our talented Mediacl Experts</h1>
                    <p className='text-sm font-normal leading-5'>We provide African healthcare facilities with cutting-edge medical equipment to provide the best quality of care to their patients - with financing, maintenance and support.</p>
                    <button className='bg-[#0B63E5] text-white mt-3 tracking-wider font-medium'>Know More</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero