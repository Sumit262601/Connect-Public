import React, { useState, useEffect } from 'react';
import { UPLOAD_IMAGE_API } from '../../constant/constant';

const Modal = ({ isOpen, onClose, onSave, blog }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageFile, setImageFile] = useState(blog.images);
    const [updatedTitle, setUpdatedTitle] = useState(blog.title);
    const [updatedDescription, setUpdatedDescription] = useState(blog.description);

    useEffect(() => {
        if (blog) {
            setImageFile(blog.images);
            setUpdatedTitle(blog.title);
            setUpdatedDescription(blog.description);
        }
    }, [blog]);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave(blog._id, { title: updatedTitle, description: updatedDescription }, selectedImage);
        onClose();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImageFile(file.name);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <form
                method="put"
                encType="multipart/form-data"
                className="bg-white p-6 rounded shadow-lg w-5/6 sm:w-5/6 lg:w-1/2 max-h-screen overflow-y-auto"
                style={{ maxHeight: '90vh', overflowY: 'auto' }}
            >
                <div className="border-b border-gray-900/10 mb-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">Edit Blog</h2>
                </div>
                <div className="pb-10">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 sm:grid-cols-1">
                        {/* Title Input */}
                        <div className="sm:col-span-3 mb-4">
                            <label htmlFor="title" className="block text-lg font-semibold leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    required
                                    value={updatedTitle}
                                    onChange={(e) => setUpdatedTitle(e.target.value)}
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* Description Input */}
                        <div className="sm:col-span-3 mb-4">
                            <label htmlFor="description" className="block text-lg font-semibold leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    rows={8}
                                    value={updatedDescription}
                                    onChange={(e) => setUpdatedDescription(e.target.value)}
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* Image Input */}
                        <div className="sm:col-span-3 mb-4">
                            <label htmlFor="cover-photo" className="block text-lg font-semibold leading-6 text-gray-900">
                                Cover photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    {/* Display existing image or newly selected image */}
                                    {imageFile && (
                                        <div className="mb-4">
                                            <img
                                                src={selectedImage ? URL.createObjectURL(selectedImage) : `${UPLOAD_IMAGE_API}/${imageFile}`}
                                                alt="Selected"
                                                className="mx-auto w-full h-auto object-contain max-h-64"
                                            />
                                        </div>
                                    )}
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Save and Cancel Buttons */}
                    <div className="flex justify-end">
                        <button type="button" onClick={handleSave} className="bg-blue-700 hover:bg-opacity-90 text-white px-4 py-2 rounded mr-2">
                            Save
                        </button>
                        <button type="button" onClick={onClose} className="bg-gray-700 hover:bg-opacity-90 px-4 py-2 rounded">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Modal;
