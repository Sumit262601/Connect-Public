import React from 'react'
import { GoDotFill } from "react-icons/go";

const Mission = () => {
    return (
        <div className="p-8 md:p-20 bg-[#24315E] mb-2" >
            <div className="mt-10 lg:mt-0 px-8 md:px-20">
                <div className="text-center mb-10 lg:mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-5 text-[#ffffff]">
                        Our Mission
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#F76D6D]">
                        To help businesses define their brand, find their voice, and connect with their target audience for success.
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-2xl md:max-w-4xl">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white"></div> {/* Vertical line */}
                        <ul className="space-y-6 md:space-y-10">
                            {/* Timeline Item 1 (Left) */}
                            <li className="relative flex flex-col md:flex-row justify-between items-center w-full">
                                <div className="order-2 md:order-1 w-full md:w-4/12"></div>
                                <div className="order-1 md:order-2 w-full md:w-8/12 p-4 bg-[#BE4258] dark:bg-dark-6 rounded-lg shadow-lg">
                                    <GoDotFill className="text-[#24315E] mb-2" /> {/* Optional icon */}
                                    <p className="mb-5 text-sm md:text-base text-body-color text-white">
                                        At Connect Publics, we believe in creating lasting relationships with our clients by offering services built on trust, transparency, and open communication. Our team collaborates closely with you to deliver innovative, actionable solutions that meet your goals, while ensuring timely and exceptional results.
                                    </p>
                                </div>
                            </li>
                            {/* Timeline Item 2 (Right) */}
                            <li className="relative flex flex-col md:flex-row justify-between items-center w-full">
                                <div className="order-2 md:order-1 w-full md:w-12/12 p-4 bg-[#BE4258] dark:bg-dark-6 rounded-lg shadow-lg">
                                    <GoDotFill className="text-[#24315E] mb-2" />
                                    <p className="mb-5 text-sm md:text-base text-body-color text-white">
                                        Our mission is to foster growth and success by empowering businesses to define their brand, articulate their unique voice, and connect meaningfully with their target audience. We believe in fostering collaboration and innovation, working closely with our clients to develop solutions that meet their needs while ensuring transparency, trust, and accountability at every step. Through visionary thinking and timely execution, we aim to shape the future of branding and create lasting impact for the businesses we serve.
                                    </p>
                                </div>
                                <div className="order-1 md:order-2 w-full md:w-5/12"></div> {/* Empty div for spacing on the left side */}
                            </li>
                            {/* Timeline Item 3 (Left) */}
                            <li className="relative flex flex-col md:flex-row justify-between items-center w-full">
                                <div className="order-2 md:order-1 w-full md:w-4/12"></div> {/* Empty div for spacing on the right side */}
                                <div className="order-1 md:order-2 w-full md:w-8/12 p-4 bg-[#BE4258] dark:bg-dark-6 rounded-lg shadow-lg">
                                    <GoDotFill className="text-[#24315E] mb-2" />
                                    <p className="mb-5 text-sm md:text-base text-body-color text-white">
                                        We prioritize collaboration and innovation, working together to create actionable solutions while adhering to timeliness in delivering exceptional results. Our dedication extends to offering employee benefits that support and motivate our team, driving their passion and commitment to client success. We uphold respect and accountability in all our endeavors, embracing visionary thinking to anticipate and shape the future of branding.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission