import React, { Fragment } from 'react'
import baseImage from '../assets/Base-img-2.png'
import { Menu, Transition } from '@headlessui/react'
import { BiTargetLock } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { MdAssistantDirection, MdOutlineCancel } from "react-icons/md";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendar } from 'react-icons/bs';

const PageTwoHero = () => {
  return (
    <div className='w-full h-screen'>
        <img src={baseImage} alt="Golio Experts" className='top-0 left-0 w-full h-screen object-cover' loading='lazy' />

        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'>
            <div className='absolute top-0 w-full h-full flex flex-col items-center justify-center text-white'>
                <div className='m-auto absolute p-4 flex-col items-center top-[-4] justify-between gap-2'>
                    <h1 className='text-3xl md:text-5xl font-medium leading-10 md:leading-[60px] drop-shadow-2xl'>Take a quick Pic into our product <span className='text-blue-600 font-semibold'>|</span></h1>
                     <div className='m-auto absolute p-4 bg-black/20 flex flex-row flex-wrap mt-4 gap-2 md:gap-4 lg:gap-8 items-start justify-between'>
                        <div className='flex flex-col items-center justify-between'>
                            <fieldset className='border-none outline-none w-auto flex gap-2'>
                                {/* <legend className='text-neutral-800 font-bold text-sm ml-1 border-none outline-none'>Closest Location</legend> */}
                                <Menu as="div" className="relative inline-block w-full text-left">
                                    <div>
                                        <Menu.Button className="flex w-full flex-row items-center justify-between gap-x-3 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >
                                            <BiTargetLock className=" h-5 w-5 text-blue-600" />
                                            <div className='flex flex-row items-center justify-between'>
                                                <p className='text-xs font-normal leading-5 py-1 drop-shadow-2xl'>No 24, W.F. Kumuyi Street</p>
                                                <RiArrowDropDownFill className=" h-7 w-7 text-gray-700" aria-hidden="true" />
                                            </div>
                                            <MdAssistantDirection className=" h-5 w-5 text-blue-600" />
                                        </Menu.Button>
                                    </div>

                                    <div className='flex flex-row items-center mt-1 text-xs text-red-700 gap-1'>
                                        <MdOutlineCancel className='h-5 w-5' />
                                        <p className='text-xs font-semibold drop-shadow-2xl'>Clear Filters</p>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right text-gray-700 px-2.5 py-1.5 text-xs rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item className='px-1 py-1.5'>
                                                        <p className='text-xs font-thin text-[#52D4BE]'>Loading ...</p>
                                                    </Menu.Item>
                                                    <Menu.Item className='px-1 py-1.5'>
                                                        <p>Jabi Lake Mall, Bala Sokoto Way, Abuja</p>
                                                    </Menu.Item>
                                                    <Menu.Item className='px-1 py-1.5'>
                                                        <p>21, Blantry Street, Wuse 2, Abuja</p>
                                                    </Menu.Item>
                                                    <Menu.Item className='px-1 py-1.5'>
                                                        <p>Opp Constatine Street, Wuse 2, Abuja</p>
                                                    </Menu.Item>
                                                    <Menu.Item className='px-1 py-1.5'>
                                                        <p>Opp Constatine Street, Wuse 2, Abuja</p>
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>    
                                    </Transition>
                                </Menu>
                            </fieldset>
                        </div>

                        <div className='flex flex-col items-center w-auto justify-between'>
                            <fieldset className='border-none outline-none w-auto flex gap-2'>
                                {/* <legend className='text-neutral-800 font-bold text-sm ml-1 border-none outline-none'>Closest Location</legend> */}
                                <Menu as="div" className="relative inline-block lg:w-48 w-60 text-left">
                                    <div>
                                        <Menu.Button className="flex w-full flex-row items-center justify-between gap-x-3 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >
                                            <p className='text-xs font-normal leading-5 py-1 drop-shadow-2xl'>Category</p>
                                            <RiArrowDropDownFill className=" h-7 w-7 text-gray-700" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right text-gray-700 px-2.5 py-1.5 text-xs rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item className='px-1 py-1.5'>
                                                        <p>Category 1</p>
                                                    </Menu.Item>
                                                    <Menu.Item className='px-1 py-1.5'>
                                                        <p>Category 2</p>
                                                    </Menu.Item>
                                                    <Menu.Item className='px-1 py-1.5'>
                                                        <p>Category 3</p>
                                                    </Menu.Item>
                                                    <Menu.Item className='px-1 py-1.5'>
                                                        <p>Category 4</p>
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>    
                                    </Transition>
                                </Menu>
                            </fieldset>
                        </div>

                        <div className='flex flex-row items-center bg-white text-black h-9 rounded-md px-2 lg:w-48 w-60'>
                            <DatePicker
                                placeholderText='Pick up'
                                className='border-none outline-none h-full w-full bg-transparent text-sm text-black'
                            />
                            <span>
                                <BsCalendar />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default PageTwoHero