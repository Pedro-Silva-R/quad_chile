import { Clock, Shield, Swords, AlertTriangle, Flame } from 'lucide-react';

type RuleGroup = {
  code: string;
  icon: React.FC<{ className?: string }>;
  heading: string;
  intro: string;
  bullets: (string | { term: string; type: 'red' | 'blue'; text: string })[];
  isComparison?: false;
};

type ComparisonGroup = {
  code: string;
  icon: React.FC<{ className?: string }>;
  heading: string;
  intro: string;
  isComparison: true;
  columns: {
    label: string;
    color: 'red' | 'blue' | 'metal';
    items: { term: string; text: string }[];
  }[];
};

type Group = RuleGroup | ComparisonGroup;

const ruleGroups: Group[] = [
  {
    code: 'POS-01',
    icon: Clock,
    heading: 'Tiempos de posesión y avance',
    intro: 'El reloj no es un detalle: si te duermes, pierdes la pelota.',
    bullets: [
      'Tienes doce segundos para sacar el balón desde tu pista trasera hacia la pista delantera.',
      'Si retienes el balón más de ocho segundos sin driblar o pasarlo, pierdes la posesión.',
      'Dispones de cuarenta segundos en el reloj principal para concretar una anotación ofensiva.',
    ],
  },
  {
    code: 'KEY-02',
    icon: Shield,
    heading: 'Zona clave y anotación',
    intro: 'La zona de meta o "key" es donde se gana o se pierde el punto.',
    bullets: [
      'Solo tres defensas pueden permanecer simultáneamente dentro de su zona clave al defender.',
      'Un jugador ofensivo no puede permanecer dentro de la zona clave enemiga por más de ocho segundos.',
      'Para que un gol sea válido, el jugador debe mantener control del balón al cruzar.',
    ],
  },
  {
    code: 'CTT-03',
    icon: Swords,
    heading: 'Contacto físico y faltas',
    intro: 'Hay choque, sí, pero no vale cualquier cosa. Esto marca la línea.',
    bullets: [
      'Golpear la silla rival detrás del eje trasero para hacerla girar bruscamente se penaliza (Spinning).',
      'Un jugador que cae no detiene el juego a menos que esté en peligro o la jugada termine.',
      'Apoyar los pies o cualquier parte del cuerpo en el piso da una ventaja ilegal.',
      'Las faltas defensivas graves pueden enviar al infractor un minuto a la caja de penalidad.',
    ],
  },
  {
    code: 'PNL-04',
    icon: AlertTriangle,
    heading: '¿Violación o falta? Entiende el castigo',
    intro: 'No todo se castiga igual. Una cosa es un error de manejo/tiempo; otra, un contacto ilegal.',
    isComparison: true,
    columns: [
      {
        label: 'VIOLACIÓN',
        color: 'blue',
        items: [
          { term: 'Error Técnico', text: 'Errores en el manejo del balón o tiempos (ej. no driblar en 8 seg).' },
          { term: 'Castigo', text: 'Pérdida de la posesión. Sin sanción de tiempo.' },
          { term: 'Falta Ofensiva', text: 'Contacto ilegal cometido por el equipo con el balón. Solo pérdida de posesión.' },
        ],
      },
      {
        label: 'FALTA DEFENSIVA',
        color: 'red',
        items: [
          { term: 'Contacto Ilegal', text: 'Acción anticompetitiva cometida por el equipo que defiende.' },
          { term: 'Castigo', text: '30 segundos en la caja de penalidad. Su equipo juega con un jugador menos.' },
          { term: 'Penalty Try', text: 'Si la falta impidió un gol claro, el árbitro puede conceder el tanto directamente.' },
        ],
      },
    ],
  },
  {
    code: 'INF-05',
    icon: Flame,
    heading: 'Las infracciones más frecuentes',
    intro: 'Las que más verás en un partido, y las que más cambian el momentum.',
    bullets: [
      { term: 'Spinning', type: 'red', text: 'Impactar la silla de un oponente por detrás del eje trasero, provocando que gire bruscamente y arriesgando su seguridad.' },
      { term: 'Cuatro en el Área', type: 'red', text: 'Solo se permite un máximo de tres defensores dentro de su propia zona clave; si ingresa un cuarto, es penalizado.' },
      { term: 'Retención de 8 Segundos', type: 'blue', text: 'No picar (driblar) o no pasar el balón antes de que transcurran 8 segundos de posesión individual.' },
      { term: 'Ventaja Física', type: 'blue', text: 'Tocar el piso con los pies u otra parte del cuerpo para frenar o impulsarse.' },
    ],
  },
];

const accentColor = {
  red: 'text-primary border-primary',
  blue: 'text-[var(--brand-blue)] border-[var(--brand-blue)]',
  metal: 'text-[var(--brand-metal)] border-[var(--brand-metal)]',
};

export function RulesSituations() {
  return (
    <section
      id="situaciones"
      className="py-20 md:py-32 bg-surface relative border-b-[3px] border-border"
      aria-labelledby="situations-heading"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">
        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-center md:text-right">
          <span className="technical-label text-primary block mb-4">SEC.02 // SITUACIONES DE JUEGO</span>
          <h2 id="situations-heading" className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Reglas por <span className="text-primary italic">situación</span>
          </h2>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-10">
          {ruleGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article
                key={group.code}
                className="bg-background border-[3px] border-border shadow-[var(--shadow-hard)] relative overflow-hidden chamfer-card group"
                aria-labelledby={`heading-${group.code}`}
              >
                <div className="noise-overlay" aria-hidden="true" />

                {/* Card header */}
                <div className="flex items-start gap-4 p-6 pb-0 md:p-8 md:pb-0 relative z-10">
                  <div className="w-12 h-12 border-[3px] border-border bg-surface flex items-center justify-center shrink-0 shadow-[var(--shadow-hard-sm)] group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-1">
                      <h3
                        id={`heading-${group.code}`}
                        className="font-display font-black text-xl md:text-2xl uppercase tracking-tight m-0"
                      >
                        {group.heading}
                      </h3>
                      <span className="technical-label text-[var(--brand-metal)] shrink-0">
                        {group.code}
                      </span>
                    </div>
                    <p className="text-[var(--on-surface-muted)] text-sm m-0 leading-relaxed">
                      {group.intro}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 md:p-8 pt-6 relative z-10">
                  {'isComparison' in group && group.isComparison ? (
                    /* Two-column comparison */
                    <div className="grid md:grid-cols-2 gap-6">
                      {group.columns.map((col) => (
                        <div
                          key={col.label}
                          className={`border-[3px] p-5 ${accentColor[col.color]}`}
                        >
                          <span className={`technical-label block mb-4 ${accentColor[col.color].split(' ')[0]}`}>
                            {col.label}
                          </span>
                          <dl className="space-y-4">
                            {col.items.map((item) => (
                              <div key={item.term}>
                                <dt className="font-bold text-foreground text-sm mb-0.5">{item.term}</dt>
                                <dd className="text-[var(--on-surface-muted)] text-sm leading-relaxed m-0">
                                  {item.text}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Bullet list */
                    <ul className="space-y-3 list-none p-0 m-0">
                      {(group as RuleGroup).bullets.map((bullet, i) =>
                        typeof bullet === 'string' ? (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-primary mt-2.5 shrink-0" aria-hidden="true" />
                            <span className="text-foreground leading-relaxed">{bullet}</span>
                          </li>
                        ) : (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-primary mt-2.5 shrink-0" aria-hidden="true" />
                            <span className="leading-relaxed">
                              <strong
                                className={bullet.type === 'red' ? 'text-primary' : 'text-[var(--brand-blue)]'}
                              >
                                {bullet.term}:
                              </strong>{' '}
                              <span className="text-foreground">{bullet.text}</span>
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
