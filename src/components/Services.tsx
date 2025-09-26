'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  Users, 
  TrendingUp, 
  Shield, 
  Lightbulb,
  CheckCircle,
  Clock,
  DollarSign,
  Star,
  ArrowRight,
  FileText,
  GraduationCap
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { framerVariants } from '@/lib/animations';

// Optional: support pausing Lenis if you use it
declare global {
  interface Window {
    __lenis?: { stop: () => void; start: () => void };
  }
}

const services = [
  {
    id: 'university-selection',
    title: 'University Selection & Application',
    description: 'Expert guidance in choosing the right university and course for your academic goals.',
    icon: GraduationCap,
    details: [
      'Personalized university recommendations',
      'Course selection based on career goals',
      'Application process assistance',
      'Document preparation and review',
    ],
    modalContent: {
      image: '/services/university-selection.jpg',
      fullDescription: 'Complete application assistance for undergraduate, postgraduate, and doctoral programs worldwide. Our expert counselors help you navigate the complex admission process with personalized guidance.',
      features: [
        'Profile evaluation and university shortlisting',
        'Application form completion and review',
        'Statement of Purpose (SOP) writing guidance',
        'Letters of Recommendation support',
        'Portfolio development for creative programs',
        'Interview preparation and mock sessions'
      ],
      stats: [
        { label: 'Success Rate', value: '95%', icon: TrendingUp },
        { label: 'Universities Partnered', value: '500+', icon: GraduationCap },
        { label: 'Applications Processed', value: '2,000+', icon: FileText },
        { label: 'Countries Covered', value: '15+', icon: Users }
      ],
  pricing: 'FREE for students',
      duration: '4-8 weeks',
      highlights: [
        'Personalized university matching',
        'End-to-end application support',
        'Expert document review',
        'Interview coaching included'
      ]
    }
  },
  {
    id: 'visa-assistance',
    title: 'Visa & Immigration Support',
    description: 'Comprehensive visa application support for international students.',
    icon: Shield,
    details: [
      'Visa application guidance',
      'Document verification',
      'Interview preparation',
      'Immigration compliance support',
    ],
    modalContent: {
      image: '/services/visa-assistance.jpg',
      fullDescription: 'Expert guidance through the visa application process with a 97% success rate. Our immigration specialists ensure your application is complete and compliant.',
      features: [
        'Visa category assessment and selection',
        'Document preparation and verification',
        'Application form completion',
        'Interview preparation and coaching',
        'Embassy appointment scheduling',
        'Post-visa arrival support'
      ],
      stats: [
        { label: 'Success Rate', value: '97%', icon: TrendingUp },
        { label: 'Visa Types Handled', value: '25+', icon: Shield },
        { label: 'Applications Filed', value: '1,500+', icon: FileText },
        { label: 'Embassy Partnerships', value: '12+', icon: Users }
      ],
  pricing: 'FREE for students',
      duration: '2-4 weeks',
      highlights: [
        'High success rate guaranteed',
        'Expert document verification',
        'Embassy interview coaching',
        'Post-arrival support included'
      ]
    }
  },
  {
    id: 'accommodation',
    title: 'Accommodation & Settlement',
    description: 'Help finding safe and affordable accommodation in your study destination.',
    icon: Users,
    details: [
      'On-campus and off-campus housing',
      'Homestay and shared accommodation',
      'Settlement guidance',
      'Local area orientation',
    ],
    modalContent: {
      image: '/services/accommodation.jpg',
      fullDescription: 'Complete accommodation and settlement support to ensure a smooth transition to your new study destination. We help you find safe, affordable, and convenient housing options.',
      features: [
        'Pre-arrival accommodation booking',
        'On-campus housing applications',
        'Off-campus rental assistance',
        'Homestay and shared accommodation',
        'Settlement guidance and orientation',
        'Local area familiarization'
      ],
      stats: [
        { label: 'Accommodations Arranged', value: '800+', icon: Users },
        { label: 'Partner Properties', value: '200+', icon: Shield },
        { label: 'Cities Covered', value: '50+', icon: TrendingUp },
        { label: 'Student Satisfaction', value: '98%', icon: Star }
      ],
  pricing: 'FREE for students',
      duration: '1-2 weeks',
      highlights: [
        'Pre-verified safe accommodations',
        'Budget-friendly options',
        'Local area orientation',
        'Ongoing settlement support'
      ]
    }
  },
  {
    id: 'scholarships',
    title: 'Scholarships & Financial Aid',
    description: 'Maximize your chances of securing scholarships and financial support.',
    icon: Lightbulb,
    details: [
      'Scholarship application assistance',
      'Financial planning',
      'Education loan guidance',
    ],
    modalContent: {
      image: '/services/scholarships.jpg',
      fullDescription: 'Maximize your funding opportunities with our comprehensive scholarship search and application assistance. We help you secure merit-based and need-based funding.',
      features: [
        'Scholarship database access',
        'Application strategy development',
        'Essay and SOP writing for scholarships',
        'Financial planning and budgeting',
        'Education loan guidance',
        'Grant application assistance'
      ],
      stats: [
        { label: 'Scholarships Secured', value: '$5.4M+', icon: DollarSign },
        { label: 'Success Rate', value: '78%', icon: TrendingUp },
        { label: 'Scholarship Programs', value: '300+', icon: Lightbulb },
        { label: 'Students Helped', value: '1,200+', icon: Users }
      ],
  pricing: 'FREE for students',
      duration: '2-6 weeks',
      highlights: [
        'Access to exclusive scholarships',
        'Personalized funding strategy',
        'Application writing support',
        'Financial planning included'
      ]
    }
  },
];

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [hoveredAccordion, setHoveredAccordion] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: (typeof services)[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };
  const scrollToContactForm = () => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const contactSection = document.getElementById('contact-form-section');

    if (contactSection) {
      const headerOffset = 96;
      const targetTop = contactSection.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: targetTop, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    } else {
      window.location.href = '/contact#contact-form';
    }
  };

  const handleGetStarted = () => {
    closeModal();
    setTimeout(scrollToContactForm, 300);
  };


  // Handle modal close with useEffect and Lenis integration
  useEffect(() => {
    const lock = !!isModalOpen;
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;

    document.documentElement.style.overflow = lock ? 'hidden' : prevHtml || '';
    document.body.style.overflow = lock ? 'hidden' : prevBody || '';

    try {
      if (window.__lenis) {
        if (lock) {
          window.__lenis.stop();
        } else {
          window.__lenis.start();
        }
      }
    } catch {
      // Lenis not available, continue without it
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Restore scroll when component unmounts or modal closes
      document.documentElement.style.overflow = prevHtml || '';
      document.body.style.overflow = prevBody || '';
      
      try {
        if (window.__lenis) {
          window.__lenis.start();
        }
      } catch {
        // Lenis not available, continue without it
      }
    };
  }, [isModalOpen]);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          {...framerVariants.fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive educational consultancy services to guide you through your international study journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setExpandedCard(service.id)}
                onHoverEnd={() => setExpandedCard(null)}
                onClick={() => openModal(service)}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ rotate: expandedCard === service.id ? 360 : 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <motion.div
                    animate={{ height: expandedCard === service.id ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden w-full"
                  >
                    <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1 mb-4">
                      {service.details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="flex items-center">
                          <ChevronDown className="w-3 h-3 mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          {...framerVariants.fadeIn}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Detailed Service Breakdown
          </h3>

          <Accordion type="single" collapsible className="w-full">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <AccordionItem key={service.id} value={service.id}>
                  <AccordionTrigger 
                    className="text-left"
                    onMouseEnter={() => setHoveredAccordion(service.id)}
                    onMouseLeave={() => setHoveredAccordion(null)}
                  >
                    <div className="flex items-center">
                      <motion.div
                        animate={{ rotate: hoveredAccordion === service.id ? 360 : 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <Icon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <div>
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {service.description}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 ml-9">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={(open) => {
          if (!open) closeModal();
        }}>
          <DialogContent className="!max-w-none !w-auto !h-auto p-0 !bg-white dark:!bg-gray-900 shadow-2xl">
            {selectedService && (
              <div
                className="w-[750px] max-w-[750px] max-h-[90vh] overflow-y-auto overscroll-contain touch-pan-y"
                style={{ width: '750px', maxWidth: '750px', scrollBehavior: 'smooth' }}
                onWheelCapture={(e) => e.stopPropagation()}
                onScrollCapture={(e) => e.stopPropagation()}
                onTouchMoveCapture={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-end justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                          <selectedService.icon className="w-16 h-16 text-white" />
                        </div>
                        <div>
                          <DialogTitle className="text-4xl font-bold text-white mb-2">{selectedService.title}</DialogTitle>
                          <DialogDescription className="text-white/90 text-lg">{selectedService.modalContent.fullDescription}</DialogDescription>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                        <div className="flex items-center text-white">
                          <Star className="w-6 h-6 text-yellow-400 mr-2 fill-current" />
                          <span className="text-xl font-bold">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-gray-50 dark:bg-gray-800 border-b">
                    {selectedService.modalContent.stats.map((stat, index) => (
                      <motion.div 
                        key={stat.label}
                        className="text-center" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      Key Highlights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedService.modalContent.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      What&apos;s Included
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedService.modalContent.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Duration */}
                  <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
                        <div className="flex items-center gap-2 mb-3">
                          <DollarSign className="w-6 h-6 text-green-500" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Pricing</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          All our services are <span className="text-green-600 font-bold">FREE for students</span>.
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="w-6 h-6 text-blue-500" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Duration</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {selectedService.modalContent.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-8 bg-gray-50 dark:bg-gray-800">
                    <div className="flex justify-center">
                      <motion.button
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleGetStarted}
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

