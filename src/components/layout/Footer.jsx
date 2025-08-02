import React from 'react';
import { Camera, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform) => {
    toast({
      title: `${platform} — Coming Soon!`,
      description: `Follow us on ${platform} after launch. 🚀`,
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          
          {/* Logo + About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold">StudioMall.in</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing passport photo printing and delivery across India through technology and partnerships.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, name: "Facebook" },
                { icon: Twitter, name: "Twitter" },
                { icon: Instagram, name: "Instagram" },
                { icon: Linkedin, name: "LinkedIn" }
              ].map(({ icon: Icon, name }) => (
                <Button
                  key={name}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                  onClick={() => handleSocialClick(name)}
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Passport Photo Printing</li>
              <li>Studio Partner Network</li>
              <li>Fast Delivery</li>
              <li>Online Payment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>info@studiomall.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+91 99782 22992</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Surat, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          &copy; {currentYear} StudioMall.in. All rights reserved. | Passport photos app India | Digital photo printing | Studio delivery service
        </div>
      </div>
    </footer>
  );
};

export default Footer;
