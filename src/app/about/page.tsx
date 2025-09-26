'use client';

import { motion } from 'framer-motion';
import { Users, Award, Globe, Target, Heart, Lightbulb } from 'lucide-react';

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
    description: 'Every recommendation starts with understanding your goals and circumstances.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Excellence',
    description: 'We refine our processes continually so guidance stays current and actionable.'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Counsellors with international experience help you navigate regional nuances.'
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Thousands of successful applications and scholarships with zero consultancy fees.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4">
      <section id="success-stories" className="max-w-6xl mx-auto mb-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Students Trust GlobalRise</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            For more than a decade we have helped students secure places at leading universities without charging any consultancy fees. Our success stories are rooted in personalised mentoring and transparent communication.
          </p>
        </motion.div>

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
      </section>

      <section id="partners" className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our University Network</h2>
            <p className="text-gray-300 mb-4">
              We collaborate with more than 150 universities across the United Kingdom, United States, Canada, Australia, Germany, Ireland, and New Zealand. These relationships ensure that your applications and supporting documents reach the right admission teams quickly.
            </p>
            <p className="text-gray-300">
              Because we are funded by institutional partners, all of our counselling, application preparation, and visa support remains completely free for students.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/5 rounded-2xl border border-white/10 p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">How We Support You</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Shortlist universities that match your academic profile and budget.</li>
              <li>Review every application document, including SOPs and recommendation letters.</li>
              <li>Guide you through scholarship searches so funding options are never missed.</li>
              <li>Coordinate visa filing and pre-departure preparation at no extra cost.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              GlobalRise began in 2021 when two international students realised how difficult it was to access unbiased help with overseas applications. What started with mentoring a handful of classmates has grown into a full counselling team serving thousands of students each year.
            </p>
            <p className="text-gray-300 mb-4">
              Today we operate from Hyderabad, Leicester, and Edinburgh, supporting students across 45 countries. Even with this growth we stay committed to the founding principle: excellent guidance should never depend on anyone&apos;s ability to pay.
            </p>
            <p className="text-gray-300">
              Every intake we celebrate new success stories where families achieved their study goals without consultancy fees or hidden charges.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">What Drives Us</h3>
            <p className="text-gray-300">
              We believe that equal access to global education transforms communities. By offering end-to-end support for free, we remove financial barriers and let students focus on academic fit, scholarships, and career outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
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
      </section>
    </main>
  );
}

