import React, { useState, useEffect } from 'react'
import logo from '../assets/Logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { LiaWindowCloseSolid } from "react-icons/lia";

const Navigation = () => {
    const location = useLocation();
    const [activeLi, setActiveLi] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setActiveLi('Home');
    }, [location.pathname]);

    const handleClick = (clickedLink) => {
        // console.log(`Clicked on: ${clickedLink}`);
        setActiveLi(clickedLink);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    let links = [
        {name: 'Home', link: '/'},
        {name: 'Portfolio', link: '#'},
        {name: 'Services', link: '#'},
        {name: 'Testimonials', link: '#'},
        {name: 'Price Plan', link: '#'},
        {name: 'FAQs', link: '#'},
    ]

  return (
    <div className='flex absolute items-start justify-between w-full'>
        <div className={`bg-white cursor-pointer z-40 lg:rounded-md lg:w-[90%] right-0 md:w-[50%] w-[70%] lg:h-12 h-full mt-0 md:mt-0 lg:mt-2  m-auto lg:py-1 px-5 py-10 lg:px-2 gap-9 lg:gap-1 fixed lg:sticky lg:flex lg:flex-row justify-between md:items-center items-start lg:items-center drop-shadow-2xl shadow-2xl transition-all duration-500 ${isMenuOpen ? 'right-0' : 'right-[-100%]'}`}>
            <div className='w-16 h-6 cursor-pointer flex'>
                <Link to='/' className='w-full h-full cursor-pointer'>
                    <img src={logo} alt="Golio" className='w-full h-full' />
                </Link>
            </div>

            
            
            

            <ul className='flex h-[60%] lg:h-full lg:flex-row flex-col lg:items-center items-start justify-between lg:py-3 list-none md md:gap-1 lg:gap-2 text-sm py-8 lg:px-0 px-2'>
                {links.map((link) => (
                    <li key={link.name} className={`transition-all cursor-pointer py-2 px-4 duration-300 ${activeLi === link.name ? ' text-blue-600 lg:border-b-2 lg:border-blue-600 hover:bg-neutral-200 lg:hover:rounded-none hover:rounded-md' : ' text-neutral-500 hover:text-blue-600 '}`}  onClick={() => handleClick(link.name)}>
                        {link.name}
                    </li>
                ))}
            </ul>

            
            <button type="submit" className='bg-[#0B63E5] text-white tracking-wider hover:bg-neutral-800/90 text-sm font-normal py-1 px-1 lg:font-medium'>Contact Us</button>
        </div>


        <div className='absolute right-10 z-50 top-6 cursor-pointer lg:hidden' onClick={toggleMenu}>
                {isMenuOpen 
                    ?
                    (<LiaWindowCloseSolid  size={30} className='text-black z-50 fixed' />)
                    :
                    (<HiMenuAlt3 size={30} className='text-white z-50 fixed' />)
                }
            </div>
        

    </div>
  )
}

export default Navigation