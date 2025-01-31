import React from "react";
import ThreeScene from "../assets/Initdrone.jsx";
import { motion } from "framer-motion";

const Carousel = () => {
  return (
    <div className="bg-black  flex w-screen h-screen items-center justify-center">
      {/* Left Content */}
      <motion.div
        className="z-50 h-full p-6 sm:md:0 md:ml-10  bg-black flex flex-col justify-center w-full md:w-2/3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-200">
          Why Choose DroneX
        </h1>
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6   md:w-[700px]">
          {[
            { label: "Speed", value: "50 km/h" },
            { label: "Range", value: "30 km" },
            { label: "Weight", value: "2.5 kg" },
            { label: "Max Altitude", value: "4000 m" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-blue-400  transition-all ease-out duration-900"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg font-semibold text-white">
                {feature.label}
              </span>
              <span className="block mt-2 text-sm text-gray-300">
                {feature.value}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3D Model Canvas */}
      <div className="hidden md:block w-[800px] h-full">
        <ThreeScene />
      </div>
    </div>
  );
};

export default Carousel;
