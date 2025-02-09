import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import Loader from "../assets/Loader";

const About = () => {
 
  const droneProperties = [
    {
      title: "Speed",
      description: "Our drone can reach a maximum speed of 80 km/h, ensuring your packages are delivered quickly and efficiently.",
    },
    {
      title: "Battery Life",
      description: "Equipped with a 5000mAh battery, our drone can operate for up to 30 minutes, enough to cover distances up to 10 km.",
    },
    {
      title: "Range",
      description: "The operational range of 10 km allows our drones to serve both urban and rural areas, ensuring no location is out of reach.",
    },
    {
      title: "Weight",
      description: "Weighing just 3.5 kg, our drones are lightweight yet durable, making them ideal for rapid deliveries without compromising on payload.",
    },
    {
      title: "Durability",
      description: "Our drones are built to withstand weather conditions, featuring a weather-resistant design that ensures continuous operation even in harsh conditions.",
    },
  ];

   const { scene } = useGLTF("/scifi_drone/scene.gltf", true);
 
   const [loading, setLoading] = useState(() => {
    return localStorage.getItem("hasVisitedAbout") ? false : true;
  });

  useEffect(() => {
    if (!localStorage.getItem("hasVisitedAbout")) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisitedAbout", "true");
      },1500);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  
  if (loading) {
    return (
      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] h-screen w-screen">
        <Loader/>
    </div>
    )
  }
  
  

  return (
    <>
      <motion.div
        className="w-screen h-screen text-center overflow-hidden relative bg-cover bg-center"
        initial={{ opacity: 0, z: -100 }}
        whileInView={{ opacity: 1, z: 0 }}
        animate={{ opacity: 1, z: 0, animation: "ease-in-out", delay: 2 }}
      >
        <h1 className="text-5xl text-white text-center pb-20 pt-10 font-bold">DroneX Features</h1>
        <div className="pt-24">
          <div
            className="slider"
            style={{
              "--quantity": droneProperties.length,
            }}
          >
            {droneProperties.map((property, index) => (
              <div
                key={index}
                className="item bg-black rounded-2xl shadow-lg border-2 border-blue-400"
                style={{
                  "--position": index + 1,
                }}
              >
                <div className="property-card pt-8">
                  <h3 className="text-lg font-bold text-white mb-2 pt-5">{property.title}</h3>
                  <p className="text-sm text-gray-300">{property.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="sm:pl-7 sm:pt-20 h-screen flex flex-col md:flex-row items-center md:pl-28 sm:px-5">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="text-white md:w-1/2 mb-10 md:mb-0 sm:mx-4 sm:mt-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-200">
            The World's Most Efficient Delivery Drone
          </h2>
          <p className="text-lg md:text-2xl mb-6">DroneX philosophy is obsessive engineering.</p>
          <p className="text-lg md:text-xl mb-6">
            We reject parts for being 3g overweight, develop entirely new manufacturing processes to shave less than 5g off of parts, and built a custom power delivery module to reduce wire weight by 12g. This obsession is what led us to condensing the capabilities of a 15-25kg drone into a 1500g aircraft.
          </p>
        </motion.div>

        {/* Right Section - 3D Model Animation */}
        <div className="sm:w-full md:w-1/2 sm:h-[700px] md:h-[650px] flex justify-center items-center">
          <motion.div
            className="w-full h-full"
            initial={{ y: -40 }}
            animate={{ y: 40 }}
            transition={{
              y: { repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" },
            }}
          >
            <Canvas
              className="w-full h-full"
              frameloop="demand"
              camera={{ position: [-4, 3, 2], fov: 45, near: 0.1, far: 200 }}
            >
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                enablePan={false}
              />
              <primitive object={scene} scale={1} rotation={[0, Math.PI / 2, 0]} />
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* New Section - Image and Text */}
      <div className="py-40 mt-56 px-5 flex flex-col md:flex-row items-center w-full">
        <div className="sm:w-screen md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="Drone1.webp"
            alt="Drone Image"
            className="sm:w-[650px] md:w-[500px] sm:h-[350px] md:h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="sm:pl-7 text-white md:w-1/2 pl-0 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-200">
            More than an Idea
          </h2>
          <p className="text-lg md:text-xl">This drone isn't theoretical; we've fully designed, built, and flown this aircraft.</p>
          <p className="text-lg md:text-xl mb-6">
            Capable of performing real deliveries, DroneX TRT is the most efficient delivery drone in the world. Having flown thousands of kilometers, this aircraft is our first commercial-ready model.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Starting deliveries in early 2025, TRT represents a new era of drone delivery.
          </p>
        </div>
      </div>
    </>
  );
};

export default React.memo(About);
