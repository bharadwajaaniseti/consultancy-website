'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star, GraduationCap, Briefcase, DollarSign, Calendar, CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { framerVariants } from '@/lib/animations';

/* ===== Optional: support pausing Lenis if you use it ===== */
declare global {
  interface Window {
    __lenis?: { stop: () => void; start: () => void };
  }
}

/* ===== DATA ===== */
const destinations = [
  {
    id: 'uk',
    name: 'United Kingdom',
    country: 'UK',
    flag: 'UK',
    flagImage: 'https://flagcdn.com/w320/gb.png',
    countryImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&crop=center',
    description: 'World-class universities with rich history and diverse culture.',
    shortDesc: "4 of the World's Top 10 Universities",
    services: ['Top-tier Universities', 'Post-Study Work Visa', 'Cultural Integration'],
    rating: 4.9,
    projects: 500,
    timezone: 'GMT',
    details: {
      headline: 'Discover a world-class education in the UK',
      highlights: [
        "4 of the World's Top 10 Universities",
        '50,000+ Courses available',
        'Globally Renowned Research',
        'Shorter Degrees (3 years UG, 1 year PG)',
      ],
      whyStudy: [
        "World-renowned universities: 4 of the top 10 universities globally (QS 2025)",
        "Diverse courses: Over 50,000 options in more than 25 subject areas",
        "Quality education: 82% of research rated 'world-leading' or 'internationally excellent'",
        'Shorter degrees: Save time and costs',
        'Part-time work opportunities during study: Up to 20 hours/week',
      ],
      topCourses: [
        'Business Management',
        'Engineering and Technology',
        'Medicine',
        'Law',
        'Social Sciences',
        'Media and Communication',
      ],
      latestUpdate:
        'The UK government\'s new policies aim to improve and clarify your experience. Education Secretary has stated that international students are truly "valued guests," with simplified visa processes.',
      workRights:
        'Graduate Route visa allows international students to stay and work for 2 years after graduation (3 years for PhD graduates)',
    },
  },
  {
    id: 'usa',
    name: 'United States',
    country: 'USA',
    flag: 'USA',
    flagImage: 'https://flagcdn.com/w320/us.png',
    countryImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop&crop=center',
    description: 'Leading research institutions and innovation hubs across America.',
    shortDesc: 'Home to Ivy League Universities',
    services: ['STEM Excellence', 'Sports Scholarships', 'OPT Opportunities'],
    rating: 4.8,
    projects: 450,
    timezone: 'EST/PST',
    details: {
      headline: 'Unlock limitless opportunities in the USA',
      highlights: ['Home to Ivy League Universities', 'Cutting-edge Research', 'Unparalleled Innovation', 'Global Career Prospects'],
      whyStudy: [
        "World's largest number of top-ranked universities and colleges",
        'Flexible education system with hundreds of major/minor combinations',
        'Excellent research and internship opportunities',
        'Global career prospects and Optional Practical Training (OPT) extensions for STEM fields',
        'Diverse campus life and cultural exposure',
      ],
      topCourses: ['Computer Science and IT', 'Business and Management', 'Engineering', 'Health Sciences', 'Data Science and AI', 'Economics and Finance'],
      latestUpdate:
        'The U.S. has announced streamlined visa processes for Indian students, aiming for faster turnaround times. Universities are boosting scholarships for international students.',
      workRights: 'OPT allows 12 months of work authorization, with 24-month extension for STEM graduates (total 36 months)',
    },
  },
  {
    id: 'australia',
    name: 'Australia',
    country: 'Australia',
    flag: 'Australia',
    flagImage: 'https://flagcdn.com/w320/au.png',
    countryImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
    description: 'High-quality education with excellent post-study work rights.',
    shortDesc: '7 of Top 100 World Universities',
    services: ['Work While Studying', 'PR Pathways', 'Research Opportunities'],
    rating: 4.9,
    projects: 400,
    timezone: 'AEST',
    details: {
      headline: 'World-Class Education, Stunning Landscapes',
      highlights: [
        "7 of the world's top 100 universities",
        'Post-study work visas up to 4 years',
        'Safe, multicultural environment',
        'High standard of living',
      ],
      whyStudy: [
        "7 of the world's top 100 universities",
        'Globally recognised degrees and courses',
        'Post-study work visas of up to 4 years for international graduates',
        'Safe, multicultural, and welcoming environment',
        'High standard of living with affordable living costs compared to other Western countries',
      ],
      topCourses: ['Engineering and Technology', 'Business and Management', 'Medicine and Health Sciences', 'Environmental Science', 'Data Science and Cybersecurity', 'Agricultural Sciences'],
      latestUpdate:
        'Australia has introduced new scholarship programs and extended post-study work rights in regional areas, providing broader career opportunities.',
      workRights: 'Temporary Graduate visa (subclass 485) allows 2-4 years of work rights depending on qualification and location',
    },
  },
  {
    id: 'germany',
    name: 'Germany',
    country: 'Germany',
    flag: 'Germany',
    flagImage: 'https://flagcdn.com/w320/de.png',
    countryImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop&crop=center',
    description: 'Tuition-free or low-cost education with strong engineering focus.',
    shortDesc: 'Tuition-Free Education Available',
    services: ['Tuition-Free Education', 'Job Seeker Visa', 'Industry Connections'],
    rating: 4.7,
    projects: 350,
    timezone: 'CET',
    details: {
      headline: 'Excellence in Education, Innovation, and Research',
      highlights: [
        'Many universities offer tuition-free education',
        'Global leader in Engineering & Technology',
        'Strong economy with excellent career prospects',
        "Access to Europe's vast job market",
      ],
      whyStudy: [
        'Many universities offer tuition-free education for international students',
        'Germany is the global leader in Engineering, Technology, and Research',
        'Strong economy with excellent career prospects after graduation',
        'Courses taught in English across various disciplines',
        "Access to Europe's vast job market post-graduation (EU Blue Card opportunities)",
      ],
      topCourses: ['Engineering (Mechanical, Automotive, Electrical, Civil)', 'Computer Science and IT', 'Natural Sciences', 'Business and Management', 'Medicine and Healthcare', 'Renewable Energy and Environmental Science'],
      latestUpdate:
        'Germany has simplified student visa procedures with faster processing times and is encouraging STEM enrolments through new scholarship programs.',
      workRights:
        '18 months job seeker visa after graduation, with opportunity to convert to EU Blue Card for long-term residence',
    },
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    country: 'New Zealand',
    flag: 'New Zealand',
    flagImage: 'https://flagcdn.com/w320/nz.png',
    countryImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center',
    description: 'Safe environment with quality education and stunning landscapes.',
    shortDesc: 'Quality Education in Breathtaking Setting',
    services: ['Post-Study Work Rights', 'Safe Environment', 'Adventure Lifestyle'],
    rating: 4.8,
    projects: 300,
    timezone: 'NZST',
    details: {
      headline: 'Quality Education in a Breathtaking Setting',
      highlights: [
        "Universities consistently rank among world's best",
        'Post-Study Work Visa up to 3 years',
        'Safe, welcoming, multicultural society',
        'Perfect blend of academics and adventure',
      ],
      whyStudy: [
        "Universities consistently rank among the world's best",
        'Globally recognized qualifications and flexible study options',
        'Affordable education with a high standard of living',
        'Work rights during and after study (Post-Study Work Visa up to 3 years)',
        'Safe, welcoming, and multicultural society',
      ],
      topCourses: ['Information Technology and Computer Science', 'Environmental Science', 'Engineering (Civil, Mechanical, Electrical)', 'Hospitality and Tourism Management', 'Agriculture and Forestry', 'Healthcare and Nursing'],
      latestUpdate:
        'New Zealand has streamlined student visa processing and expanded post-study work rights, particularly in healthcare, engineering, and IT sectors.',
      workRights: 'Post-Study Work Visa allows up to 3 years of work rights, with pathways to permanent residence',
    },
  },
  {
    id: 'ireland',
    name: 'Ireland',
    country: 'Ireland',
    flag: 'Ireland',
    flagImage: 'https://flagcdn.com/w320/ie.png',
    countryImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop&crop=center',
    description: 'English-speaking country with growing tech and business sectors.',
    shortDesc: 'Gateway to Europe with English Education',
    services: ['Critical Skills Employment Permit', 'EU Access', 'Research Funding'],
    rating: 4.6,
    projects: 250,
    timezone: 'IST',
    details: {
      headline: 'Innovation, Culture, and Academic Excellence',
      highlights: [
        'English-speaking country in the EU',
        'Home to multinational corporations',
        'Rich literary and cultural history',
        '1-2 years post-study work visa',
      ],
      whyStudy: [
        'Renowned Universities with top-ranked programs',
        'English-Speaking Country: One of the few English-speaking countries in the EU',
        'Vibrant Culture: Rich literary history, music, and arts',
        'Post-Study Work Opportunities: 1-2 years of post-study work visa options',
        'Global Industry Connections: Home to many multinational corporations in tech, pharma, and finance',
      ],
      topCourses: ['Data Science and Artificial Intelligence', 'Pharmaceutical Sciences', 'Business and Management', 'Computer Science and IT', 'Engineering'],
      latestUpdate:
        'Ireland continues to attract international students with improved visa processes and strong industry partnerships, especially in technology and pharmaceuticals.',
      workRights:
        'Stay Back Option of 1-2 years depending on qualification level, with pathway to Critical Skills Employment Permit',
    },
  },
];

const guideDownloadUrl = '/downloads/globalrise-study-guide.pdf';

/* ===== COMPONENT ===== */
export default function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [modalDestination, setModalDestination] = useState<typeof destinations[0] | null>(null);

  /* ---- Lock page scroll while modal is open (and pause Lenis if present) ---- */
  useEffect(() => {
    const lock = !!modalDestination;

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
      /* noop */
    }

    return () => {
      document.documentElement.style.overflow = prevHtml || '';
      document.body.style.overflow = prevBody || '';
      try {
        window.__lenis?.start();
      } catch {
        /* noop */
      }
    };
  }, [modalDestination]);

  const openModal = (destination: typeof destinations[0]) => setModalDestination(destination);
  const closeModal = () => setModalDestination(null);

  // Function to scroll to ContactForm section
  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle support button click
  const handleSupportClick = () => {
    closeModal();
    // Delay scroll to allow modal to close first
    setTimeout(() => {
      scrollToContactForm();
    }, 300);
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...framerVariants.fadeIn}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Study Destinations</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore world-class education opportunities in top global destinations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
              onClick={() => openModal(destination)}
              onHoverStart={() => setSelectedDestination(destination.id)}
              onHoverEnd={() => setSelectedDestination(null)}
            >
              {/* Country Image Header */}
              <div className="relative h-48 overflow-hidden">
                {/* Background Country Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${destination.countryImage})` }}
                  animate={{ scale: selectedDestination === destination.id ? 1.1 : 1, opacity: selectedDestination === destination.id ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Flag Background - appears on hover */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${destination.flagImage})` }}
                  animate={{ opacity: selectedDestination === destination.id ? 0.9 : 0, scale: selectedDestination === destination.id ? 1 : 0.8 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Small Flag Button - top right corner */}
                <motion.div
                  className="absolute top-4 right-4 z-10"
                  animate={{ scale: selectedDestination === destination.id ? 0 : 1, opacity: selectedDestination === destination.id ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/95 dark:bg-gray-800/95 rounded-full p-2 shadow-lg overflow-hidden">
                    <img src={destination.flagImage} alt={`${destination.name} flag`} className="w-6 h-4 object-cover rounded-sm" />
                  </div>
                </motion.div>

                {/* Country Code (always visible) */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-white/95 dark:bg-gray-800/95 rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-medium text-gray-800 dark:text-white">{destination.country}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="flex items-center bg-white/95 dark:bg-gray-800/95 rounded-full px-3 py-2 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                    <span className="text-sm font-bold text-gray-800 dark:text-white">{destination.rating}</span>
                  </div>
                </div>

                {/* Short Description - only shows when NOT hovering */}
                <motion.div
                  className="absolute bottom-4 right-4 left-20 z-10"
                  animate={{ opacity: selectedDestination === destination.id ? 0 : 1, y: selectedDestination === destination.id ? 20 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-gray-800 dark:text-white text-sm font-medium">{destination.shortDesc}</p>
                  </div>
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {destination.name}
                  </h3>
                  <motion.div animate={{ rotate: selectedDestination === destination.id ? 360 : 0 }} transition={{ duration: 0.6 }}>
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{destination.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{destination.timezone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users className="w-4 h-4 mr-2 text-green-500" />
                    <span>{destination.projects} students</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.services.slice(0, 2).map((service, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                    <span className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                      +{destination.services.length - 2} more
                    </span>
                  </div>
                </div>

                <motion.button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={destination.flagImage} alt={`${destination.name} flag`} className="w-5 h-3 object-cover rounded-sm mr-2" />
                  <span>Explore Details</span>
                  <motion.div className="ml-2" animate={{ x: selectedDestination === destination.id ? 5 : 0 }} transition={{ duration: 0.3 }}>
                    <Briefcase className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 text-center" {...framerVariants.fadeIn}>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Not sure which destination is right for you? Our expert counselors can help you choose based on your academic goals and preferences.
          </p>
          <motion.button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get Free Counseling
          </motion.button>
        </motion.div>

        {/* ===== Modal (scroll is contained) ===== */}
        <Dialog open={!!modalDestination} onOpenChange={(open) => (!open ? closeModal() : null)}>
          <DialogContent className="!max-w-none !w-auto !h-auto p-0 !bg-white dark:!bg-gray-900 shadow-2xl">
            {modalDestination && (
              <div
                className="w-[750px] max-w-[750px] max-h-[90vh] overflow-y-auto overscroll-contain touch-pan-y"
                style={{ width: '750px', maxWidth: '750px', scrollBehavior: 'smooth' }}
                /* Stop scroll/touch/wheel from reaching the page (capture phase!) */
                onWheelCapture={(e) => e.stopPropagation()}
                onScrollCapture={(e) => e.stopPropagation()}
                onTouchMoveCapture={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${modalDestination.countryImage})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-end justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                          <img src={modalDestination.flagImage} alt={`${modalDestination.name} flag`} className="w-16 h-10 object-cover rounded-lg shadow-lg" />
                        </div>
                        <div>
                          <DialogTitle className="text-4xl font-bold text-white mb-2">{modalDestination.name}</DialogTitle>
                          <DialogDescription className="text-white/90 text-lg">{modalDestination.details.headline}</DialogDescription>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                        <div className="flex items-center text-white">
                          <Star className="w-6 h-6 text-yellow-400 mr-2 fill-current" />
                          <span className="text-xl font-bold">{modalDestination.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-gray-50 dark:bg-gray-800 border-b">
                    <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                      <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{modalDestination.projects}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Students Placed</div>
                    </motion.div>

                    <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                      <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{modalDestination.timezone}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Time Zone</div>
                    </motion.div>

                    <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                      <GraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{modalDestination.details.topCourses.length}+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Top Courses</div>
                    </motion.div>

                    <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
                      <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{modalDestination.rating}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Rating</div>
                    </motion.div>
                  </div>

                  <div className="p-8 space-y-12">
                    {/* Key Highlights */}
                    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        Key Highlights
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {modalDestination.details.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.section>

                    {/* Why Study Here */}
                    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                          <GraduationCap className="w-5 h-5 text-blue-600" />
                        </div>
                        Why Study in {modalDestination.name}?
                      </h3>
                      <div className="space-y-4">
                        {modalDestination.details.whyStudy.map((reason, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                          >
                            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-white text-xs font-bold">{idx + 1}</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{reason}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.section>

                    {/* Two Column Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Top Courses */}
                      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                            <Briefcase className="w-5 h-5 text-purple-600" />
                          </div>
                          Top Courses
                        </h3>
                        <div className="space-y-3">
                          {modalDestination.details.topCourses.map((course, idx) => (
                            <motion.div
                              key={idx}
                              className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                            >
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{course}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.section>

                      {/* Work Rights */}
                      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                            <DollarSign className="w-5 h-5 text-green-600" />
                          </div>
                          Work Rights & Opportunities
                        </h3>
                        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{modalDestination.details.workRights}</p>
                        </div>
                      </motion.section>
                    </div>

                    {/* Latest Update */}
                    <motion.section
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8"
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        Latest Update
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{modalDestination.details.latestUpdate}</p>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-2 00 dark:border-gray-700"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      <motion.button
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSupportClick}
                      >
                        <img src={modalDestination.flagImage} alt={`${modalDestination.name} flag`} className="w-6 h-4 object-cover rounded-sm mr-3" />
                        Start Free Support
                      </motion.button>
                      <motion.a
                        className="flex-1 border-2 border-blue-600 text-blue-600 dark:text-blue-400 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={guideDownloadUrl}
                        download
                      >
                        <Briefcase className="w-5 h-5 mr-3" />
                        Download Guide
                      </motion.a>
                    </motion.div>
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



