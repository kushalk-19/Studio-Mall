import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import img2 from '../../assets/img2.jpeg';

const PartnerInvitationSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Join Our <span className="gradient-text">Studio Network</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Partner with StudioMall to expand your business reach, receive more orders, and provide seamless photo printing services to customers in your area.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Increased customer base and orders</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Digital payment integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Delivery coordination support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Professional dashboard and analytics</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => toast({
                title: "🚧 Partner Registration Coming Soon!",
                description: "Studio partner onboarding will be available at launch. Stay tuned! 🚀"
              })}
            >
              Become a Partner
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              className="w-full rounded-2xl shadow-xl"
              src={img2} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerInvitationSection;