import React from 'react'
import image from '../assets/Photo.png'
import stack from '../assets/Stack.svg'
import cpu from '../assets/Cpu.svg'
import cpu2 from '../assets/Cpu2.svg'

const Main = () => {
  return (
    <div className='w-full flex h-auto p-[5%] lg:p-[10%]'>
        <div className='flex md:flex-row flex-col justify-between bg-white py-20 px-2 gap-3'>
            <div className='w-full lg:w-[50%] h-auto lg:h-[70%] flex flex-col lg:items-start items-center gap-2'>
                <div className='flex text-left flex-col gap-2'>
                    <h4 className='font-extrabold text-3xl tracking-wide leading-5 '>Why Work with us</h4>
                    <p className='text-sm font-normal leading-5 py-2 drop-shadow-2xl'>Cras at pellentesque eros. Nullam vitae sapien et felis eleifend luctus. Nam ac dui cursus, efficitur ante sed, tempor sapien. Praesent nec mattis enim. Mauris a laoreet purus.</p>
                </div>
                <div className='flex flex-col gap-4 bg-blue-50 rounded-xl left-2 w-[90%] p-3'>
                    <div className='flex flex-row items-start justify-between gap-1'>
                        <img src={stack} alt="/" className='w-6 h-6' />
                        <div>
                            <h4 className='font-semibold text-base tracking-wide leading-5'>User Experience Design Team</h4>
                            <p className='text-xs font-normal leading-5 py-2 drop-shadow-2xl'>Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque. </p>
                        </div>
                    </div>

                    <div className='flex flex-row items-start justify-between gap-1'>
                        <img src={cpu} alt="/" className='w-6 h-6' />
                        <div>
                            <h4 className='font-semibold text-base tracking-wide leading-5'>Simple & Clean Line of Code</h4>
                            <p className='text-xs font-normal leading-5 py-2 drop-shadow-2xl'>Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque. </p>
                        </div>
                    </div>

                    <div className='flex flex-row items-start justify-between gap-1'>
                        <img src={cpu2} alt="/" className='w-6 h-6' />
                        <div>
                            <h4 className='font-semibold text-base tracking-wide leading-5'>Simple & Clean Line of Code</h4>
                            <p className='text-xs font-normal leading-5 py-2 drop-shadow-2xl'>Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque. </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full lg:w-[45%] h-[70%] flex items-center'>
                <img src={image} alt="Scientist" className='w-full h-full object-cover' />
            </div>
        </div>
        
    </div>
  )
}

export default Main