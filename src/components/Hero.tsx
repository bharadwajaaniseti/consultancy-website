'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, ChevronRight, Users, Award, DollarSign } from 'lucide-react';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Graduation Cap Component
function GraduationCap3D() {
  const meshRef = useRef<THREE.Group>(null);
  const capRef = useRef<THREE.Mesh>(null);
  const tasselRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Slow orbital rotation
      meshRef.current.rotation.y += 0.003;
      // Gentle floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      // Slight tilt animation
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.4) * 0.05;
    }
    
    // Animate the tassel swaying
    if (tasselRef.current) {
      tasselRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <group ref={meshRef} position={[2, 0, -1]} scale={[2, 2, 2]}>
      {/* Cap base (mortar board) */}
      <mesh ref={capRef} position={[0, 0.2, 0]}>
        <boxGeometry args={[2, 0.1, 2]} />
        <meshPhongMaterial 
          color="#1a1a2e" 
          shininess={30}
          specular="#333366"
        />
      </mesh>
      
      {/* Cap crown */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.9, 0.4, 16]} />
        <meshPhongMaterial 
          color="#1a1a2e" 
          shininess={30}
          specular="#333366"
        />
      </mesh>

      {/* Golden trim */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[2.1, 0.05, 2.1]} />
        <meshPhongMaterial 
          color="#ffd700" 
          shininess={100}
          specular="#ffed4e"
        />
      </mesh>

      {/* Tassel string */}
      <mesh position={[0.8, 0.3, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.6, 8]} />
        <meshPhongMaterial color="#ffd700" />
      </mesh>

      {/* Tassel */}
      <group ref={tasselRef} position={[0.8, -0.1, 0]}>
        {/* Tassel top */}
        <mesh position={[0, 0.1, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshPhongMaterial color="#ffd700" />
        </mesh>
        
        {/* Tassel strands */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          return (
            <mesh 
              key={i} 
              position={[
                Math.cos(angle) * 0.05, 
                -0.15, 
                Math.sin(angle) * 0.05
              ]}
            >
              <cylinderGeometry args={[0.008, 0.003, 0.3, 4]} />
              <meshPhongMaterial color="#ffd700" />
            </mesh>
          );
        })}
      </group>

      {/* Floating academic symbols around the cap */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[-1.5, 0.8, 0.5]} scale={[0.3, 0.3, 0.3]}>
          <sphereGeometry args={[0.3, 8, 8]} />
          <meshPhongMaterial color="#60a5fa" />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
        <mesh position={[1.2, -0.5, 0.8]} scale={[0.2, 0.2, 0.2]}>
          <octahedronGeometry args={[0.4]} />
          <meshPhongMaterial color="#fbbf24" />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.7} floatIntensity={0.6}>
        <mesh position={[-0.8, -0.8, -0.6]} scale={[0.25, 0.25, 0.25]}>
          <dodecahedronGeometry args={[0.4]} />
          <meshPhongMaterial color="#10b981" />
        </mesh>
      </Float>
    </group>
  );
}

// 3D Scene Component
function ThreeDScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ height: '100vh', width: '100vw' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight
            position={[-5, -5, -5]}
            intensity={0.5}
            color="#4a90e2"
          />
          <pointLight
            position={[5, -5, 5]}
            intensity={0.3}
            color="#fbbf24"
          />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            intensity={0.5}
            color="#ffffff"
            castShadow
          />

          {/* Main 3D Graduation Cap */}
          <GraduationCap3D />

          {/* Floating academic elements */}
          <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh position={[-3, 2, -2]} scale={[0.5, 0.5, 0.5]}>
              <dodecahedronGeometry args={[0.5]} />
              <meshPhongMaterial 
                color="#8b5cf6" 
                transparent 
                opacity={0.7}
                shininess={100}
              />
            </mesh>
          </Float>

          <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
            <mesh position={[3, -1, -1]} scale={[0.3, 0.3, 0.3]}>
              <octahedronGeometry args={[0.8]} />
              <meshPhongMaterial 
                color="#06b6d4" 
                transparent 
                opacity={0.6}
                shininess={80}
              />
            </mesh>
          </Float>

          <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1}>
            <mesh position={[-2, -2, 1]} scale={[0.4, 0.4, 0.4]}>
              <tetrahedronGeometry args={[0.6]} />
              <meshPhongMaterial 
                color="#f59e0b" 
                transparent 
                opacity={0.8}
                shininess={60}
              />
            </mesh>
          </Float>

          {/* Orbiting knowledge spheres */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i / 6) * Math.PI * 2;
            return (
              <Float key={i} speed={0.5 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.4}>
                <mesh 
                  position={[
                    Math.cos(angle) * 4, 
                    Math.sin(angle * 2) * 1, 
                    Math.sin(angle) * 4
                  ]}
                  scale={[0.2, 0.2, 0.2]}
                >
                  <sphereGeometry args={[0.3, 16, 16]} />
                  <meshPhongMaterial 
                    color={['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'][i]}
                    transparent 
                    opacity={0.4}
                    shininess={100}
                  />
                </mesh>
              </Float>
            );
          })}

          {/* Subtle auto-rotation controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Academic Network Component
function AcademicNetwork() {
  const [, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  // Network nodes with country flags and academic icons
  const networkNodes = [
    // Universities
    { id: 1, x: 15, y: 20, type: 'university', country: '🇺🇸', delay: 0 },
    { id: 2, x: 25, y: 35, type: 'university', country: '🇬🇧', delay: 0.5 },
    { id: 3, x: 85, y: 25, type: 'university', country: '🇦🇺', delay: 1 },
    { id: 4, x: 70, y: 15, type: 'university', country: '🇩🇪', delay: 1.5 },
    { id: 5, x: 40, y: 60, type: 'university', country: '🇨🇦', delay: 2 },
    { id: 6, x: 80, y: 70, type: 'university', country: '🇳🇿', delay: 2.5 },
    
    // Academic concepts
    { id: 7, x: 50, y: 40, type: 'concept', icon: '🎓', delay: 3 },
    { id: 8, x: 35, y: 50, type: 'concept', icon: '📚', delay: 3.5 },
    { id: 9, x: 65, y: 45, type: 'concept', icon: '✈️', delay: 4 },
    { id: 10, x: 20, y: 65, type: 'concept', icon: '🎯', delay: 4.5 },
    { id: 11, x: 75, y: 55, type: 'concept', icon: '🌟', delay: 5 },
    
    // Connection hubs
    { id: 12, x: 55, y: 25, type: 'hub', delay: 1.2 },
    { id: 13, x: 45, y: 75, type: 'hub', delay: 2.8 },
    { id: 14, x: 30, y: 45, type: 'hub', delay: 3.8 },
  ];

  // Connection lines between nodes
  const connections = [
    { from: 1, to: 12 }, { from: 2, to: 12 }, { from: 4, to: 12 },
    { from: 12, to: 7 }, { from: 7, to: 9 }, { from: 9, to: 3 },
    { from: 2, to: 14 }, { from: 14, to: 8 }, { from: 8, to: 5 },
    { from: 5, to: 13 }, { from: 13, to: 10 }, { from: 13, to: 6 },
    { from: 6, to: 11 }, { from: 11, to: 3 }, { from: 7, to: 8 },
    { from: 8, to: 10 }, { from: 9, to: 11 }, { from: 14, to: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Connection lines */}
        {connections.map((connection, index) => {
          const fromNode = networkNodes.find(n => n.id === connection.from);
          const toNode = networkNodes.find(n => n.id === connection.to);
          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={`connection-${index}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#connectionGradient)"
              strokeWidth="0.1"
              opacity={0.4}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ 
                duration: 2, 
                delay: Math.max(fromNode.delay, toNode.delay) + 0.5,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
          </radialGradient>
        </defs>
      </svg>

      {/* Network nodes */}
      {networkNodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: node.delay,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          {node.type === 'university' && (
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: node.delay + 2,
                ease: "easeInOut"
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md w-8 h-8 -m-2" />
              {/* Node */}
              <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white/50 flex items-center justify-center shadow-lg">
                <span className="text-[6px]">{node.country}</span>
              </div>
            </motion.div>
          )}

          {node.type === 'concept' && (
            <motion.div
              className="relative"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: node.delay + 1,
                ease: "easeInOut"
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-md w-8 h-8 -m-2" />
              {/* Node */}
              <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white/50 flex items-center justify-center shadow-lg">
                <span className="text-[8px]">{node.icon}</span>
              </div>
            </motion.div>
          )}

          {node.type === 'hub' && (
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.delay + 1.5,
                ease: "easeInOut"
              }}
            >
              {/* Outer ring */}
              <div className="absolute inset-0 border border-cyan-400/30 rounded-full w-6 h-6 -m-1" />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-sm w-6 h-6 -m-1" />
              {/* Core */}
              <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full shadow-lg" />
            </motion.div>
          )}

          {/* Floating particles around nodes */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: node.delay
            }}
          >
            <div className="absolute w-1 h-1 bg-white/60 rounded-full -top-6 left-1/2 transform -translate-x-1/2" />
            <div className="absolute w-0.5 h-0.5 bg-blue-400/60 rounded-full top-6 -right-3" />
            <div className="absolute w-0.5 h-0.5 bg-purple-400/60 rounded-full top-2 -left-4" />
          </motion.div>
        </motion.div>
      ))}

      {/* Floating data streams */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 2 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 8}%`,
            }}
            animate={{
              x: [0, 100, 200, 300],
              y: [0, -20, 10, -5],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Animated Journey Paths Component
function JourneyPaths() {
  // Journey stages with icons and labels
  const journeyStages = [
    { id: 1, icon: '💭', label: 'Dream', color: '#fbbf24' },
    { id: 2, icon: '📝', label: 'Application', color: '#3b82f6' },
    { id: 3, icon: '✈️', label: 'Visa', color: '#10b981' },
    { id: 4, icon: '🎓', label: 'Graduation', color: '#8b5cf6' },
  ];

  // Multiple journey paths for different student routes
  const journeyPaths = [
    {
      id: 1,
      startX: 10,
      startY: 85,
      controlX1: 25,
      controlY1: 60,
      controlX2: 35,
      controlY2: 40,
      endX: 50,
      endY: 15,
      delay: 0,
    },
    {
      id: 2,
      startX: 90,
      startY: 80,
      controlX1: 75,
      controlY1: 65,
      controlX2: 65,
      controlY2: 35,
      endX: 55,
      endY: 20,
      delay: 2,
    },
    {
      id: 3,
      startX: 15,
      startY: 90,
      controlX1: 40,
      controlY1: 70,
      controlX2: 60,
      controlY2: 45,
      endX: 80,
      endY: 25,
      delay: 4,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Gradient definitions for paths */}
        <defs>
          <linearGradient id="journeyGradient1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="33%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="66%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="journeyGradient2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="journeyGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Journey paths */}
        {journeyPaths.map((path, index) => {
          const pathString = `M ${path.startX} ${path.startY} C ${path.controlX1} ${path.controlY1}, ${path.controlX2} ${path.controlY2}, ${path.endX} ${path.endY}`;
          
          return (
            <g key={path.id}>
              {/* Main path */}
              <motion.path
                d={pathString}
                fill="none"
                stroke={`url(#journeyGradient${index + 1})`}
                strokeWidth="0.3"
                strokeLinecap="round"
                strokeDasharray="2 1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{
                  duration: 4,
                  delay: path.delay,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 8,
                }}
              />
              
              {/* Glowing underglow */}
              <motion.path
                d={pathString}
                fill="none"
                stroke={`url(#journeyGradient${index + 1})`}
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeDasharray="2 1"
                opacity="0.3"
                filter="blur(1px)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  delay: path.delay + 0.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 8,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Journey checkpoints positioned along the screen */}
      {journeyStages.map((stage, index) => (
        <motion.div
          key={stage.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${20 + index * 20}%`,
            top: `${70 - index * 15}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.5 + 1,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          {/* Checkpoint glow */}
          <motion.div
            className="absolute inset-0 rounded-full blur-md"
            style={{
              backgroundColor: `${stage.color}40`,
              width: '3rem',
              height: '3rem',
              margin: '-0.75rem',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.7,
              ease: "easeInOut"
            }}
          />
          
          {/* Checkpoint icon */}
          <motion.div
            className="relative w-6 h-6 rounded-full border-2 border-white/50 flex items-center justify-center shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${stage.color}, ${stage.color}dd)`,
            }}
            animate={{
              y: [0, -3, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5 + 2,
              ease: "easeInOut"
            }}
          >
            <span className="text-xs">{stage.icon}</span>
          </motion.div>

          {/* Stage label */}
          <motion.div
            className="absolute top-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-medium whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.5 + 1.5,
            }}
          >
            {stage.label}
          </motion.div>

          {/* Connecting dots */}
          {index < journeyStages.length - 1 && (
            <motion.div
              className="absolute top-3 left-8 flex items-center space-x-1"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.6, scaleX: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.5 + 2,
              }}
            >
              {[...Array(3)].map((_, dotIndex) => (
                <motion.div
                  key={dotIndex}
                  className="w-1 h-1 bg-white/40 rounded-full"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5 + dotIndex * 0.2 + 3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Success celebration particles */}
      <motion.div
        className="absolute"
        style={{ left: '80%', top: '25%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 8, duration: 1 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            animate={{
              x: [0, Math.cos(i * 45 * Math.PI / 180) * 20],
              y: [0, Math.sin(i * 45 * Math.PI / 180) * 20],
              opacity: [1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1 + 8,
              repeatDelay: 6,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Academic Particle Field Component
function AcademicParticleField() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    symbol: string;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const academicSymbols = ['🎓', '📚', '📜', '✏️', '🌟', '💡', '🏆', '📖'];
    
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: 100 + Math.random() * 20, // Start below viewport
          symbol: academicSymbols[Math.floor(Math.random() * academicSymbols.length)],
          size: 0.8 + Math.random() * 0.6, // 0.8-1.4 scale
          duration: 15 + Math.random() * 10, // 15-25 seconds
          delay: Math.random() * 20, // Stagger over 20 seconds
          opacity: 0.3 + Math.random() * 0.4, // 0.3-0.7 opacity
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 25000); // Regenerate every 25 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle starfield background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating academic symbols */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-white/60"
          style={{
            left: `${particle.x}%`,
            fontSize: `${particle.size}rem`,
            filter: 'blur(0.5px)',
          }}
          initial={{ 
            y: `${particle.y}vh`, 
            opacity: 0,
            rotate: 0,
            scale: 0.5
          }}
          animate={{ 
            y: `${particle.y - 120}vh`, // Float up past the top
            opacity: [0, particle.opacity, particle.opacity, 0],
            rotate: [0, 15, -10, 5, 0],
            scale: [0.5, particle.size, particle.size, 0.3],
            x: [0, Math.sin(particle.id) * 30, Math.cos(particle.id) * 20, 0], // Gentle drift
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 5,
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}

      {/* Floating book pages */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`page-${i}`}
          className="absolute w-3 h-4 bg-white/10 rounded-sm border border-white/20"
          style={{
            left: `${20 + i * 10}%`,
            top: `100%`,
          }}
          animate={{
            y: [-20, -500],
            x: [0, Math.sin(i * 0.5) * 50],
            rotate: [0, 180, 360],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: 20 + i * 2,
            delay: i * 3,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 15,
          }}
        />
      ))}

      {/* Glowing knowledge orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            background: `radial-gradient(circle, ${
              ['#60a5fa', '#a78bfa', '#34d399', '#fbbf24', '#f87171', '#06b6d4'][i]
            }40, transparent)`,
            boxShadow: `0 0 10px ${
              ['#60a5fa', '#a78bfa', '#34d399', '#fbbf24', '#f87171', '#06b6d4'][i]
            }60`,
          }}
          animate={{
            y: [600, -100],
            x: [0, Math.cos(i * 0.8) * 80],
            scale: [0.5, 1.2, 0.8, 0.3],
            opacity: [0, 0.8, 0.6, 0],
          }}
          transition={{
            duration: 18 + i * 2,
            delay: i * 4,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 20,
          }}
        />
      ))}

      {/* Academic achievement trails */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 3 }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            className="absolute"
            style={{
              left: `${25 + i * 20}%`,
              top: '100%',
            }}
          >
            {/* Trail of small graduation caps */}
            {[...Array(5)].map((_, j) => (
              <motion.div
                key={j}
                className="absolute text-yellow-400/40 text-xs"
                animate={{
                  y: [0, -700],
                  opacity: [0, 0.6, 0.3, 0],
                  scale: [0.5, 1, 0.8, 0.2],
                }}
                transition={{
                  duration: 25,
                  delay: i * 5 + j * 1.5,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 30,
                }}
              >
                🎓
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Ambient learning particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`ambient-${i}`}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `100%`,
            }}
            animate={{
              y: [0, -800],
              x: [0, Math.sin(i * 0.3) * 100],
              opacity: [0, 0.5, 0.3, 0],
              scale: [0.5, 1.5, 1, 0.2],
            }}
            transition={{
              duration: 30 + Math.random() * 15,
              delay: Math.random() * 25,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 20,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const universityLogos = [
    { name: 'Harvard', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg' },
    { name: 'Oxford', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Circlet.svg' },
    { name: 'MIT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
    { name: 'Stanford', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_Cardinal_logo.svg' },
    { name: 'Cambridge', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/University_of_Cambridge_coat_of_arms.svg' },
    { name: 'Sydney', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/University_of_Sydney_coat_of_arms.svg' },
    { name: 'Toronto', logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/University_of_Toronto_coat_of_arms.svg' },
    { name: 'Melbourne', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/University_of_Melbourne_logo.svg' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Enhanced background parallax layers */}
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-center">
          
          {/* Content */}
          <div className="text-center max-w-4xl relative z-20">
            {/* Content backdrop for better readability */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm rounded-3xl -m-8 border border-white/10" />
            
            {/* Content wrapper with relative positioning */}
            <div className="relative z-10">
            {/* KPI Strip */}
            <motion.div
              className="inline-flex items-center gap-6 bg-slate-800/80 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-green-400">
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold">3,200+ admits</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2 text-blue-400">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">97% visa success</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2 text-yellow-400">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-semibold">$5.4M scholarships</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)',
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Global
              <span className="text-blue-400" style={{
                textShadow: '0 4px 20px rgba(59, 130, 246, 0.8), 0 2px 8px rgba(59, 130, 246, 0.6)',
              }}>Rise</span>
            </motion.h1>

            {/* Updated Copy */}
            <motion.h2
              className="text-2xl md:text-3xl text-gray-100 mb-4 font-medium"
              style={{
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 1px 6px rgba(0, 0, 0, 0.6)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Get into the right university, with less hassle.
            </motion.h2>

            <motion.p
              className="text-lg text-gray-200 mb-8 font-medium"
              style={{
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Personalized shortlisting, applications, scholarships & visa support.
            </motion.p>

            {/* Education-specific CTA Stack */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-2 border border-blue-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
              >
                <GraduationCap className="w-5 h-5" />
                Find My Program
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl hover:shadow-white/25 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-5 h-5" />
                Explore Destinations
              </motion.button>
            </motion.div>

            {/* Micro-copy */}
            <motion.p
              className="text-sm text-gray-200 mb-8 font-medium bg-black/30 rounded-full px-4 py-2 inline-block backdrop-blur-sm"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Takes 60 seconds • No signup required
            </motion.p>

            {/* Process at a glance */}
            <motion.div
              className="flex items-center justify-center gap-4 text-sm text-white bg-black/40 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">1</div>
                <span>Shortlist</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">2</div>
                <span>Apply</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">3</div>
                <span>Visa & Arrival</span>
              </div>
            </motion.div>
            </div>
          </div>
        </div>

        {/* University Logos Row */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-center text-gray-400 mb-8 text-sm">Trusted by students at top universities worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {universityLogos.map((uni, index) => (
              <motion.div
                key={uni.name}
                className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  {uni.name.substring(0, 3).toUpperCase()}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3D Graduation Cap Scene */}
      <div className="opacity-60">
        <ThreeDScene />
      </div>
      
      {/* Academic Network Background */}
      <div className="opacity-30">
        <AcademicNetwork />
      </div>
      
      {/* Journey Paths Background */}
      <div className="opacity-40">
        <JourneyPaths />
      </div>
      
      {/* Academic Particle Field */}
      <div className="opacity-25">
        <AcademicParticleField />
      </div>
    </section>
  );
}
