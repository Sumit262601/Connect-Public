import React from "react";
import ServiceCard from "./ServiceCard";
import { serviceCards } from "../utils/Items";

const Service = () => {
    return (
        <section className="pb-12 bg-white pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                    <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                        <div className="flex items-center justify-center">
                            <span className="mb-4 rounded-full block font-semibold px-10 text-primary text-[#EFB11E] ring-1 ring-gray-900/30 hover:ring-gray-900/20">
                                Our Services
                            </span>
                        </div>
                        <h2 className="mb-3 text-4xl md:text-5xl font-bold leading-[1.2] text-[#BD4157] dark:text-[#E43D11]">
                            What We Offer
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-body-color dark:text-[#D5536D]">
                            "Empowering Your Brand with Transparent, Innovative Solutions and Timely Results"
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                {serviceCards.map((item, index) => (
                    <ServiceCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>



        </section>
    );
};

export default Service;
