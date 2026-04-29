import { Activity, Dumbbell, Hand, Play } from 'lucide-react';

type Dimension = {
  id: string;
  code: string;
  icon: React.ElementType;
  title: string;
  body: string;
};

const dimensions: Dimension[] = [
  {
    id: 'tronco',
    code: 'DIM-01',
    icon: Activity,
    title: 'Control del Tronco',
    body: 'Miramos cómo te inclinas hacia adelante y a los lados, y cómo vuelves a posición. Un tronco estable mejora el alcance del balón y ayuda a resistir impactos sin perder equilibrio.',
  },
  {
    id: 'brazos',
    code: 'DIM-02',
    icon: Dumbbell,
    title: 'Fuerza y Rango de Brazos',
    body: 'Se observa la potencia en hombros, tríceps y bíceps, y el rango de movimiento. Esto se nota en aceleración, frenado y capacidad de bloquear.',
  },
  {
    id: 'manos',
    code: 'DIM-03',
    icon: Hand,
    title: 'Manejo de Manos y Muñecas',
    body: 'Se evalúa cómo atrapas, pasas y driblas el balón. También se considera si necesitas guantes adaptados o ajustes de agarre.',
  },
  {
    id: 'cancha',
    code: 'DIM-04',
    icon: Play,
    title: 'Prueba Técnica en Cancha',
    body: 'Lo clínico se contrasta con lo real. Se observa al jugador bajo presión: pases, bloqueos, cambios de dirección y contacto ya montado en la silla deportiva.',
  },
];

export function ClassificationDimensions() {
  return (
    <section
      id="dimensiones-evaluacion"
      className="py-20 md:py-32 bg-background relative border-b-[3px] border-border"
      aria-labelledby="dimensions-heading"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="mb-14 md:mb-20 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <span className="technical-label text-[var(--brand-blue)] block mb-4">
              SEC.03 // QUÉ SE EVALÚA
            </span>
            <h2
              id="dimensions-heading"
              className="text-4xl md:text-6xl font-black uppercase tracking-tight"
            >
              Las dimensiones de{' '}
              <span className="text-primary italic">la evaluación</span>
            </h2>
          </div>
          {/* Counter badge */}
          <div className="flex items-center gap-3 border-[3px] border-border px-4 py-2 shadow-[var(--shadow-hard-sm)] shrink-0 self-end">
            <span className="technical-label text-[var(--brand-metal)]">
              {dimensions.length} DIMENSIONES
            </span>
          </div>
        </div>

        {/* Dimensions grid — asymmetric 2-col on desktop */}
        <div
          className="grid md:grid-cols-2 gap-0 border-[3px] border-border shadow-[var(--shadow-hard)]"
          role="list"
        >
          {dimensions.map((dim, index) => {
            const Icon = dim.icon;
            const isOdd = index % 2 !== 0;
            return (
              <article
                key={dim.id}
                role="listitem"
                className={[
                  'relative p-8 group',
                  'border-b-[3px] md:last:border-b-0 border-border',
                  isOdd ? 'md:border-l-[3px]' : '',
                  // Every two items, remove border-b from last pair
                  index >= dimensions.length - 2 ? 'md:border-b-0' : '',
                  'hover:bg-surface-dim transition-colors',
                ].join(' ')}
              >
                {/* Technical code badge */}
                <div
                  className="absolute top-0 right-0 px-2 py-0.5 border-l-[3px] border-b-[3px] border-border bg-surface group-hover:bg-surface-variant transition-colors"
                  aria-hidden="true"
                >
                  <span className="technical-label text-[var(--brand-metal)]">{dim.code}</span>
                </div>

                {/* Icon + title */}
                <div className="flex items-start gap-5 mb-5 pt-2">
                  <div className="w-12 h-12 border-[3px] border-border flex items-center justify-center shrink-0 bg-surface shadow-[var(--shadow-hard-sm)] group-hover:bg-primary group-hover:border-primary transition-colors">
                    <Icon
                      className="w-6 h-6 text-[var(--brand-metal)] group-hover:text-primary-foreground transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight leading-tight text-foreground">
                    {dim.title}
                  </h3>
                </div>

                {/* Body */}
                <p className="text-[var(--on-surface-muted)] leading-relaxed m-0 border-l-[3px] border-transparent group-hover:border-primary pl-0 group-hover:pl-4 transition-all duration-300">
                  {dim.body}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
