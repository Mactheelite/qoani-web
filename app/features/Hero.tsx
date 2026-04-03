'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F2C]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#6C3BFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-[#2979FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-[#00CFFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mt-20 sm:mt-0 mb-8">
          <Sparkles className="w-4 h-4 text-[#00CFFF]" />
          <span className="text-sm text-gray-300">Powered by Advanced AI Technology</span>
        </div>

        <h1 className="text-4xl sm:text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-0 leading-tight">
          Transform Your Business with <br />
               <span className="bg-gradient-to-r from-[#6C3BFF] via-[#2979FF] to-[#00CFFF] bg-clip-text text-transparent  ">
                    <TypeAnimation
                  sequence={[
                "AI Solutions",
                1000,
                "AI Agents",
                1000,
                "AI Chatbots",
                1000,
                "AI Analytics",
                1000,
                "Digital Automation",
                1000,
                "Business Intelligence",
                1000,
              ]}
          speed={50}
          repeat={Infinity}
          cursor={true}
          className="bg-gradient-to-r from-[#6C3BFF] via-[#2979FF] to-[#00CFFF] bg-clip-text text-transparent"
        />
          </span>
        </h1>

   
        <p className="text-lg md:text-2xl text-gray-300 mb-12 mt-5 max-w-3xl mx-auto leading-relaxed">
          QOANI delivers cutting-edge artificial intelligence solutions tailored to your business needs.
          Automate, optimize, and innovate with our AI expertise.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="group bg-gradient-to-r from-[#6C3BFF] to-[#2979FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#6C3BFF]/50 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('solutions')}
            className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Explore Solutions
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'AI Models', value: '100+' },
            { label: 'Accuracy', value: '99.9%' },
            { label: 'Response Time', value: '<100ms' },
            { label: 'Uptime', value: '99.99%' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6C3BFF] to-[#00CFFF] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
