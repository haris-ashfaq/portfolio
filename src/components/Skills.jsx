import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiDjango, SiMongodb, SiPostgresql, SiFirebase } from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Add skill levels with percentage
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-4xl text-orange-400" />, level: 90 },
    { name: "CSS3", icon: <FaCss3Alt className="text-4xl text-blue-600" />, level: 85 },
    { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-300" />, level: 80 },
    { name: "ReactJS", icon: <FaReact className="text-4xl text-cyan-300" />, level: 75 },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-4xl text-cyan-300" />, level: 75 }
  ];

  const backendSkills = [
    { name: "NodeJS", icon: <FaNodeJs className="text-4xl text-green-400" />, level: 60 },
    { name: "ExpressJS", icon: <SiExpress className="text-4xl text-gray-300" />, level: 70 },
    { name: "Django", icon: <FaJs className="text-4xl text-t-300" />, level: 70 },
  ];


  const databaseSkills = [
    { name: "MySQL", icon: <FaDatabase className="text-4xl text-blue-300" />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-400" />, level: 80 },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-500" />, level: 75 },
  ];

  // Reusable card renderer with progress bar
  const renderCards = (skills) => (
    <div className="grid grid-cols-1 p-5 sm:grid-cols-2 mt-0 md:grid-cols-5 gap-6  md:mt-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex flex-col items-center">
            {skill.icon}
            <span className="mt-3 font-semibold">{skill.name}</span>

            {/* Progress bar container */}
            <div className="w-full bg-gray-800 rounded-full h-3 mt-4">
              <div
                className="bg-gradient-to-r from-purple-400 to-blue-400 h-3 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-sm mt-2">{skill.level}%</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className=" px-6 md:px-20 bg-black">
      <h2 className="text-4xl pt-10 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500">
        My technical Skills
      </h2>
      <p className="text-white text-center md:mt-2">Here are my some technical skills</p>

      {/* Frontend */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center text-white mb-4">Frontend</h3>
        {renderCards(frontendSkills)}
      </div>

      {/* Backend */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center text-white mb-4">Backend</h3>
        {renderCards(backendSkills)}
      </div>

      {/* Database */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center text-white mb-4">Database</h3>
        {renderCards(databaseSkills)}
      </div>
    </section>
  );
};

export default Skills;
