'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, TrendingUp } from 'lucide-react'
import { projects, personalInfo } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-32 section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
      
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card relative overflow-hidden"
            >
              {/* Project Image/Preview */}
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                      <Star className="w-8 h-8 text-primary-500" />
                    </div>
                    <span className="text-sm text-gray-300">Project Preview</span>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-primary-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-xl border border-primary-500/20"
                  >
                    <ExternalLink className="w-4 h-4 text-primary-500" />
                    <span className="text-sm font-medium text-primary-500">Live Demo</span>
                  </a>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-500 rounded-full animate-pulse delay-1000"></div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href={personalInfo.github} className="btn-secondary">
            <span className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              View All Projects
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}