'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, Zap, Code, Cpu } from 'lucide-react'
import { personalInfo, about } from '@/lib/data'
import ParticleBackground from './ParticleBackground'
import TypingAnimation from './TypingAnimation'

export default function Hero() {
  const typingTexts = [
    "Web Developer",
    "Problem Solver", 
    "Creative Coder",
    "Tech Enthusiast",
    "AI Developer",
    "Generative AI preparator"
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      <ParticleBackground />
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 particle-bg opacity-40"></div>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 holographic morphing-blob blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 morphing-blob blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"
          animate={{ 
            rotate: 360,
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Icons */}
        {[Code, Zap, Cpu].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: `${20 + index * 30}%`,
              right: `${10 + index * 15}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: index * 0.5
            }}
          >
            <Icon className="w-8 h-8 text-primary-500/50" />
          </motion.div>
        ))}
      </div>
      
      <div className="container-max section-padding relative z-10">
        <div className="text-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative inline-block mb-8 group"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto magnetic-hover">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 rounded-full animate-spin-slow neon-glow"></div>
              <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
              <img
                src="/profile.jpg"
                alt={personalInfo.name}
                className="absolute inset-2 w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>



          {/* Main Heading */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Hi, I'm{' '}
            </motion.span>
            <span className="text-shimmer relative inline-block">
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block"
              >
                {personalInfo.name}
              </motion.span>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 to-accent-500/30 blur-2xl -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </span>
          </motion.h1>
          
          {/* Subtitle with Advanced Typewriter Effect */}
          <motion.div 
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-primary-500 animate-pulse">&lt;</span>
            <TypingAnimation 
              texts={typingTexts}
              className="text-primary-500 font-bold"
            />
            <span className="text-primary-500 animate-pulse">/&gt;</span>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {about.intro}
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a 
              href="#projects" 
              className="btn-primary group relative overflow-hidden neon-border"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="flex items-center gap-2 relative z-10">
                View My Work
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.a>
            
            <motion.a 
              href="/CV Resume.pdf" 
              download="Subhadip_Bera_CV.pdf"
              className="btn-secondary group relative overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="flex items-center gap-2 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Download className="w-4 h-4" />
                </motion.div>
                Download CV
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 magnetic-hover"
              whileHover={{ scale: 1.2, y: -8, rotateZ: 5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-primary-500 transition-colors animate-wiggle" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 magnetic-hover"
              whileHover={{ scale: 1.2, y: -8, rotateZ: -5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors animate-wiggle" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a
              href={`mailto:${personalInfo.email}?subject=Portfolio Contact&body=Hi Subhadip, I found your portfolio and would like to connect with you.`}
              className="group relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 magnetic-hover"
              whileHover={{ scale: 1.2, y: -8, rotateZ: 3 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-green-500 transition-colors animate-wiggle" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Email
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="animate-bounce-slow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <a href="#about" className="inline-block p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <ArrowDown className="w-6 h-6 text-primary-500" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}