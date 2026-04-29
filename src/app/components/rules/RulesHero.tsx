import { ChevronDown } from 'lucide-react';

const quickLinks = [
  { label: 'LO ESENCIAL', anchor: '#esencial' },
  { label: 'SITUACIONES', anchor: '#situaciones' },
  { label: 'GLOSARIO', anchor: '#glosario' },
  { label: 'FAQ', anchor: '#faq-reglas' },
];

export function RulesHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center !pt-20 md:!pt-32 !pb-16 md:!pb-28 overflow-hidden diagonal-section-bottom bg-[var(--brand-black)] border-b-[3px] border-border"
      aria-label="Cabecera de la página de Reglas"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/placeholder-rules-hero.webp"
          alt="Reglamento y táctica de quad rugby"
          className="w-full h-full object-cover opacity-35 dark:opacity-25 mix-blend-luminosity"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-black)] via-[var(--brand-black)]/60 to-transparent" />
        <div className="scanlines absolute inset-0 z-0" />
        {/* Accent diagonal slash - subtle */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"
          style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 10% 100%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] w-full">
        <div className="max-w-5xl">
          {/* System Label */}
          <div className="inline-flex items-center gap-3 mb-6 bg-[var(--brand-white)] text-[var(--brand-black)] px-3 py-1 border-2 border-[var(--brand-white)]">
            <span className="w-2 h-2 bg-primary" aria-hidden="true" />
            <span className="technical-label">SYS_DOC: REGLAS // WWR_REF_2026</span>
          </div>

          {/* H1 */}
          <h1 className="text-[var(--brand-white)] mb-6 font-display italic font-black uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            Reglas<br />
            <span className="text-primary">Oficiales</span>
          </h1>

          {/* Lead */}
          <p className="text-[var(--brand-white)]/90 text-xl md:text-2xl max-w-3xl font-ui leading-relaxed mb-10 border-l-[3px] border-primary pl-6 drop-shadow-md">
            Aquí está el reglamento internacional de la World Wheelchair Rugby (WWR) con
            referencia 2026. Lo importante no es memorizarlo: es entender qué se permite,
            qué se castiga y por qué el partido no se vuelve un caos. Velocidad, contacto
            y táctica, pero con límites bien marcados.
          </p>

          {/* Quick Links */}
          <nav aria-label="Índice de secciones de reglas">
            <div className="flex flex-wrap gap-3" role="list">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.anchor}
                  role="listitem"
                  className="technical-label px-4 py-2 bg-transparent text-[var(--brand-white)] border-2 border-[var(--brand-metal)] hover:border-primary hover:bg-primary/10 transition-colors no-underline"
                  aria-label={`Ir a la sección: ${link.label}`}
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
        href="#esencial"
        aria-label="Desplazar hacia el resumen esencial"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce no-underline flex flex-col items-center gap-2"
      >
        <span className="technical-label text-[var(--brand-white)]/50">SCROLL</span>
        <ChevronDown className="w-8 h-8 text-[var(--brand-white)]/70 hover:text-[var(--brand-white)] transition-colors" />
      </a>
    </section>
  );
}
