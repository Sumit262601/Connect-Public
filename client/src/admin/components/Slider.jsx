import React from 'react';
import { FiBookOpen } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Slider = ({ isOpen }) => {
    return (
        <div className={`min-h-screen fixed lg:static z-10 transition-all duration-300 ${isOpen ? 'left-0' : '-left-64'} lg:left-0 w-64 bg-[#111827] text-white flex flex-col`}>
            <div className="flex items-center justify-center h-16 bg-[#1F2937]">
                <h1 className="text-2xl font-semibold">
                    <Link to='/'>Connect-Publics</Link>
                </h1>
            </div>
            <nav className="flex-1 px-4 text-xl py-8">
                <ul>
                    <li className="mb-4">
                        {/* Internal routing with Link */}
                        <Link to="/admin/connect-publics" className="flex items-center p-2 space-x-3 hover:bg-blue-500 rounded-md">
                            <FiBookOpen />
                            <span>Blog Form</span>
                        </Link>
                    </li>

                    <li className="mb-4">
                        {/* Adjusted path */}
                        <Link to="/admin/connect-publics/editblog" className="flex items-center p-2 space-x-3 hover:bg-blue-500 rounded-md">
                            <GiNotebook />
                            <span>Edit Blog</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Slider;
