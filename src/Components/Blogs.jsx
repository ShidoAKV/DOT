import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "The Future of Technology",
    description: "Exploring emerging trends in AI, IoT, and blockchain that are shaping our world.",
    author: "Abhishek Singh",
    date: "January 10, 2025",
    image: "Drone1.webp",
  },
  {
    title: "Designing for User Experience",
    description: "How to create intuitive and delightful interfaces for web and mobile applications.",
    author: "Jane Smith",
    date: "January 8, 2025",
    image: "Drone1.webp",
  },
  {
    title: "The Rise of Remote Work",
    description: "Understanding the shift to remote work and its impact on productivity and collaboration.",
    author: "John Doe",
    date: "January 5, 2025",
    image: "Drone1.webp",
  },
  {
    title: "The Rise of Remote Work",
    description: "Understanding the shift to remote work and its impact on productivity and collaboration.",
    author: "John Doe",
    date: "January 5, 2025",
    image: "Drone1.webp",
  },
  {
    title: "The Rise of Remote Work",
    description: "Understanding the shift to remote work and its impact on productivity and collaboration.",
    author: "John Doe",
    date: "January 5, 2025",
    image: "Drone1.webp",
  },
  {
    title: "The Rise of Remote Work",
    description: "Understanding the shift to remote work and its impact on productivity and collaboration.",
    author: "John Doe",
    date: "January 5, 2025",
    image: "Drone1.webp",
  },
  {
    title: "The Rise of Remote Work",
    description: "Understanding the shift to remote work and its impact on productivity and collaboration.",
    author: "John Doe",
    date: "January 5, 2025",
    image: "Drone1.webp",
  },
  {
    title: "The Rise of Remote Work",
    description: "Understanding the shift to remote work and its impact on productivity and collaboration.",
    author: "John Doe",
    date: "January 5, 2025",
    image: "Drone1.webp",
  },
  {
    title: "The Rise of Remote Work",
    description: "Understanding the shift to remote work and its impact on productivity and collaboration.",
    author: "John Doe",
    date: "January 5, 2025",
    image: "Drone1.webp",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Blog = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center p-6  scroll-hidden">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Latest Blogs
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            variants={cardVariants}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-400 mb-4">{blog.description}</p>
              <div className="text-sm text-gray-500 flex justify-between">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
