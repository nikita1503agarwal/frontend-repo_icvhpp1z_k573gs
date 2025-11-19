import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Roadmap from './components/Roadmap'
import Beta from './components/Beta'
import Footer from './components/Footer'
import Starfield from './components/Starfield'

function App() {
  // subtle parallax of background gradient mesh
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -150])

  useEffect(() => {
    // keyboard focus ring helper for accessibility
    const onKey = (e) => {
      if (e.key === 'Tab') document.documentElement.classList.add('outline-none')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-cyan-400/30 selection:text-white">
      {/* Animated background layers */}
      <div className="absolute inset-0 -z-0 overflow-hidden" aria-hidden>
        <motion.div style={{ y }} className="absolute -inset-40 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(60%_60%_at_80%_20%,rgba(168,85,247,0.25),transparent)]" />
        <Starfield className="mix-blend-screen" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Roadmap />
        <Beta />
      </main>
      <Footer />
    </div>
  )
}

export default App
