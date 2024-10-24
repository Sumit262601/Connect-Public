import React, { useEffect, useState, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Brand from '../components/Brand';
import PageNotFound from '../admin/pages/PageNotFound';
import { BLOGS_API, UPLOAD_IMAGE_API } from '../constant/constant';
import { DarkModeContext } from '../context/DarkModeContext'; // Import DarkModeContext

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { darkMode } = useContext(DarkModeContext); // Use DarkModeContext

    // Fetch blogs data from the backend
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${BLOGS_API}/fetchblogs`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (err) {
                <PageNotFound />;
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <>
            <Navbar />
            <Brand />
            <div className={`flex flex-col mb-6 mt-20 px-5 lg:px-12 sm:px-4`}>
                {loading ? (
                    // Skeleton Loader
                    <div className="space-y-6">
                        {Array(6).fill().map((_, index) => (
                            <div
                                key={index}
                                className={`animate-pulse flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 rounded-xl shadow-md p-4 max-w-full ${darkMode ? 'bg-gray-900' : 'bg-white'} mb-8`}
                            >
                                {/* Skeleton Image Section */}
                                <div className="w-full md:w-1/2 lg:w-2/5 bg-gray-300 rounded-xl h-64 sm:h-72"></div>

                                {/* Skeleton Content Section */}
                                <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col space-y-4 p-4">
                                    <div className="bg-gray-300 w-20 h-5 rounded-full"></div>
                                    <div className="bg-gray-300 w-3/4 h-8 rounded-xl"></div>
                                    <div className="bg-gray-300 w-full h-4 rounded-xl"></div>
                                    <div className="bg-gray-300 w-1/3 h-4 rounded-xl"></div>
                                    <div className="bg-gray-300 w-1/2 h-6 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <PageNotFound />
                ) : blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className={`flex flex-col md:flex-row md:space-x-6 border space-y-6 md:space-y-0 rounded-xl p-4 max-w-full mb-8 
                            ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-[#ffffff] text-gray-800'} 
                            shadow-xl`}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 lg:w-2/5">
                                <img
                                    src={`${UPLOAD_IMAGE_API}/${blog.images}`}
                                    alt="Blog Img"
                                    className="rounded-xl w-full h-48 sm:h-62 md:h-64 lg:h-96 object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col space-y-4 p-4">
                                <div className={`w-max px-4 py-1 rounded-full text-xs font-medium 
                                ${darkMode ? 'bg-slate-200 text-gray-900' : 'bg-gray-200 text-gray-800'}`}>
                                    Blog's
                                </div>
                                <h3 className="font-black text-2xl sm:text-3xl">{blog.title}</h3>
                                <p className="text-base sm:text-lg">{blog.description}</p>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-md">Author:</span>
                                    <p className={`${darkMode ? 'text-[#ffffff]' : 'text-[#BE4258] leading-none text-md'}`}>Connect Publics</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <PageNotFound />
                )}
            </div>

            <Footer />
        </>
    );
};

export default Blog;
