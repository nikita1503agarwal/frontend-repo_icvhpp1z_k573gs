import { useState } from 'react'
import { Menu, X, Rocket, Download } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2 text-white select-none">
              <div className="size-8 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-500 shadow-inner" aria-hidden="true" />
              <span className="font-semibold tracking-tight text-lg">Matur</span>
              <span className="sr-only">Logo Matur</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-1 py-1" href="#home">Domov</a>
              <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-1 py-1" href="#cookies">Cookies</a>
              <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-1 py-1" href="#kontakt">Kontakt</a>
              <a
                href="https://release.matur.sk/matur-preview-0.5.2.apk"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Download size={16} />
                Stiahnuť preview (APK)
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Otvor navigáciu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2 text-white/80">
              <a className="block hover:text-white" href="#home">Domov</a>
              <a className="block hover:text-white" href="#cookies">Cookies</a>
              <a className="block hover:text-white" href="#kontakt">Kontakt</a>
              <a
                href="https://release.matur.sk/matur-preview-0.5.2.apk"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 transition-colors"
              >
                <Rocket size={16} />
                Stiahnuť preview (APK)
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
