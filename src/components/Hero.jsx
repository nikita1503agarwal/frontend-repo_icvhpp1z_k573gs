import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_30px_rgba(34,211,238,0.25)]">
            Zmaturuj s ľahkosťou
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80">
            Android preview je pripravené. Začni trénovať na maturitu ešte dnes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://release.matur.sk/matur-preview-0.5.2.apk"
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-cyan-400/90 text-slate-900 font-semibold px-6 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span className="relative z-10">Stiahnuť preview (APK)</span>
              <span className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/20 transition-colors" aria-hidden="true" />
            </a>
            <a
              href="#ukazka"
              className="inline-flex items-center rounded-2xl px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Pozri ukážku
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating planets */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.9 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.9 }}
          className="absolute -right-16 top-20 size-40 rounded-full bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-500 blur-2xl opacity-40"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.8 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 1.1 }}
          className="absolute left-10 bottom-20 size-28 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-500 blur-xl opacity-40"
        />
      </div>
    </section>
  )
}
