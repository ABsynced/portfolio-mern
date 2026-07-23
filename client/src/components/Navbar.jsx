import { useEffect, useState } from 'react';

// Site logo text — independent of the profile data (that's the portfolio
// owner's bio/projects; this is your own brand mark shown in the nav bar).
const LOGO_NAME = 'Achraf';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-[#05060a]/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="font-display flex items-baseline gap-1 text-lg font-semibold tracking-tight text-white">
          {LOGO_NAME}<span className="gradient-text">{'</>'}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105"
          >
            Let's talk
          </a>
        </div>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mb-4 flex flex-col gap-1 p-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
