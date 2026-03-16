import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AGENCY } from './config/agency';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="es" />
        <title>{AGENCY.seo.title}</title>
        <meta name="description" content={AGENCY.seo.description} />
        <link rel="canonical" href={AGENCY.domain} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={AGENCY.domain} />
        <meta property="og:title" content={AGENCY.seo.title} />
        <meta property="og:description" content={AGENCY.seo.description} />
        <meta property="og:image" content={`${AGENCY.domain}${AGENCY.seo.ogImage}`} />
        <meta property="og:locale" content="es_CR" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={AGENCY.seo.title} />
        <meta name="twitter:description" content={AGENCY.seo.description} />
      </Helmet>

      {/* Skip link — first in DOM */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Team />
        <Contact />
      </main>

      <Footer />
    </HelmetProvider>
  );
}
