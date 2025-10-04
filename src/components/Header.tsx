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
    <header className=" text-black">
     

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="ECDS Logo" 
              className="h-20 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-10">
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
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-zinc-700 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium hover:text-amber-500 transition-colors"
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