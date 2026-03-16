import { motion } from 'framer-motion';

const TEAM = [
  {
    initials: 'FR',
    name: 'Fabián Romero',
    role: 'Project Manager y Director de la Agencia',
    description:
      'Lidera la estrategia y los proyectos de la agencia, asegurando que cada cliente reciba soluciones alineadas con sus objetivos de negocio.',
    gradient: 'from-primary-600 to-accent-500',
  },
  {
    initials: 'DG',
    name: 'Equipo de Diseño y Desarrollo Gráfico',
    role: 'Diseño & Creatividad',
    description:
      'Responsables de la creación visual de marcas, materiales gráficos y contenido digital de alto impacto.',
    gradient: 'from-accent-500 to-teal-500',
  },
  {
    initials: 'TW',
    name: 'Equipo de Tecnología y Diseño Web',
    role: 'Tecnología & Web',
    description:
      'Encargados del desarrollo de soluciones digitales, diseño web y optimización tecnológica.',
    gradient: 'from-teal-500 to-primary-600',
  },
  {
    initials: 'PA',
    name: 'Equipo de Producción Audiovisual',
    role: 'Audiovisual',
    description:
      'Crean contenido visual y audiovisual profesional que comunica la identidad de cada marca.',
    gradient: 'from-primary-600 to-teal-500',
  },
  {
    initials: 'CD',
    name: 'Especialista en Campañas Digitales',
    role: 'Campañas & Paid Media',
    description:
      'Experto en planificación, segmentación y optimización de campañas en Meta Ads y plataformas digitales.',
    gradient: 'from-accent-500 to-primary-600',
  },
];

export default function Team() {
  return (
    <section
      id="equipo"
      aria-labelledby="team-heading"
      className="bg-light py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            id="team-heading"
            className="font-heading text-3xl font-bold text-dark-800 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Las personas detrás de imarketingcr
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-dark-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Un equipo multidisciplinario con pasión por los resultados.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <motion.article
              key={member.initials}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Avatar */}
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} text-xl font-extrabold text-white shadow-md`}
                aria-hidden="true"
              >
                {member.initials}
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-dark-800">{member.name}</h3>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-primary-500">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-700">{member.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
