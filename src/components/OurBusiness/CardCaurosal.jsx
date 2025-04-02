"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Indian Market",
    description: "Leading pharmaceutical solutions across India",
    image: "/images.jpeg",
    stats: {
      reach: "25+ States",
      products: "100+ Products",
      customers: "1M+ Customers"
    }
  },
  {
    id: 2,
    title: "Global Presence",
    description: "Expanding healthcare solutions worldwide",
    image: "/images.jpeg",
    stats: {
      reach: "10+ Countries",
      products: "200+ Products",
      customers: "5M+ Customers"
    }
  },
];

export default function OfferingsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Our Reach
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering healthcare solutions across the globe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{card.title}</h3>
                    <p className="text-gray-200 text-lg mb-6">{card.description}</p>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(card.stats).map(([key, value]) => (
                        <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                          <p className="text-white font-semibold text-lg">{value}</p>
                          <p className="text-gray-300 text-sm capitalize">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 w-fit"
                  >
                    Explore More
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
