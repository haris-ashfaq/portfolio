import React from 'react';
import '../styles/hero.css';
import cv from "../assets/bilal bhai.pdf"

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 shadow-2xl mt-10 pt-10 pb-12 bg body-font">
                <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font bg-clip-text mt-10 text-transparent sm:text-4xl text-3xl md:text-6xl mb-4 font-bold bg-gradient-to-r from-blue-500 to-purple-700">
                            Hi, I’m Haris Ashfaq
                        </h1>
                        <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-600 loading-text">
                            A Web Developer & UI Designer
                        </h2>
                        <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">
                            "Let’s Build Something Great Together"
                        </h3>
                        <p className="text-gray-500 leading-relaxed mb-6">
                            I’m a web developer who collaborates with clients to bring their digital visions to life through clean code and intuitive design.
                            I combine thoughtful design with powerful development to create websites that are both beautiful and functional.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href={cv} download={true}>
                                <button className="text-[1rem] mt-2 cursor-pointer text-white bg-gradient-to-r from-blue-500 to-purple-700 px-6 py-2 rounded">
                                    Download CV
                                </button>
                            </a>

                            <button className="text-white mt-2 text-[1rem] cursor-pointer  px-6 py-2 border rounded">
                                View Projects
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
