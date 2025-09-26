'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Globe, 
  Menu, 
  X, 
  GraduationCap, 
  MapPin, 
  Users, 
  MessageSquare,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { useState } from 'react';

const navigationItems = [
  { name: 'Home', href: '/', icon: Globe },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Services', href: '/services', icon: GraduationCap },
  { name: 'Destinations', href: '/destinations', icon: MapPin },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center">
                <div className="relative w-10 h-10 mr-3">
                  <Image src="/globalrise-logo.svg" alt="GlobalRise logo" fill sizes="40px" className="object-contain" priority />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">GlobalRise</h1>
                  <p className="text-xs text-cyan-400 -mt-1">Study Abroad Experts</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <item.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/contact#contact-form"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Start Free Support
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <motion.div
          className="absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: isMenuOpen ? 0 : -20, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6">
            <nav className="space-y-4">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0, 
                    x: isMenuOpen ? 0 : -20 
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.3, delay: navigationItems.length * 0.1 }}
                className="pt-4 border-t border-white/10"
              >
                <Link
                  href="/contact#contact-form"
                  className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="w-5 h-5" />
                  Start Free Support
                </Link>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}



