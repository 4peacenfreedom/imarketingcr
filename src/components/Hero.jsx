import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden bg-dark-900"
    >
      {/* Geometric decorative elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large gradient blob top-right */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-primary-600/30 to-accent-500/20 blur-3xl" />
        {/* Smaller blob bottom-left */}
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-teal-500/20 to-primary-600/10 blur-3xl" />
        {/* Grid pattern overlay */}
        <svg
          className="absolute inset-0 h-full w-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Floating geometric shapes */}
        <svg
          className="absolute right-10 top-1/4 h-40 w-40 opacity-10"
          viewBox="0 0 160 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="80,10 150,130 10,130" fill="none" stroke="#6366f1" strokeWidth="2" />
          <polygon points="80,30 130,120 30,120" fill="none" stroke="#8b5cf6" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-1/4 left-10 h-28 w-28 opacity-10"
          viewBox="0 0 112 112"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="92" height="92" fill="none" stroke="#14b8a6" strokeWidth="2" rx="4" />
          <rect x="24" y="24" width="64" height="64" fill="none" stroke="#2dd4bf" strokeWidth="1" rx="2" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Location badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
              <MapPin size={14} aria-hidden="true" className="text-teal-400" />
              Alajuela, Costa Rica · Atención presencial y virtual
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hacemos crecer tu marca con{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              estrategia, creatividad
            </span>{' '}
            y tecnología.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            Somos un equipo especializado en marketing digital, diseño y producción de contenido,
            con más de 20 años de experiencia combinada. Trabajamos de forma presencial en Costa
            Rica o por reunión virtual, donde estés.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#servicios"
              className="inline-flex min-h-[48px] items-center rounded-lg bg-primary-600 px-7 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-500 hover:shadow-primary-600/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            >
              Conoce nuestros servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex min-h-[48px] items-center rounded-lg border border-white/30 bg-transparent px-7 py-3 text-base font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
