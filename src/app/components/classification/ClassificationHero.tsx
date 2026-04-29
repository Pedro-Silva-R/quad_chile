import { ChevronDown } from 'lucide-react';

const quickLinks = [
  { label: 'QUÉ SIGNIFICA', anchor: '#que-significa' },
  { label: 'EJEMPLOS', anchor: '#matematica-cancha' },
  { label: 'PARA SALUD', anchor: '#para-salud' },
  { label: 'FAQ', anchor: '#faq-clasificacion' },
];

export function ClassificationHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center !pt-20 md:!pt-32 !pb-16 md:!pb-28 overflow-hidden diagonal-section-bottom bg-[var(--brand-black)] border-b-[3px] border-border"
      aria-label="Cabecera de la página de Clasificación"
    >
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <div className="scanlines absolute inset-0 z-0" />
        <div className="noise-overlay opacity-40 absolute inset-0 z-0" aria-hidden="true" />
        {/* Accent diagonal slash */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/8 to-transparent pointer-events-none"
          style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 10% 100%)' }}
          aria-hidden="true"
        />
        {/* Score decorative label */}
        <div
          className="absolute bottom-20 right-[var(--edge-safe)] text-[clamp(8rem,20vw,18rem)] font-black text-[var(--brand-white)] opacity-[0.03] leading-none select-none pointer-events-none font-display italic tracking-tighter"
          aria-hidden="true"
        >
          8.0
        </div>
      </div>

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] w-full">
        <div className="max-w-5xl">
          {/* System Label */}
          <div className="inline-flex items-center gap-3 mb-6 bg-[var(--brand-white)] text-[var(--brand-black)] px-3 py-1 border-2 border-[var(--brand-white)]">
            <span className="w-2 h-2 bg-primary" aria-hidden="true" />
            <span className="technical-label">SYS_DOC: CLASIFICACIÓN // WWR_FUNC</span>
          </div>

          {/* H1 */}
          <h1 className="text-[var(--brand-white)] mb-6 font-display italic font-black uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            Clasificación{' '}
            <br />
            <span className="text-primary">deportiva</span>
          </h1>

          {/* Lead */}
          <p className="text-[var(--brand-white)]/90 text-xl md:text-2xl max-w-3xl font-ui leading-relaxed mb-10 border-l-[3px] border-primary pl-6 drop-shadow-md">
            La clasificación es el sistema que mantiene el juego parejo. No te dice "qué diagnóstico
            tienes"; mide qué puedes hacer en cancha y cómo eso se traduce en puntos. Con eso se arma
            el límite del equipo y se evita que el partido se decida por una sola ventaja física.
          </p>

          {/* Quick Links */}
          <nav aria-label="Índice de secciones de clasificación">
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
        href="#que-significa"
        aria-label="Desplazar hacia la explicación de la clasificación"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce no-underline flex flex-col items-center gap-2"
      >
        <span className="technical-label text-[var(--brand-white)]/50">SCROLL</span>
        <ChevronDown className="w-8 h-8 text-[var(--brand-white)]/70 hover:text-[var(--brand-white)] transition-colors" />
      </a>
    </section>
  );
}
