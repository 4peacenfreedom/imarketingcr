import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function PrivacyModal({ onClose }) {
  // Cerrar con Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar política de privacidad"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-dark-700 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-primary-600"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <h2
          id="privacy-title"
          className="font-heading text-2xl font-extrabold text-dark-800"
        >
          Política de Privacidad
        </h2>
        <p className="mt-1 text-sm text-dark-700/60">Última actualización: marzo de 2026</p>

        <div className="mt-6 space-y-6 text-sm leading-relaxed text-dark-700">
          <p>
            En <strong>imarketingcr</strong> tu privacidad es una prioridad. Esta política explica,
            de manera clara y sencilla, cómo tratamos la información que compartes con nosotros al
            usar nuestro sitio web o contactarnos por cualquier medio.
          </p>

          <section>
            <h3 className="font-heading text-base font-bold text-dark-800">
              ¿Qué información recopilamos?
            </h3>
            <p className="mt-2">
              Solo recopilamos la información que nos proporcionas de forma voluntaria: nombre,
              correo electrónico, número de teléfono y el mensaje que nos envías a través de
              nuestros formularios de contacto u otros medios de comunicación.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-base font-bold text-dark-800">
              ¿Para qué usamos tu información?
            </h3>
            <ul className="mt-2 space-y-1.5">
              {[
                'Responder tus consultas y darte el seguimiento que necesitas.',
                'Enviarte cotizaciones o propuestas que hayas solicitado.',
                'Mejorar la calidad de nuestros servicios y la experiencia en nuestro sitio.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-primary-100 bg-primary-50 p-4">
            <h3 className="font-heading text-base font-bold text-dark-800">
              Lo que NUNCA haremos con tu información
            </h3>
            <ul className="mt-2 space-y-1.5">
              {[
                'No venderemos, cederemos ni compartiremos tus datos personales con terceros sin tu consentimiento explícito.',
                'No utilizaremos información sensible para fines publicitarios ni de marketing no solicitado.',
                'No enviaremos comunicaciones comerciales masivas sin que lo hayas autorizado previamente.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-base font-bold text-dark-800">
              Tu derecho a ser olvidado/a
            </h3>
            <p className="mt-2">
              En cualquier momento puedes solicitarnos que eliminemos tu información de contacto de
              nuestras bases de datos. Solo envíanos un correo a{' '}
              <a
                href="mailto:info@imarketingcr.com"
                className="font-medium text-primary-600 underline underline-offset-2 hover:text-primary-500"
              >
                info@imarketingcr.com
              </a>{' '}
              con el asunto <em>"Eliminar mis datos"</em> y lo gestionamos de inmediato, sin
              preguntas.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-base font-bold text-dark-800">Seguridad</h3>
            <p className="mt-2">
              Aplicamos medidas técnicas y organizativas razonables para proteger tu información y
              prevenir accesos no autorizados, pérdida o alteración de datos.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-base font-bold text-dark-800">
              Cambios en esta política
            </h3>
            <p className="mt-2">
              Podemos actualizar esta política en cualquier momento. Te recomendamos revisarla
              periódicamente. Cualquier cambio entrará en vigencia desde el momento en que se
              publique en nuestro sitio.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-base font-bold text-dark-800">¿Tienes dudas?</h3>
            <p className="mt-2">
              Escríbenos a{' '}
              <a
                href="mailto:info@imarketingcr.com"
                className="font-medium text-primary-600 underline underline-offset-2 hover:text-primary-500"
              >
                info@imarketingcr.com
              </a>{' '}
              — con gusto te atendemos.
            </p>
          </section>
        </div>

        <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
