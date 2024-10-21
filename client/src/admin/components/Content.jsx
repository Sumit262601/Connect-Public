import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AdminLogo } from '../../assets';
import Form from './Form';

const Content = ({ toggleSlidebar, isOpen }) => {
    return (
        <div className={`transition-all duration-300 flex-1 p-6 bg-white ${isOpen ? 'ml-64' : 'ml-0'} lg:ml-0`}>
            <header className="flex items-center justify-between mb-4 px-4">
                {/* Hamburger button for mobile */}
                <button onClick={toggleSlidebar} className="text-gray-600 focus:outline-none">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
                {/* Profile image */}
                <img
                    alt="profile"
                    src={AdminLogo}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                />
            </header>
            {/* Main content area */}
            <div className="border border-gray-200 rounded-md p-5 overflow-auto lg:overflow-visible">
                <Form />
            </div>
        </div>
    );
};

export default Content;
