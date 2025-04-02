import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomerStories = () => {
  return (
    <section className="py-16 px-6 md:px-12 text-center bg-white mt-8">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Stories from customers
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side - Customer Circles */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -top-6 -left-4 bg-purple-200 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
            +100k <br />
            <span className="text-xs font-normal text-gray-600">
              happy clients
            </span>
          </div>
          <img
            src="/images.jpeg"
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md absolute -bottom-4 -left-6"
            alt="Client 1"
          />
          <img
            src="/images.jpeg"
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md z-10"
            alt="Main Client"
          />
          <img
            src="/images.jpeg"
            className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md absolute bottom-0 left-12"
            alt="Client 2"
          />
        </div>

        {/* Right Side - Testimonial */}
        <div className="max-w-lg text-left">
          <h3 className="text-2xl font-bold text-gray-900">Quick & easy</h3>
          <p className="text-gray-600 mt-2">
            Spoke to Dr. Mike, he was wonderful and truly caring about our
            situation. Thank you for being so kind!
          </p>
          <p className="text-gray-900 font-semibold mt-4">Leslie Alexandr</p>
          <p className="text-gray-500 text-sm">HR Manager</p>

          {/* Pagination & Navigation */}
          <div className="mt-6 flex items-center space-x-4">
            <span className="text-gray-500 text-sm">1/3</span>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <ChevronLeft size={16} />
            </button>
            <button className="p-2 bg-black text-white rounded-full hover:opacity-80">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
