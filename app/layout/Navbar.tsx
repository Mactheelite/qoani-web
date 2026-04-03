'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0F2C]/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
             onClick={() => scrollToSection('home')}
             className="flex items-center space-x-2 group"
            >
              <div className="hidden md:flex w-10 h-10 bg-gradient-to-br from-[#6C3BFF] to-[#2979FF] rounded-lg items-center justify-center group-hover:scale-110 transition-transform duration-300">
             <img src="https://res.cloudinary.com/dw8j1umff/image/upload/v1775055855/logo-1_kezvqy.png" alt="QOANI Logo" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-[#6C3BFF] via-[#2979FF] to-[#00CFFF] bg-clip-text text-transparent">
                QOANI
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Solutions', 'About', 'Blog'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#6C3BFF] to-[#2979FF] text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#6C3BFF]/50 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F2C]/98 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {['Home', 'Solutions', 'About', 'Blog'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-[#6C3BFF] to-[#2979FF] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
