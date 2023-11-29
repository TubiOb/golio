import React from 'react'
import logo from '../assets/Icon.svg'
import { Link } from 'react-router-dom'
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='w-full flex lg:flex-row flex-col flex-wrap items-start justify-between mt-12'>
        <div className='bg-[#FFD27A] py=5 px-7 md:w-full lg:w-[50%] w-full items-center md:items-end justify-between flex flex-col'>
            <div className='flex flex-col w-[95%] lg:w-[50%] lg:mr-14 lg:my-3 items-start gap-3 justify-between border-b-2 border-opacity-10 border-b-black py-7 px-2 md:py-9 md:px-3'>
                <h4 className='font-bold text-sm lg:text-3xl tracking-normal leading-3 '>Have a project idea! Let’s work together.</h4>
                <p className='text-xs lg:text-sm font-semibold leading-3 py-2 drop-shadow-2xl'>Nunc vel metus cursus, tempor ipsum sit amet, rutrum justo. Maecenas tincidunt imperdiet magna, et porta libero eleifend vel. </p>
                <button type="submit" className='bg-[#0B63E5] text-white border-transparent tracking-wider border-2 border-opacity-5 hover:bg-transparent hover:border-opacity-40 hover:border-black hover:text-black text-sm font-normal py-1 px-1 lg:font-medium'>Get A Quote</button>
            </div>
            <div className='flex flex-col w-[95%] lg:w-[50%] lg:mr-14 lg:my-3 items-start gap-3 justify-between border-b-2 border-opacity-10 border-b-black py-7 px-2 md:py-9 md:px-3'>
                <h4 className='font-bold text-sm lg:text-lg tracking-normal leading-2 '>Join our team. We’re open to hire creative peoples!</h4>
                <button type="submit" className='bg-transparent text-black tracking-wider border-2 border-opacity-40 border-black hover:bg-blue-700/90 hover:text-white hover:border-transparent text-sm font-normal py-1 px-1 lg:font-medium'>View Open Position</button>
            </div>
        </div>

        <div className='bg-[#031939] py=5 px-7 md:w-full lg:w-[50%] w-full items-center lg:items-start justify-between flex flex-col'>
            <div className='flex flex-row w-[95%] md:w-[85%] lg:w-[50%] items-center lg:items-start gap-4 lg:gap-3 justify-between lg:ml-14 lg:my-3 py-9 px-2'>
                <div className='w-16 h-6 cursor-pointer flex flex-row'>
                    <Link to='/' className='w-full h-full cursor-pointer text-white gap-3 flex flex-row items-center justify-between'>
                        <img src={logo} alt="Golio" className='w-full h-full' />
                        <h4 className='font-semibold text-base tracking-normal leading-2 '>Golio</h4>
                    </Link>
                </div>

                <div className='flex flex-row items-center justify-between gap-1.5 lg:gap-2'>
                    <div className='flex items-center bg-sky-100/10 text-white p-1 rounded-md'>
                        <RiFacebookFill className='fill-white text-white' size={20} />
                    </div>
                     <div className='flex items-center bg-sky-100/10 text-white p-1 rounded-md'>
                        <RiTwitterFill className='fill-white text-white' size={20} />
                    </div>
                     <div className='flex items-center bg-sky-100/10 text-white p-1 rounded-md'>
                        <RiLinkedinFill className='fill-white text-white' size={20} />
                    </div>
                     <div className='flex items-center bg-sky-100/10 text-white p-1 rounded-md'>
                        <RiInstagramFill className='fill-white text-white' size={20} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col border-y-2 border-opacity-10 border-white lg:flex-row w-[95%] md:w[85%] lg:w-[65%] items-start gap-4 lg:gap-3 justify-between lg:ml-14 lg:my-3 py-9 px-2'>
                <div className='flex items-start'>
                    <ul className='flex-col items-start justify-between text-white p-3 text-base font-semibold uppercase leading-9'>quick links
                        <li className='capitalize text-neutral-200 font-medium text-sm cursor-pointer hover:text-neutral-200 hover:font-normal'>- portfolio</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>about</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>services</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>pricing plans</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>contact</li>
                    </ul>
                </div>

                <div className='flex items-start'>
                    <ul className='flex-col items-start justify-between text-white p-3 text-base font-semibold uppercase leading-9'>services
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>Ui/UX Design</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>Branding</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>Illustration</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>design concept</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>app design</li>
                    </ul>
                </div>

                <div className='flex items-start'>
                    <ul className='flex-col items-start justify-between text-white p-3 text-base font-semibold uppercase leading-9'>product
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>Figma</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>Adobe</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>Dribble</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>Behance</li>
                        <li className='capitalize text-neutral-100 leading-6 font-light cursor-pointer hover:text-neutral-200 hover:font-normal text-sm'>Themeforest</li>
                    </ul>
                </div>
            </div>

            <div className='flex items-center lg:ml-20 w-[95%] md:w-[85%] lg:w-[50%] justify-center my-3 text-white font-normal'>
                <p>&copy; 2021 - Golio UI Kit</p>
            </div>
        </div>
    </div>
  )
}

export default Footer