"use client";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build your career with Gluckscare Pharmaceuticals. We're looking for passionate 
            individuals who share our vision of making healthcare accessible to all. Join us 
            in our mission to innovate and transform lives through cutting-edge pharmaceutical solutions.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 px-8 py-3 bg-white text-main rounded-lg font-semibold 
                     hover:bg-light hover:text-primary transition-all duration-300
                     shadow-lg hover:shadow-xl"
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
