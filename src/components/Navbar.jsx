import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="text-gray-600 shadow-lg z-10 fixed top-0 w-full right-0 shadow-gray-800 bg-gray-950 body-font">
            <div className="container mx-auto flex flex-wrap justify-between p-2  md:flex-row items-center ">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#">

                    <div className='flex flex-col justify-center items-center'>
                        <span className="ml-3 font-bold  text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700  ">Haris Ashfaq</span>
                        <h1 className='tracking-[0.70rem] pl-6 text-white text-center'>Portfolio</h1>
                    </div>
                </a>
                <button
                    className="md:hidden inline-flex items-center text-gray-600 hover:text-gray-900 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <defs>
                                    <linearGradient id="gradientStroke" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#FF00FF" />
                                        <stop offset="100%" stopColor="#00FFFF" />
                                    </linearGradient>
                                </defs>
                                <path
                                    stroke="url(#gradientStroke)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>

                        ) : (
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <defs>
                                    <linearGradient id="gradientStroke" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#FF00FF" />
                                        <stop offset="100%" stopColor="#00FFFF" />
                                    </linearGradient>
                                </defs>
                                <path
                                    stroke="url(#gradientStroke)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                        )}
                    </svg>
                </button>

                <div className={`w-full md:flex justify-center md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <nav className="flex flex-col items-center justify-center md:flex-row md:ml-auto text-base">
                        <Link to="/" className="px-3 py-2 text-white  hover:text-gray-200">Home</Link>
                        <Link to="about" className="px-3 py-2 text-white hover:text-gray-200">About</Link>
                        <Link to="projects" className="px-3 py-2 text-white hover:text-gray-200">Projects</Link>
                        <Link to="contact" className="px-3 py-2 text-white hover:text-gray-200">Contact</Link>
                        <button className="ml-0 md:ml-4 mt-3 md:mt-0 items-center bg-gradient-to-r from-blue-500 to-purple-700 border-0 py-2 px-3 text-white cursor-pointer focus:outline-none rounded text-base">
                            Connect

                        </button>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
