import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footersection = () => {

  const navigate=useNavigate();

  return (
    <footer className=" bg-neutral-100 text-neutral-600 dark:bg-black/60 dark:text-neutral-200 w-full border-t-[1px] border-t-white">
      {/* Top Section: Social Media */}
      <div className="flex flex-col items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:flex-row lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            {/* Facebook */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            {/* Twitter */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            {/* Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            {/* LinkedIn */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.225 0H1.771C.791 0 0 .78 0 1.741v20.515C0 23.22.792 24 1.771 24h20.451c.978 0 1.778-.78 1.778-1.741V1.741C24 .78 23.203 0 22.225 0zM7.195 20.452H3.602V9h3.593v11.452zM5.395 7.708a2.075 2.075 0 110-4.15 2.075 2.075 0 010 4.15zM20.452 20.452h-3.593v-5.995c0-3.457-4.042-3.188-4.042 0v5.995h-3.593V9h3.593v1.561c1.517-2.534 8.042-2.739 8.042 2.429v7.462z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="mx-auto py-10 px-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About Us */}
          <div>
            <h6 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200">About DroneX</h6>
            <p className="text-neutral-500 dark:text-neutral-400">
              We provide cutting-edge drone technology solutions to transform businesses and enhance personal experiences. Explore the skies with DroneX!
            </p>
          </div>

          {/* Customer Support */}
          <div>
            <h6 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200">Customer Support</h6>
            <ul className="space-y-2">
              <li>
                <a href="#!" className="hover:text-neutral-600 dark:hover:text-neutral-200">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-neutral-600 dark:hover:text-neutral-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-neutral-600 dark:hover:text-neutral-200">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200">Newsletter</h6>
            <form className="space-y-4 gap-x-8 ">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
              />
              <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Subscribe
              </button>
            </form>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-200">Useful Links</h6>
            <ul className="space-y-2">
              <li>
                <a  onClick={()=>navigate('/')} className="hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a onClick={()=>navigate('/contact')} className="hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright and Privacy */}
      <div className=" flex flex-col items-center justify-between border-t-2 border-neutral-200 p-4 text-sm dark:border-neutral-500 lg:flex-row">
        <p className="mb-2 lg:mb-0 ">&copy; 2025 DroneX. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#!" className="hover:text-neutral-600 dark:hover:text-neutral-200">
            Privacy Policy
          </a>
          <a href="#!" className="hover:text-neutral-600 dark:hover:text-neutral-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footersection;
