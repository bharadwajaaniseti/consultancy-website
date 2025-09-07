'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  DollarSign,
  Clock,
  Globe,
  Award,
  Building,
  Star,
  CheckCircle,
  Briefcase,
  Calendar
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

// Optional: support pausing Lenis if you use it
declare global {
  interface Window {
    __lenis?: { stop: () => void; start: () => void };
  }
}

export default function DestinationsPage() {
  const [modalDestination, setModalDestination] = useState<typeof destinations[0] | null>(null);

  // Lock page scroll while modal is open
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

  // Handle consultation button click
  const handleConsultationClick = () => {
    closeModal();
    // Delay scroll to allow modal to close first
    setTimeout(() => {
      scrollToContactForm();
    }, 300);
  };

  const destinations = [
    {
      id: 'uk',
      country: 'United Kingdom',
      name: 'United Kingdom',
      flag: '🇬🇧',
      flagImage: 'https://flagcdn.com/w320/gb.png',
      countryImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&crop=center',
      capital: 'London',
      universities: 150,
      students: 650,
      avgCost: '$25,000 - $40,000',
      duration: '3-4 years',
      rating: 4.9,
      projects: 650,
      timezone: 'GMT',
      popularCourses: ['Business', 'Engineering', 'Medicine', 'Arts'],
      highlights: [
        'Home to world-renowned universities like Oxford and Cambridge',
        'Rich cultural heritage and history',
        'Post-study work visa opportunities',
        'Gateway to Europe'
      ],
      requirements: {
        academic: '70%+ in previous qualification',
        english: 'IELTS 6.0-7.0 or equivalent',
        tests: 'GMAT/GRE for some programs'
      },
      topUniversities: [
        'University of Oxford',
        'University of Cambridge', 
        'Imperial College London',
        'London School of Economics',
        'University College London'
      ],
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
      country: 'United States',
      name: 'United States',
      flag: '🇺🇸',
      flagImage: 'https://flagcdn.com/w320/us.png',
      countryImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop&crop=center',
      capital: 'Washington D.C.',
      universities: 200,
      students: 850,
      avgCost: '$30,000 - $60,000',
      duration: '4 years',
      rating: 4.8,
      projects: 850,
      timezone: 'EST/PST',
      popularCourses: ['Computer Science', 'Business', 'Engineering', 'Medicine'],
      highlights: [
        'World\'s leading education system',
        'Diverse range of programs and specializations',
        'Excellent research opportunities',
        'Strong industry connections'
      ],
      requirements: {
        academic: '75%+ in previous qualification',
        english: 'TOEFL 80+ or IELTS 6.5+',
        tests: 'SAT/ACT for undergrad, GRE/GMAT for grad'
      },
      topUniversities: [
        'Harvard University',
        'Stanford University',
        'Massachusetts Institute of Technology',
        'University of California, Berkeley',
        'Yale University'
      ],
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
      country: 'Australia',
      name: 'Australia',
      flag: '🇦🇺',
      flagImage: 'https://flagcdn.com/w320/au.png',
      countryImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
      capital: 'Canberra',
      universities: 120,
      students: 420,
      avgCost: '$20,000 - $35,000',
      duration: '3-4 years',
      rating: 4.7,
      projects: 420,
      timezone: 'AEST',
      popularCourses: ['Engineering', 'Business', 'Healthcare', 'IT'],
      highlights: [
        'High quality of life and safety',
        'Multicultural and welcoming society',
        'Strong job market for graduates',
        'Beautiful natural landscapes'
      ],
      requirements: {
        academic: '65%+ in previous qualification',
        english: 'IELTS 6.0-7.0 or equivalent',
        tests: 'GRE/GMAT for some programs'
      },
      topUniversities: [
        'University of Melbourne',
        'Australian National University',
        'University of Sydney',
        'University of Queensland',
        'Monash University'
      ],
      details: {
        headline: 'Experience world-class education in Australia',
        highlights: ['High Quality of Life', 'Post-Study Work Rights', 'Multicultural Environment', 'Research Excellence'],
        whyStudy: [
          'High-quality education system with global recognition',
          'Multicultural society with welcoming attitude towards international students',
          'Post-study work visa opportunities (2-4 years depending on qualification)',
          'Strong job market and career opportunities',
          'Beautiful natural environment and high quality of life',
        ],
        topCourses: ['Engineering and Technology', 'Business and Management', 'Health Sciences', 'Computer Science and IT', 'Environmental Science'],
        latestUpdate:
          'Australia continues to welcome international students with extended post-study work rights and simplified visa processes for eligible programs.',
        workRights: 'Post-Study Work Visa allows 2-4 years of work authorization depending on qualification level and location of study',
      },
    },
    {
      id: 'germany',
      country: 'Germany',
      name: 'Germany',
      flag: '🇩🇪',
      flagImage: 'https://flagcdn.com/w320/de.png',
      countryImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop&crop=center',
      capital: 'Berlin',
      universities: 80,
      students: 180,
      avgCost: '$0 - $15,000',
      duration: '3-4 years',
      rating: 4.6,
      projects: 180,
      timezone: 'CET',
      popularCourses: ['Engineering', 'Computer Science', 'Business', 'Research'],
      highlights: [
        'Low or no tuition fees at public universities',
        'Strong engineering and technology programs',
        'Central location in Europe',
        'Excellent research opportunities'
      ],
      requirements: {
        academic: '70%+ in previous qualification',
        english: 'IELTS 6.0+ or TOEFL 80+',
        tests: 'GRE for some programs, German proficiency for some courses'
      },
      topUniversities: [
        'Technical University of Munich',
        'University of Heidelberg',
        'Humboldt University of Berlin',
        'RWTH Aachen University',
        'University of Freiburg'
      ],
      details: {
        headline: 'Excellence in engineering and research in Germany',
        highlights: ['No Tuition Fees', 'Engineering Excellence', 'Research Opportunities', 'EU Access'],
        whyStudy: [
          'Low or no tuition fees at public universities',
          'World-renowned engineering and technology programs',
          'Strong emphasis on research and innovation',
          'Central location providing access to all of Europe',
          'Strong industry connections and job opportunities',
        ],
        topCourses: ['Engineering and Technology', 'Computer Science', 'Business Administration', 'Natural Sciences', 'Medicine'],
        latestUpdate:
          'Germany continues to attract international students with its quality education system and has introduced new initiatives to support international graduates in finding employment.',
        workRights: '18 months post-study job search visa, with pathway to EU Blue Card for qualified graduates',
      },
    },
    {
      id: 'newzealand',
      country: 'New Zealand',
      name: 'New Zealand',
      flag: '🇳🇿',
      flagImage: 'https://flagcdn.com/w320/nz.png',
      countryImage: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&h=600&fit=crop&crop=center',
      capital: 'Wellington',
      universities: 25,
      students: 95,
      avgCost: '$18,000 - $30,000',
      duration: '3-4 years',
      rating: 4.6,
      projects: 95,
      timezone: 'NZST',
      popularCourses: ['Agriculture', 'Tourism', 'Engineering', 'Business'],
      highlights: [
        'Stunning natural beauty and outdoor lifestyle',
        'Safe and peaceful environment',
        'Innovative education system',
        'Post-study work opportunities'
      ],
      requirements: {
        academic: '65%+ in previous qualification',
        english: 'IELTS 6.0-6.5 or equivalent',
        tests: 'GRE/GMAT for some programs'
      },
      topUniversities: [
        'University of Auckland',
        'University of Otago',
        'Victoria University of Wellington',
        'University of Canterbury',
        'Massey University'
      ],
      details: {
        headline: 'Discover innovation and natural beauty in New Zealand',
        highlights: ['Natural Beauty', 'Safe Environment', 'Quality Education', 'Work Opportunities'],
        whyStudy: [
          'High-quality education system with innovative teaching methods',
          'Safe and peaceful environment with friendly locals',
          'Stunning natural beauty and outdoor recreational opportunities',
          'Post-study work visa opportunities',
          'Pathway to permanent residency',
        ],
        topCourses: ['Agriculture and Environmental Science', 'Tourism and Hospitality', 'Engineering', 'Business and Management', 'Health Sciences'],
        latestUpdate:
          'New Zealand continues to welcome international students with supportive policies and post-study work opportunities in a safe environment.',
        workRights: 'Post-Study Work Visa allows up to 3 years of work authorization depending on qualification level',
      },
    },
    {
      id: 'ireland',
      country: 'Ireland',
      name: 'Ireland',
      flag: '🇮🇪',
      flagImage: 'https://flagcdn.com/w320/ie.png',
      countryImage: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop&crop=center',
      capital: 'Dublin',
      universities: 35,
      students: 65,
      avgCost: '$12,000 - $25,000',
      duration: '3-4 years',
      rating: 4.6,
      projects: 65,
      timezone: 'IST',
      popularCourses: ['Technology', 'Business', 'Pharmacy', 'Arts'],
      highlights: [
        'English-speaking country with rich culture',
        'Growing tech hub (European Silicon Valley)',
        'EU membership benefits',
        'Friendly and welcoming people'
      ],
      requirements: {
        academic: '65%+ in previous qualification',
        english: 'IELTS 6.0-6.5 or equivalent',
        tests: 'GRE/GMAT for some programs'
      },
      topUniversities: [
        'Trinity College Dublin',
        'University College Dublin',
        'National University of Ireland Galway',
        'University College Cork',
        'Dublin City University'
      ],
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

  const stats = [
    { icon: Users, number: '3,200+', label: 'Students Placed' },
    { icon: Globe, number: '6', label: 'Countries' },
    { icon: Building, number: '500+', label: 'University Partners' },
    { icon: Award, number: '97%', label: 'Visa Success Rate' }
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
            Study <span className="text-blue-400">Destinations</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore world-class education opportunities across our partner countries. 
            Find the perfect destination for your academic journey.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.country}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600/50 to-purple-600/50 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{destination.flag}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{destination.country}</h2>
                        <p className="text-blue-200">Capital: {destination.capital}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{destination.students}</div>
                      <div className="text-blue-200 text-sm">Students Placed</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Quick Facts */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Building className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">Universities: {destination.universities}+</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <DollarSign className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Annual Cost: {destination.avgCost}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-yellow-400" />
                          <span className="text-gray-300">Duration: {destination.duration}</span>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-white mt-6 mb-3">Popular Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.popularCourses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights & Requirements */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Why Choose {destination.country}?</h3>
                      <ul className="space-y-2 mb-6">
                        {destination.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <Award className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-lg font-semibold text-white mb-3">Entry Requirements</h4>
                      <div className="space-y-2 text-sm">
                        <div className="text-gray-300">
                          <span className="font-medium text-white">Academic:</span> {destination.requirements.academic}
                        </div>
                        <div className="text-gray-300">
                          <span className="font-medium text-white">English:</span> {destination.requirements.english}
                        </div>
                        <div className="text-gray-300">
                          <span className="font-medium text-white">Tests:</span> {destination.requirements.tests}
                        </div>
                      </div>
                    </div>

                    {/* Top Universities */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Top Universities</h3>
                      <div className="space-y-2">
                        {destination.topUniversities.map((university, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 bg-white/5 rounded-lg"
                          >
                            <GraduationCap className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300 text-sm">{university}</span>
                          </div>
                        ))}
                      </div>

                      <button 
                        className="mt-4 w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        onClick={() => openModal(destination)}
                      >
                        Explore {destination.country}
                      </button>
                    </div>
                  </div>
                </div>
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
            Can&apos;t Decide Which Destination is Right for You?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our expert counselors will help you choose the perfect destination based on your 
            academic goals, budget, and career aspirations.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get Personalized Guidance
          </motion.button>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!modalDestination} onOpenChange={(open) => (!open ? closeModal() : null)}>
        <DialogContent className="!max-w-none !w-auto !h-auto p-0 !bg-white dark:!bg-gray-900 shadow-2xl">
          {modalDestination && (
            <div
              className="w-[750px] max-w-[750px] max-h-[90vh] overflow-y-auto overscroll-contain touch-pan-y"
              style={{ width: '750px', maxWidth: '750px', scrollBehavior: 'smooth' }}
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
                    className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <motion.button
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleConsultationClick}
                    >
                      <img src={modalDestination.flagImage} alt={`${modalDestination.name} flag`} className="w-6 h-4 object-cover rounded-sm mr-3" />
                      Get Free Consultation
                    </motion.button>
                    <motion.button
                      className="flex-1 border-2 border-blue-600 text-blue-600 dark:text-blue-400 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Briefcase className="w-5 h-5 mr-3" />
                      Download Guide
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
