import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleNotifyMe = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to get notified!",
        variant: "destructive"
      });
      return;
    }

    const existingEmails = JSON.parse(localStorage.getItem('studioMallEmails') || '[]');
    if (!existingEmails.includes(email)) {
      existingEmails.push(email);
      localStorage.setItem('studioMallEmails', JSON.stringify(existingEmails));
    }

    toast({
      title: "Success! 🎉",
      description: "You'll be the first to know when StudioMall launches!"
    });
    setEmail('');
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Get notified when StudioMall launches and receive exclusive early access benefits
          </p>

          <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-lg"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-lg whitespace-nowrap"
              >
                Notify Me
              </Button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            No spam, just launch updates and exclusive offers
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;