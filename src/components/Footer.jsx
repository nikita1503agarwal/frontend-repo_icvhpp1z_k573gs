export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/10 py-10 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {year} Matur • <a className="underline hover:text-white" href="mailto:podpora@matur.sk">podpora@matur.sk</a></p>
          <nav className="flex items-center gap-6 text-sm">
            <a className="hover:text-white" href="#cookies">Cookies</a>
            <a className="hover:text-white" href="#cookies">Beta policy</a>
            <a className="hover:text-white" href="https://x.com" target="_blank" rel="noreferrer">X</a>
            <a className="hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
