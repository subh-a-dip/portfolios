'use client'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Target } from 'lucide-react'
import { about, personalInfo } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-32 section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                <BookOpen className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium text-primary-500">About Me</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Passionate <span className="gradient-text">Student</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                {about.description}
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                Currently diving deep into artificial intelligence, machine learning, and modern web technologies. 
                I believe in continuous learning and applying theoretical knowledge to solve real-world problems 
                through innovative projects and collaborative development.
              </p>
            </div>
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: GraduationCap, 
                  label: 'Education', 
                  value: '3rd Year CSE AI',
                  detail: 'RCCIIT, Kolkata'
                },
                { 
                  icon: MapPin, 
                  label: 'Location', 
                  value: 'Kolkata',
                  detail: 'West Bengal, India'
                },
                { 
                  icon: Calendar, 
                  label: 'Experience', 
                  value: '2+ Years',
                  detail: 'Learning & Building'
                },
                { 
                  icon: Target, 
                  label: 'Focus', 
                  value: 'AI & Web Dev',
                  detail: 'Full Stack + ML'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="glass-card p-6 group hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-500 mb-1">{item.label}</h4>
                      <p className="font-medium text-white mb-1">{item.value}</p>
                      <p className="text-sm text-gray-400">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative glass-card p-8 group">
              {/* Profile Area */}
              <div className="aspect-square bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl flex items-center justify-center mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto border border-white/20">
                    <GraduationCap className="w-16 h-16 text-primary-500" />
                  </div>
                  <p className="text-gray-300 font-medium">CSE AI Student</p>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent-500 rounded-full animate-pulse delay-1000"></div>
              </div>
              
              {/* Achievement Badges */}
              <div className="space-y-4">
                {[
                  { icon: Award, text: 'Dean\'s List Student', color: 'text-yellow-500' },
                  { icon: Target, text: 'AI Enthusiast', color: 'text-primary-500' },
                  { icon: BookOpen, text: 'Continuous Learner', color: 'text-accent-500' }
                ].map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <badge.icon className={`w-5 h-5 ${badge.color}`} />
                    <span className="text-sm font-medium">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl rotate-12 floating-element"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-xl -rotate-12 floating-element delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}