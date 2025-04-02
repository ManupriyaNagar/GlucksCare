"use client";
import React from "react";

const TreatmentAdvice = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 md:px-24 text-center mt-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Get Treatment Advice
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        Receive a preliminary diagnosis, book appointments, undergo examinations, and get a treatment plan with drug recommendations.
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {/* Card 1 - Eye Drops */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border w-80 sm:w-96 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Eye Drops</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">Lumify</h3>
          <div className="mt-4 flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-600">Dosage: <strong>1 drop</strong></span>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-lg text-sm font-medium">
              Every 6-8 hours
            </span>
          </div>
          <p className="text-blue-600 text-base mt-6 cursor-pointer hover:underline font-medium transition duration-200">
            View Details →
          </p>
        </div>

        {/* Card 2 - Cough Medicine */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border w-80 sm:w-96 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Cough Medicine</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">Bionorica Gold</h3>
          <div className="mt-4 flex flex-col items-center space-y-2">
            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-lg text-sm font-medium">
              Daytime Use
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-lg text-sm font-medium">
              Before Meals
            </span>
          </div>
          <p className="text-blue-600 text-base mt-6 cursor-pointer hover:underline font-medium transition duration-200">
            View Details →
          </p>
        </div>
      </div>
    </section>
  );
};

export default TreatmentAdvice;
