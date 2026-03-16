import { motion } from 'framer-motion';
import { Mail, Send, TrendingUp, Share2, Video, Palette, Briefcase, Globe } from 'lucide-react';

const SERVICES = [
  {
    icon: Mail,
    title: 'Estrategia de Email Marketing',
    description: 'Diseñamos estrategias de comunicación por correo que convierten y fidelizan.',
    bullets: [
      'Desarrollo de estrategias de comunicación',
      'Segmentación de audiencias',
      'Automatización de correos',
      'Análisis y optimización de campañas',
    ],
  },
  {
    icon: Send,
    title: 'Campañas de Email Marketing',
    description: 'Creamos y ejecutamos campañas de alto impacto con resultados medibles.',
    bullets: [
      'Diseño visual del correo',
      'Redacción estratégica de contenido',
      'Programación y envío',
      'Reportes de desempeño',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Asesoría Estratégica en Marketing',
    description: 'Te acompañamos en la planificación y ejecución de tu estrategia digital.',
    bullets: [
      'Diagnóstico de presencia digital',
      'Definición de estrategia de marketing',
      'Optimización de canales de comunicación',
      'Planes de crecimiento',
    ],
  },
  {
    icon: Share2,
    title: 'Manejo de Redes Sociales',
    description: 'Gestionamos tu presencia en redes con contenido estratégico y creativo.',
    bullets: [
      'Planificación estratégica de contenido',
      'Diseño gráfico para redes sociales',
      'Gestión de comunidades',
      'Análisis de métricas',
    ],
  },
  {
    icon: Video,
    title: 'Producción Audiovisual',
    description: 'Producimos contenido visual que cuenta la historia de tu marca.',
    bullets: [
      'Videos promocionales',
      'Contenido para redes sociales',
      'Edición profesional de video',
      'Storytelling visual',
    ],
  },
  {
    icon: Palette,
    title: 'Diseño Gráfico Profesional',
    description: 'Creamos piezas visuales que comunican la esencia de tu marca.',
    bullets: [
      'Diseño de identidad visual',
      'Material publicitario',
      'Diseño de piezas comerciales',
      'Imagen corporativa',
    ],
  },
  {
    icon: Globe,
    title: 'Desarrollo Web y Soluciones Digitales',
    description: 'Diseñamos y desarrollamos sitios web modernos, funcionales y orientados a resultados para fortalecer tu presencia digital.',
    bullets: [
      'Creación de páginas web corporativas y landing pages',
      'Tiendas en línea (e-commerce)',
      'Integraciones con plataformas y sistemas externos',
      'Mantenimiento, soporte técnico y optimización web',
    ],
  },
  {
    icon: Briefcase,
    title: 'Imagen Corporativa y Material Promocional',
    description: 'Materializamos tu marca en todos los puntos de contacto físico.',
    bullets: [
      'Rotulación empresarial',
      'Uniformes corporativos',
      'Material de imagen institucional',
      'Impresión de material promocional',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.07 },
  }),
};

export default function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            id="services-heading"
            className="font-heading text-3xl font-bold text-dark-800 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿En qué podemos ayudarte?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-dark-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluciones integrales de marketing y comunicación adaptadas a tu negocio.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                  <Icon
                    size={24}
                    className="text-primary-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-dark-800">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-700">{service.description}</p>
                <ul className="mt-4 space-y-1.5" role="list">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-dark-700">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500"
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
