import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { AGENCY } from '../config/agency';

const SERVICES_OPTIONS = [
  'Estrategia de Email Marketing',
  'Campañas de Email Marketing',
  'Asesoría Estratégica en Marketing',
  'Manejo de Redes Sociales',
  'Producción Audiovisual',
  'Diseño Gráfico Profesional',
  'Imagen Corporativa y Material Promocional',
  'No estoy seguro/a aún',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /**
   * To connect this form to a real email service:
   *
   * Option A — EmailJS:
   *   1. npm install @emailjs/browser
   *   2. import emailjs from '@emailjs/browser'
   *   3. Replace the setTimeout below with:
   *      await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY')
   *
   * Option B — Formspree:
   *   1. Create a form at https://formspree.io and get your endpoint
   *   2. Replace the setTimeout below with:
   *      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   *        method: 'POST', headers: { 'Content-Type': 'application/json' },
   *        body: JSON.stringify(data)
   *      })
   */
  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate async submission — replace with real integration above
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Form data:', data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            id="contact-heading"
            className="font-heading text-3xl font-bold text-dark-800 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ¿Listo para llevar tu marca al siguiente nivel?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-dark-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contáctanos hoy, cuéntanos sobre tu proyecto y encontramos juntos la mejor solución.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div
                role="alert"
                className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                  <svg
                    className="h-8 w-8 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-teal-800">
                  ¡Gracias! Recibimos tu mensaje.
                </h3>
                <p className="mt-2 text-teal-700">Te contactaremos pronto.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex min-h-[44px] items-center rounded-lg bg-teal-600 px-6 py-2 text-sm font-semibold text-white hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5 rounded-2xl border border-gray-100 bg-light p-8 shadow-sm"
              >
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-dark-800">
                    Nombre completo <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                    {...register('nombre', { required: 'El nombre es requerido.' })}
                    className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-dark-800 placeholder-gray-400 shadow-sm transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 ${
                      errors.nombre ? 'border-red-400' : 'border-gray-200'
                    }`}
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && (
                    <p id="nombre-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-sm font-semibold text-dark-800">
                    Empresa <span className="font-normal text-gray-400">(opcional)</span>
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    autoComplete="organization"
                    {...register('empresa')}
                    className="mt-1.5 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-dark-800 placeholder-gray-400 shadow-sm transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    placeholder="Tu empresa"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-800">
                    Correo electrónico <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...register('email', {
                      required: 'El correo es requerido.',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Ingresa un correo electrónico válido.',
                      },
                    })}
                    className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-dark-800 placeholder-gray-400 shadow-sm transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 ${
                      errors.email ? 'border-red-400' : 'border-gray-200'
                    }`}
                    placeholder="tu@correo.com"
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-dark-800">
                    Teléfono <span className="font-normal text-gray-400">(opcional)</span>
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    autoComplete="tel"
                    {...register('telefono')}
                    className="mt-1.5 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-dark-800 placeholder-gray-400 shadow-sm transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    placeholder="+506 8000-0000"
                  />
                </div>

                {/* Servicio */}
                <div>
                  <label htmlFor="servicio" className="block text-sm font-semibold text-dark-800">
                    Servicio de interés <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <select
                    id="servicio"
                    aria-required="true"
                    aria-describedby={errors.servicio ? 'servicio-error' : undefined}
                    {...register('servicio', { required: 'Selecciona un servicio.' })}
                    className={`mt-1.5 block w-full rounded-lg border px-4 py-2.5 text-sm text-dark-800 shadow-sm transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 ${
                      errors.servicio ? 'border-red-400' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Selecciona una opción…</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.servicio && (
                    <p id="servicio-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.servicio.message}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-dark-800">
                    Mensaje <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    aria-required="true"
                    aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                    {...register('mensaje', {
                      required: 'El mensaje es requerido.',
                      minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres.' },
                    })}
                    className={`mt-1.5 block w-full resize-none rounded-lg border px-4 py-2.5 text-sm text-dark-800 placeholder-gray-400 shadow-sm transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500 ${
                      errors.mensaje ? 'border-red-400' : 'border-gray-200'
                    }`}
                    placeholder="Cuéntanos sobre tu proyecto o consulta…"
                  />
                  {errors.mensaje && (
                    <p id="mensaje-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>

                {/* Privacy checkbox */}
                <div>
                  <div className="flex items-start gap-3">
                    <input
                      id="privacidad"
                      type="checkbox"
                      aria-required="true"
                      aria-describedby={errors.privacidad ? 'privacidad-error' : undefined}
                      {...register('privacidad', {
                        required: 'Debes aceptar la política de privacidad.',
                      })}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="privacidad" className="text-sm text-dark-700">
                      Acepto la{' '}
                      <button
                        type="button"
                        className="font-semibold text-primary-600 underline underline-offset-2 hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-primary-500"
                        onClick={() => alert('Política de privacidad — próximamente.')}
                      >
                        política de privacidad
                      </button>
                    </label>
                  </div>
                  {errors.privacidad && (
                    <p id="privacidad-error" role="alert" className="mt-1 text-xs text-red-600">
                      {errors.privacidad.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Enviando…
                    </>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-gray-100 bg-light p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-dark-800">
                Información de contacto
              </h3>
              <ul className="mt-6 space-y-5" role="list">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Mail size={18} className="text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Correo</p>
                    <a
                      href={`mailto:${AGENCY.email}`}
                      className="text-sm font-medium text-dark-800 hover:text-primary-600 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-primary-500"
                    >
                      {AGENCY.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Phone size={18} className="text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Teléfono</p>
                    <a
                      href={`tel:${AGENCY.phone}`}
                      className="text-sm font-medium text-dark-800 hover:text-primary-600 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-primary-500"
                    >
                      {AGENCY.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
                    <MessageCircle size={18} className="text-teal-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">WhatsApp</p>
                    <a
                      href={`https://wa.me/${AGENCY.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-dark-800 hover:text-teal-600 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-teal-500"
                    >
                      Escríbenos por WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <MapPin size={18} className="text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Ubicación</p>
                    <p className="text-sm font-medium text-dark-800">{AGENCY.location}</p>
                    <p className="text-xs text-dark-700">{AGENCY.locationDetail}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Globe size={18} className="text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Modalidad</p>
                    <p className="text-sm font-medium text-dark-800">{AGENCY.serviceMode}</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
