import React from 'react';
import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            Simplifying passport photo printing for the digital age by connecting customers with nearby studios through technology, ensuring quality, convenience, and speed in every transaction.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Partner Studios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Service Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;