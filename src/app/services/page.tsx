'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, 
  FileText, 
  Users, 
  Globe, 
  Award, 
  BookOpen,
  PenTool,
  MessageSquare,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';

export default function ServicesPage() {
  const mainServices = [
    {
      id: 'university-applications',
      icon: GraduationCap,
      title: 'University Applications',
      description: 'Complete application assistance for undergraduate, postgraduate, and doctoral programs worldwide.',
      features: [
        'Profile evaluation and university shortlisting',
        'Application form completion and review',
        'Statement of Purpose (SOP) writing guidance',
        'Letters of Recommendation support',
        'Portfolio development for creative programs',
        'Interview preparation and mock sessions'
      ],
      pricing: 'Free for students'
    },
    {
      id: 'visa-assistance',
      icon: FileText,
      title: 'Visa Assistance',
      description: 'Expert guidance through the visa application process with a 97% success rate.',
      features: [
        'Visa category assessment and selection',
        'Document preparation and verification',
        'Application form completion',
        'Interview preparation and coaching',
        'Embassy appointment scheduling',
        'Post-visa arrival support'
      ],
      pricing: 'Free for students'
    },
    {
      id: 'test-preparation',
      icon: BookOpen,
      title: 'Test Preparation',
      description: 'Comprehensive preparation for standardized tests required for international admissions.',
      features: [
        'IELTS/TOEFL preparation',
        'GRE/GMAT coaching',
        'SAT/ACT preparation',
        'PTE coaching',
        'Mock tests and performance analysis',
        'One-on-one tutoring sessions'
      ],
      pricing: 'Free for students'
    },
    {
      id: 'document-support',
      icon: PenTool,
      title: 'Document Support',
      description: 'Professional assistance with all academic and personal documents.',
      features: [
        'Document authentication and attestation',
        'Translation services',
        'Academic transcript evaluation',
        'CV/Resume writing',
        'Cover letter preparation',
        'Academic writing support'
      ],
      pricing: 'Free for students'
    }
  ];

  const additionalServices = [
    {
      icon: Award,
      title: 'Scholarship Guidance',
      description: 'Maximize your funding opportunities with our scholarship search and application assistance.',
      highlights: ['$5.4M+ scholarships secured', 'Merit and need-based options', 'Application strategy']
    },
    {
      icon: Users,
      title: 'Career Counseling',
      description: 'Professional guidance to align your academic choices with career goals.',
      highlights: ['Industry insights', 'Job market analysis', 'Career pathway planning']
    },
    {
      icon: Globe,
      title: 'Pre-Departure Support',
      description: 'Complete preparation for your international education journey.',
      highlights: ['Accommodation assistance', 'Travel planning', 'Cultural orientation']
    },
    {
      icon: MessageSquare,
      title: 'Post-Arrival Support',
      description: 'Continued support even after you reach your destination country.',
      highlights: ['Local assistance', 'Emergency support', 'Academic guidance']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Free 30-minute consultation to understand your goals and assess your profile.',
      duration: '30 minutes',
      icon: MessageSquare
    },
    {
      step: 2,
      title: 'Profile Evaluation',
      description: 'Comprehensive analysis of your academic background and career objectives.',
      duration: '2-3 days',
      icon: Target
    },
    {
      step: 3,
      title: 'University Shortlisting',
      description: 'Curated list of universities matching your profile and preferences.',
      duration: '1 week',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Application Process',
      description: 'End-to-end application support with regular progress updates.',
      duration: '4-8 weeks',
      icon: FileText
    },
    {
      step: 5,
      title: 'Visa & Pre-Departure',
      description: 'Visa assistance and preparation for your international journey.',
      duration: '2-4 weeks',
      icon: Globe
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
            Our <span className="text-blue-400">Services</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive educational consultancy services designed to guide you through 
            every step of your international education journey.
          </motion.p>

          <motion.p
            className="text-lg text-blue-100 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Every consultation, application, and visa service we offer is completely free for students.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Core Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <h4 className="text-lg font-semibold text-white mb-3">What&apos;s Included:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/20">
                  <span className="text-blue-300 font-semibold">No service fees - {service.pricing}</span>
                  <Link href="/contact#contact-form" data-scroll-target="contact-form" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
                    Start Free Support
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Additional Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <service.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="space-y-1">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-blue-400 text-xs font-medium">
                      - {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Process
          </motion.h2>
          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex items-center gap-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <div className="flex items-center text-blue-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    Duration: {step.duration}
                  </div>
                </div>
                <step.icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our advisors reply within 24 hours; share your goals and we will tailor a free support plan.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact#contact-form" data-scroll-target="contact-form" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Start Free Support</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}




