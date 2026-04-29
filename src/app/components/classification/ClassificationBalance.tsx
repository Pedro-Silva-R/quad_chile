const keyPoints = [
  {
    code: 'CLS-01',
    text: 'Puntuación individual desde 0.5 (mayor limitación) hasta 3.5 (menor limitación).',
  },
  {
    code: 'CLS-02',
    text: 'Evaluación centrada en funciones deportivas: propulsar, bloquear, pasar y atrapar.',
  },
  {
    code: 'CLS-03',
    text: 'Roles en cancha: bloqueos y defensa para clases bajas; conducción y ataque para clases altas.',
  },
  {
    code: 'CLS-04',
    text: 'Proceso técnico basado en estándares de la World Wheelchair Rugby (WWR).',
  },
];

export function ClassificationBalance() {
  return (
    <section
      id="que-significa"
      className="py-20 md:py-32 bg-background relative border-b-[3px] border-border"
      aria-labelledby="balance-heading"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <span className="technical-label text-[var(--brand-blue)] block mb-4">
            SEC.01 // EL EQUILIBRIO DEL JUEGO
          </span>
          <h2
            id="balance-heading"
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            El equilibrio{' '}
            <span className="text-primary italic">del juego</span>
          </h2>
        </div>

        {/* En una frase — highlighted callout */}
        <div className="border-[3px] border-border bg-surface shadow-[var(--shadow-hard)] mb-14 md:mb-20 relative overflow-hidden">
          <div className="flex items-stretch">
            <div className="w-2 bg-primary shrink-0" aria-hidden="true" />
            <div className="px-6 md:px-10 py-8">
              <span className="technical-label text-[var(--brand-metal)] block mb-3">
                EN UNA FRASE
              </span>
              <p className="text-2xl md:text-3xl font-display font-black italic tracking-tight text-foreground leading-tight m-0">
                Un puntaje del 0.5 al 3.5 que ordena la competencia y premia la técnica por encima
                de la fuerza.
              </p>
            </div>
          </div>
        </div>

        {/* Two-column layout: body copy + score scale visual */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start mb-16">

          {/* Body text */}
          <div className="space-y-6">
            <p className="text-lg text-[var(--on-surface-muted)] leading-relaxed">
              En el rugby en silla de ruedas, la clasificación funcional es la base de la
              igualdad competitiva. A diferencia de sistemas que agrupan por diagnóstico,
              aquí miramos la función real: fuerza, estabilidad y rango de movimiento cuando
              empujas la silla y manejas el balón. Por eso pueden competir juntas personas con
              lesiones medulares, amputaciones o condiciones neurológicas, siempre que cumplan
              los criterios de elegibilidad.
            </p>
            <p className="text-lg text-[var(--on-surface-muted)] leading-relaxed">
              Cada jugador recibe un puntaje desde 0.5 (mayor compromiso motor) hasta 3.5 (mayor
              funcionalidad). En la práctica, los puntajes bajos suelen sostener bloqueos y
              cierres defensivos; los puntajes altos suelen asumir más conducción y ataque. El
              punto no es "quién vale más": es que cada perfil tenga un rol táctico real dentro
              del equipo.
            </p>
          </div>

          {/* Score scale visual */}
          <div
            className="bg-[var(--brand-black)] border-[3px] border-border shadow-[var(--shadow-hard)] p-6 relative overflow-hidden"
            aria-label="Escala de puntajes de clasificación del 0.5 al 3.5"
          >
            <div className="noise-overlay opacity-30" aria-hidden="true" />
            <span className="technical-label text-[var(--brand-metal)] block mb-6">
              ESCALA // 0.5 → 3.5
            </span>
            <div className="space-y-3" role="list">
              {[
                { score: '0.5', label: 'Mayor limitación', role: 'Bloqueo / Defensa', accent: false },
                { score: '1.0', label: '', role: '', accent: false },
                { score: '1.5', label: 'Perfil mixto bajo', role: 'Apoyo / Bloqueo', accent: false },
                { score: '2.0', label: 'Centro del espectro', role: 'Polivalente', accent: true },
                { score: '2.5', label: '', role: '', accent: false },
                { score: '3.0', label: 'Alta funcionalidad', role: 'Conducción / Ataque', accent: false },
                { score: '3.5', label: 'Menor limitación', role: 'Ataque / Sprint', accent: false },
              ].map(({ score, label, role, accent }) => (
                <div
                  key={score}
                  role="listitem"
                  className={[
                    'flex items-center gap-4 px-3 py-2 border-l-[3px] transition-colors',
                    accent
                      ? 'border-primary bg-primary/10'
                      : 'border-[var(--brand-metal)]/30 hover:border-[var(--brand-metal)]',
                  ].join(' ')}
                >
                  <span className="technical-label text-primary w-8 shrink-0">{score}</span>
                  <div className="flex-1 min-w-0">
                    {label && (
                      <span className="text-[var(--brand-white)]/90 text-sm font-bold block leading-tight">
                        {label}
                      </span>
                    )}
                    {role && (
                      <span className="technical-label text-[var(--brand-metal)] text-[0.65rem]">
                        {role}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key points list */}
        <div className="bg-surface border-[3px] border-border shadow-[var(--shadow-hard)] relative overflow-hidden">
          <div className="noise-overlay" aria-hidden="true" />
          <div className="flex items-center justify-between px-6 py-4 border-b-[3px] border-border bg-[var(--brand-black)] text-[var(--brand-white)]">
            <span className="technical-label">CLASIFICACIÓN // PUNTOS CLAVE</span>
            <span className="technical-label text-[var(--brand-metal)]">WWR_FUNC</span>
          </div>
          <ol className="divide-y-[3px] divide-border list-none p-0 m-0" role="list">
            {keyPoints.map((item) => (
              <li
                key={item.code}
                className="flex items-start gap-5 px-6 py-5 hover:bg-surface-dim transition-colors group"
              >
                <span
                  className="technical-label text-primary shrink-0 w-14 pt-0.5 group-hover:text-[var(--brand-blue)] transition-colors"
                  aria-label={`Punto clave ${item.code}`}
                >
                  {item.code}
                </span>
                <p className="m-0 text-foreground leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
