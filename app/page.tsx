import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import ScheduleMeet from '@/components/ScheduleMeet'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.05),transparent_70%)]"></div>
      </div>
      
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="projects">
        <Projects />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      <div id="schedule">
        <ScheduleMeet />
      </div>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-dark-900/50 backdrop-blur-sm">
        <div className="container-max section-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; 2024 <span className="gradient-text font-semibold">Subhadip Bera</span>. 
                Crafted with passion using Next.js & Tailwind CSS.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Available for opportunities 🇮🇳</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}