import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              id="about-heading"
              className="font-heading text-3xl font-bold text-dark-800 sm:text-4xl"
            >
              Quiénes somos
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-dark-700">
              <p>
                Somos imarketingcr, un equipo especializado en estrategia digital, comunicación
                visual y producción de contenido, enfocado en ayudar a las empresas a fortalecer su
                presencia de marca y generar crecimiento real.
              </p>
              <p>
                Contamos con más de 20 años de experiencia combinada y un enfoque claro: crear
                estrategias inteligentes, contenido de alto impacto y una imagen corporativa sólida
                que posicione cada marca con fuerza en su mercado.
              </p>
              <p>
                Trabajamos desde Alajuela, Costa Rica, a 10 minutos del Aeropuerto Juan
                Santamaría, y atendemos a nuestros clientes tanto de forma presencial como virtual.
              </p>
            </div>
            <a
              href="#contacto"
              className="mt-8 inline-flex min-h-[48px] items-center rounded-lg bg-primary-600 px-7 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Trabajemos juntos
            </a>
          </motion.div>

          {/* Decorative visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-hidden="true"
            className="flex items-center justify-center"
          >
            <div className="relative h-80 w-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-200 opacity-60" />
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-primary-300 opacity-40" />
              {/* Center circle with gradient */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-90 shadow-lg shadow-primary-500/30" />
              {/* Inner text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-heading text-4xl font-extrabold text-white">20+</span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                  Años
                </span>
              </div>
              {/* Floating dots */}
              <div className="absolute right-4 top-6 h-4 w-4 rounded-full bg-teal-400 opacity-80" />
              <div className="absolute bottom-8 left-6 h-3 w-3 rounded-full bg-accent-400 opacity-70" />
              <div className="absolute left-2 top-1/2 h-2 w-2 rounded-full bg-primary-400 opacity-60" />
              {/* Triangle accent */}
              <svg
                className="absolute -right-8 bottom-12 h-16 w-16 text-primary-100"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="32,4 60,58 4,58" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
