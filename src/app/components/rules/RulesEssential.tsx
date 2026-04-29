import { Timer, Users, Target, Zap } from 'lucide-react';

const baseRules = [
  { code: 'R-01', text: 'El partido se divide en cuatro periodos de ocho minutos de juego efectivo.' },
  { code: 'R-02', text: 'Cada equipo puede tener un máximo de cuatro jugadores en cancha que no sumen más de 8.0 puntos.' },
  { code: 'R-03', text: 'Se anota un gol cuando el portador cruza la línea de meta rival con dos ruedas.' },
  { code: 'R-04', text: 'El contacto físico intencional entre los cuerpos de los jugadores está prohibido y se sanciona.' },
  { code: 'R-05', text: 'El choque frontal o lateral entre las sillas de ruedas es legal y fundamental.' },
  { code: 'R-06', text: 'Los jugadores deben picar o pasar el balón antes de que transcurran ocho segundos.' },
  { code: 'R-07', text: 'Un equipo tiene un máximo de cuarenta segundos para anotar.' },
];

const highlights = [
  { icon: Timer, label: '4 × 8 MIN', desc: 'Cuartos de juego efectivo' },
  { icon: Users, label: '≤ 8.0 PTS', desc: 'Límite de puntos en cancha' },
  { icon: Target, label: '2 RUEDAS', desc: 'Para que el gol sea válido' },
  { icon: Zap, label: '40 SEG', desc: 'Reloj de posesión ofensiva' },
];

export function RulesEssential() {
  return (
    <section
      id="esencial"
      className="py-20 md:py-32 bg-background relative border-b-[3px] border-border"
      aria-labelledby="essential-heading"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">
        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-center md:text-left">
          <span className="technical-label text-[var(--brand-blue)] block mb-4">
            SEC.01 // LO ESENCIAL
          </span>
          <h2 id="essential-heading" className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            El juego en{' '}
            <span className="text-primary italic">30 segundos</span>
          </h2>
        </div>

        {/* Asymmetric grid: lead + stat highlights */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start mb-16">
          {/* Lead paragraph */}
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-[var(--on-surface-muted)] leading-relaxed border-l-[3px] border-primary pl-6">
              El rugby en silla de ruedas es un deporte de invasión: dos equipos de cuatro
              buscan cruzar la línea de meta rival con el balón bajo control. El contacto
              entre sillas es legal (y parte del plan). El partido tiene cuatro cuartos y
              un reloj de posesión que obliga a atacar con ritmo. Si entiendes el tiempo y
              el posicionamiento, ya puedes seguir un partido sin perderte cada dos jugadas.
            </p>
          </div>

          {/* Stat chips */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="bg-surface border-[3px] border-border p-4 shadow-[var(--shadow-hard-sm)] chamfer-card flex flex-col gap-1 group hover:-translate-y-1 hover:-translate-x-1 transition-transform"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span className="technical-label text-primary">{label}</span>
                </div>
                <span className="text-sm text-[var(--on-surface-muted)] font-ui">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reglas base list */}
        <div className="bg-surface border-[3px] border-border shadow-[var(--shadow-hard)] relative overflow-hidden">
          <div className="noise-overlay" aria-hidden="true" />
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b-[3px] border-border bg-[var(--brand-black)] text-[var(--brand-white)]">
            <span className="technical-label">REGLAMENTO // REGLAS BASE</span>
            <span className="technical-label text-[var(--brand-metal)]">WWR_2026</span>
          </div>
          <ol className="divide-y-[3px] divide-border list-none p-0 m-0" role="list">
            {baseRules.map((rule) => (
              <li
                key={rule.code}
                className="flex items-start gap-5 px-6 py-5 hover:bg-surface-dim transition-colors group"
              >
                <span
                  className="technical-label text-primary shrink-0 w-12 pt-0.5 group-hover:text-[var(--brand-blue)] transition-colors"
                  aria-label={`Regla ${rule.code}`}
                >
                  {rule.code}
                </span>
                <p className="m-0 text-foreground leading-relaxed">{rule.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
