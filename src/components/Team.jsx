import React from 'react'
import Devon from '../assets/Devon.png'
import Kristin from '../assets/Kristin.png'
import Jacob from '../assets/Jacob.png'
import Esther from '../assets/Esther.png'
import Devon2 from '../assets/Devon2.png'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight  } from "react-icons/hi";

const Team = () => {
  return (
    <div className='w-full flex h-auto bg-white p-[5%] lg:p-[10%] flex-col items-center justify-between gap-4'>
        <div className='flex flex-col lg:w-[60%] w-[90%] m-auto items-center justify-between gap-2'>
            <h4 className='font-extrabold text-3xl tracking-wide leading-6 '>Say hello to our team members</h4>
            <p className='text-sm font-normal leading-5 py-2 drop-shadow-2xl text-center'>Praesent sagittis eros in convallis rutrum. Donec auctor nibh justo. Vestibu tincidunt, libero sit amet vestibulum euismod, ex nisl imperdiet leo.</p>
        </div>
        <div className='flex flex-row lg:w-[80%] w-full flex-wrap items-center justify-center lg:justify-between gap-3'>
            <div className='flex flex-col items-start justify-between gap-1 text-left'>
                <img src={Devon} alt="" className='h-52 border bg-blue-100' />
                <div className='flex flex-col items-start justify-start text-left'>
                    <h4 className='font-semibold text-xs tracking-wide leading-5 text-left '>Devon Lane</h4>
                    <p className='text-xs font-normal leading-5 py-2 drop-shadow-2xl text-left self-start'>CEO and Founder og Golio</p>
                </div>
            </div>

            <div className='flex flex-col items-start justify-between gap-1 text-left'>
                <img src={Kristin} alt="" className='h-52 border bg-purple-100' />
                <div className='flex flex-col items-start justify-start text-left'>
                    <h4 className='font-semibold text-xs tracking-wide leading-5 text-left '>Kristin Watson</h4>
                    <p className='text-xs font-normal leading-5 py-2 drop-shadow-2xl text-left self-start'>UI Designer</p>
                </div>
            </div>

            <div className='flex flex-col items-start justify-between gap-1 text-left'>
                <img src={Jacob} alt="" className='h-52 border bg-cyan-100' />
                <div className='flex flex-col items-start justify-start text-left'>
                    <h4 className='font-semibold text-xs tracking-wide leading-5 text-left '>Jacob Jones</h4>
                    <p className='text-xs font-normal leading-5 py-2 drop-shadow-2xl text-left self-start'>Product Designer</p>
                </div>
            </div>

            <div className='flex flex-col items-start justify-between gap-1 text-left'>
                <img src={Esther} alt="" className='h-52 border bg-sky-100' />
                <div className='flex flex-col items-start justify-start text-left'>
                    <h4 className='font-semibold text-xs tracking-wide leading-5 text-left '>Esther Howard</h4>
                    <p className='text-xs font-normal leading-5 py-2 drop-shadow-2xl text-left self-start'>Frontend Developer</p>
                </div>
            </div>

            <div className='flex flex-col items-start justify-between gap-1 text-left'>
                <img src={Devon2} alt="" className='h-52 border bg-blue-100' />
                <div className='flex flex-col items-start justify-start text-left'>
                    <h4 className='font-semibold text-xs tracking-wide leading-5 text-left '>Devon Lane</h4>
                    <p className='text-xs font-normal leading-5 py-2 drop-shadow-2xl text-left self-start'>CEO & Founder of Golio</p>
                </div>
            </div>
        </div>

        <div className='flex items-center m-auto justify-center flex-row gap-8 mt-8'>
            <div className='rounded-full flex items-center justify-center bg-blue-100 p-1 cursor-pointer hover:bg-blue-200'>
                <HiOutlineArrowSmLeft size={24} className='text-blue-400' />
            </div>
            <div className='rounded-full flex items-center justify-center bg-blue-100 p-1 cursor-pointer hover:bg-blue-200'>
                <HiOutlineArrowSmRight size={24} className='text-blue-400' />
            </div>
        </div>
    </div>
  )
}

export default Team