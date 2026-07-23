import { motion } from 'framer-motion';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { projects } = useProjects();

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-400">Projects</p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Things I've built</h2>
        <p className="mt-3 max-w-xl text-slate-400">
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project._id || project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
