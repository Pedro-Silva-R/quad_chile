type LineupExample = {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  players: { score: string; role: string }[];
  total: string;
  totalLabel: string;
  highlight: boolean;
  note: string;
};

const lineups: LineupExample[] = [
  {
    id: 'hi-lo',
    code: 'EJ-A',
    title: 'Formación "Alta-Baja"',
    subtitle: 'Hi-Lo',
    players: [
      { score: '3.5', role: 'Atacante' },
      { score: '3.5', role: 'Atacante' },
      { score: '0.5', role: 'Bloqueador' },
      { score: '0.5', role: 'Bloqueador' },
    ],
    total: '8.0',
    totalLabel: 'Suma exacta',
    highlight: false,
    note: 'Formación rápida, con mucha entrada frontal y juego de choque.',
  },
  {
    id: 'balanced',
    code: 'EJ-B',
    title: 'Formación Equilibrada',
    subtitle: '4 × 2.0',
    players: [
      { score: '2.0', role: 'Polivalente' },
      { score: '2.0', role: 'Polivalente' },
      { score: '2.0', role: 'Polivalente' },
      { score: '2.0', role: 'Polivalente' },
    ],
    total: '8.0',
    totalLabel: 'Suma exacta',
    highlight: true,
    note: 'Reparte conducción, defensa y apoyo de forma pareja.',
  },
  {
    id: 'female-bonus',
    code: 'EJ-C',
    title: 'Bonificación Femenina',
    subtitle: 'Regla WWR',
    players: [
      { score: '3.0♀', role: 'Atacante (+1.0 bonus)' },
      { score: '2.0', role: 'Polivalente' },
      { score: '2.0', role: 'Polivalente' },
      { score: '2.0', role: 'Polivalente' },
    ],
    total: '9.0',
    totalLabel: 'Límite ampliado',
    highlight: false,
    note: 'Incluir una jugadora entrega hasta +1.0 punto sobre el límite base de 8.0.',
  },
];

export function ClassificationMath() {
  return (
    <section
      id="matematica-cancha"
      className="py-20 md:py-32 bg-surface relative border-b-[3px] border-border"
      aria-labelledby="math-heading"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-right">
          <span className="technical-label text-[var(--brand-blue)] block mb-4">
            SEC.02 // MATEMÁTICAS EN LA CANCHA
          </span>
          <h2
            id="math-heading"
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            El límite de los{' '}
            <span className="text-primary italic">8.0 puntos</span>
          </h2>
        </div>

        {/* Lead paragraph */}
        <p className="text-xl md:text-2xl text-[var(--on-surface-muted)] leading-relaxed border-l-[3px] border-primary pl-6 mb-16 max-w-3xl">
          La estrategia empieza antes del pitazo. En cancha juegan cuatro, pero la suma de sus
          puntajes no puede pasar de 8.0. Eso obliga a mezclar perfiles: si alineas a un 3.5,
          tienes que compensar con puntajes más bajos.
        </p>

        {/* Lineup examples grid */}
        <div
          className="grid md:grid-cols-3 gap-0 border-[3px] border-border shadow-[var(--shadow-hard)]"
          role="list"
          aria-label="Ejemplos de alineación por clasificación"
        >
          {lineups.map((ex, index) => (
            <article
              key={ex.id}
              role="listitem"
              className={[
                'relative p-6 md:p-8 border-b-[3px] md:border-b-0 md:border-r-[3px] last:border-r-0 last:border-b-0 border-border flex flex-col',
                ex.highlight
                  ? 'bg-[var(--brand-black)] text-[var(--brand-white)]'
                  : 'bg-background hover:bg-surface-dim transition-colors',
              ].join(' ')}
            >
              {/* Technical index badge */}
              <div
                className={[
                  'absolute top-0 right-0 px-2 py-0.5 border-l-[3px] border-b-[3px] border-border',
                  ex.highlight ? 'bg-primary' : 'bg-surface',
                ].join(' ')}
                aria-hidden="true"
              >
                <span
                  className={[
                    'technical-label',
                    ex.highlight ? 'text-primary-foreground' : '',
                  ].join(' ')}
                >
                  {ex.code}
                </span>
              </div>

              {/* Header */}
              <div className="mb-6 pt-2">
                <h3
                  className={[
                    'text-xl md:text-2xl font-black uppercase tracking-tight leading-tight',
                    ex.highlight ? 'text-[var(--brand-white)]' : 'text-foreground',
                  ].join(' ')}
                >
                  {ex.title}
                </h3>
                <span
                  className={[
                    'technical-label',
                    ex.highlight ? 'text-[var(--brand-metal)]' : 'text-[var(--brand-metal)]',
                  ].join(' ')}
                >
                  {ex.subtitle}
                </span>
              </div>

              {/* Players */}
              <div className="space-y-2 flex-1 mb-6" role="list" aria-label="Jugadores en cancha">
                {ex.players.map((p, i) => (
                  <div
                    key={i}
                    role="listitem"
                    className={[
                      'flex items-center gap-3 px-3 py-2 border-l-[3px]',
                      ex.highlight ? 'border-primary/40' : 'border-[var(--brand-metal)]/30',
                    ].join(' ')}
                  >
                    <span className="technical-label text-primary w-10 shrink-0">{p.score}</span>
                    <span
                      className={[
                        'text-sm',
                        ex.highlight ? 'text-[var(--brand-white)]/70' : 'text-[var(--on-surface-muted)]',
                      ].join(' ')}
                    >
                      {p.role}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div
                className={[
                  'border-t-[3px] pt-4 flex items-center justify-between',
                  ex.highlight ? 'border-primary/30' : 'border-border',
                ].join(' ')}
              >
                <span
                  className={[
                    'technical-label text-xs',
                    ex.highlight ? 'text-[var(--brand-metal)]' : 'text-[var(--brand-metal)]',
                  ].join(' ')}
                >
                  {ex.totalLabel}
                </span>
                <span
                  className={[
                    'font-display font-black text-3xl tracking-tighter',
                    ex.id === 'female-bonus' ? 'text-[var(--brand-blue)]' : 'text-primary',
                  ].join(' ')}
                  aria-label={`Total: ${ex.total} puntos`}
                >
                  {ex.total}
                </span>
              </div>

              {/* Note */}
              <p
                className={[
                  'text-sm mt-4 leading-relaxed m-0',
                  ex.highlight ? 'text-[var(--brand-white)]/60' : 'text-[var(--on-surface-muted)]',
                ].join(' ')}
              >
                {ex.note}
              </p>
            </article>
          ))}
        </div>

        {/* WWR Female bonus note */}
        <div className="mt-8 flex items-start gap-4 border-[3px] border-[var(--brand-blue)] bg-[var(--brand-blue)]/5 px-6 py-5">
          <span className="technical-label text-[var(--brand-blue)] shrink-0 mt-0.5">NOTA</span>
          <p className="m-0 text-sm text-[var(--on-surface-muted)] leading-relaxed">
            La bonificación femenina WWR puede ser de <strong>+0.5</strong> (si es clase 0.5 a 1.5) o{' '}
            <strong>+1.0</strong> (si es clase 2.0 a 3.5), aumentando el límite base de 8.0.
            Esto abre combinaciones tácticas adicionales para los equipos.
          </p>
        </div>

      </div>
    </section>
  );
}
