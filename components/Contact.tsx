'use client'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send, MessageCircle, Phone } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="py-32 section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-b from-primary-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-t from-accent-500/5 to-transparent"></div>
      </div>
      
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
            <MessageCircle className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-500">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or just chat about technology and innovation. Let's build something amazing together!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}?subject=Portfolio Contact&body=Hi Subhadip, I found your portfolio and would like to connect with you.`,
                  description: 'Best for detailed discussions'
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: personalInfo.location,
                  href: '#',
                  description: 'Available for local meetups'
                },
                {
                  icon: Phone,
                  label: 'Response Time',
                  value: '< 24 hours',
                  href: `tel:+91${personalInfo.phone}`,
                  description: 'Quick response guaranteed'
                }
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="glass-card p-6 group hover:scale-105"
                >
                  <a href={contact.href} className="flex items-start gap-4 w-full">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300">
                      <contact.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary-500 mb-1">{contact.label}</h4>
                      <p className="font-medium text-white mb-1">{contact.value}</p>
                      <p className="text-sm text-gray-400">{contact.description}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-semibold mb-6">Connect on Social</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: personalInfo.github, label: 'GitHub', color: 'hover:text-gray-400' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-red-400' }
                ].map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className={`group relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${color}`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-6 h-6 transition-colors duration-300" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-3xl font-bold mb-6">Send a Message</h3>
            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <input name="bot-field" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:border-primary-500 focus:outline-none transition-all duration-300 placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:border-primary-500 focus:outline-none transition-all duration-300 placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:border-primary-500 focus:outline-none transition-all duration-300 placeholder-gray-500"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:border-primary-500 focus:outline-none transition-all duration-300 resize-none placeholder-gray-500"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn-primary w-full group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </span>
              </motion.button>
            </form>
            
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-500 rounded-full animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}