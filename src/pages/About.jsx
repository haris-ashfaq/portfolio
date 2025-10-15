import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="bg-black  text-white py-5 px-6" id="about">
            <div className="max-w-4xl mx-auto text-center">

                <h2
                    data-aos="zoom-in"
                    className="text-4xl font-bold mt-20 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500"
                >
                    About Me
                </h2>
                <p
                    data-aos="fade-up"
                    className="text-lg text-gray-500 mb-8 leading-relaxed"
                >
                    Hi, I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500">Haris Ashfaq</span>, a passionate Web Developer
                    who loves creating dynamic and user-friendly web applications. I work with modern
                    technologies like React, Tailwind, and Node.js to deliver interactive experiences.
                    My focus is to understand client needs and translate them into user-friendly, responsive solutions.
                </p>


                <div
                    data-aos="zoom-in"
                    className="flex justify-center gap-6 mb-10"
                >
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" className="w-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="LinkedIn" className="w-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" className="w-8 hover:scale-110 transition-transform" />
                    </a>
                </div>


                <div
                    data-aos="fade-up"
                    className="bg-gradient-to-r from-purple-700 to-blue-500 text-black rounded-2xl shadow-lg p-6 max-w-md mx-auto"
                >
                    <h3 className="text-xl font-bold mb-4 text-center text-purple-700">
                        Contact Me
                    </h3>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            rows="4"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default About;
