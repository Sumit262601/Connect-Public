import React, { useContext } from 'react';
import PageNotFound from "../pages/PageNotFound";
import { RiDeleteBin5Fill, RiEdit2Fill } from 'react-icons/ri';
import { UPLOAD_IMAGE_API } from '../../constant/constant';
import { DarkModeContext } from '../../context/DarkModeContext';

const BlogList = ({ blogs, onEdit, onDelete }) => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className="mt-4">
            {blogs.length === 0 ? (
                <PageNotFound />
            ) : (
                blogs.map((blog) => (
                    <div key={blog._id} className={`border rounded-lg shadow-md p-4 mb-10 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{blog.title}</h3>
                        <p className={`text-base font-semibold mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{blog.description}</p>
                        <img
                            src={`${UPLOAD_IMAGE_API}/${blog.images}`}
                            alt="Blog Img"
                            className="rounded-xl w-full h-64 md:h-96 object-cover"
                        />
                        <div className="mt-4 flex gap-2 items-center justify-end">
                            <button
                                onClick={() => onEdit(blog)}
                                className="flex items-center gap-1 bg-green-700 text-white p-2 rounded hover:bg-green-600 transition-colors"
                                aria-label={`Edit ${blog.title}`}
                            >
                                <RiEdit2Fill /> Edit
                            </button>
                            <button
                                onClick={() => onDelete(blog._id)}
                                className="flex items-center gap-1 bg-red-700 text-white p-2 rounded hover:bg-red-600 transition-colors"
                                aria-label={`Delete ${blog.title}`}
                            >
                                <RiDeleteBin5Fill /> Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogList;
