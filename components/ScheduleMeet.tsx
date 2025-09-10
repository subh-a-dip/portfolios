'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Send, Mail } from 'lucide-react'
import { useState } from 'react'

export default function ScheduleMeet() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    duration: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const durations = [
    { value: '10', label: '10 minutes' },
    { value: '15', label: '15 minutes' },
    { value: '30', label: '30 minutes' },
    { value: '60', label: '1 hour' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    console.log('Form data:', formData)
    
    try {
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      console.log('Response status:', response.status)
      const result = await response.json()
      console.log('Response data:', result)
      
      if (response.ok) {
        setSubmitStatus('Meeting scheduled successfully!')
        setFormData({ name: '', email: '', date: '', time: '', duration: '' })
      } else {
        setSubmitStatus(`Failed to schedule meeting: ${result.error || 'Please try again.'}`)
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus('Failed to schedule meeting. Please try again.')
    }
    
    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus(''), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="schedule" className="section-padding bg-gray-900/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule a <span className="text-primary-500">Meeting</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project in detail. Book a convenient time slot for our conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            {submitStatus && (
              <div className={`p-4 rounded-lg text-center font-medium ${
                submitStatus.includes('successfully') 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {submitStatus}
              </div>
            )}

            {/* Name Input */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <User className="w-4 h-4" />
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:border-primary-500 focus:outline-none transition-all duration-300 placeholder-gray-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Mail className="w-4 h-4" />
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:border-primary-500 focus:outline-none transition-all duration-300 placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Date Selection */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Calendar className="w-4 h-4" />
                Select Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                required
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:border-primary-500 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Time Selection */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Clock className="w-4 h-4" />
                Select Time *
              </label>
              <div className="grid grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <label key={time} className="relative">
                    <input
                      type="radio"
                      name="time"
                      value={time}
                      onChange={handleChange}
                      className="sr-only peer"
                      required
                    />
                    <div className="p-3 text-center bg-white/5 border border-white/10 rounded-lg cursor-pointer transition-all duration-300 peer-checked:bg-primary-500/20 peer-checked:border-primary-500 hover:bg-white/10">
                      {time}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration Selection */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Clock className="w-4 h-4" />
                Meeting Duration *
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:border-primary-500 focus:outline-none transition-all duration-300"
              >
                <option value="">Select duration</option>
                {durations.map((duration) => (
                  <option key={duration.value} value={duration.value} className="bg-gray-800">
                    {duration.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? 'Scheduling...' : 'Schedule Meeting'}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}