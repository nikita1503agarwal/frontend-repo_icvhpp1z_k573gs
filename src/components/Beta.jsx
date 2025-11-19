import { motion } from 'framer-motion'

export default function Beta() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-12 text-white"
        >
          <h3 className="text-2xl font-bold">Chceš beta prístup?</h3>
          <p className="mt-3 text-white/70 max-w-2xl">Napíš nám a pošleme ti link. Hľadáme študentov, ktorí chcú rýchlo a efektívne zmaturovať.</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              className="rounded-2xl bg-cyan-400/90 text-slate-900 font-semibold px-6 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              href="mailto:podpora@matur.sk"
            >
              Požiadať o prístup
            </a>
            <a
              className="rounded-2xl border border-white/10 bg-white/10 hover:bg-white/20 text-white px-6 py-3"
              href="#cookies"
            >
              Beta policy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
