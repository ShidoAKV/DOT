import React, { useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../Context/Context';

const Hero = () => {
  const { scene } = useGLTF('/scene.gltf'); 
  const {token}=useContext(Appcontext);
  const navigate=useNavigate();

  const handlebooking=()=>{
       if(!token){
         navigate('/login');
       }else{
        navigate('booking');
       }
  }

  return (

    <div className=' w-screen h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      <section className="sticky h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] overflow-hidden">
      {/* Background Canvas Animation */}
      <motion.div
        className="absolute inset-0 w-full h-[450px] z-0 "
      >
        <div className="relative w-full h-full pb-16">
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
            <primitive object={scene} scale={3} rotation={[0, Math.PI / 2, 0]} />
          </Canvas>
        </div>
      </motion.div>

      {/* Tagline Animation */}
      <motion.div
        className="absolute pt-32 inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 ">
          Revolutionizing Drone Deliveries
        </h2>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Fast, efficient, and reliable deliveries at your doorstep with drone technology.
        </p>
        <a
          onClick={handlebooking}
          className="bg-yellow-500 cursor-pointer text-gray-900 py-3 px-6 rounded-lg text-xl hover:bg-yellow-400 transition duration-300"
        >
          Learn More
        </a>
      </motion.div>
    </section>
    </div>
  );
};

export default Hero;
