import { Link } from 'react-router';
import { ChevronDown } from 'lucide-react';

const quickActions = [
  { label: 'JUGADOR', anchor: '#jugador' },
  { label: 'VOLUNTARIO', anchor: '#voluntario' },
  { label: 'ÁRBITRO', anchor: '#arbitro' },
  { label: 'CLASIFICADOR', anchor: '#clasificador' },
  { label: 'WHATSAPP', anchor: '#contacto', isExternal: false, isPrimary: true },
];

export function ParticipateHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center !pt-20 md:!pt-32 !pb-16 md:!pb-32 overflow-hidden diagonal-section-bottom bg-[var(--brand-black)] border-b-[3px] border-border">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/placeholder-participate-hero.webp"
          alt="Atleta de quad rugby en acción"
          className="w-full h-full object-cover opacity-35 dark:opacity-25 mix-blend-luminosity"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-black)] via-[var(--brand-black)]/60 to-transparent" />
        <div className="scanlines absolute inset-0 z-0" />
      </div>

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] w-full">
        <div className="max-w-4xl">
          {/* Technical Label */}
          <div className="inline-flex items-center gap-3 mb-6 bg-[var(--brand-white)] text-[var(--brand-black)] px-3 py-1 border-2 border-[var(--brand-white)]">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="technical-label">SYS_DOC: PARTICIPA // MODO_RECLUTAMIENTO_ACTIVO</span>
          </div>

          <h1 className="text-[var(--brand-white)] mb-6 font-display italic font-black uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            Participa
          </h1>

          <p className="text-[var(--brand-white)]/90 text-xl md:text-2xl max-w-2xl font-ui leading-relaxed mb-10 border-l-[3px] border-primary pl-6 drop-shadow-md">
            El rugby en silla de ruedas está creciendo en Chile y puedes sumarte hoy. Ya sea jugando, ayudando en la organización o formándote en roles técnicos, hay espacio para ti. Elige un camino y te guiamos desde el primer mensaje.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            {quickActions.map((action) =>
              action.isPrimary ? (
                <a
                  key={action.label}
                  href={action.anchor}
                  className="technical-label px-4 py-2 bg-primary text-primary-foreground border-2 border-primary hover:bg-[var(--brand-white)] hover:text-[var(--brand-black)] hover:border-[var(--brand-white)] transition-colors"
                  aria-label={`Ir a sección de ${action.label}`}
                >
                  [{action.label}]
                </a>
              ) : (
                <a
                  key={action.label}
                  href={action.anchor}
                  className="technical-label px-4 py-2 bg-transparent text-[var(--brand-white)] border-2 border-[var(--brand-metal)] hover:border-primary hover:bg-primary/10 transition-colors"
                  aria-label={`Ir a sección de ${action.label}`}
                >
                  [{action.label}]
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#elige-tu-camino"
        aria-label="Desplazar hacia la sección de selección de rol"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce no-underline flex flex-col items-center gap-2"
      >
        <span className="technical-label text-[var(--brand-white)]/50">SCROLL</span>
        <ChevronDown className="w-8 h-8 text-[var(--brand-white)]/70 hover:text-[var(--brand-white)] transition-colors" />
      </a>
    </section>
  );
}
