import React, { useContext, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';
import LogoLight from '../assets/logo.png';
import LogoDark from '../assets/logo2.png';
import { DarkModeContext } from '../context/DarkModeContext';
import Them from '../constant/Them';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        document.body.style.overflow = click ? 'auto' : 'hidden';
    };

    const handleLinkClick = () => {
        setClick(false);
        document.body.style.overflow = 'auto';
        window.scrollTo(0, 0);
    };

    return (
        <nav className={`z-50 ${darkMode ? 'text-white bg-gray-900' : 'bg-white text-black'}  p-4`}>
            <div className="flex items-center justify-between mx-auto max-w-7xl h-20 lg:py-4 px-4 md:px-10">
                <div className='flex'>
                    <Link to="/" onClick={handleLinkClick}>
                        <img
                            src={darkMode ? LogoDark : LogoLight}
                            className='w-20 md:w-24'
                            alt="logo"
                        />
                    </Link>
                </div>
                {/* Desktop menu */}
                <div className="hidden lg:flex flex-1 items-center justify-end mx-2">
                    <ul className={`flex gap-4 font-medium items-center ${darkMode ? 'text-white' : 'text-[#24315E]'} text-lg md:text-xl`}>
                        <Link to='/' onClick={handleLinkClick}>
                            <li className='my-4 px-4 hover:border-b-2 border-[#374785] hover:rounded cursor-pointer transition-colors'>
                                Home
                            </li>
                        </Link>
                        <Link to='/about' onClick={handleLinkClick}>
                            <li className='my-4 px-4 hover:border-b-2 border-[#374785] hover:rounded cursor-pointer transition-colors'>
                                About
                            </li>
                        </Link>
                        <Link to='/blog' onClick={handleLinkClick}>
                            <li className='my-4 px-4 hover:border-b-2 border-[#374785] hover:rounded cursor-pointer transition-colors'>
                                Blog
                            </li>
                        </Link>
                        <Link to='/contact' onClick={handleLinkClick}>
                            <li className='my-4 px-4 hover:border-b-2 border-[#374785] hover:rounded cursor-pointer transition-colors'>
                                Contact
                            </li>
                        </Link>
                    </ul>
                    <hr className='ml-2 h-8 border bg-slate-400 border-slate-400' />
                    {/* Theme Toggle */}
                    <Them />
                </div>
                {/* Mobile menu with slide-in animation */}
                <div className={`lg:hidden z-10 fixed top-0 right-0 h-full w-5/6 sm:w-1/3 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-[#293769] to-[#364684]'} text-white p-10 transition-transform duration-500 ease-in-out ${click ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className='text-center text-2xl sm:text-3xl my-10'>
                        <Link to='/' onClick={handleLinkClick}>
                            <li className='my-4 px-4 hover:text-opacity-45 hover:text-white hover:rounded cursor-pointer transition-colors'>
                                Home
                            </li>
                        </Link>
                        <Link to='/about' onClick={handleLinkClick}>
                            <li className='my-8 px-4 hover:text-opacity-45 hover:text-white hover:rounded cursor-pointer transition-colors'>
                                About
                            </li>
                        </Link>
                        <Link to='/blog' onClick={handleLinkClick}>
                            <li className='my-8 px-4 hover:text-opacity-45 hover:text-white hover:rounded cursor-pointer transition-colors'>
                                Blog
                            </li>
                        </Link>
                        <Link to='/contact' onClick={handleLinkClick}>
                            <li className='my-8 px-4 hover:text-opacity-45 hover:text-white hover:rounded cursor-pointer transition-colors'>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                {/* Hamburger menu icon */}
                <button className='block lg:hidden z-10' onClick={handleClick}>
                    {click ? <FaTimes size={25} className='text-white' /> : <CiMenuFries size={25} className='text-[#AD3E53]' />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;