'use client';

import { motion } from 'framer-motion';
import { Users, Award, Globe, Target, Heart, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '3,200+', label: 'Students Placed', icon: Users },
    { number: '97%', label: 'Visa Success Rate', icon: Award },
    { number: '150+', label: 'Partner Universities', icon: Globe },
    { number: '12', label: 'Years Experience', icon: Target }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Student-Centric Approach',
      description: 'Every decision we make is focused on what\'s best for our students\' academic and personal growth.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Excellence',
      description: 'We continuously evolve our services to provide cutting-edge guidance and support.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Our international experience helps students navigate diverse educational landscapes.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our track record speaks for itself - thousands of successful placements worldwide.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      education: 'PhD in Education, Harvard University',
      experience: '15+ years in international education',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Admissions',
      education: 'MBA, Stanford Graduate School of Business',
      experience: '12+ years in university admissions',
      image: '/team/michael.jpg'
    },
    {
      name: 'Priya Sharma',
      role: 'Visa & Immigration Specialist',
      education: 'LLM in Immigration Law, Oxford',
      experience: '10+ years in visa consultancy',
      image: '/team/priya.jpg'
    },
    {
      name: 'James Wilson',
      role: 'Scholarship Coordinator',
      education: 'MA in International Relations, Cambridge',
      experience: '8+ years in scholarship guidance',
      image: '/team/james.jpg'
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
            About <span className="text-blue-400">GlobalRise</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering students worldwide to achieve their academic dreams through expert guidance, 
            personalized support, and proven success strategies.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2012, GlobalRise began as a small consultancy with a big vision: 
                  to make world-class education accessible to students from all backgrounds. 
                  Our founder, Dr. Sarah Johnson, experienced firsthand the challenges of 
                  navigating international education systems as an international student.
                </p>
                <p>
                  Starting with just 5 students in our first year, we&apos;ve grown to serve over 
                  3,200 students across 45 countries. Our success stems from our unwavering 
                  commitment to personalized guidance and our deep understanding of what it 
                  takes to succeed in today&apos;s competitive academic landscape.
                </p>
                <p>
                  Today, GlobalRise is recognized as one of the leading educational consultancies, 
                  with partnerships at over 150 universities worldwide and a team of experts 
                  dedicated to turning academic dreams into reality.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To bridge the gap between ambitious students and world-class universities, 
                providing comprehensive support that transforms academic aspirations into 
                successful outcomes.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                A world where every student, regardless of their background, has access to 
                quality international education and the guidance needed to thrive in a 
                global academic environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-2">{member.education}</p>
                <p className="text-gray-400 text-xs">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
