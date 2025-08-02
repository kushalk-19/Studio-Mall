import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import VisionSection from '@/components/sections/VisionSection';
import PartnerInvitationSection from '@/components/sections/PartnerInvitationSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/layout/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>StudioMall.in - Passport Photos, Delivered Fast | Coming Soon</title>
        <meta name="description" content="Revolutionary mobile platform for instant passport photo capture, printing, and delivery across India. Partner studios, online payment, and fast delivery via Porter." />
        <meta name="keywords" content="passport photos app India, digital photo printing, nearest studio photo delivery, passport size photos online, photo printing app, studio partner network" />
        <meta property="og:title" content="StudioMall.in - Passport Photos, Delivered Fast" />
        <meta property="og:description" content="Get passport photos printed and delivered from nearby partner studios. Coming soon to revolutionize photo printing in India." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StudioMall.in - Passport Photos, Delivered Fast" />
        <meta name="twitter:description" content="Revolutionary mobile platform for instant passport photo printing and delivery across India." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <HeroSection />
        <HowItWorksSection />
        <VisionSection />
        <PartnerInvitationSection />
        <NewsletterSection />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;