import { motion } from 'framer-motion'
import { BadgeCheck, BookOpenCheck, ChartLine, Medal } from 'lucide-react'

const features = [
  {
    icon: BookOpenCheck,
    title: 'Maturitné okruhy',
    desc: 'Tematické balíky otázok, testy a rýchle vysvetlenia.',
  },
  {
    icon: ChartLine,
    title: 'Adaptívne lekcie',
    desc: 'Obsah sa prispôsobí tvojmu tempu a výsledkom.',
  },
  {
    icon: BadgeCheck,
    title: 'Mini-démá',
    desc: 'Interaktívne ukážky s okamžitou spätnou väzbou.',
  },
  {
    icon: Medal,
    title: 'Odznaky a levely',
    desc: 'Zbieraj body a odomykaj úrovne za konzistentnosť.',
  },
]

export default function Features() {
  return (
    <section id="ukazka" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          Čo ťa čaká v Matur
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -6, rotate: -0.2 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-6 overflow-hidden"
            >
              <div className="absolute -bottom-16 -right-16 size-40 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/20 to-cyan-500/20 blur-3xl" aria-hidden />
              <f.icon className="text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{f.desc}</p>

              {/* micro-interaction demo dot */}
              <motion.div
                aria-hidden
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 text-cyan-200/90 bg-cyan-400/10 px-3 py-1 text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 2.6 }}
              >
                • interakcia
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
