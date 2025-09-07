'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Globe } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@globalrise.in',
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Offices',
      info: 'Hyderabad, India • Edinburgh, UK',
      description: 'Multiple locations worldwide'
    },
    {
      icon: Clock,
      title: 'Hours',
      info: 'Mon-Fri 9AM-6PM',
      description: 'Weekend appointments available'
    }
  ];

  const officeLocations = [
    {
      city: 'Hyderabad',
      country: 'India',
      address: '123 HITEC City, Cyberabad, Hyderabad, Telangana 500081',
      phone: '+91 40 1234 5678',
      email: 'hyderabad@globalrise.in',
      hours: 'Mon-Sat 9AM-7PM IST'
    },
    {
      city: 'Edinburgh',
      country: 'United Kingdom',
      address: '45 George Street, Edinburgh EH2 2HT, Scotland',
      phone: '+44 131 123 4567',
      email: 'edinburgh@globalrise.in',
      hours: 'Mon-Fri 9AM-5PM GMT'
    }
  ];

  const consultationTypes = [
    {
      icon: MessageSquare,
      title: 'Free Initial Consultation',
      duration: '30 minutes',
      description: 'Get started with a comprehensive profile evaluation and initial guidance.',
      features: ['Profile assessment', 'Goal discussion', 'Initial university suggestions', 'Next steps planning']
    },
    {
      icon: Calendar,
      title: 'Detailed Counseling Session',
      duration: '60 minutes',
      description: 'In-depth consultation covering all aspects of your study abroad journey.',
      features: ['Comprehensive planning', 'University shortlisting', 'Application strategy', 'Timeline creation']
    },
    {
      icon: Globe,
      title: 'Country-Specific Guidance',
      duration: '45 minutes',
      description: 'Focused consultation for specific destination countries and requirements.',
      features: ['Country requirements', 'Visa guidance', 'Cultural preparation', 'Cost planning']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-blue-400">Us</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to start your international education journey? Get in touch with our 
            expert counselors for personalized guidance and support.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <info.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                <p className="text-blue-300 font-medium mb-1">{info.info}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none"
                    placeholder="john.doe@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Interested Destination</label>
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:border-blue-400 focus:outline-none">
                    <option value="">Select a destination</option>
                    <option value="uk">United Kingdom</option>
                    <option value="us">United States</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="newzealand">New Zealand</option>
                    <option value="ireland">Ireland</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Study Level</label>
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:border-blue-400 focus:outline-none">
                    <option value="">Select study level</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="masters">Master&apos;s</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message *</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none resize-none"
                    placeholder="Tell us about your academic goals and how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Consultation Types */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Book a Consultation</h2>
              <div className="space-y-6">
                {consultationTypes.map((type) => (
                  <div
                    key={type.title}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-start gap-4">
                      <type.icon className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-white">{type.title}</h3>
                          <span className="text-blue-400 text-sm font-medium">{type.duration}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{type.description}</p>
                        <ul className="space-y-1 mb-4">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-400 text-xs flex items-center gap-2">
                              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Office Locations
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {office.city}, {office.country}
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                question: 'How long does the application process take?',
                answer: 'The typical application process takes 4-8 weeks, depending on the country and university. We recommend starting at least 6-12 months before your intended start date.'
              },
              {
                question: 'Do you charge for the initial consultation?',
                answer: 'No, we offer a free 30-minute initial consultation to understand your goals and assess how we can help you achieve them.'
              },
              {
                question: 'What is your visa success rate?',
                answer: 'We maintain a 97% visa success rate across all countries. Our experienced team ensures your application is complete and meets all requirements.'
              },
              {
                question: 'Can you help with scholarships?',
                answer: 'Yes, we have helped students secure over $5.4M in scholarships. We provide comprehensive guidance on finding and applying for various funding opportunities.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
