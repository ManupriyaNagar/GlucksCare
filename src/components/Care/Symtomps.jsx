"use client";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Section - Select Symptoms */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Select Your Symptoms
          </h3>
          <p className="text-gray-600 mb-6">
            Choose symptoms that accurately describe your condition.
          </p>

          {/* Symptom Selection Box */}
          <div className="bg-gray-100 p-5 rounded-lg">
            <label className="block text-gray-700 mb-2 text-sm font-medium">
              What symptoms are troubling you today?
            </label>
            <input
              type="text"
              placeholder="e.g., Fever, Cough"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {["Cold", "Coughing", "Headache", "Fatigue"].map((symptom) => (
                <span
                  key={symptom}
                  className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-yellow-300 transition"
                >
                  {symptom}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Describe Details */}
        <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg border">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Describe Your Condition
          </h3>
          <p className="text-gray-600 mb-6">
            Tell us what's going on so we can provide the best advice. Upload photos or test results for a more accurate diagnosis.
          </p>

          {/* Body Part Selection Box */}
          <div className="bg-white p-5 rounded-lg flex flex-col items-center justify-center relative">
            <img
              src="/body1.png"
              alt="Body Diagram"
              className="w-40 h-40 object-contain mb-4"
            />
            <div className="bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-900">
              Which body part is bothering you?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
