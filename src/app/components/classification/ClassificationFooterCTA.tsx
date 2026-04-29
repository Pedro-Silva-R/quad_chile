import { Link } from 'react-router';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function ClassificationFooterCTA() {
  return (
    <section
      className="!py-24 md:!py-40 bg-[var(--brand-black)] text-[var(--brand-white)] relative overflow-hidden diagonal-section-top border-t-[3px] border-border mt-12"
      aria-labelledby="cls-cta-heading"
    >
      {/* Background effects */}
      <div className="noise-overlay opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" aria-hidden="true" />
      {/* Decorative score */}
      <div
        className="absolute bottom-0 right-0 text-[clamp(10rem,25vw,22rem)] font-black text-[var(--brand-white)] opacity-[0.03] leading-none select-none pointer-events-none font-display italic tracking-tighter translate-y-1/4"
        aria-hidden="true"
      >
        8.0
      </div>

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] text-center">
        <div className="max-w-3xl mx-auto">

          {/* Technical badge */}
          <div className="inline-block mb-8 border-[3px] border-[var(--brand-white)] p-2 bg-[var(--brand-black)] -rotate-2">
            <span className="technical-label">SYS.READY // CLASIFICACION_FUNC</span>
          </div>

          <h2
            id="cls-cta-heading"
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8"
          >
            El equilibrio lo pone el sistema.{' '}
            <span className="text-primary italic">Tú pones el juego en la cancha.</span>
          </h2>

          <p className="text-xl text-[var(--brand-white)]/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Da el primer paso para entrenar o pregunta por una derivación clínica.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            {/* Primary CTA */}
            <Link
              to="/participa"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground border-[3px] border-border font-bold uppercase tracking-widest text-lg no-underline transition-transform hover:-translate-y-1 hover:-translate-x-1 shadow-[var(--shadow-hard-sm)]"
              aria-label="Ir a la página de Participa para probar el deporte"
            >
              <span className="relative z-10 flex items-center gap-3">
                [Quiero probar el deporte]
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/contacto"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-[var(--brand-white)] border-[3px] border-[var(--brand-white)] font-bold uppercase tracking-widest text-lg no-underline transition-colors hover:bg-[var(--brand-white)] hover:text-[var(--brand-black)] shadow-[var(--shadow-hard-sm)]"
              aria-label="Ir al formulario de contacto para consultas o derivar un paciente"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Tengo dudas / Derivar paciente
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
