'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InfoSection() {
    return (
      <section className='bg-gradient-to-b from-gray-50 to-white relative overflow-hidden'>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
                Our Business
                {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span> */}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Delivering Excellence in Healthcare Solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <Image
                    src="/images.jpeg" 
                    alt="People Group"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
    
              {/* Right Side - Content Box */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-800 to-purple-800 text-white p-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  About Gluckscare Pharmaceuticals
                </motion.h2>
                
                <motion.p 
                  className="text-base md:text-lg leading-relaxed opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Gluckscare is a leading pharmaceutical company in India, offering a wide range of products in various therapeutic segments. The company is committed to providing high-quality medicines and healthcare solutions to improve lives.
                </motion.p>

                <motion.div 
                  className="mt-8 grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <h3 className="font-semibold mb-2">Quality First</h3>
                    <p className="text-sm opacity-80">Committed to excellence in every product</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <h3 className="font-semibold mb-2">Innovation</h3>
                    <p className="text-sm opacity-80">Leading with cutting-edge solutions</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  