'use client'
import { motion } from 'framer-motion'
import { Code, Database, Wrench, Brain, Zap } from 'lucide-react'
import { skills } from '@/lib/data'

export default function Skills() {
  const skillCategories = [
    { 
      title: 'Programming Languages', 
      skills: skills.languages, 
      icon: Code,
      gradient: 'from-orange-500 to-red-500',
      delay: 0 
    },
    { 
      title: 'Frontend', 
      skills: skills.frontend, 
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.2 
    },
    { 
      title: 'Backend', 
      skills: skills.backend, 
      icon: Database,
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.4 
    },
    { 
      title: 'Tools & Tech', 
      skills: skills.tools, 
      icon: Wrench,
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.6 
    }
  ]

  return (
    <section id="skills" className="py-32 section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-500/50 to-transparent"></div>
      </div>
      
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
            <Zap className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium text-accent-500">Tech Stack</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Constantly learning and mastering cutting-edge technologies
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: category.delay }}
              viewport={{ once: true }}
              className="glass-card group relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`relative p-4 rounded-2xl bg-gradient-to-r ${category.gradient} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary-500 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{category.skills.length} technologies</p>
                </div>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: category.delay + (skillIndex * 0.1) 
                    }}
                    viewport={{ once: true }}
                    className="relative group/skill"
                  >
                    <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 hover:bg-white/10 transition-all duration-300 text-center">
                      <span className="text-sm font-medium group-hover/skill:text-primary-500 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                    
                    {/* Skill Level Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover/skill:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { label: 'Technologies', value: '15+', icon: Code },
            { label: 'Projects', value: '20+', icon: Zap },
            { label: 'Experience', value: '2+ Yrs', icon: Brain },
            { label: 'Learning', value: 'Always', icon: Database }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-5 h-5 text-primary-500" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}