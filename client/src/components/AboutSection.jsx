import React from 'react'
import { About1, About2, About3 } from "../assets";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="overflow-hidden pb-12 lg:pt-[10px] lg:pb-[90px] dark:bg-dark">
            <div className="flex flex-wrap items-center justify-between -mx-4">
                <div className="w-full -z-50 px-4 lg:w-6/12">
                    <div className="flex items-center -mx-3 sm:-mx-4">
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                            <div className="py-3 sm:py-4">
                                <img
                                    src={About1}
                                    alt="about1"
                                    className="w-full rounded-2xl"
                                />
                            </div>
                            <div className="py-3 sm:py-4">
                                <img
                                    src={About2}
                                    alt="about2"
                                    className="w-full rounded-2xl"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                            <div className="relative z-10 my-4">
                                <img
                                    src={About3}
                                    alt="about3"
                                    className="w-full rounded-2xl"
                                />
                                <span className="absolute -right-7 -bottom-7 z-[-1]">
                                    <svg
                                        width={134}
                                        height={106}
                                        viewBox="0 0 134 106"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="1.66667"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 31 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3334"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 60.3334 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 117.667 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 103 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 132 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 89.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 89.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 31 89.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 89.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 103 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 132 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="74.6673"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 74.6673)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 31.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 31.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 31 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 31 31.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 31.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 103 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 103 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 132 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 132 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 31 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 31 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 103 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 103 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 132 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 132 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 45.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 45.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 31 45.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 31 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 45.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 103 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 103 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 132 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 132 1.66683)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full lg:w-1/2 xl:w-6/12 px-10 relative">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <span className="block mb-4 text-lg font-semibold text-[#374785]">
                            Why Choose Us
                        </span>
                        <h2 className="mb-5 text-3xl font-bold text-dark dark:text-black sm:text-[40px]/[48px]">
                            Make your customers happy by giving services.
                        </h2>
                        <p className="mb-5 text-base text-body-color dark:text-dark-6">
                            At Connect Publics, we believe in creating lasting relationships with our clients by offering services built on trust, transparency, and open communication. Our team collaborates closely with you to deliver innovative, actionable solutions that meet your goals, while ensuring timely and exceptional results.
                        </p>
                        <p className="mb-8 text-base text-body-color dark:text-dark-6">
                            We understand the importance of a cohesive brand identity. Securing a domain name that reflects your brand is one of the first steps toward establishing your presence and voice in the market.
                        </p>
                        <Link to="/blog"
                            className="inline-flex gap-4 items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-[#BE4258] hover:bg-opacity-90">
                            Get Started <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection