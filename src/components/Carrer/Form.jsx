"use client";
import React from "react";
import { motion } from 'framer-motion';

const CareerForm = () => {
  return (
    <section className='bg-gradient-to-b from-gray-50 to-white relative overflow-hidden mt-20'>
     <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
               Carrer
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Build your career with Gluckscare Pharmaceuticals. We're looking for passionate individuals who share our vision of making healthcare accessible to all. Join us in our mission to innovate and transform lives through cutting-edge pharmaceutical solutions.
              </p>
           
            </motion.div>
            </div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-50 to-yellow-50 p-10">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-xl rounded-lg p-8">
          {/* Left Side - Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              We take care of our people because they are our greatest asset. At Gluckscare, we believe in
              improving lives – not just for our patients but also for our team.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Our employees love working here, and we provide amazing benefits to ensure job satisfaction.
            </p>
            <p className="text-gray-700 font-semibold">Let’s build the future together!</p>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Apply Now</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
              />
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
              />
              <input
                type="text"
                placeholder="Street Address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
              />
              <input
                type="text"
                placeholder="ZIP / Postal Code"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;
