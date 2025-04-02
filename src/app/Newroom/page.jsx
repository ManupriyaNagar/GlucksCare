'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const newsItems = [
  {
    id: 1,
    title: "Gluckscare Launches Revolutionary New Drug Treatment",
    date: "March 15, 2024",
    category: "Press Release",
    image: "/n3.jpg",
    excerpt: "Breakthrough medication shows promising results in clinical trials, offering new hope for patients.",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Expanding Our Global Healthcare Initiative",
    date: "March 10, 2024",
    category: "Company News",
    image: "/n2.jpg",
    excerpt: "Gluckscare extends its reach to 15 new countries, bringing affordable healthcare solutions worldwide.",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Research Partnership with Leading Medical Institute",
    date: "March 5, 2024",
    category: "Research",
    image: "/n1.jpg",
    excerpt: "Strategic collaboration aims to accelerate breakthrough discoveries in pharmaceutical research.",
    readTime: "6 min read"
  }
];

export default function NewsRoom() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute -left-40 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center text-black">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Newsroom
          </motion.h1>
          <motion.p 
            className="text-xl text-black max-w-2xl mx-auto mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay updated with the latest developments, breakthroughs, and initiatives at Gluckscare Pharmaceuticals
          </motion.p>
        </div>
      </section>

      {/* News Filter Section */}
      <section className="py-2 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {['All News', 'Press Releases', 'Company Updates', 'Research & Development', 'Events'].map((filter, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full text-heading hover:bg-primary hover:text-white transition-colors duration-300"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-custom overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/0 transition-colors duration-300 z-10"></div>
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-primary text-sm font-medium">{news.category}</span>
                      <span className="text-heading/60 text-sm">{news.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors duration-300">
                      {news.title}
                    </h3>
                    
                    <p className="text-heading/70 mb-4 line-clamp-2">
                      {news.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-heading/60">{news.readTime}</span>
                      <span className="text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold 
                           hover:bg-primary hover:text-white transition-all duration-300">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-heading mb-4">Stay Informed</h2>
            <p className="text-heading/70 mb-8">
              Subscribe to our newsletter to receive the latest updates and news directly in your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
