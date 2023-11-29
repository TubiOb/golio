import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex lg:flex-row flex-col flex-wrap items-center justify-between mt-12'>
        <div className='bg-[#FFD27A] py=5 px-7 md:w-[50%] lg:w-[50%] w-full items-center md:items-end justify-between flex flex-col'>
            <div className='flex flex-col w-[95%] lg:w-[50%] items-start gap-3 justify-between border-b-2 border-opacity-10 border-b-black py-7 px-2 md:py-9 md:px-3'>
                <h4 className='font-bold text-sm lg:text-3xl tracking-normal leading-3 '>Have a project idea! Let’s work together.</h4>
                <p className='text-xs lg:text-sm font-semibold leading-3 py-2 drop-shadow-2xl'>Nunc vel metus cursus, tempor ipsum sit amet, rutrum justo. Maecenas tincidunt imperdiet magna, et porta libero eleifend vel. </p>
                <button type="submit" className='bg-[#0B63E5] text-white border-transparent tracking-wider border-2 border-opacity-5 hover:bg-transparent hover:border-opacity-40 hover:border-black hover:text-black text-sm font-normal py-1 px-1 lg:font-medium'>Get A Quote</button>
            </div>
            <div className='flex flex-col w-[95%] lg:w-[50%] items-start gap-3 justify-between border-b-2 border-opacity-10 border-b-black py-7 px-2 md:py-9 md:px-3'>
                <h4 className='font-bold text-sm lg:text-lg tracking-normal leading-2 '>Join our team. We’re open to hire creative peoples!</h4>
                <button type="submit" className='bg-transparent text-black tracking-wider border-2 border-opacity-40 border-black hover:bg-blue-700/90 hover:text-white hover:border-transparent text-sm font-normal py-1 px-1 lg:font-medium'>View Open Position</button>
            </div>
        </div>
    </div>
  )
}

export default Footer