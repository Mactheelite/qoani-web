import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Macsmith Okorie',
    role: 'CEO & Co-founder',
    company: 'QOANI',
    content: 'At QOANI, we build AI solutions that solve real business problems. From automation to analytics, our systems consistently help businesses scale faster and operate smarter.',
    avatar: 'https://res.cloudinary.com/dw8j1umff/image/upload/v1775039164/mac-dp_fakle2.jpg',
  },
  {
    name: 'Abdullahi Musa',
    role: 'COO',
    company: 'Arewa Digital Hub',
    content: 'QOANI transformed our business processes with intelligent automation. Their AI solutions streamlined our workflows, reduced operational costs by 45%',
    avatar: 'https://res.cloudinary.com/dw8j1umff/image/upload/v1775040656/musa_fmfwu5.jpg',
  },
  {
    name: 'Temitope Balogun',
    role: 'Director of Innovation',
    company: 'HealthTech Solutions',
    content: 'The healthcare chatbot built by QOANI allows us to respond to patient inquiries instantly and provide continuous support, improving both efficiency and patient satisfaction.',
    avatar: 'https://res.cloudinary.com/dw8j1umff/image/upload/v1775042996/yuroba_jjr5ru.png',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0F1535] to-[#0A0F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by industry leaders across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#6C3BFF]/50 hover:shadow-2xl hover:shadow-[#6C3BFF]/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C3BFF]/0 to-[#2979FF]/0 group-hover:from-[#6C3BFF]/5 group-hover:to-[#2979FF]/5 rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10">
                <Quote className="w-10 h-10 text-[#6C3BFF] mb-6 opacity-50" />

                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#6C3BFF]/30"
                  />
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-[#00CFFF] text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
