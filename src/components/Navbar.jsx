import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { AGENCY } from '../config/agency';
import { useScrolled } from '../hooks/useScrolled';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Focus trap in mobile menu
  useEffect(() => {
    if (!open) return;
    const focusable = drawerRef.current?.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();

    const trap = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        }
      }
      if (e.key === 'Escape') {
        setOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [open]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav
        role="navigation"
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="font-heading text-xl font-extrabold tracking-tight text-dark-800 focus-visible:rounded focus-visible:outline-2"
          aria-label="imarketingcr — Ir al inicio"
        >
          <span className="text-primary-500">i</span>marketingcr
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 focus-visible:rounded focus-visible:outline-2 ${
                  scrolled ? 'text-dark-700' : 'text-dark-700'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden min-h-[44px] items-center rounded-lg bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 md:inline-flex"
        >
          Hablemos
        </a>

        {/* Hamburger */}
        <button
          ref={hamburgerRef}
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-dark-800 transition-colors hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 md:hidden"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <span className="font-heading text-lg font-extrabold text-dark-800">
            <span className="text-primary-500">i</span>marketingcr
          </span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-dark-700 hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-primary-500"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-6" aria-label="Menú móvil">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="rounded-md px-3 py-3 text-base font-medium text-dark-700 transition-colors hover:bg-primary-50 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-primary-500"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary-600 px-5 py-2 text-sm font-semibold text-white hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-primary-500"
          >
            Hablemos
          </a>
        </nav>
      </div>
    </header>
  );
}
