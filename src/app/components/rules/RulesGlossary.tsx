import { useState } from 'react';
import { BookMarked } from 'lucide-react';

type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
};

const terms: GlossaryTerm[] = [
  {
    id: 'driblar',
    term: 'Driblar',
    definition:
      'Rebotar o picar el balón contra el suelo para reiniciar el conteo obligatorio de ocho segundos.',
  },
  {
    id: 'try',
    term: 'Try (Gol)',
    definition:
      'Cruzar la línea de meta rival con al menos dos ruedas de la silla, manteniendo control del balón.',
  },
  {
    id: 'spinning',
    term: 'Spinning',
    definition:
      'Falta peligrosa al impactar la silla de un oponente por detrás del eje trasero, provocando un giro brusco.',
  },
  {
    id: 'backcourt',
    term: 'Backcourt (Pista trasera)',
    definition:
      'Mitad defensiva de la cancha de un equipo, desde su línea de fondo hasta la línea central.',
  },
  {
    id: 'key',
    term: 'Key (Zona Clave)',
    definition:
      'Área restringida de ocho metros de ancho frente a la línea de meta, donde se concentran bloqueos y cortes.',
  },
  {
    id: 'timeout',
    term: 'Time-out',
    definition:
      'Tiempo fuera para detener el reloj y ajustar tácticas, descansar o reorganizarse.',
  },
  {
    id: 'held-ball',
    term: 'Held ball (Balón retenido)',
    definition:
      'Dos o más jugadores toman el balón a la vez; se resuelve con la flecha de posesión alterna.',
  },
  {
    id: 'bumper',
    term: 'Bumper (Parachoques)',
    definition:
      'Estructura metálica frontal de la silla, diseñada para absorber impactos y enganchar la silla rival.',
  },
];

export function RulesGlossary() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="glosario"
      className="py-20 md:py-32 bg-background relative border-b-[3px] border-border"
      aria-labelledby="glossary-heading"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="flex items-center md:items-end justify-center md:justify-between gap-6 mb-14 md:mb-20 flex-wrap text-center md:text-left">
          <div>
            <span className="technical-label text-[var(--brand-blue)] block mb-4">
              SEC.03 // GLOSARIO TÁCTICO
            </span>
            <h2 id="glossary-heading" className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              Glosario <span className="text-primary italic">táctico</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 border-[3px] border-border px-4 py-2 shadow-[var(--shadow-hard-sm)]">
            <BookMarked className="w-5 h-5 text-[var(--brand-metal)]" aria-hidden="true" />
            <span className="technical-label text-[var(--brand-metal)]">
              {terms.length} TÉRMINOS
            </span>
          </div>
        </div>

        {/* Glossary grid */}
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-[3px] border-border shadow-[var(--shadow-hard)]">
          {terms.map((item, index) => {
            const isActive = activeId === item.id;
            const isOdd = index % 2 !== 0;
            return (
              <div
                key={item.id}
                className={[
                  'relative border-[var(--border)] cursor-pointer transition-colors overflow-hidden',
                  'border-b-[3px] last:border-b-0 sm:[&:nth-child(2n)]:border-b-[3px] sm:[&:nth-last-child(-n+2)]:border-b-0',
                  'lg:[&:nth-child(4n)]:border-r-0 lg:border-r-[3px] lg:[&:nth-last-child(-n+4)]:border-b-0',
                  isActive
                    ? 'bg-[var(--brand-black)] text-[var(--brand-white)]'
                    : isOdd
                    ? 'bg-surface hover:bg-surface-dim'
                    : 'bg-background hover:bg-surface-dim',
                ].join(' ')}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(item.id)}
                onBlur={() => setActiveId(null)}
                tabIndex={0}
                role="group"
                aria-label={item.term}
              >
                {/* Index badge */}
                <div
                  className={[
                    'absolute top-0 right-0 px-2 py-0.5 border-l-[3px] border-b-[3px] border-[var(--border)]',
                    isActive ? 'bg-primary text-primary-foreground' : 'bg-surface',
                  ].join(' ')}
                  aria-hidden="true"
                >
                  <span className="technical-label">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="p-5 pt-8">
                  <dt
                    className={[
                      'font-display font-black text-lg uppercase tracking-tight mb-2 transition-colors',
                      isActive ? 'text-primary' : 'text-foreground',
                    ].join(' ')}
                  >
                    {item.term}
                  </dt>
                  <dd
                    className={[
                      'text-sm leading-relaxed m-0 transition-colors',
                      isActive
                        ? 'text-[var(--brand-white)]/80'
                        : 'text-[var(--on-surface-muted)]',
                    ].join(' ')}
                  >
                    {item.definition}
                  </dd>
                </div>

                {/* Active underline */}
                <div
                  className={[
                    'absolute bottom-0 left-0 h-[3px] bg-primary transition-all duration-200',
                    isActive ? 'w-full' : 'w-0',
                  ].join(' ')}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
