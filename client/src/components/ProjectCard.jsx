import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="glass glass-hover group flex flex-col overflow-hidden p-6"
    >
      <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full rounded-xl object-cover" />
        ) : (
          <span className="font-display text-3xl font-bold text-white/30">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {(project.tags || []).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 border-t border-white/10 pt-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-medium text-slate-300 transition-colors hover:text-white"
          >
            <FiExternalLink /> Live
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-medium text-slate-300 transition-colors hover:text-white"
          >
            <FiGithub /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
