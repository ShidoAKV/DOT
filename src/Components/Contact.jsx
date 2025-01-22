import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      className=" scroll-smooth min-h-screen bg-neutral-100 dark:bg-black/60 text-neutral-800 dark:text-neutral-200 flex justify-center items-center p-6"
    >
      <div className="w-full max-w-3xl bg-white   p-6 rounded-lg shadow-md" style={{ background: "linear-gradient(to right,black,rgb(48 35 101))"}}>
        <h2 className="text-2xl font-semibold text-center mb-6 ">Contact Us</h2>
        <p className="text-center mb-6 text-neutral-500 dark:text-neutral-400">
          Have questions? We'd love to hear from you. Fill out the form below, and we'll get back to you shortly.
        </p>

        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-white dark:bg-neutral-900 dark:border-neutral-700"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-white dark:bg-neutral-900 dark:border-neutral-700"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-white dark:bg-neutral-900 dark:border-neutral-700"
              placeholder="Type your message here"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center static ">
            <button
              className="px-6 py-3 bg-black  text-white rounded-lg shadow-lg hover:border-2  hover:border-white "
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Details */}
        <div className="mt-10 text-center  flex justify-between">
          <p>
            <strong>Email:</strong> support@dronex.com
          </p>
          <p>
            <strong>Phone:</strong> +1 234 567 890
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
