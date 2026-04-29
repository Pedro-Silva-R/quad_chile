import { ClipboardList, Mail } from 'lucide-react';
import { Link } from 'react-router';

const criteria = [
  'Verifica compromiso motor permanente en al menos tres extremidades.',
  'Reúne historial clínico actualizado para el Formulario de Información Médica Diagnóstica oficial.',
  'Evalúa independencia básica en propulsión de silla antes de derivar a entrenamiento.',
  'Contáctanos para coordinar una evaluación técnica inicial en cancha.',
];

export function ClassificationHealth() {
  return (
    <section
      id="para-salud"
      className="py-20 md:py-32 bg-surface-dim relative border-b-[3px] border-border"
      aria-labelledby="health-heading"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-right">
          <span className="technical-label text-[var(--brand-blue)] block mb-4">
            SEC.04 // PARA SALUD Y REHABILITACIÓN
          </span>
          <h2
            id="health-heading"
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            Para profesionales de{' '}
            <span className="text-primary italic">salud</span>
          </h2>
        </div>

        {/* Two-column layout: text + criteria */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-0 border-[3px] border-border shadow-[var(--shadow-hard)]">

          {/* Left: lead text */}
          <div className="p-8 md:p-12 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-border bg-background relative">
            <div className="noise-overlay opacity-20" aria-hidden="true" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 border-[3px] border-border flex items-center justify-center bg-surface shadow-[var(--shadow-hard-sm)]">
                  <ClipboardList className="w-5 h-5 text-[var(--brand-metal)]" aria-hidden="true" />
                </div>
                <span className="technical-label text-[var(--brand-metal)]">DERIVACIÓN_CLÍNICA</span>
              </div>

              <p className="text-lg leading-relaxed text-[var(--on-surface-muted)] mb-6">
                Si eres fisiatra, kinesiólogo o terapeuta ocupacional, tu derivación puede cambiarle
                el camino a una persona.
              </p>
              <p className="text-lg leading-relaxed text-[var(--on-surface-muted)] mb-8">
                Para una clasificación oficial se requiere documentación médica que respalde una
                deficiencia física elegible según WWR (potencia muscular, deficiencia de extremidades,
                rango de movimiento pasivo, hipertonía, ataxia o atetosis). Lo que nos importa es la{' '}
                <strong className="text-foreground">función en cancha</strong>.
              </p>

              <blockquote className="border-l-[3px] border-primary pl-6 m-0">
                <p className="text-foreground font-bold italic text-lg m-0 leading-snug">
                  "Si tienes un paciente que calza, escríbenos y lo guiamos con pasos claros, sin
                  burocracia innecesaria."
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right: criteria checklist */}
          <div className="p-8 md:p-12 bg-[var(--brand-black)] text-[var(--brand-white)] relative">
            <div className="noise-overlay opacity-30" aria-hidden="true" />
            <div className="relative z-10">
              <span className="technical-label text-[var(--brand-metal)] block mb-8">
                CHECKLIST // ANTES DE DERIVAR
              </span>
              <ol className="space-y-5 list-none p-0 m-0" role="list">
                {criteria.map((item, index) => (
                  <li
                    key={index}
                    role="listitem"
                    className="flex items-start gap-5"
                  >
                    <span
                      className="technical-label text-primary shrink-0 w-6"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="m-0 text-[var(--brand-white)]/80 leading-relaxed text-sm md:text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>

              {/* CTA link to contact */}
              <div className="mt-10 pt-8 border-t-[3px] border-[var(--brand-white)]/10">
                <Link
                  to="/contacto"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-transparent text-[var(--brand-white)] border-[3px] border-[var(--brand-white)]/40 font-bold uppercase tracking-widest text-sm no-underline hover:bg-[var(--brand-white)] hover:text-[var(--brand-black)] hover:border-[var(--brand-white)] transition-all shadow-[var(--shadow-hard-sm)]"
                  aria-label="Ir al formulario de contacto para derivar un paciente"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Derivar paciente
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
