'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GraduationCap,
  FileText,
  Users,
  BookOpen
} from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'All Services', href: '/services', icon: GraduationCap },
      { name: 'University Applications', href: '/services#university-applications', icon: GraduationCap },
      { name: 'Visa Assistance', href: '/services#visa-assistance', icon: FileText },
      { name: 'Test Preparation', href: '/services#test-preparation', icon: BookOpen },
      { name: 'Document Support', href: '/services#document-support', icon: FileText },
    ],
  },
  {
    title: 'Destinations',
    links: [
      { name: 'All Destinations', href: '/destinations' },
      { name: 'United Kingdom', href: '/destinations#uk' },
      { name: 'United States', href: '/destinations#usa' },
      { name: 'Australia', href: '/destinations#australia' },
      { name: 'Germany', href: '/destinations#germany' },
      { name: 'New Zealand', href: '/destinations#new-zealand' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'University Partners', href: '/about#partners' },
      { name: 'Success Stories', href: '/about#success-stories' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/globalriseoverseas', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/globalriseoverseas', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/globalriseoverseas', color: 'hover:text-pink-600' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/globalrise', color: 'hover:text-blue-700' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-14 h-14 mr-4">
                <Image src="/globalrise-logo.svg" alt="GlobalRise logo" fill sizes="56px" className="object-contain" priority />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">GlobalRise</h3>
                <p className="text-sm text-cyan-400">Study Abroad Experts</p>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-400 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transforming academic dreams into global opportunities. Expert guidance for your journey to world-class universities.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                className="flex items-center text-sm"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <span>info@globalrise.in</span>
              </motion.div>

              <motion.div
                className="flex items-center text-sm"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                <span>Hyderabad, Telangana - India | Leicester - UK | Edinburgh - UK</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const Icon = link.icon;
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {Icon && (
                          <Icon className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                        {link.name}
                      </motion.a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.p
              className="text-sm text-gray-500 mb-4 md:mb-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              (c) 2025 GlobalRise. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: 'rgb(30, 41, 59)' // slate-800
                    }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 2,
            }}
          />
        </div>
      </div>
    </footer>
  );
}
