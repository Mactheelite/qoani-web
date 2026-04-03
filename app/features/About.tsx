import { Target, Eye, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About QOANI
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Founded in 2025, QOANI is a team of AI experts, data scientists, and engineers
            dedicated to helping businesses of all sizes adopt and leverage artificial intelligence
            to drive innovation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C3BFF] to-[#2979FF] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-white/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6C3BFF] to-[#2979FF] rounded-xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize AI technology and make it accessible to businesses worldwide,
                empowering them to harness the full potential of artificial intelligence.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2979FF] to-[#00CFFF] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-white/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2979FF] to-[#00CFFF] rounded-xl mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A future where AI augments human potential and drives innovation across every
                industry, creating smarter, more efficient, and more sustainable businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: 'Expert Team',
              description: 'Experienced AI specialists, data scientists, and engineers',
            },
            {
              icon: Zap,
              title: 'Cutting-Edge Tech',
              description: 'Latest AI models and frameworks for optimal results',
            },
            {
              icon: Target,
              title: 'Client-Focused',
              description: 'Tailored solutions that align with your business goals',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-[#6C3BFF]/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#6C3BFF] to-[#2979FF] rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
