import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BLOGS_API } from '../../constant/constant';

const Form = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        if (selectedImage) {
            formData.append('image', selectedImage);
        }

        try {
            const response = await fetch(`${BLOGS_API}/create`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network Error!');
            }

            const result = await response.json();
            toast.success('Successfully created!', result);
            setTitle('');
            setDescription('');
            setSelectedImage(null);
        } catch (error) {
            toast.error("Could not add the blog!");
        }
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={true} />
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="border-b border-gray-900/10">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Blog's Content</h2>
                </div>
                <div className="border-gray-900/10 pb-10">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 sm:grid-cols-1">
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
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
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
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3 mb-4">
                            <label htmlFor="cover-photo" className="block text-lg font-semibold leading-6 text-gray-900">
                                Cover photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    {selectedImage && (
                                        <div className="mb-4">
                                            <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="mx-auto w-full object-contain" />
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
                                                name="file-upload"
                                                type="file"
                                                accept="image/*"
                                                className="sr-only"
                                                onChange={handleImageChange}
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="rounded-md bg-[#111827] px-20 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#1F2937] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2937]">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Form;
