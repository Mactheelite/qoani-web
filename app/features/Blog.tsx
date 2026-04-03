'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Tag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllBlogPosts, type BlogPost } from '@/lib/firebase';

// Fallback blog posts (used when Firebase fails to load or is empty)
const fallbackBlogPosts: BlogPost[] = [
  {
    id: 'fallback-1',
    title: 'AI Chatbots: Revolutionizing Customer Engagement',
    excerpt: 'Discover how AI-powered chatbots are transforming customer service with 24/7 support, instant responses, and personalized interactions across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=80',
    category: 'AI Chatbots',
    date: 'March 15, 2026',
    readTime: '5 min read',
    author: 'Macsmith Okorie',
    content: `
      <h3>The Rise of Intelligent Chatbots</h3>
      <p>AI chatbots have evolved from simple rule-based systems to sophisticated conversational agents that understand context, emotions, and intent. Today's chatbots leverage Natural Language Processing (NLP) and machine learning to provide human-like interactions that enhance customer satisfaction.</p>
      
      <h3>Key Benefits for Businesses</h3>
      <p>Modern AI chatbots offer 24/7 availability, instant response times, and the ability to handle multiple conversations simultaneously. They reduce customer service costs by up to 30% while improving response quality and consistency.</p>
      
      <h3>Implementation Across Channels</h3>
      <p>Deploy chatbots on your website, WhatsApp, Facebook Messenger, and other platforms to meet customers where they are. Multi-channel integration ensures seamless experiences across all touchpoints.</p>
      
      <h3>Real-World Success Stories</h3>
      <p>Companies using AI chatbots report significant improvements in lead generation, customer retention, and operational efficiency. From e-commerce to healthcare, chatbots are transforming how businesses interact with their customers.</p>
    `,
  },
  {
    id: 'fallback-2',
    title: 'Business Process Automation: The Complete Guide',
    excerpt: 'Learn how AI automation can save 10+ hours per week, reduce errors by 95%, and transform your business operations for maximum efficiency.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
    category: 'AI Automation',
    date: 'March 10, 2026',
    readTime: '7 min read',
    author: 'Abdullahi Musa',
    content: `
      <h3>Understanding Business Process Automation</h3>
      <p>Business Process Automation (BPA) uses AI and machine learning to automate repetitive tasks, streamline workflows, and eliminate human errors. It's about working smarter, not harder.</p>
      
      <h3>Areas Ripe for Automation</h3>
      <p>From data entry and email follow-ups to invoice processing and report generation, countless business processes can be automated. Identify repetitive tasks that consume valuable time and automate them.</p>
      
      <h3>Implementation Strategy</h3>
      <p>Start with high-impact, low-complexity processes. Document current workflows, identify bottlenecks, and design automation solutions that integrate seamlessly with existing systems.</p>
      
      <h3>Measuring ROI</h3>
      <p>Track time saved, error reduction, cost savings, and employee satisfaction improvements. Most businesses see positive ROI within 3-6 months of implementing automation solutions.</p>
    `,
  },
  {
    id: 'fallback-3',
    title: 'AI-Powered E-commerce: Boost Sales with Smart Recommendations',
    excerpt: 'Unlock the potential of AI in e-commerce with personalized product recommendations, visual search, and intelligent pricing to increase conversions by 30%.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80',
    category: 'E-commerce AI',
    date: 'March 5, 2026',
    readTime: '6 min read',
    author: 'Temitope Balogun',
    content: `
      <h3>Personalization at Scale</h3>
      <p>AI-powered recommendation engines analyze customer behavior, purchase history, and browsing patterns to deliver personalized product suggestions that drive conversions and increase average order value.</p>
      
      <h3>Visual Search Technology</h3>
      <p>Enable customers to search using images instead of text. Visual search makes product discovery intuitive and increases the likelihood of finding exactly what customers want.</p>
      
      <h3>Dynamic Pricing Strategies</h3>
      <p>AI algorithms optimize pricing in real-time based on demand, competition, inventory levels, and customer segments to maximize revenue and maintain competitiveness.</p>
      
      <h3>Reducing Cart Abandonment</h3>
      <p>Intelligent retargeting and personalized incentives powered by AI help recover abandoned carts and turn potential losses into sales.</p>
    `,
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackBlogPosts);
  const [loading, setLoading] = useState(true);

  // Fetch blog posts from Firebase on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllBlogPosts();
        
        if (posts && posts.length > 0) {
          setBlogPosts(posts);
        }
        // If Firebase returns empty or null, fallback posts remain in state
      } catch (error) {
        console.error('Failed to fetch blog posts from Firebase, using fallback posts:', error);
        // Keep using fallback posts on error
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const displayedPosts = showAllPosts ? blogPosts : blogPosts.slice(0, 3);

  return (
    <>
    <section id="blog" className="py-24 bg-[#0F1535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and innovations in artificial intelligence
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#6C3BFF]"></div>
          </div>
        ) : (
          <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#6C3BFF]/50 hover:shadow-2xl hover:shadow-[#6C3BFF]/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C3BFF]/0 to-[#2979FF]/0 group-hover:from-[#6C3BFF]/5 group-hover:to-[#2979FF]/5 transition-all duration-300"></div>

              <div className="relative">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center bg-[#6C3BFF]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00CFFF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      By {post.author}
                    </div>
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className="group/btn flex items-center text-[#6C3BFF] hover:text-[#00CFFF] font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {blogPosts.length > 3 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllPosts(!showAllPosts)}
              className="bg-gradient-to-r from-[#6C3BFF] to-[#2979FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[#6C3BFF]/50 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>{showAllPosts ? 'Show Less' : 'View All Articles'}</span>
              <ArrowRight className={`w-5 h-5 transition-transform ${showAllPosts ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
        </>
        )}
      </div>
    </section>

    {/* Blog Post Modal */}
    <AnimatePresence>
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div className="min-h-screen px-4 py-20">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-[#0F1535] to-[#0A0F2C] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#6C3BFF]/40 to-[#2979FF]/40 hover:from-[#6C3BFF]/60 hover:to-[#2979FF]/60 rounded-full flex items-center justify-center transition-all z-50 shadow-lg backdrop-blur-sm"
              >
                <span className="text-white text-2xl font-bold">×</span>
              </button>

              {/* Hero Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-[#0A0F2C]/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center bg-[#6C3BFF] text-white text-sm font-semibold px-4 py-2 rounded-full mb-3">
                    <Tag className="w-4 h-4 mr-2" />
                    {selectedPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-12">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {selectedPost.readTime}
                  </div>
                  <div className="text-gray-500">
                    By {selectedPost.author}
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  {selectedPost.title}
                </h1>

                {/* Article Content */}
                <div 
                  className="blog-content text-gray-300 space-y-6"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                <style jsx>{`
                  .blog-content h3 {
                    color: white;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                  }
                  .blog-content p {
                    color: #d1d5db;
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                  }
                `}</style>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-r from-[#6C3BFF]/20 to-[#2979FF]/20 border border-[#6C3BFF]/30 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Interested in This Solution?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Let's discuss how we can help transform your business with AI
                  </p>
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gradient-to-r from-[#6C3BFF] to-[#2979FF] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-[#6C3BFF]/50 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <span>Get in Touch</span>
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
