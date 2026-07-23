import { motion } from 'framer-motion';
import { skills } from '../data/profile';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">Skills</p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">What I work with</h2>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover p-6"
          >
            <h3 className="font-display mb-4 text-lg font-semibold text-white">{group.category}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
