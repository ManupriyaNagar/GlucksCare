import React from 'react';

const Quick = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-9xl mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6
           relative inline-block">
            Our Story
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>
          </h2>
          <div className="space-y-6 items-justify">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-left">
            At Gluckscare Pharmaceuticals, our journey began with a simple yet profound question: Why should quality healthcare be a privilege and not a right? Our founder, deeply moved by personal experiences of seeing loved ones struggle to afford life-saving medications, realized that the real challenge was not just manufacturing medicines but ensuring their availability to those who needed them the most.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-left">
            In many parts of the world, essential medicines remain out of reach for millions. Some battle chronic illnesses without access to the right treatment, while others compromise on their health due to high medical costs. Witnessing these hardships firsthand, Gluckscare was born—with a vision to bridge the gap between pharmaceutical innovation and accessibility.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-left">
            Our mission is clear: No one should ever have to choose between health and affordability. We work relentlessly to ensure that life-changing medicines, wellness products, and healthcare solutions are available to all, regardless of location or financial background
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-left">
            From our humble beginnings as a small distribution network to now being a trusted name in pharmaceutical marketing, every milestone we achieve is a testament to our unwavering commitment—to people, to health, and to a future where medical care knows no barriers..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quick;
