import React from 'react'
import baseImage from '../assets/Base-img-1.jpg'
import { Link } from 'react-router-dom' 

const Hero = () => {
  return (
    <div className='w-full h-1/5'>
        <img src={baseImage} alt="Golio Experts" className='top-0 left-0 w-full h-screen object-cover' loading='lazy' />

        <div className='bg-neutral-200/15 absolute top-0 left-0 w-full h-screen'>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:right-[8%] max-w-[600px] m-auto absolute p-4'>
                    <h4 className='text-[#0B63E5] font-bold tracking-widest leading-7 text-[14px]'>MDAS</h4>
                    <h1 className='text-3xl md:text-5xl font-medium leading-10 md:leading-[60px] drop-shadow-2xl'>Come work with our talented Medical Experts</h1>
                    <p className='text-sm font-normal leading-5 py-2 drop-shadow-2xl'>We provide African healthcare facilities with cutting-edge medical equipment to provide the best quality of care to their patients - with financing, maintenance and support.</p>
                    <button className='bg-[#0B63E5] text-white mt-3 tracking-wider hover:bg-neutral-100/30 font-medium py-1 px-1'>
                        <Link to='/pageTwo'>
                            Know More
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero