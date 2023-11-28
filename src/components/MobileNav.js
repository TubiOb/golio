import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileNav = ({ isOpen, onClose }) => {
    const location = useLocation();
    const [activeLi, setActiveLi] = useState('Home');

    useEffect(() => {
        setActiveLi('Home');
    }, [location.pathname]);

    const handleClick = (clickedLink) => {
        console.log(`Clicked on: ${clickedLink}`);
        setActiveLi(clickedLink);
        onclose();
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
    <div className={`SIDEBAR absolute w-[50%] h-full bg-white hidden top-0 right-0 z-50 py-10 px-2 gap-9 transition-transform ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
        <div className='w-16 h-6 cursor-pointer flex ml-4'>
            <Link to='/' className='w-full h-full cursor-pointer'>
                <img src={logo} alt="Golio" className='w-full h-full' />
            </Link>
        </div>

        <AiOutlineCloseCircle size={24} className='absolute top-4 right-4 ' onClick={onclose} />


        <ul className='flex h-14 flex-col items-start justify-between py-8 px-2 list-none gap-4 text-sm'>
            {links.map((link) => (
                <li key={link.name} className={`transition-all cursor-pointer py-2 px-4 duration-300 ${activeLi === link.name ? ' text-blue-600 hover:bg-neutral-200 hover:rounded-md ' : ' text-neutral-500 hover:text-blue-600 '}`}  onClick={() => handleClick(link.name)}>
                    {link.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MobileNav