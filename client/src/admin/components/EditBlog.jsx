import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AdminLogo } from '../../assets';
import EditForm from './EditForm';
import Slider from './Slider';
import Them from '../../constant/Them';

const EditBlog = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className="flex">
            <Slider isOpen={sidebarOpen} />
            <div className={`transition-all duration-300 flex-1 p-6 bg-white ${sidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-0`}>
                <header className="flex items-center justify-between mb-4 px-4">
                    {/* Hamburger button for mobile */}
                    <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
                        {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                    {/* Profile image */}
                    <div className="flex items-center justify-center gap-2">
                        <Them />
                        <img
                            alt="profile"
                            src={AdminLogo}
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        />
                    </div>
                </header>

                {/* Main EditBlog area */}
                <div className="border border-gray-200 rounded-md p-5">
                    <EditForm />
                </div>
            </div>
        </div>
    );
};

export default EditBlog;
