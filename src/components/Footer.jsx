import { useState } from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { AGENCY } from '../config/agency';
import PrivacyModal from './PrivacyModal';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
];

const SOCIAL_LINKS = [
  { href: AGENCY.social.linkedin, Icon: Linkedin, label: 'LinkedIn de imarketingcr' },
  { href: AGENCY.social.instagram, Icon: Instagram, label: 'Instagram de imarketingcr' },
  { href: AGENCY.social.facebook, Icon: Facebook, label: 'Facebook de imarketingcr' },
];

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
    {privacyOpen && <PrivacyModal onClose={() => setPrivacyOpen(false)} />}
    <footer className="bg-dark-900 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#inicio"
              className="font-heading text-2xl font-extrabold tracking-tight focus-visible:rounded focus-visible:outline-2 focus-visible:outline-white"
              aria-label="imarketingcr — Ir al inicio"
            >
              <span className="text-primary-400">i</span>marketingcr
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              {AGENCY.tagline}
            </p>
            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3" role="list" aria-label="Redes sociales">
              {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  role="listitem"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors duration-200 hover:bg-primary-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Mapa del sitio">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white/40">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-primary-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white/40">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              <li>
                <a
                  href={`mailto:${AGENCY.email}`}
                  className="text-sm text-white/70 transition-colors hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-primary-400"
                >
                  {AGENCY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${AGENCY.phone}`}
                  className="text-sm text-white/70 transition-colors hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-primary-400"
                >
                  {AGENCY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${AGENCY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-primary-400"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-sm text-white/50">{AGENCY.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 imarketingcr. Todos los derechos reservados.
          </p>
          <button
            type="button"
            onClick={() => setPrivacyOpen(true)}
            className="text-xs text-white/40 underline underline-offset-2 transition-colors hover:text-white/70 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-primary-400"
          >
            Política de privacidad
          </button>
        </div>
      </div>
    </footer>
    </>
  );
}
