import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Logo.svg'
// import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { LiaWindowCloseSolid } from "react-icons/lia";

const MobileNav = () => {
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
        console.log('open');
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
    <div className={`h-full fixed bg-white lg:hidden w-[70%] md:w-[50%] top-0 right-0 z-50 py-10 px-5 gap-5 flex-col flex items-start justify-between drop-shadow-2xl shadow-2xl transition-all duration-500 ${isMenuOpen ? 'w-0' : 'w-[-50%]'}`}>
        <div className='w-16 h-6 cursor-pointer flex ml-4'>
            <Link to='/' className='w-full h-full cursor-pointer'>
                <img src={logo} alt="Golio" className='w-full h-full' />
            </Link>
        </div>

        <div className='absolute right-8 top-6 cursor-pointer lg:hidden' onClick={toggleMenu}>
                {isMenuOpen 
                    ?
                    (<LiaWindowCloseSolid  size={30} className='text-white' />)
                    :
                    (<HiMenuAlt3 size={30} className='text-white' />)
                }
        </div>


        <ul className='flex h-14 flex-col items-start justify-between py-8 px-2 list-none gap-4 text-sm'>
            {links.map((link) => (
                <li key={link.name} className={`transition-all cursor-pointer py-2 px-4 duration-300 ${activeLi === link.name ? ' text-blue-600 hover:bg-neutral-200 hover:rounded-md ' : ' text-neutral-500 hover:text-blue-600 '}`}  onClick={() => handleClick(link.name)}>
                    {link.name}
                </li>
            ))}
        </ul>

        <button type="submit" className='bg-[#0B63E5] text-white tracking-wider hover:bg-neutral-800/90 text-sm font-normal py-1 px-1 lg:font-medium'>Contact Us</button>
    </div>
  )
}

export default MobileNav