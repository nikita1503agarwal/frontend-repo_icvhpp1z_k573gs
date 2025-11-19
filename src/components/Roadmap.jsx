import { motion } from 'framer-motion'

const roadmap = [
  { date: '03/2025', label: 'Android preview', status: 'hot' },
  { date: '04/2025', label: 'Testové balíky', status: 'next' },
  { date: '05/2025', label: 'Adaptívne lekcie', status: 'next' },
  { date: '06/2025', label: 'Leaderboard + odznaky', status: 'next' },
]

export default function Roadmap() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Roadmap</h2>

        <div className="relative overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-2">
            {roadmap.map((r, i) => (
              <motion.div
                key={r.date}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-4 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white/90 hover:bg-white/15 hover:text-white cursor-default"
              >
                <span className="font-mono text-xs text-white/60">{r.date}</span>
                <span className="mx-2">•</span>
                <span className="font-semibold">{r.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-white/60 text-sm">Posúvaj horizontálne • hviezdy sa jemne hýbu</div>
      </div>
    </section>
  )
}
