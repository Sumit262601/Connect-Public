import React, { useContext } from "react";
import ServiceCard from "./ServiceCard";
import { serviceCards } from "../utils/Items";
import { DarkModeContext } from "../context/DarkModeContext";

const Service = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <section
            className={`pb-12 pt-20 ${darkMode ? 'bg-dark' : 'bg-white'} lg:pb-[90px] lg:pt-[120px]`}
        >
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                    <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                        <div className="flex items-center justify-center">
                            <span className={`mb-4 rounded-full block font-semibold px-10 text-primary text-[#EFB11E] ${darkMode ? 'ring-1 ring-white hover:ring-white' : 'ring-1 ring-gray-900/30 hover:ring-gray-900/20'}`}>
                                Our Services
                            </span>
                        </div>
                        <h2 className={`mb-3 text-4xl md:text-5xl font-bold leading-[1.2] ${darkMode ? 'text-[#ffffff]' : 'text-[#BD4157]'}`}>
                            What We Offer
                        </h2>
                        <p className={`text-base md:text-lg lg:text-xl text-body-color ${darkMode ? 'text-gray-400' : 'text-[#374785]'}`}>
                            "Empowering Your Brand with Transparent, Innovative Solutions and Timely Results"
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-10">
                {serviceCards.map((item, index) => (
                    <ServiceCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        reverse={index % 2 == 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default Service;
