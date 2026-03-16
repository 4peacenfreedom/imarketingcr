import { motion } from 'framer-motion';

const STATS = [
  {
    number: '20+',
    title: 'Años de experiencia',
    description: 'Experiencia combinada en estrategia, diseño y contenido.',
  },
  {
    number: '7',
    title: 'Servicios integrales',
    description: 'Soluciones completas bajo un mismo equipo dedicado.',
  },
  {
    number: '100%',
    title: 'Estrategias personalizadas',
    description: 'Adaptadas a las necesidades específicas de cada cliente.',
  },
  {
    number: 'Flexible',
    title: 'Atención',
    description: 'Presencial en Alajuela o reunión virtual, donde estés.',
  },
];

export default function WhyUs() {
  return (
    <section
      aria-labelledby="whyus-heading"
      className="bg-light py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            id="whyus-heading"
            className="font-heading text-3xl font-bold text-dark-800 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Por qué elegirnos?
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div
                className="font-heading text-5xl font-extrabold text-primary-500 sm:text-6xl"
                aria-label={stat.number}
              >
                {stat.number}
              </div>
              <h3 className="mt-3 font-heading text-lg font-bold text-dark-800">{stat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-700">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
