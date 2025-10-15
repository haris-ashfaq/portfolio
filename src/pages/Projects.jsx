import React from 'react';
import pro from '../assets/pro.png';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Projects = () => {
    return (
        <section className="py-12 px-4 ">
            <h1 className="text-4xl font-extrabold text-center mt-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
                My Projects
            </h1>
            <span className='text-2xl text-center block mt-2 mb-2'> No-1</span>

            <div className="max-w-6xl mx-auto grid gap-8 mt-3 mb-3 md:grid-cols-2 items-cente bg-white rounded-xl shadow-xl overflow-hidden p-6">
                <div className="w-full">
                    <img src={pro} alt="Project Preview" className="w-full h-auto rounded-lg" />
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
                        Acme
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                            <div
                                key={tech}
                                className="px-4 py-2  bg-gradient-to-r from-blue-500 to-purple-700 text-white rounded-md text-sm font-medium shadow-sm"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-600 text-base max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, debitis.
                    </p>

                    <div>

                        <a
                            href="https://biznus-template.webflow.io/"
                            target='_blank'
                            className="inline-flex items-center gap-2 mt-2  text-black rounded-lg"
                        >
                            View Project
                            <FaArrowRight />
                        </a>

                    </div>
                </div>
            </div>
            <span className='text-2xl text-center block mt-2 mb-2'> No-2</span>

            <div className="max-w-6xl mx-auto grid gap-8 mt-4 md:grid-cols-2 items-center bg-white rounded-xl shadow-md mb-4 overflow-hidden p-6">


                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
                        Acme
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                            <div
                                key={tech}
                                className="px-4 py-2 text-white  bg-gradient-to-r from-blue-500 to-purple-700 rounded-md text-sm font-medium shadow-sm"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-600 text-base max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, debitis.
                    </p>

                    <div>
                        <a
                            href="#"
                            className="inline-flex  items-center gap-2 mt-2  text-black rounded-lg  transition"
                        >
                            View Project
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
                <div className="w-full">
                    <img src={pro} alt="Project Preview" className="w-full h-auto rounded-lg" />
                </div>
            </div>
            <span className='text-2xl text-center block mt-2 mb-2'> No-3</span>

            <div className="max-w-6xl mx-auto grid gap-8 mt-2 md:grid-cols-2 items-center bg-white rounded-xl shadow-md overflow-hidden p-6">
                <div className="w-full">
                    <img src={pro} alt="Project Preview" className="w-full h-auto rounded-lg" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
                        Acme
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                            <div
                                key={tech}
                                className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-700 rounded-md text-sm font-medium shadow-sm"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600 text-base max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, debitis.
                    </p>
                    <div>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 mt-2 text-black rounded-lg transition"
                        >
                            View Project
                            <FaArrowRight />
                        </a>
                    </div>
                </div>

            </div>

        </section>
    );
};
