import React from 'react'
import image from'../assets/Images.png'

const Operate = () => {
  return (
    <div className='w-[95%] bg-neutral-200 mr-auto flex h-[25%]'>
        <div className='w-full ml-auto bg-neutral-100 flex flex-col items-center gap-4 justify-between h-[20%] p-[5%] lg:p-[10%]'>
            <div className='flex w-full items-center justify-center md:text-center text-center lg:text-start lg:justify-between lg:flex-row flex-col gap-3 lg:gap-12 lg:px-12'>
                <h4 className='font-extrabold w-80 text-2xl lg:text-4xl tracking-widest leading-7'>The easiest way to operate</h4>
                <p className='text-xs font-normal w-56 leading-5 py-2 drop-shadow-2xl'>Bootstrap code with a well-organized Figma file to design & develop your next websites in minutes.</p>
            </div>
            <div className='w-[80%] flex h-[70%]'>
                <img src={image} alt="/" className='w-full h-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default Operate