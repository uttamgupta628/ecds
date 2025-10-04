import React, { useState } from 'react';
import { Facebook, Linkedin, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Navigation */}
          <div>
            <nav className="space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-700 hover:text-gray-900 transition-colors">
                About Us
              </a>
              <a href="#products" className="block text-gray-700 hover:text-gray-900 transition-colors">
                Products
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-gray-900 transition-colors">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Middle Column - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-start text-sm">
                <span className="font-semibold min-w-[50px] text-gray-900">Call:</span>
                <span className="text-gray-700">+91-11-45879655</span>
              </div>
              <div className="flex items-start text-sm">
                <span className="font-semibold min-w-[50px] text-gray-900">Email:</span>
                <span className="text-gray-700">info@ecds.co.in</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-gray-900">Head Office</h3>
            <p className="text-gray-700 text-sm">
              Rajendra Place, New Delhi 110008
            </p>
          </div>

          {/* Right Column - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Join Our Newsletter</h3>
            <p className="text-gray-700 text-sm mb-4">
              Get industry news, expert tips, and exclusive updates straight to your inbox.
            </p>
            <div className="space-y-3 flex">
              <input
                type="email"
                placeholder="Enter Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mr-1.5 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
              />
              <button
                onClick={handleSubmit}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-0 h-10 rounded transition-colors flex items-center justify-center gap-2"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Social Icons */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            Copyright 2025
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#facebook" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#linkedin" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#instagram" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#google" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Google">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
            <a href="#twitter" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;