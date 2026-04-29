import { ArrowDown } from 'lucide-react';

const roles = [
  {
    id: 'PRT.01',
    anchor: '#jugador',
    title: 'Jugador',
    tagline: 'Atleta de alto rendimiento',
    description:
      'Súbete a la silla y prueba la mezcla de táctica y contacto que hace único a este deporte paralímpico. Entrena en equipo, compite y vuelve a sentir progreso.',
    bullets: [
      'Aprenderás el manejo avanzado de la silla deportiva.',
      'Desarrollarás fuerza, resistencia y táctica en equipo.',
      'Competirás en ligas con proyección nacional e internacional.',
    ],
    accentColor: 'var(--primary)',
    accentClass: 'bg-primary',
    ctaLabel: 'Empezar a entrenar',
    image: '/assets/role-atleta.jpeg',
  },
  {
    id: 'PRT.02',
    anchor: '#voluntario',
    title: 'Voluntario',
    tagline: 'Sostén operativo del equipo',
    description:
      'Hay cosas que no se ven en la foto, pero sostienen todo: montaje, traslados, mesa, redes. Si tienes tiempo y manos, y te gusta moverte, aquí haces falta.',
    bullets: [
      'Asistirás en la logística de los torneos.',
      'Apoyarás el trabajo del cuerpo técnico en cancha.',
      'Difundirás el deporte creando contenido para nuestras redes.',
    ],
    accentColor: 'var(--accent)',
    accentClass: 'bg-accent',
    ctaLabel: 'Quiero apoyar',
    image: '/assets/role-voluntario.jpeg',
  },
  {
    id: 'PRT.03',
    anchor: '#arbitro',
    title: 'Oficial o Árbitro',
    tagline: 'Quien ordena el juego',
    description:
      'Sé quien ordena el juego en la cancha o en la mesa. Fórmate con método para aplicar el reglamento, manejar el ritmo del partido y sostener el juego limpio.',
    bullets: [
      'Garantizarás el cumplimiento de las reglas internacionales actualizadas.',
      'Llevarás el control preciso del tiempo y puntajes.',
      'Accederás a capacitaciones y certificaciones oficiales del deporte.',
    ],
    accentColor: 'var(--brand-metal)',
    accentClass: 'bg-[var(--brand-metal)]',
    ctaLabel: 'Ser oficial',
    image: '/assets/role-arbitro.jpeg',
  },
  {
    id: 'PRT.04',
    anchor: '#clasificador',
    title: 'Clasificador',
    tagline: 'Rol técnico y clínico clave',
    description:
      'Si vienes del área clínica o técnica, este rol es clave: evalúas funcionalidad, asignas puntaje y cuidas que la competencia sea justa en serio, sin atajos, para todos.',
    bullets: [
      'Realizarás evaluaciones físicas y técnicas de los jugadores.',
      'Asegurarás la equidad competitiva oficial en la cancha.',
      'Participarás en un rol clave para el deporte paralímpico.',
    ],
    accentColor: 'var(--foreground)',
    accentClass: 'bg-foreground',
    ctaLabel: 'Quiero formarme',
    image: '/assets/role-clasificador.jpeg',
  },
];

export function ParticipateRoleSelector() {
  return (
    <section id="elige-tu-camino" className="py-20 md:py-32 bg-background relative border-b-[3px] border-border">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Header */}
        <div className="mb-14 md:mb-20">
          <span className="technical-label text-[var(--brand-metal)] block mb-4">SEC.01 // ELIGE TU ROL</span>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              Elige cómo{' '}
              <span className="text-primary">sumarte</span>
            </h2>
            <p className="text-lg text-[var(--on-surface-muted)] leading-relaxed max-w-lg">
              No necesitas experiencia en deporte adaptado para partir. Escoge el rol que más te hace sentido, mira qué implica y decide si quieres entrar ahora o que te avisemos cuando haya cupos disponibles.
            </p>
          </div>
        </div>

        {/* Role Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, idx) => {
            const staggerClass = idx % 2 !== 0 ? 'lg:translate-y-10' : '';
            return (
              <article
                key={role.id}
                className={`bg-card flex flex-col border-[3px] border-border shadow-[var(--shadow-hard-sm)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-hard)] relative group overflow-hidden chamfer-card ${staggerClass}`}
              >
                {/* Card Header with color accent */}
                <div className={`p-6 border-b-[3px] border-border relative overflow-hidden ${role.accentClass} text-[var(--brand-white)]`}>
                  <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />

                  {/* Image thumbnail */}
                  <div className="w-20 h-20 border-[3px] border-[var(--brand-white)]/30 overflow-hidden mb-6 relative">
                    <img
                      src={role.image}
                      alt={`Rol ${role.title}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      width={80}
                      height={80}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="scanlines absolute inset-0 opacity-10 pointer-events-none" />
                  </div>

                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <span className="technical-label text-[var(--brand-white)]/60 block mb-1">{role.id}</span>
                      <h3 className="text-2xl font-black uppercase tracking-tight leading-none">{role.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[var(--on-surface-muted)] text-sm leading-relaxed mb-5">
                      {role.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm font-medium">
                          <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0" style={{ backgroundColor: role.accentColor }} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={role.anchor}
                    className="inline-flex items-center justify-between w-full px-4 py-3 border-[3px] border-border font-bold uppercase tracking-wide text-sm no-underline text-foreground hover:bg-foreground hover:text-background transition-colors group/btn"
                    aria-label={`Ir a la sección de ${role.title}`}
                  >
                    <span>{role.ctaLabel}</span>
                    <ArrowDown className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
