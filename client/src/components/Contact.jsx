import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiPhone } from 'react-icons/fi';
import { profile } from '../data/profile';
import { sendContactMessage } from '../api/client';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendContactMessage(form);
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">Contact</p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Let's build something</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-400">
          Have a project in mind or just want to say hi? My inbox is open.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="glass mx-auto mt-12 grid max-w-2xl gap-4 p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400/50 focus:outline-none"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400/50 focus:outline-none"
          />
        </div>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400/50 focus:outline-none"
        />
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={5}
          className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-400/50 focus:outline-none"
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-transform hover:scale-[1.02] disabled:opacity-60"
        >
          <FiSend /> {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        {status === 'sent' && (
          <p className="text-center text-sm text-emerald-400">Message sent — thanks for reaching out!</p>
        )}
        {status === 'error' && (
          <p className="text-center text-sm text-red-400">
            Couldn't send right now — email me directly at{' '}
            <a href={`mailto:${profile.email}`} className="underline">
              {profile.email}
            </a>
            .
          </p>
        )}
      </motion.form>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
        <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-white">
          <FiMail /> {profile.email}
        </a>
        {profile.whatsapp && (
          <a
            href={`https://wa.me/${profile.whatsapp.replace(/[^\d]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <FiPhone /> {profile.phone}
          </a>
        )}
      </div>
    </section>
  );
}
