import { Users, Briefcase, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Clients Worldwide',
  },
  {
    icon: Briefcase,
    value: '100+',
    label: 'Projects Completed',
  },
  {
    icon: Award,
    value: '95%',
    label: 'Client Satisfaction',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#0F1535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6C3BFF] to-[#2979FF] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6C3BFF] to-[#2979FF] rounded-xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#6C3BFF] via-[#2979FF] to-[#00CFFF] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
