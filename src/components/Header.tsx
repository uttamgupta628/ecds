import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'HOME', href: '/' },
    { label: 'PRODUCT', href: '#product' },
    { label: 'ABOUT', href: '/about' },
    { label: 'NEWS', href: '#news' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <header className="text-black">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="ECDS Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden min-[750px]:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-amber-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              className="hover:text-amber-500 transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button 
              className="hover:text-amber-500 transition-colors"
              aria-label="User Account"
            >
              <User size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button - Visible only below 750px */}
          <div className="flex items-center space-x-4 min-[750px]:hidden">
            {/* Shopping Cart Icon for Mobile */}
            <button 
              className="hover:text-amber-500 transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* User Icon for Mobile */}
            <button 
              className="hover:text-amber-500 transition-colors"
              aria-label="User Account"
            >
              <User size={20} />
            </button>

            {/* Hamburger Menu Button */}
            <button 
              className="hover:text-amber-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="min-[750px]:hidden mt-4 pb-4 border-t border-gray-300 pt-4 bg-white">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-sm font-medium hover:text-amber-500 hover:bg-gray-100 transition-colors border-b border-gray-200 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;