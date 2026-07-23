import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
      <p>
  © {new Date().getFullYear()} {profile.name}. Built By Achraf with{' '}
  <span className="text-fuchsia-400">❤️</span>
      </p>
    </footer>
  );
}
