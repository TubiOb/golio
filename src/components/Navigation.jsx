import React, { useState, useEffect } from 'react'
import logo from '../assets/Logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { CgMenuRound } from "react-icons/cg";
import MobileNav from './MobileNav';
// import { BiMenuAltRight } from "react-icons/bi";
// import { AiOutlineCloseCircle } from "react-icons/ai";

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
    <div className='flex relative'>
        <div className='bg-white cursor-pointer z-50 rounded-md w-[90%] h-12 mt-5 m-auto py-1 px-5 gap-1 hidden lg:flex flex-row justify-between items-center drop-shadow-2xl shadow-2xl'>
            <div className='w-18 h-6 cursor-pointer flex'>
                <Link to='/' className='w-full h-full cursor-pointer'>
                    <img src={logo} alt="Golio" className='w-full h-full' />
                </Link>
            </div>

            <ul className='flex h-full flex-row items-center justify-between py-3 list-none md md:gap-1 lg:gap-2 text-sm'>
                {links.map((link) => (
                    <li key={link.name} className={`transition-all cursor-pointer py-2 px-4 duration-300 ${activeLi === link.name ? ' text-blue-600 border-b-2 border-blue-600 ' : ' text-neutral-500 hover:text-blue-600 '}`}  onClick={() => handleClick(link.name)}>
                        {link.name}
                    </li>
                ))}
            </ul>

            <button type="submit" className='bg-[#0B63E5] text-white tracking-wider hover:bg-neutral-800/90 text-sm font-normal py-1 px-1 lg:font-medium'>Contact Us</button>

            


            <MobileNav isOpen={isMobileNavOpen} onClose={() => setMobileNavOpen(false)} />

        </div>
        
        <CgMenuRound size={28} className='absolute lg:hidden top-9 right-5 text-white' onClick={handleMenuClick} />
    </div>
        

        
        
    
  )
}

export default Navigation