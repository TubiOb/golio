import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import elipse from '../assets/Ellipse 18.png'
import elipse1 from '../assets/Ellipse 18.1.png'
import elipse2 from '../assets/Ellipse 18.2.png'
import quote from '../assets/left-quote 1.svg'

const Testimonials = () => {
  return (
    <div className='w-full bg-transparent flex h-auto p-[5%] lg:p-[10%] flex-col items-center justify-between'>
        <div className='lg:w-[70%] md:w-[90%] w-full flex items-center justify-center flex-col'>
            <div className='flex flex-row items-center gap-1'>
                <HiArrowLongRight size={26} className='text-blue-600' />
                <h4 className='font-semibold text-base tracking-wide leading-5 text-blue-600'>Our Client</h4>
            </div>
            <h4 className='font-extrabold font-[Playfair Display] text-xl tracking-wide leading-7'> Testimonial</h4>
            <div className='flex relative lg:w-[50%] md:[75%] w-[90%] text-center leading-3 mt-2'>
                <p className='text-xs font-normal leading-5 py-2 z-20 drop-shadow-2xl'>
                    When applied to building block a website or similar work product, a Visual Guide can be an intermediate step toward the end goal of a complete website. By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team.
                </p>
                <img src={quote} alt="" className='absolute w-16 h-16 top-[-40] z-10 left-0 text-blue-200' />
            </div>
            
        </div>
        <div className='border-t-2 lg:w-[70%] w-[90%] border-opacity-5 flex items-start lg:items-center justify-center lg:justify-between lg:flex-row flex-col gap-4 mt-5 ld:py-0 ld:px-4 px-2'>
            <div className='flex items-center justify-between flex-row gap-3 '>
                <img src={elipse} alt="" className='w-10 h-10' />
                <div className='flex flex-col items-start justify-between'>
                    <h4 className='font-semibold text-base tracking-wide leading-1 '>Cha Ji-Hun</h4>
                    <p className='text-xs font-normal leading-3 py-2 drop-shadow-2xl text-blue-600'>Co-founder of Forpeople</p>
                </div>
            </div>
            <div className='flex items-center lg:border-t-2 pt-2 lg:border-t-blue-400 justify-between flex-row gap-3 '>
                <img src={elipse1} alt="" className='w-10 h-10' />
                <div className='flex flex-col items-start justify-between'>
                    <h4 className='font-semibold text-base tracking-wide leading-3 '>Rutherford Brannan</h4>
                    <p className='text-xs font-normal leading-3 py-2 drop-shadow-2xl text-blue-600'>Design director of Perfect Illustration</p>
                </div>
            </div>
            <div className='flex items-center justify-between flex-row gap-3 '>
                <img src={elipse2} alt="" className='w-10 h-10' />
                <div className='flex flex-col items-start justify-between'>
                    <h4 className='font-semibold text-base tracking-wide leading-1 '>Henry Itondo</h4>
                    <p className='text-xs font-normal leading-3 py-2 drop-shadow-2xl text-blue-600'>Co-founder of Source DS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials