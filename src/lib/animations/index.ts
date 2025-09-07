import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global animation configuration
export const animationConfig = {
  duration: {
    fast: 0.3,
    medium: 0.6,
    slow: 1.2,
  },
  easing: {
    smooth: 'power2.out',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
  },
  stagger: {
    fast: 0.1,
    medium: 0.2,
    slow: 0.3,
  },
};

// Scroll animation utilities
export const scrollAnimations = {
  fadeInUp: (element: Element, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: animationConfig.duration.medium,
        ease: animationConfig.easing.smooth,
        delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  },

  fadeInScale: (element: Element, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: animationConfig.duration.medium,
        ease: animationConfig.easing.smooth,
        delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  },

  pinnedSection: (element: Element) => {
    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    });
  },
};

// Framer Motion variants
export const framerVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: animationConfig.duration.medium },
  },

  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: animationConfig.duration.medium },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: animationConfig.duration.medium },
  },

  magnetic: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: animationConfig.duration.fast },
  },

  tilt: {
    whileHover: {
      rotateX: 5,
      rotateY: 5,
      transition: { duration: animationConfig.duration.fast },
    },
  },
};
