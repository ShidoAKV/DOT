import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Abhishek Singh",
    role: "Frontend Developer",
    image: "Drone1.webp", // Replace with your image URL
  },
  {
    name: "John Doe",
    role: "Backend Developer",
    image: "Drone1.webp",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "Drone1.webp",
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    image: "Drone1.webp",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold mb-6 md:mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet Our Team
      </motion.h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 w-full max-w-7xl">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg flex flex-col items-center p-6 text-center hover:scale-105 transform transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 border-4 border-gray-700"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-400">{member.role}</p>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
};

export default Team;
