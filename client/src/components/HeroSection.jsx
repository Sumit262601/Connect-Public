import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';

const HeroSection = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`relative px-4 pt-14 lg:px-8 ${darkMode ? 'bg-dark' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-20">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className={`relative flex gap-1 rounded-full px-3 py-1 text-sm leading-6 ${darkMode ? 'text-gray-300 ring-1 ring-gray-500 hover:ring-gray-600' : 'text-gray-600 ring-1 ring-gray-900 hover:ring-gray-900/20'}`}>
            Announcing our next Blogs.{' '}
            <Link to="/blog">
              <p className={`font-semibold ${darkMode ? 'text-white' : 'text-[#F76C6C]' }`}>
                <span aria-hidden="true" className="absolute inset-0" />
                <span aria-hidden="true"> Read more &rarr;</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className={`font-bold tracking-tight ${darkMode ? 'text-gray-200' : 'text-[#24305E]'} text-4xl sm:text-6xl lg:text-7xl`}>
            Connect <span className='text-[#F76C6C]'>Publics</span>
          </h1>
          <p className={`mt-6 text-base sm:text-lg lg:text-2xl leading-8 ${darkMode ? 'text-gray-400' : 'text-[#374785]'}`}>
            Turning dreams into iconic brands
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link to="/contact">
              <div className={`rounded-md px-4 py-2 text-sm font-semibold shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${darkMode ? 'bg-[#BE4258] text-white focus-visible:outline-[#E43D11]' : 'bg-[#BE4258] text-white'}`}>
                Get started
              </div>
            </Link>
            <Link to="/about">
              <div className={`text-sm font-semibold leading-6 ${darkMode ? 'text-gray-300' : 'text-[#374785]'}`}>
                Learn more <span aria-hidden="true">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
