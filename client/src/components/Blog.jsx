import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Brand from '../components/Brand';
import PageNotFound from '../admin/pages/PageNotFound';
import { BLOGS_API, UPLOAD_IMAGE_API } from '../constant/constant';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                <PageNotFound />
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
            <div className="flex flex-col mb-6 mt-20 px-5 lg:px-12 sm:px-4">
                {loading ? (
                    <div className="text-center text-gray-500">Loading...</div>
                ) : error ? (
                    <div className="text-center text-red-500">Error: {error}</div>
                ) : blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 rounded-xl shadow-md shadow-gray-400 p-4 max-w-full bg-white mb-8"
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 lg:w-2/5">
                                <img
                                    src={`${UPLOAD_IMAGE_API}/${blog.images}`}
                                    alt={blog.title}
                                    className="rounded-xl w-full h-64 sm:h-72 md:h-full object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="w-full md:w-1/2 lg:w-3/5 bg-white flex flex-col space-y-4 p-4">
                                <div className="bg-gray-200 w-max px-4 py-1 rounded-full text-xs font-medium text-gray-800">
                                    Blog's
                                </div>
                                <h3 className="font-black text-gray-800 text-2xl sm:text-3xl">{blog.title}</h3>
                                <p className="text-gray-500 text-base sm:text-lg">{blog.description}</p>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-md">Author:</span>
                                    <p className="text-[#314078] leading-none text-md">Connect Publics</p>
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
