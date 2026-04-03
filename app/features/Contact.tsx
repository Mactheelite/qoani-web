'use client';

import { useState, type FormEvent } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0A0F2C] to-[#0F1535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's start a conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#6C3BFF] to-[#2979FF] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Address</div>
                    <div className="text-gray-400">Plot 11, Lekki Scheme II</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#6C3BFF] to-[#2979FF] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Phone</div>
                    <a href="tel:+2348067057524" className="text-gray-400 hover:text-[#00CFFF] transition-colors">
                      +234 806 705 7524 
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#6C3BFF] to-[#2979FF] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Email</div>
                    <div className="space-y-1">
                      <a href="mailto:info@qoani.com" className="block text-gray-400 hover:text-[#00CFFF] transition-colors">
                        dev.macsmith@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#6C3BFF]/10 to-[#2979FF]/10 border border-[#6C3BFF]/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Why Choose QOANI?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00CFFF] mt-2"></div>
                  <span>Industry-leading AI expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00CFFF] mt-2"></div>
                  <span>Tailored solutions for your business</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00CFFF] mt-2"></div>
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00CFFF] mt-2"></div>
                  <span>Proven track record of success</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C3BFF] to-[#2979FF] rounded-2xl blur-xl opacity-20"></div>
            <form
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6C3BFF] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6C3BFF] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6C3BFF] focus:border-transparent transition-all"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6C3BFF] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#6C3BFF] to-[#2979FF] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#6C3BFF]/50 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400 text-center">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-center">
                    Something went wrong. Please try again.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
