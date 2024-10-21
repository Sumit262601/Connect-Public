import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div className="relative h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 m-2.5 overflow-hidden text-white rounded-md">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-lg sm:text-xl font-semibold">
          {title}
        </h6>
        <p className="text-slate-600 text-sm sm:text-base leading-normal font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
