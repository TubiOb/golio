import React from 'react'
import baseImage from '../assets/Base-img-2.png'

const PageTwoHero = () => {
  return (
    <div className='w-full h-1/5'>
        <img src={baseImage} alt="Golio Experts" className='top-0 left-0 w-full h-screen object-cover' loading='lazy' />

        <div className='bg-neutral-200/15 absolute top-0 left-0 w-full h-screen'>
            <div className='absolute top-0 w-full h-full flex flex-col items-center justify-center text-white'>
                <div className='m-auto absolute p-4'>
                    <h1 className='text-3xl md:text-5xl font-medium leading-10 md:leading-[60px] drop-shadow-2xl'>Take a quick Pic into our product <span className='text-blue-600 font-semibold'>|</span></h1>
                </div>
                <div className='m-auto absolute p-4 bg-black/20 flex flex-row flex-wrap items-center justify-between'>
                    <div className='flex flex-col items-center justify-between'>
                        <button type=""></button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default PageTwoHero