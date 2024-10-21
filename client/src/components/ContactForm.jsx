import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { SEND_MAIL_API } from '../constant/constant';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        state: '',
        pincode: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${SEND_MAIL_API}/send-email`, formData);
            toast.success('Subscription submitted successfully!', response);

            // Clear input fields
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                state: '',
                pincode: ''
            });

            window.scrollTo(0, 0);
        } catch (error) {
            toast.error('Server Error!');
        }
        setLoading(false);
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={true} />
            <form onSubmit={handleSubmit} className="mx-auto max-w-2xl md:w-1/2 px-6 sm:px-8 lg:px-16 py-5">
                <div className="sm:grid-cols-2">
                    <div className='sm:col-span-2 mb-3'>
                        <label htmlFor="name" className="block text-lg font-semibold leading-6 text-[#D6536D]">Name</label>
                        <div className="mt-2.5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#374785] placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2 mb-3">
                        <label htmlFor="email" className="block text-lg font-semibold leading-6 text-[#D6536D]">Email</label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#374785] placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2 mb-3">
                        <label htmlFor="phone" className="block text-lg font-semibold leading-6 text-[#D6536D]">Phone</label>
                        <div className="mt-2.5">
                            <input
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                type="text"
                                autoComplete="number"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#374785] placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2 mb-3">
                        <label htmlFor="address" className="block text-lg font-semibold leading-6 text-[#D6536D]">Address</label>
                        <div className="mt-2.5">
                            <input
                                id="address"
                                name="address"
                                type="text"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                autoComplete="address"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#374785] placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className='mb-3 sm:col-span-3'>
                            <label htmlFor="state" className="block text-lg font-semibold leading-6 text-[#D6536D]">State</label>
                            <div className="mt-2.5">
                                <select
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    required
                                    onChange={handleChange}
                                    className="block w-full rounded-md font-semibold border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#374785] focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6"
                                >
                                    <option value="">Select a State</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>
                        </div>

                        <div className='mb-3 sm:col-span-3'>
                            <label htmlFor="pincode" className="block text-lg font-semibold leading-6 text-[#D6536D]">Pincode</label>
                            <div className="mt-2.5">
                                <input
                                    id="pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    autoComplete="pincode"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#374785] placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-5 grid grid-col-2 mb-20">
                    <button
                        type="submit"
                        className="rounded-md bg-[#374785] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#132851] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 20.293l1.414-1.414L3.293 20H2v.293zM16 20h-2.293L15 18.293l1.414 1.414z"
                                    ></path>
                                </svg>
                            </div>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
