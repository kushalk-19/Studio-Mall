import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import img1 from '../../assets/img1.jpeg';

const HeroSection = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-6 pulse-glow">
            <Camera className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">StudioMall</span>
            <span className="text-gray-800">.in</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8">
            Passport Photos, Delivered Fast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionary mobile platform connecting you with nearby photo studios for instant passport photo printing and delivery across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <img
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl float-animation"
            src={img1}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
