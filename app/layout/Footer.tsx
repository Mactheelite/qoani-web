'use client';

import { FaTwitter, FaLinkedin, FaGithub, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F2C] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#6C3BFF] via-[#2979FF] to-[#00CFFF] bg-clip-text text-transparent mb-4">
              QOANI
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your business with cutting-edge AI solutions. We help organizations automate, optimize, and innovate.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#6C3BFF] hover:border-[#6C3BFF] transition-all duration-300"
              >
                <FaTwitter className="w-5 h-5 text-gray-400 hover:text-white"/>
              </a>
              <a
                href="https://www.linkedin.com/in/mac-smith-okorie-639768177"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#6C3BFF] hover:border-[#6C3BFF] transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://github.com/Mactheelite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#6C3BFF] hover:border-[#6C3BFF] transition-all duration-300"
              >
                <FaGithub className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="mailto:dev.macsmith@gmail.com"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#6C3BFF] hover:border-[#6C3BFF] transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@qoani.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#6C3BFF] hover:border-[#6C3BFF] transition-all duration-300"
              >
                <FaTiktok className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://wa.me/2348067057524"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#6C3BFF] hover:border-[#6C3BFF] transition-all duration-300"
              >
                <FaWhatsapp className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Solutions', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-[#00CFFF] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AI Chatbots & Conversational AI</li>
              <li>AI Automation</li>
              <li>AI for E-commerce & Retail</li>
              <li>Fintech AI Solutions</li>
              <li>AI for Education</li>
              <li>AI Integration & Custom Systems</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} QOANI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00CFFF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00CFFF] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00CFFF] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
