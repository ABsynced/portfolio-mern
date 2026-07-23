import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section id="home" className="section flex min-h-screen flex-col items-center justify-center text-center pt-24">
      <motion.img
     src="/public/pic.jpg"
     alt="Profile photo"
     initial={{ opacity: 0, scale: 0.8 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.6 }}
     className="mb-6 h-50 w-50 rounded-full object-cover ring-4 ring-white/10 shadow-[0_0_40px_rgba(217,70,239,0.35)]"
/>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass mb-6 inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-slate-300"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
        Available for an Internship / WerkStudent
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
      >
        Hi, I'm <span className="gradient-text">{profile.name}</span>
        <br />
        {profile.role}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-xl text-balance text-lg text-slate-400"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-transform hover:scale-105"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="glass glass-hover px-7 py-3 text-sm font-semibold text-white"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex items-center gap-5 text-slate-400"
      >
        <a href={profile.social.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="GitHub">
          <FiGithub size={20} />
        </a>
        <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn">
          <FiLinkedin size={20} />
        </a>
        <a href={profile.social.twitter} target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="Twitter">
          <FiTwitter size={20} />
        </a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { duration: 1.6, repeat: Infinity } }}
        className="mt-16 text-slate-500 hover:text-white"
        aria-label="Scroll down"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
