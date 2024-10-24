import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const ServiceCard = ({ title, description, image, reverse }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} md:space-x-6 border ${darkMode ? 'border-white' : ''}
      space-y-6 md:space-y-0 rounded-xl shadow-xl p-4 max-w-full mb-8 
      ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
    >
      <div className="w-full md:w-1/2 lg:w-2/5">
        <img
          src={image} 
          alt={title}
          className="rounded-xl w-full h-48 md:h-64 lg:h-72 object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col space-y-4 p-4">
        <h3 className="font-black text-2xl sm:text-3xl">{title}</h3>
        <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} text-base sm:text-lg`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
