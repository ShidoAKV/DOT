import React, { useContext, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../Context/Context";

const Hero = () => {
  const { scene } = useGLTF("/scene.gltf", true);
  const { token } = useContext(Appcontext);
  const navigate = useNavigate();

  const [modelScale, setModelScale] = useState(3);
  const [cameraPosition, setCameraPosition] = useState([-4, 3, 2]);
  const [modelPosition, setModelPosition] = useState([0, -1, 0]); // Moved up slightly

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 640) {

        setModelScale(1.2);
        setCameraPosition([3, 2, 2]);
        setModelPosition([0, 1.2, 0]); // Adjust for smaller screens
      } else if (width < 1024) {

        setModelScale(2);
        setCameraPosition([-4, 3, 3]);
        setModelPosition([0, 0.8, 0]); // Adjust for tablets
      } else {
       
        setModelScale(2.7);
        setCameraPosition([2, 6, 0]);
        setModelPosition([0, 0.7, 0]); // Default position
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBooking = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/booking");
    }
  };

  return (
    <div className="w-full min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Canvas Animation */}
        <motion.div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <Canvas
              className="w-full h-full"
              frameloop="demand"
              camera={{ position: cameraPosition, fov: 45, near: 0.1, far: 200 }}
            >
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={1.5} />
              <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI /2}
                minPolarAngle={Math.PI / 2}
                enablePan={false}
                enableRotate={false}
              />
              {/* Adjusted model position */}
              <primitive object={scene} scale={modelScale} position={modelPosition} rotation={[0, Math.PI / 2, 0]} />
            </Canvas>
          </div>
        </motion.div>

        {/* Tagline Animation */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6 max-w-screen-lg mx-auto mt-[22%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Revolutionizing Drone Deliveries
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Fast, efficient, and reliable deliveries at your doorstep with drone technology.
          </p>
          <button
            onClick={handleBooking}
            className="bg-yellow-500 cursor-pointer text-gray-900 py-3 px-6 rounded-lg text-lg md:text-xl hover:bg-yellow-400 transition duration-300"
          >
            Learn More
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default React.memo(Hero);
