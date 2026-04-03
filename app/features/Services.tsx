'use client';

import { useState } from 'react';
import { Bot, MessageSquare, ArrowRight,
  ShoppingCart,
  ShieldCheck,
  GraduationCap,
  Puzzle,
  X,
  CheckCircle2,
  Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    slug: 'ai-chatbots',
    icon: MessageSquare,
    title: 'AI Chatbots & Conversational AI',
    description:
      'Deploy smart chatbots on your website and WhatsApp to handle customer inquiries, generate leads, and provide 24/7 automated support.',
    detailedDescription: 'Deploy sophisticated AI-powered chatbots that understand context, learn from interactions, and provide human-like conversations. Our chatbot solutions seamlessly integrate with your website, WhatsApp, and other messaging platforms to handle customer inquiries, generate qualified leads, and deliver exceptional support around the clock.',
    benefits: [
      '24/7 automated customer support without human intervention',
      'Instant responses to customer queries, reducing wait times',
      'Lead generation and qualification on autopilot',
      'Multilingual support to serve global customers',
      'Cost reduction by up to 30% on customer service operations',
    ],
    features: [
      'Natural Language Processing (NLP) for human-like conversations',
      'Multi-channel integration (Web, WhatsApp, Facebook Messenger)',
      'Context-aware responses with conversation memory',
      'Sentiment analysis for better customer understanding',
      'Analytics dashboard with insights and metrics',
      'Custom training on your business data and FAQs',
    ],
    useCases: [
      { title: 'E-commerce Support', description: 'Handle product inquiries, track orders, and provide personalized recommendations.' },
      { title: 'Lead Generation', description: 'Qualify prospects, collect contact information, and schedule sales calls automatically.' },
      { title: 'Customer Service', description: 'Answer FAQs, troubleshoot issues, and escalate complex problems to human agents.' },
    ],
  },
  {
    slug: 'business-automation',
    icon: Bot,
    title: 'AI Automation (Business Process Automation)',
    description:
      'Automate repetitive tasks like follow-ups, data entry, and workflows to save time, reduce errors, and improve business efficiency.',
    detailedDescription: 'Transform your business operations with intelligent automation that handles repetitive tasks, streamlines workflows, and eliminates human error. Our AI-powered automation solutions work 24/7 to process data, manage follow-ups, and execute complex workflows so your team can focus on high-value activities.',
    benefits: [
      'Save 10+ hours per week on repetitive administrative tasks',
      'Reduce operational errors by up to 95%',
      'Improve response times and customer satisfaction',
      'Scale operations without increasing headcount',
      'Free your team to focus on strategic initiatives',
    ],
    features: [
      'Automated email and SMS follow-ups',
      'Intelligent data entry and processing',
      'Document extraction and classification',
      'Workflow automation across multiple systems',
      'Smart scheduling and calendar management',
      'Automated reporting and analytics',
    ],
    useCases: [
      { title: 'Sales Automation', description: 'Automate lead scoring, follow-up sequences, and pipeline management.' },
      { title: 'HR Operations', description: 'Streamline onboarding, timesheet processing, and employee data management.' },
      { title: 'Invoice Processing', description: 'Extract data from invoices, validate information, and route for approval.' },
    ],
  },
  {
    slug: 'ecommerce-retail',
    icon: ShoppingCart,
    title: 'AI for E-commerce & Retail',
    description:
      'Boost sales with AI-powered product recommendations, smart search, and customer behavior insights tailored for online stores.',
    detailedDescription: 'Leverage cutting-edge AI to transform your online store into a personalized shopping destination. Our solutions analyze customer behavior, predict preferences, and deliver tailored recommendations that increase conversions, average order value, and customer lifetime value.',
    benefits: [
      'Increase conversion rates by 15-30% with personalized recommendations',
      'Boost average order value through intelligent upselling',
      'Reduce cart abandonment with smart retargeting',
      'Improve search relevance and product discovery',
      'Optimize inventory management and demand forecasting',
    ],
    features: [
      'AI-powered product recommendations',
      'Visual search and image recognition',
      'Intelligent search with natural language understanding',
      'Dynamic pricing optimization',
      'Customer behavior analytics and insights',
      'Personalized email marketing campaigns',
    ],
    useCases: [
      { title: 'Product Recommendations', description: 'Show customers products they\'re most likely to buy based on browsing history.' },
      { title: 'Smart Search', description: 'Enable customers to find products using natural language and images.' },
      { title: 'Price Optimization', description: 'Automatically adjust prices based on demand and competition.' },
    ],
  },
  {
    slug: 'fintech-solutions',
    icon: ShieldCheck,
    title: 'Fintech AI Solutions',
    description:
      'Enhance financial systems with fraud detection, transaction monitoring, and intelligent risk analysis built for secure operations.',
    detailedDescription: 'Protect your financial operations and enhance customer experiences with AI-driven security, fraud detection, and risk analysis. Our fintech solutions leverage machine learning to identify anomalies, predict risks, and automate compliance while maintaining the highest security standards.',
    benefits: [
      'Detect fraudulent transactions in real-time with 99%+ accuracy',
      'Reduce false positives and improve customer experience',
      'Automate regulatory compliance and reporting',
      'Enhance credit scoring and risk assessment',
      'Prevent account takeovers and identity theft',
    ],
    features: [
      'Real-time fraud detection and prevention',
      'Anomaly detection in transaction patterns',
      'AI-powered credit scoring and risk analysis',
      'Anti-money laundering (AML) monitoring',
      'Biometric authentication and verification',
      'Automated KYC (Know Your Customer) processes',
    ],
    useCases: [
      { title: 'Fraud Prevention', description: 'Identify suspicious transactions and patterns before financial damage occurs.' },
      { title: 'Credit Risk Assessment', description: 'Evaluate loan applications with AI-powered credit scoring models.' },
      { title: 'Transaction Monitoring', description: 'Monitor transactions for regulatory compliance and suspicious activity.' },
    ],
  },
  {
    slug: 'education-ai',
    icon: GraduationCap,
    title: 'AI for Education',
    description:
      'Build intelligent learning systems with AI tutors, automated grading, and personalized learning experiences for students.',
    detailedDescription: 'Create adaptive learning experiences that cater to each student\'s unique needs and pace. Our AI-powered education solutions provide intelligent tutoring, automated grading, and personalized learning paths that improve outcomes and engagement while reducing teacher workload.',
    benefits: [
      'Improve student outcomes with personalized learning paths',
      'Save teachers 10+ hours per week on grading and admin tasks',
      'Increase student engagement with interactive AI tutors',
      'Provide 24/7 learning support and assistance',
      'Identify struggling students early with predictive analytics',
    ],
    features: [
      'AI-powered tutoring and homework help',
      'Automated grading for essays and assignments',
      'Personalized learning path recommendations',
      'Adaptive quiz and test generation',
      'Student performance analytics and insights',
      'Plagiarism detection and content verification',
    ],
    useCases: [
      { title: 'Intelligent Tutoring', description: 'Provide one-on-one tutoring at scale with AI that adapts to each student\'s needs.' },
      { title: 'Automated Grading', description: 'Grade essays and assignments instantly while providing detailed feedback.' },
      { title: 'Learning Analytics', description: 'Track student progress and identify areas where intervention is needed.' },
    ],
  },
  {
    slug: 'custom-integration',
    icon: Puzzle,
    title: 'AI Integration & Custom AI Systems',
    description:
      'Integrate AI into your apps, websites, and workflows with custom-built solutions designed specifically for your business goals.',
    detailedDescription: 'Get AI solutions built from the ground up to solve your specific challenges. Whether you need to integrate AI into existing systems or build entirely new AI-powered applications, our team designs, develops, and deploys custom solutions that align perfectly with your business goals and technical requirements.',
    benefits: [
      'Solutions designed specifically for your business workflows',
      'Seamless integration with your existing tech stack',
      'Competitive advantage with proprietary AI capabilities',
      'Full ownership and control of your AI systems',
      'Scalable architecture that grows with your business',
    ],
    features: [
      'Custom AI model development and training',
      'API development and integration',
      'End-to-end system design and architecture',
      'Legacy system AI enhancement',
      'Cloud deployment and infrastructure setup',
      'Model monitoring and performance optimization',
    ],
    useCases: [
      { title: 'Custom AI APIs', description: 'Build proprietary AI endpoints that integrate seamlessly with your applications.' },
      { title: 'Workflow Automation', description: 'Design intelligent workflows that connect multiple systems.' },
      { title: 'AI-Powered Features', description: 'Add AI capabilities to your existing products and services.' },
    ],
  },
];
export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <section id="solutions" className="py-24 bg-gradient-to-b from-[#0A0F2C] to-[#0F1535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
           Practical AI solutions for businesses and education, automate workflows, engage users, and drive growth
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#6C3BFF]/50 hover:shadow-2xl hover:shadow-[#6C3BFF]/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C3BFF]/0 to-[#2979FF]/0 group-hover:from-[#6C3BFF]/5 group-hover:to-[#2979FF]/5 rounded-2xl transition-all duration-300"></div>

                <div className="relative z-10">
                  <motion.div 
                    className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#6C3BFF] to-[#2979FF] rounded-xl mb-6"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#6C3BFF] group-hover:to-[#00CFFF] group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <button 
                    onClick={() => setSelectedService(service)}
                    className="flex items-center space-x-2 text-[#00CFFF] hover:text-[#2979FF] transition-colors duration-200 font-medium !border-0 bg-transparent !outline-none p-0 shadow-none"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

    {/* Modal */}
    <AnimatePresence>
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          onClick={() => setSelectedService(null)}
        >
          <div className="min-h-screen px-4 py-20">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="max-w-5xl mx-auto bg-gradient-to-br from-[#0F1535] to-[#0A0F2C] border border-white/10 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-4 sm:p-6 md:p-8 border-b border-white/10">
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#6C3BFF]/30 to-[#2979FF]/30 hover:from-[#6C3BFF]/30 hover:to-[#2979FF]/30 rounded-full flex items-center justify-center transition-all z-50 shadow-lg backdrop-blur-sm"
                >
                  <span className="text-white text-2xl font-bold">×</span>
                </button>
                
                <div className="flex flex-col sm:flex-col items-center sm:items-start gap-4 sm:gap-6 pr-10 sm:pr-0">
               <div className='flex flex-row mt-10' >
                   <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#6C3BFF] to-[#2979FF] rounded-2xl flex-shrink-0">
                    <selectedService.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 ml-4">
                      {selectedService.title}
                    </h2>
               </div>
                  <div className="text-left sm:text-left">
                 
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      {selectedService.detailedDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-[#00CFFF] mr-2" />
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 bg-white/5 border border-white/10 rounded-lg p-4"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#00CFFF] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 text-[#6C3BFF] mr-2" />
                    Features & Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-lg p-4"
                      >
                        <Sparkles className="w-4 h-4 text-[#6C3BFF] flex-shrink-0 mt-1" />
                        <p className="text-gray-300 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Real-World Applications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedService.useCases.map((useCase, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-[#6C3BFF]/50 transition-all"
                      >
                        <h4 className="text-lg font-bold text-white mb-2">{useCase.title}</h4>
                        <p className="text-gray-400 text-sm">{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-[#6C3BFF]/20 to-[#2979FF]/20 border border-[#6C3BFF]/30 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Let's discuss how this solution can transform your business
                  </p>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      scrollToSection('contact');
                    }}
                    className="bg-gradient-to-r from-[#6C3BFF] to-[#2979FF] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-[#6C3BFF]/50 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
