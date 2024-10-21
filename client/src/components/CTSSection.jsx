import React from 'react';
import { SocialImg } from '../assets';
import { Link } from 'react-router-dom';

const CTSSection = () => {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden bg-[#24315E] px-6 pt-16 shadow-lg sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#A8D0E6" /> {/* Light Blue for subtle gradient */}
              <stop offset={1} stopColor="#374785" /> {/* Indigo for deeper contrast */}
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-28 lg:text-left">
          <h2 className="font-bold tracking-tight text-[#A8D1E7] sm:text-2xl md:text-3xl lg:text-4xl">
            Ignite Your Social Media Success with Connect Publics
            <br />
            Where Strategy Meets Excellence
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#ffffff]">
            Our cutting-edge strategies and unparalleled expertise are designed to propel your brand to new heights.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 lg:justify-start">
            <Link to="/contact">
              <p className="rounded-md bg-[#BE4258] px-3.5 py-2.5 text-sm font-semibold text-[#ffffff] shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F76C6C]">
                Get started
              </p>
            </Link>
            <Link to="/about">
              <p className="text-sm font-semibold leading-6 text-[#ffffff] mt-4 sm:mt-0">
                Learn more <span aria-hidden="true">→</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="relative mt-20 h-80 items-center justify-center sm:ml-20 lg:ml-24 lg:mt-8">
          <img
            alt="BannerImg"
            src={SocialImg}
            width={1824}
            height={1080}
            className="absolute left-0 top-0 w-[29rem] max-w-none rounded-[10px] bg-white/5 ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  );
};

export default CTSSection;
