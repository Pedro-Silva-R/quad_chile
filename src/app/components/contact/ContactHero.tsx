import { ChevronDown } from 'lucide-react';

const quickLinks = [
  { label: 'FORMULARIO', anchor: '#formulario-contacto', isPrimary: true },
  { label: 'WHATSAPP', anchor: '#contacto-directo' },
  { label: 'EMAIL', anchor: '#contacto-directo' },
];

export function ContactHero() {
  return (
    <section
      className="relative min-h-[55vh] flex items-center !pt-20 md:!pt-32 !pb-16 md:!pb-28 overflow-hidden diagonal-section-bottom bg-[var(--brand-black)] border-b-[3px] border-border"
      aria-label="Cabecera de la página de Contacto"
    >
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <div className="scanlines absolute inset-0 z-0" />
        <div className="noise-overlay opacity-40 absolute inset-0 z-0" aria-hidden="true" />
        {/* Accent diagonal slash */}
        <div
          className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-primary/6 to-transparent pointer-events-none"
          style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 10% 100%)' }}
          aria-hidden="true"
        />
        {/* Decorative signal label */}
        <div
          className="absolute bottom-20 right-[var(--edge-safe)] text-[clamp(8rem,18vw,16rem)] font-black text-[var(--brand-white)] opacity-[0.03] leading-none select-none pointer-events-none font-display italic tracking-tighter"
          aria-hidden="true"
        >
          MSG
        </div>
      </div>

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] w-full">
        <div className="max-w-4xl">
          {/* System Label */}
          <div className="inline-flex items-center gap-3 mb-6 bg-[var(--brand-white)] text-[var(--brand-black)] px-3 py-1 border-2 border-[var(--brand-white)]">
            <span className="w-2 h-2 bg-primary animate-pulse" aria-hidden="true" />
            <span className="technical-label">SYS_DOC: CONTACTO // CANAL_ACTIVO</span>
          </div>

          {/* H1 */}
          <h1 className="text-[var(--brand-white)] mb-6 font-display italic font-black uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            Contacto
          </h1>

          {/* Lead */}
          <p className="text-[var(--brand-white)]/90 text-xl md:text-2xl max-w-3xl font-ui leading-relaxed mb-10 border-l-[3px] border-primary pl-6 drop-shadow-md">
            Cuéntanos qué necesitas y te respondemos. Ya sea para jugar, colaborar o resolver una
            duda, estamos disponibles.
          </p>

          {/* Quick Links */}
          <nav aria-label="Accesos directos de contacto">
            <div className="flex flex-wrap gap-3" role="list">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.anchor}
                  role="listitem"
                  className={
                    link.isPrimary
                      ? 'technical-label px-4 py-2 bg-primary text-primary-foreground border-2 border-primary hover:bg-[var(--brand-white)] hover:text-[var(--brand-black)] hover:border-[var(--brand-white)] transition-colors no-underline'
                      : 'technical-label px-4 py-2 bg-transparent text-[var(--brand-white)] border-2 border-[var(--brand-metal)] hover:border-primary hover:bg-primary/10 transition-colors no-underline'
                  }
                  aria-label={`Ir a: ${link.label}`}
                >
                  [{link.label}]
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#formulario-contacto"
        aria-label="Desplazar hacia el formulario de contacto"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce no-underline flex flex-col items-center gap-2"
      >
        <span className="technical-label text-[var(--brand-white)]/50">SCROLL</span>
        <ChevronDown className="w-8 h-8 text-[var(--brand-white)]/70 hover:text-[var(--brand-white)] transition-colors" />
      </a>
    </section>
  );
}
