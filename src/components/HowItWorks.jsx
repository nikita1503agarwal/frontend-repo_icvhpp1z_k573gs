import { motion } from 'framer-motion'
import { Brain, Target, Clock, Trophy } from 'lucide-react'

const steps = [
  { icon: Brain, title: 'Adaptívny tréning', desc: 'Učíš sa to, čo potrebuješ. Žiadny balast.' },
  { icon: Target, title: 'Zamerané na maturitu', desc: 'Otázky, testy a témy podľa reálnych okruhov.' },
  { icon: Clock, title: 'Krátke session', desc: 'Rýchle bloky učenia, ktoré zapadnú do dňa.' },
  { icon: Trophy, title: 'Progres a odznaky', desc: 'Sleduj rast a odomykaj odmeny.' },
]

export default function HowItWorks() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent pointer-events-none" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Ako funguje
          </motion.h2>
          <p className="text-white/70 mt-3 max-w-2xl">Tri až štyri kroky a si pripravený. Všetko prehľadné a rýchle.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 size-40 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-indigo-500/30 to-cyan-500/30 blur-3xl" aria-hidden />
              <s.icon className="text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
