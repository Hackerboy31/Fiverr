import React from "react";
import heroimage from "../assets/heroimage.png";
const Banner = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-indigo-600">FreelanceHub</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          The all-in-one freelance marketplace where clients connect with top 
          freelancers. Post projects, receive bids, chat in real time, and 
          manage contracts — all in one platform.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={heroimage}
          alt="Freelancing illustration"
          className="w-full max-w-lg rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Banner;
