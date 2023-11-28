import React, { useState, useEffect } from 'react'
import logo from '../assets/Logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { CgMenuRound } from "react-icons/cg";
import MobileNav from './MobileNav';
// import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navigation = () => {
    const location = useLocation();
    const [activeLi, setActiveLi] = useState('Home');
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
        setActiveLi('Home');
    }, [location.pathname]);

    const handleClick = (clickedLink) => {
        console.log(`Clicked on: ${clickedLink}`);
        setActiveLi(clickedLink);
    };

    const handleMenuClick = () => {
        setMobileNavOpen(true);
    };

    let links = [
        {name: 'Home', link: '/'},
        {name: 'Portfolio', link: '#'},
        {name: 'Services', link: '#'},
        {name: 'Testimonials', link: '#'},
        {name: 'Price Plan', link: '#'},
        {name: 'FAQs', link: '#'},
    ]

  return (
    // <div className='flex relative'>
        <div className='bg-white cursor-pointer z-50 lg:rounded-md lg:w-[90%] lg:h-12 lg:mt-5 m-auto lg:py-1 w-[50%] right-0 h-full px-5 py-10 lg:px-2 gap-9 lg:gap-1 fixed lg:sticky flex lg:flex-row flex-col justify-between items-start lg:items-center drop-shadow-2xl shadow-2xl'>
            <div className='w-18 h-6 cursor-pointer flex'>
                <Link to='/' className='w-full h-full cursor-pointer'>
                    <img src={logo} alt="Golio" className='w-full h-full' />
                </Link>
            </div>

            <div className='absolute right-8 top-6 cursor-pointer lg:hidden'>
                <AiOutlineCloseCircle size={24} />
            
            <   CgMenuRound size={28} className='text-white' />
            </div>

            <ul className='flex h-full lg:flex-row flex-col lg:items-center items-start justify-between lg:py-3 list-none md md:gap-1 lg:gap-2 text-sm py-8 lg:px-0 px-2'>
                {links.map((link) => (
                    <li key={link.name} className={`transition-all cursor-pointer py-2 px-4 duration-300 ${activeLi === link.name ? ' text-blue-600 lg:border-b-2 lg:border-blue-600 hover:bg-neutral-200 hover:rounded-md' : ' text-neutral-500 hover:text-blue-600 '}`}  onClick={() => handleClick(link.name)}>
                        {link.name}
                    </li>
                ))}
            </ul>

            <button type="submit" className='bg-[#0B63E5] text-white tracking-wider hover:bg-neutral-800/90 text-sm font-normal py-1 px-1 lg:font-medium'>Contact Us</button>

            


        </div>
        
    // </div>
        

        
        
    
  )
}

export default Navigation