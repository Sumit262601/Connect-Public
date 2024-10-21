import React, { useState } from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { SEND_MAIL_API } from "../constant/constant.js"

const Footer = () => {
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${SEND_MAIL_API}/send-email`, formData);
            toast.success('Form submitted successfully!', response);

            // Clear input fields
            setFormData({
                email: '',
            });

            // Scroll to top
            window.scrollTo(0, 0);
        } catch (error) {
            toast.error('Server Error!');
        }
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={true} />
            <footer className="px-6 py-8 md:px-12 lg:px-20 bg-gradient-to-r from-[#24315E] to-[#374785] text-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Subscription Section */}
                        <div className="sm:col-span-2">
                            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight">
                                Subscribe to <span className='text-[#F76D6D]'>Connect Publics</span>.
                            </h1>

                            <div className="flex flex-col gap-3 w-full mt-6 space-y-4 md:space-y-0 md:flex-row">
                                {/* Input Field */}
                                <div className="flex items-center px-4 py-2 bg-[#EBE9E1] rounded-md text-gray-700 focus-within:ring focus-within:ring-opacity-40">
                                    <IoMail className='text-xl text-[#BD4157]' />
                                    <input id="email" type="text" name='email' value={formData.email} onChange={handleChange} className="w-full px-2 bg-transparent outline-none" placeholder="Email Address" />
                                </div>
                                {/* Subscribe Button */}
                                <button onClick={handleSubmit} className="w-full mt-4 md:mt-0 md:w-auto px-6 py-2.5 text-sm font-medium tracking-wider text-white bg-[#BD4157] rounded-lg hover:bg-opacity-80 focus:ring focus:ring-opacity-80">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <p className="text-lg md:text-xl font-semibold text-[#F76D6D]">Quick Links</p>
                            <div className="flex flex-col mt-5 space-y-2">
                                <Link to="/" className="transition-colors duration-300 hover:text-[#F7E9A0]">Home</Link>
                                <Link to="/about" className="transition-colors duration-300 hover:text-[#F7E9A0]">About</Link>
                                <Link to="/blog" className="transition-colors duration-300 hover:text-[#F7E9A0]">Blog's</Link>
                                <Link to="/contact" className="transition-colors duration-300 hover:text-[#F7E9A0]">Contact</Link>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <p className="text-lg md:text-xl font-semibold text-[#F76D6D]">Services</p>
                            <div className="flex flex-col mt-5 space-y-2">
                                <Link to="/" className="transition-colors duration-300 hover:text-[#F7E9A0]">Public Relations</Link>
                                <Link to="/" className="transition-colors duration-300 hover:text-[#F7E9A0]">Influencer Marketing</Link>
                                <Link to="/" className="transition-colors duration-300 hover:text-[#F7E9A0]">Social Media Management</Link>
                                <Link to="/" className="transition-colors duration-300 hover:text-[#F7E9A0]">Product Photography</Link>
                                <Link to="/" className="transition-colors duration-300 hover:text-[#F7E9A0]">Press Release Distribution</Link>
                                <Link to="/" className="transition-colors duration-300 hover:text-[#F7E9A0]">Video Shoots</Link>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-8 border-t-2 border-white" />

                    {/* Footer Bottom */}
                    <div className="flex flex-col items-center justify-between space-y-4 sm:space-y-0 sm:flex-row">
                        <p className='text-sm md:text-base'>
                            <span className='text-[#F7E9A0]'>&copy;</span> Connect Publics Pvt. Ltd
                        </p>

                        <div className="flex space-x-4 text-xl">
                            {/* Social Media Icons */}
                            <Link to="#" className="transition-colors duration-300 hover:text-[#F76D6D]" aria-label="Instagram">
                                <BsInstagram />
                            </Link>
                            <Link to="#" className="transition-colors duration-300 hover:text-[#F76D6D]" aria-label="Facebook">
                                <FaFacebookSquare />
                            </Link>
                            <Link to="#" className="transition-colors duration-300 hover:text-[#F76D6D]" aria-label="Twitter">
                                <FaTwitterSquare />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
