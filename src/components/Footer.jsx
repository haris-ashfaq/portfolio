import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer class="flex bg-black flex-col space-y-10 justify-center ">

                <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                    <Link to="/" className="px-3 py-2 text-white  hover:text-gray-200">Home</Link>
                    <Link to="about" className="px-3 py-2 text-white hover:text-gray-200">About</Link>
                    <Link to="projects" className="px-3 py-2 text-white hover:text-gray-200">Projects</Link>
                    <Link to="contact" className="px-3 py-2 text-white hover:text-gray-200">Contact</Link>
                </nav>

                <div class="flex justify-center space-x-5">
                    <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                    </Link>
                    <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                    </Link>
                    <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                    </Link>
                    <Link to="https://messenger.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/github.png" />
                    </Link>
                    <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                    </Link>
                </div>
                <p class="text-center text-gray-700 font-medium">&copy; 2025 Haris Ashfaq Portfolio. Made With React & Tailwind.</p>
            </footer>
        </>
    )
}

export default Footer