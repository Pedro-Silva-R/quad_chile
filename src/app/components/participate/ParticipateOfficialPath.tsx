import { ArrowRight } from 'lucide-react';

const skills = [
  'Toma de decisiones firme y veloz bajo presión competitiva.',
  'Excelente comunicación y manejo asertivo de las situaciones de juego.',
  'Concentración absoluta para el control riguroso del reloj y puntajes.',
  'Disposición para el aprendizaje constante y la actualización del reglamento internacional.',
];

const officialSteps = [
  {
    num: '01',
    title: 'Formación teórica',
    body: 'Accederás a manuales especializados y participarás en clínicas sobre el reglamento internacional vigente, desde cero.',
  },
  {
    num: '02',
    title: 'Práctica en cancha',
    body: 'Comenzarás primero asistiendo en la mesa de control y arbitrando partidos amistosos locales, con apoyo directo.',
  },
  {
    num: '03',
    title: 'Certificación',
    body: 'Podrás ascender progresivamente hasta obtener tu acreditación oficial para competencias nacionales e internacionales, también, luego.',
  },
];

export function ParticipateOfficialPath() {
  return (
    <section id="arbitro" className="py-20 md:py-32 bg-surface relative border-t-[3px] border-border">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20 ml-auto text-right">
          <span className="technical-label text-[var(--brand-metal)] block mb-4">SEC.04 // RUTA OFICIAL / ÁRBITRO</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Me interesa <span className="text-[var(--brand-metal)] italic">arbitrar</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Descripción principal */}
          <div className="lg:col-span-6">
            <div className="bg-[var(--brand-black)] text-[var(--brand-white)] border-[3px] border-border shadow-[var(--shadow-hard)] p-8 md:p-10 chamfer-card relative overflow-hidden mb-8">
              <div className="noise-overlay" />
              <div className="scanlines absolute inset-0 opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <blockquote className="text-lg md:text-xl leading-relaxed text-[var(--brand-white)]/90 font-ui border-l-[3px] border-[var(--brand-metal)] pl-6 m-0">
                  El árbitro manda en la cancha: cuida el reglamento, el ritmo y el respeto entre equipos. La mesa de control hace el otro trabajo silencioso, pero igual de importante: reloj, posesión, puntaje y cambios. Ser oficial exige estudiar, mirar con atención y decidir rápido bajo presión. En un deporte de contacto, el criterio evita líos y mantiene el partido limpio. Sin oficiales, no hay competencia. Con práctica, tu ojo se afina. Y eso se nota.
                </blockquote>
              </div>
            </div>

            {/* Skills list */}
            <div className="bg-card border-[3px] border-border p-6 shadow-[var(--shadow-hard-sm)]">
              <div className="border-b-[3px] border-border pb-4 mb-5">
                <span className="technical-label text-[var(--brand-metal)]">HABILIDADES // QUE TE AYUDAN</span>
              </div>
              <ul className="space-y-4">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-4 text-sm font-medium leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 bg-[var(--brand-metal)]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Steps Column */}
          <div className="lg:col-span-6">
            <div className="border-b-[3px] border-border pb-4 mb-8">
              <span className="technical-label text-[var(--brand-metal)]">PRÓXIMOS PASOS // FORMACIÓN</span>
            </div>

            <ol className="space-y-6 mb-10">
              {officialSteps.map((step, idx) => (
                <li key={step.num} className="flex gap-5 group">
                  <div className={`flex-shrink-0 w-14 h-14 flex items-center justify-center border-[3px] border-border font-display font-black text-lg shadow-[var(--shadow-hard-sm)] ${idx === 0 ? 'bg-[var(--brand-metal)] text-[var(--brand-white)]' : 'bg-background text-foreground'}`}>
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-black uppercase tracking-tight text-lg mb-1">{step.title}</h3>
                    <p className="text-[var(--on-surface-muted)] text-sm leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div>
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-black)] text-[var(--brand-white)] border-[3px] border-border font-bold uppercase tracking-widest no-underline hover:bg-[var(--brand-metal)] transition-colors shadow-[var(--shadow-hard-sm)]"
                aria-label="Solicitar que me contacten sobre cómo ser árbitro"
              >
                [Quiero que me contacten]
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[var(--on-surface-muted)] text-xs mt-3">
                Parte con una primera capacitación y acompáñanos en cancha.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
