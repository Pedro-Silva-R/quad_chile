import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';

export function SportHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center !pt-20 md:!pt-32 !pb-16 md:!pb-32 overflow-hidden diagonal-section-bottom bg-[var(--brand-black)] border-b-[3px] border-border">
      {/* Background with priority loading */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/placeholder-sport-hero.webp"
          alt="Jugadores de quad rugby chocando sillas"
          className="w-full h-full object-cover opacity-40 dark:opacity-30 mix-blend-luminosity"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-black)] to-transparent opacity-80"></div>
        <div className="scanlines absolute inset-0 z-0"></div>
      </div>

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] w-full">
        <div className="max-w-4xl">
          {/* Technical Label */}
          <div className="inline-flex items-center gap-3 mb-6 bg-[var(--brand-white)] text-[var(--brand-black)] px-3 py-1 border-2 border-[var(--brand-white)]">
            <span className="w-2 h-2 bg-primary animate-pulse"></span>
            <span className="technical-label">SYS_DOC: EL_DEPORTE</span>
          </div>

          <h1 className="text-[var(--brand-white)] mb-6 font-display italic font-black uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            Quad rugby:<br/>
            <span className="text-primary">velocidad</span>, impacto y estrategia.
          </h1>
          
          <p className="text-[var(--brand-white)]/90 text-xl md:text-2xl max-w-2xl font-ui leading-relaxed mb-10 border-l-[3px] border-primary pl-6 drop-shadow-md">
            Entiende la lógica del juego, las reglas base y por qué este deporte engancha desde el primer choque.
          </p>

          {/* Quick Links / Chips Técnicos */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'REGLAS', path: '/reglas' },
              { label: 'CLASIFICACIÓN', path: '/clasificacion' },
              { label: 'EQUIPAMIENTO', path: '#equipamiento' },
              { label: 'FAQ', path: '#faq' }
            ].map((chip) => (
              chip.path.startsWith('#') ? (
                <a 
                  key={chip.label}
                  href={chip.path}
                  className="technical-label px-4 py-2 bg-transparent text-[var(--brand-white)] border-2 border-[var(--brand-metal)] hover:border-primary hover:bg-primary/10 transition-colors shadow-hard-sm"
                  aria-label={`Ir a sección ${chip.label}`}
                >
                  [{chip.label}]
                </a>
              ) : (
                <Link
                  key={chip.label}
                  to={chip.path}
                  className="technical-label px-4 py-2 bg-[var(--brand-white)] text-[var(--brand-black)] border-2 border-[var(--brand-white)] hover:bg-primary hover:text-[var(--brand-white)] hover:border-primary transition-colors shadow-hard-sm"
                  aria-label={`Ver página de ${chip.label}`}
                >
                  {chip.label} //
                </Link>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#que-es"
        aria-label="Desplazar hacia abajo a Qué es el rugby en silla de ruedas"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce no-underline flex flex-col items-center gap-2"
      >
        <span className="technical-label text-[var(--brand-white)]/50">SCROLL</span>
        <ChevronDown className="w-8 h-8 text-[var(--brand-white)]/70 hover:text-[var(--brand-white)] transition-colors" />
      </a>
    </section>
  );
}
