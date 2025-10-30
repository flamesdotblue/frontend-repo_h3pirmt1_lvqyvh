import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlays for readability - don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/0 dark:from-neutral-900/80 dark:via-neutral-900/40 dark:to-neutral-900/0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40 dark:from-neutral-900/50 dark:via-transparent dark:to-neutral-900/50" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300 shadow-sm backdrop-blur">
            Open for opportunities
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Hi, I’m Sagar Chopda
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300 text-base sm:text-lg">
            I build clean, modern web experiences with React, TypeScript, and cloud-first backends. I love crafting performant UIs, delightful interactions, and scalable systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-2.5 text-sm shadow-sm hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="https://www.linkedin.com/in/sagar-chopda"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 text-neutral-900 dark:text-neutral-100 px-5 py-2.5 text-sm shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
