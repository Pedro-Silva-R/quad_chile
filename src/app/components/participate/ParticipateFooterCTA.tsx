import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function ParticipateFooterCTA() {
  return (
    <section className="!py-24 md:!py-40 bg-[var(--brand-black)] text-[var(--brand-white)] relative overflow-hidden diagonal-section-top border-t-[6px] border-primary">
      {/* Background Effects */}
      <div className="noise-overlay opacity-40" />
      <div className="scanlines absolute inset-0 opacity-20 pointer-events-none" />

      {/* Diagonal red accent stripe top-right */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-[0.07] pointer-events-none"
        style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
        aria-hidden="true"
      />

      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-black text-[20vw] leading-none tracking-tighter text-[var(--brand-white)] opacity-[0.04] uppercase"
          aria-hidden="true"
        >
          ÚNETE
        </span>
      </div>

      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] text-center">
        <div className="max-w-3xl mx-auto">

          <div className="inline-block mb-8 border-[3px] border-primary p-2 rotate-[-2deg]">
            <span className="technical-label text-primary">SYS.READY // INICIA_PROCESO</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 text-[var(--brand-white)]">
            La decisión parte contigo.{' '}
            <span className="text-primary italic">Súmate hoy mismo</span> al rugby en silla de ruedas.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            {/* Primary CTA */}
            <Link
              to="/contacto"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground border-[3px] border-primary font-bold uppercase tracking-widest text-lg no-underline transition-all hover:-translate-y-1 hover:-translate-x-1 shadow-[var(--shadow-hard-sm)] hover:shadow-[var(--shadow-hard)] hover:bg-[var(--brand-white)] hover:text-[var(--brand-black)] hover:border-[var(--brand-white)]"
              aria-label="Ir a la página de contacto"
            >
              <span className="flex items-center gap-3">
                [Contacto]
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/el-deporte"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-[var(--brand-white)] border-[3px] border-[var(--brand-metal)] font-bold uppercase tracking-widest text-lg no-underline transition-colors hover:border-[var(--brand-white)] shadow-[var(--shadow-hard-sm)]"
              aria-label="Leer más sobre el deporte"
            >
              [El Deporte]
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
