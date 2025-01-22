import React, { useState } from 'react';
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className=" sticky text-white shadow-lg  top-0 z-50   bg-black/50 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="sticky flex items-center space-x-4 cursor-pointer " onClick={()=>navigate('/')}>
            <h1 
             className= "sticky text-blue-400 font-semibold text-2xl  flex">
              Dro<h1  
              className="sticky text-white font-semibold text-2xl ">neX</h1>
            </h1>
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
           <motion.a
              className="text-lg cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-300 hover:scale-110  "
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1 }}
              onClick={()=>navigate('/about')}
            >
             About
            </motion.a>
            <motion.a
              className="text-lg  transition-all duration-300 ease-in-out cursor-pointer hover:text-blue-300 hover:scale-110  "
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1 }}
              onClick={()=>navigate('/team')}
            >
               Team
            </motion.a>
            <motion.a
              href="#contact"
             className="text-lg  transition-all duration-300 ease-in-out hover:text-blue-300 hover:scale-110  "
             initial={{ opacity: 0, scale: 0.8 }} 
             whileInView={{ opacity: 1, scale: 1 }} 
             transition={{ duration: 1 }}
             onClick={()=>navigate('/contact')}
            >
              Contact Us
            </motion.a>
            <motion.a
              href="#contact"
             className="text-lg  transition-all duration-300 ease-in-out hover:text-blue-300 hover:scale-110  "
             initial={{ opacity: 0, scale: 0.8 }} 
             whileInView={{ opacity: 1, scale: 1 }} 
             transition={{ duration: 1 }}
             onClick={()=>navigate('/Blogs')}
            >
              Blogs
            </motion.a>

          </div>

          {/* Mobile Menu Button */}
          <div className="sticky md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-all duration-300 ease-in-out focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden  overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <a
          href="/"
          className="block pl-8 px-4 py-2 transition-all duration-400 ease-linear hover:text-blue-300  text-lg"
        >
         Home
        </a>
        <a
          href="/about"
          className="block pl-8 px-4 py-2 transition-all duration-400 ease-linear hover:text-blue-300  text-lg"
        >
          About
        </a>
        <a
          href="/team"
          className="block pl-8 px-4 py-2 transition-all duration-400 ease-linear hover:text-blue-300  text-lg"
        >
          Team
        </a>
        <a
          href="/contact"
          className="block pl-8 px-4 py-2 transition-all duration-400 ease-linear hover:text-blue-300  text-lg"
        >
          Contact us
        </a>
        <a
          href="/Blogs"
          className="block pl-8 px-4 py-2 transition-all duration-400 ease-linear hover:text-blue-300  text-lg"
        >
         Blogs
        </a>
        
          {/* <div
            className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out ${
              dropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <a
              href="#service1"
              className="block pl-8 text-lg px-4 py-2 hover:bg-blue-600"
            >
              Service 1
            </a>
            <a
              href="#service2"
              className="block pl-8 text-lg px-4 py-2 hover:bg-blue-600"
            >
              Service 2
            </a>
            <a
              href="#service3"
              className="block pl-8 text-lg px-4 py-2 hover:bg-blue-600"
            >
              Service 3
            </a>
          </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
