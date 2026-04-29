import { CheckCircle2, XCircle, MapPin, MessageSquare } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Te contactas',
    body: 'Escríbenos o llámanos. Queremos saber en qué ciudad estás, qué buscas y resolver tus dudas sin rodeos, con conversación corta y clara, ahora mismo.',
  },
  {
    num: '02',
    title: 'Te orientamos por región',
    body: 'Vemos qué club o polo te queda más cerca y cómo llegar. La idea: que puedas entrenar seguido sin que el traslado te mate.',
  },
  {
    num: '03',
    title: 'Coordinamos prueba / visita',
    body: 'Te invitamos a un entrenamiento para ver el juego y conocer al equipo. Te subes a una silla deportiva y pruebas, tranquilo, ese día.',
  },
  {
    num: '04',
    title: 'Recomendación básica de preparación',
    body: 'Te decimos qué ropa llevar y cómo hidratarte. No compres nada: te prestamos una silla y te vas moviendo con nosotros, desde ya mismo.',
  },
  {
    num: '05',
    title: 'Seguimiento',
    body: 'Después de tu primera práctica, te acompañamos siempre para ver cómo te sentiste bien, ajustar horarios y formalizar tu ingreso al club, paso a paso.',
  },
];

const requirements = {
  yes: [
    'Compromiso funcional permanente en al menos tres extremidades.',
    'Ganas de integrarte a un deporte de equipo.',
    'Ropa deportiva cómoda y buena disposición para aprender.',
    'Movilizarte de forma autónoma o con apoyo hasta el lugar de entrenamiento.',
  ],
  no: [
    'Experiencia previa en rugby o deporte adaptado.',
    'Comprar una silla deportiva para empezar.',
    '"Estar al 100%": el entrenamiento se adapta y progresa contigo.',
  ],
};

export function ParticipateAthletePath() {
  return (
    <section id="jugador" className="py-20 md:py-32 bg-surface relative">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20 ml-auto text-right">
          <span className="technical-label text-primary block mb-4">SEC.02 // RUTA ATLETA</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Quiero <span className="text-primary italic">jugar</span>
          </h2>
          <p className="text-lg text-[var(--on-surface-muted)] leading-relaxed border-r-[3px] border-primary pr-6">
            Partir es más simple de lo que parece. Armamos un proceso corto para acompañarte desde el primer contacto hasta tu primera práctica. No tienes que llegar sabiendo: te explicamos cómo funciona todo y te prestamos una silla de iniciación. Tú trae ropa cómoda, ganas, y listo: el resto lo vemos acá juntos desde hoy.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Steps Column */}
          <div className="lg:col-span-7">
            <div className="border-b-[3px] border-border pb-4 mb-10">
              <span className="technical-label text-[var(--brand-metal)]">PROCESO // 5 PASOS</span>
            </div>

            <ol className="relative space-y-0">
              {/* Vertical connector line */}
              <div className="absolute left-[1.875rem] top-8 bottom-8 w-[3px] bg-border" aria-hidden="true" />

              {steps.map((step, idx) => (
                <li key={step.num} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Step number bubble */}
                  <div className="relative z-10 flex-shrink-0 w-15 h-15 flex items-start pt-0.5">
                    <div className={`w-[60px] h-[60px] flex items-center justify-center border-[3px] border-border font-display font-black text-xl shadow-[var(--shadow-hard-sm)] flex-shrink-0 ${idx === 0 ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground'}`}>
                      {step.num}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="pt-3 flex-1">
                    <h3 className="text-xl font-black uppercase tracking-tight mb-2">{step.title}</h3>
                    <p className="text-[var(--on-surface-muted)] leading-relaxed text-base">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Requirements Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">

            {/* YES panel */}
            <div className="bg-card border-[3px] border-border shadow-[var(--shadow-hard-sm)] p-6 chamfer-card">
              <div className="flex items-center gap-3 mb-5 border-b-[3px] border-border pb-4">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] flex-shrink-0" />
                <span className="technical-label text-[var(--success)]">LO QUE SÍ NECESITAS</span>
              </div>
              <ul className="space-y-3">
                {requirements.yes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 bg-[var(--success)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NO panel */}
            <div className="bg-card border-[3px] border-border shadow-[var(--shadow-hard-sm)] p-6 chamfer-card">
              <div className="flex items-center gap-3 mb-5 border-b-[3px] border-border pb-4">
                <XCircle className="w-5 h-5 text-[var(--brand-metal)] flex-shrink-0" />
                <span className="technical-label text-[var(--brand-metal)]">LO QUE NO NECESITAS</span>
              </div>
              <ul className="space-y-3">
                {requirements.no.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 bg-[var(--brand-metal)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* No hay club cerca */}
            <div className="bg-[var(--brand-black)] text-[var(--brand-white)] border-[3px] border-border shadow-[var(--shadow-hard-sm)] p-6 chamfer-cut-tl relative overflow-hidden">
              <div className="scanlines absolute inset-0 opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="technical-label text-primary">GEO // SIN CLUB CERCA</span>
                </div>
                <h3 className="font-display font-bold text-lg uppercase tracking-tight mb-3">
                  Si no hay actividad en tu zona, igual te ayudamos
                </h3>
                <p className="text-[var(--brand-white)]/70 text-sm leading-relaxed mb-5">
                  Estamos mapeando y armando una red de clubes en distintas regiones. Puede que hoy no haya un grupo activo cerca, pero no quedas botado. Elige tu opción y te contactamos.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contacto"
                    className="flex-1 technical-label px-4 py-3 bg-primary text-primary-foreground text-center no-underline hover:bg-[var(--brand-white)] hover:text-[var(--brand-black)] transition-colors"
                    aria-label="Hay actividad cerca de mi zona"
                  >
                    [HAY ACTIVIDAD CERCA]
                  </a>
                  <a
                    href="#contacto"
                    className="flex-1 technical-label px-4 py-3 bg-transparent text-[var(--brand-white)] border-2 border-[var(--brand-metal)] text-center no-underline hover:border-[var(--brand-white)] transition-colors"
                    aria-label="No hay actividad, avísenme"
                  >
                    [NO HAY / AVÍSENME]
                  </a>
                </div>
                <p className="text-[var(--brand-white)]/40 text-xs mt-4 flex items-center gap-2">
                  <MessageSquare className="w-3 h-3" />
                  Te responderemos en un máximo de 48 horas hábiles.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
