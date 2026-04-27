import { Calendar, Trophy, Users, Info } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      category: 'PRÓX',
      date: '2026.05.15',
      title: 'Torneo Nacional de Quad Rugby',
      summary: 'Primer torneo nacional que reunirá a equipos de todo Chile. Clasificatorias para competencias internacionales.',
      icon: Trophy,
      isUpcoming: true,
    },
    {
      category: 'EVNT',
      date: '2026.05.03',
      title: 'Clínica Gratuita en Santiago',
      summary: 'Sesión de entrenamiento abierta para personas interesadas en conocer el deporte. Instructores certificados.',
      icon: Users,
    },
    {
      category: 'NEWS',
      date: '2026.04.28',
      title: 'Nueva Alianza con FEDERUPA',
      summary: 'Acuerdo de colaboración para impulsar el desarrollo del quad rugby en Chile y fortalecer la base de atletas.',
      icon: Info,
    },
    {
      category: 'EVNT',
      date: '2026.04.20',
      title: 'Jornada de Clasificación Funcional',
      summary: 'Proceso de clasificación para nuevos atletas con especialistas internacionales certificados por IWRF.',
      icon: Calendar,
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-background relative">
      <div className="absolute inset-0 scanlines opacity-50 pointer-events-none"></div>
      <div className="relative max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] z-10">
        <div className="text-center md:text-right mb-12 md:grid md:grid-cols-12 gap-8 items-center">
          <div className="hidden md:flex md:col-span-4 lg:col-span-5 items-center justify-center">
            <div className="relative w-full aspect-[16/9] border-[3px] border-border overflow-hidden chamfer-card shadow-[var(--shadow-hard-sm)] group -rotate-2 transition-transform hover:rotate-0 duration-300">
              <img 
                src="/assets/team.webp" 
                alt="Equipo Quad Rugby Chile" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
              
              {/* Technical Overlay */}
              <div className="absolute top-0 left-0 bg-primary text-white px-2 py-1">
                <span className="technical-label !text-[10px]">TEAM_SYNC</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm border-2 border-border p-2">
                <span className="technical-label text-foreground">ACT.REF // 003</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-7">
            <div className="inline-flex flex-row-reverse md:flex-row items-center gap-2 mb-4 border-b-2 border-primary pb-2">
            <span className="technical-label text-primary tracking-widest">NOTICIAS_Y_EVENTOS</span>
            <span className="w-3 h-3 bg-primary animate-pulse"></span>
          </div>
            <h2 className="text-foreground mb-6 text-4xl md:text-6xl uppercase font-black tracking-tight">Actividad Reciente</h2>
            <p className="text-[var(--on-surface-muted)] text-lg max-w-2xl md:ml-auto mx-auto md:mr-0">
              Mantente al día con eventos, torneos y novedades del quad rugby en Chile
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-0">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index}>
                  {/* Conector técnico entre tarjetas */}
                  {index > 0 && (
                    <div className="hidden md:flex items-center justify-center h-10 relative">
                      <div className="absolute left-0 right-0 h-[2px] bg-border opacity-30"></div>
                      <div className="relative z-10 flex items-center gap-3 bg-background px-4">
                        <div className="w-1.5 h-1.5 bg-border rotate-45"></div>
                        <span className="technical-label text-[var(--on-surface-muted)] text-[10px]">SEQ.{String(index).padStart(2,'0')}</span>
                        <div className="w-1.5 h-1.5 bg-border rotate-45"></div>
                      </div>
                    </div>
                  )}

                  {/* Tarjeta */}
                  <div
                    className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-card shadow-[var(--shadow-hard-sm)] transition-all hover:-translate-x-1 hover:-translate-y-1 chamfer-card hover:shadow-[var(--shadow-hard)] group overflow-hidden`}
                  >
                    {/* Panel de Imagen */}
                    <div className={`relative w-full md:w-2/5 lg:w-1/3 min-h-[240px] ${
                      isEven
                        ? 'border-b-[3px] md:border-b-0 md:border-r-[3px]'
                        : 'border-b-[3px] md:border-b-0 md:border-l-[3px]'
                      } border-border border-dashed ${activity.isUpcoming ? 'bg-primary text-white' : 'bg-surface-dim text-foreground'}`}
                    >
                      <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none"></div>

                      {/* Placeholder imagen */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="text-center">
                          <Icon className="w-16 h-16 mx-auto mb-2" />
                          <span className="technical-label text-xs">IMG_SPACE</span>
                        </div>
                      </div>

                      {/* Badge de Categoría */}
                      <div className={`absolute top-4 z-10 ${isEven ? 'left-4' : 'right-4'}`}>
                        <span className={`technical-label px-3 py-1 border-[3px] ${activity.isUpcoming ? 'bg-white text-primary border-white' : 'bg-background text-foreground border-border'}`}>
                          {activity.category}
                        </span>
                      </div>

                      {/* Número de secuencia en corner opuesto */}
                      <div className={`absolute bottom-4 z-10 ${isEven ? 'right-4' : 'left-4'}`}>
                        <span className="technical-label text-[10px] opacity-40">ACT.00{index + 1}</span>
                      </div>
                    </div>

                    {/* Panel de Contenido */}
                    <div className={`flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-between ${isEven ? '' : 'md:text-right'}`}>
                      <div>
                        <div className={`flex flex-wrap items-center gap-4 mb-6 ${isEven ? '' : 'md:justify-end'}`}>
                          <span className="technical-label text-[var(--on-surface-muted)] flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {activity.date}
                          </span>
                        </div>

                        <h3 className={`mb-4 ${activity.isUpcoming ? 'text-2xl md:text-3xl lg:text-4xl leading-tight' : 'text-xl md:text-2xl'}`}>
                          {activity.title}
                        </h3>
                        <p className={`text-[var(--on-surface-muted)] text-base md:text-lg leading-relaxed ${isEven ? 'max-w-2xl' : 'max-w-2xl md:ml-auto'}`}>
                          {activity.summary}
                        </p>
                      </div>

                      <div className={`mt-8 flex ${isEven ? 'justify-end' : 'md:justify-start justify-end'}`}>
                        <a href="#" className="inline-flex items-center gap-2 font-bold hover:text-primary transition-colors technical-label group-hover:gap-4">
                          LEER MÁS <span className="text-2xl leading-none -mt-1">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
