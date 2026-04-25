import { User, Heart, Flag, ClipboardCheck, ArrowRight } from 'lucide-react';

export function ParticipateSection() {
  const roles = [
    {
      image: '/assets/role-atleta.jpeg',
      title: 'Atleta',
      description: 'Forma parte del equipo como jugador. Requisitos: diagnóstico de tetraplejía o función similar en extremidades. Sin experiencia previa necesaria.',
      bgColor: 'bg-primary',
      textColor: 'text-primary',
      protocolID: 'PRT.01',
    },
    {
      image: '/assets/role-voluntario.jpeg',
      title: 'Voluntario',
      description: 'Apoya en eventos, logística, difusión y desarrollo del deporte. Disponibilidad flexible, compromiso con la inclusión.',
      bgColor: 'bg-accent',
      textColor: 'text-accent',
      protocolID: 'PRT.02',
    },
    {
      image: '/assets/role-arbitro.jpeg',
      title: 'Árbitro',
      description: 'Certifícate como árbitro nacional e internacional. Formación oficial IWRF, experiencia deportiva valorada.',
      bgColor: 'bg-[var(--brand-metal)]',
      textColor: 'text-[var(--brand-metal)]',
      protocolID: 'PRT.03',
    },
    {
      image: '/assets/role-clasificador.jpeg',
      title: 'Clasificador',
      description: 'Especialízate en clasificación funcional. Requiere formación en kinesiología, terapia ocupacional o medicina deportiva.', 
      bgColor: 'bg-[var(--brand-black)]',
      textColor: 'text-foreground',
      protocolID: 'PRT.04',
    },
  ];

  return (
    <section id="participa" className="py-16 md:py-32 bg-surface-variant relative overflow-hidden">
      {/* Background technical decoration */}
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none z-0">
        <span className="font-display text-[25vw] font-black tracking-tighter outline-text select-none">
          JOIN
        </span>
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center mb-16 md:mb-24">
          {/* Image Side (Fills the previous empty space) */}
          <div className="hidden md:flex md:col-span-5 lg:col-span-5 items-center justify-center py-12">
            <div className="relative w-full aspect-[4/3] border-[3px] border-border overflow-hidden chamfer-card shadow-[var(--shadow-hard-sm)] group rotate-2 transition-transform hover:rotate-0 duration-300">
              <img 
                src="/assets/1b.jpeg" 
                alt="Acción de juego Quad Rugby" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
              
              {/* Technical Overlay */}
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 py-1">
                <span className="technical-label !text-[10px]">RECRUIT_MODE_ON</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border-2 border-border p-2">
                <span className="technical-label text-foreground">PRT.SYS // 0.5-3.5</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="md:col-span-7 lg:col-span-7 text-center md:text-right">
            <div className="inline-flex flex-row-reverse md:flex-row items-center gap-2 mb-4 border-b-2 border-primary pb-2">
              <span className="technical-label text-primary tracking-widest">SISTEMA_DE_RECLUTAMIENTO</span>
              <span className="w-3 h-3 bg-primary animate-pulse"></span>
            </div>
            <h2 className="text-foreground mb-6 text-4xl md:text-6xl uppercase font-black tracking-tight">
              Participa en<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[var(--brand-red)]">nuestro equipo</span>
            </h2>
            <p className="text-[var(--on-surface-muted)] text-lg max-w-xl mx-auto md:mr-0 font-medium leading-relaxed">
              Hay múltiples formas de ser parte de la familia del quad rugby en Chile. Encuentra tu rol.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
          {roles.map((role, idx) => {
            // Staggered layout effect on desktop
            const staggerClass = idx % 2 !== 0 ? 'lg:translate-y-12' : '';
            
            return (
              <div
                key={role.title}
                className={`bg-card flex flex-col border-[3px] border-border shadow-[var(--shadow-hard-sm)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-hard)] relative group overflow-hidden ${staggerClass} chamfer-card`}
              >
                {/* Header Area */}
                <div className={`p-6 border-b-[3px] border-border relative overflow-hidden transition-colors ${role.bgColor} text-white group-hover:brightness-110`}>
                  <div className="absolute inset-0 technical-grid opacity-20"></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div className="w-20 h-20 bg-background border-[3px] border-border overflow-hidden relative group-hover:border-white transition-colors duration-300 shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
                      <img 
                        src={role.image} 
                        alt={role.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback for missing images
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-surface-variant');
                          const span = document.createElement('span');
                          span.className = 'technical-label text-[8px] text-foreground opacity-40';
                          span.innerText = 'ERR_404_IMG';
                          e.currentTarget.parentElement?.appendChild(span);
                        }}
                      />
                      <div className="absolute inset-0 scanlines opacity-10 pointer-events-none"></div>
                    </div>
                    <span className="technical-label px-2 py-1 bg-black/30 border border-white/20 text-white font-bold text-[10px]">
                      {role.protocolID}
                    </span>
                  </div>
                  
                  <h3 className="mt-8 text-2xl font-black uppercase tracking-tight relative z-10">{role.title}</h3>
                </div>

                {/* Body Area */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-card relative z-10">
                  <p className="text-[var(--on-surface-muted)] text-sm leading-relaxed mb-6 font-medium">
                    {role.description}
                  </p>
                  
                  <div className="pt-4 border-t-2 border-border/10">
                    <span className={`technical-label text-[10px] uppercase font-bold flex items-center gap-2 ${role.textColor}`}>
                      Revisar manual <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Terminal Style */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-[var(--brand-red)] to-accent blur opacity-30"></div>
          <div className="relative bg-[var(--brand-black)] border-[3px] border-border p-2 md:p-4 chamfer-cut-br shadow-[var(--shadow-hard)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 px-4 md:px-8 py-4 w-full">
              <span className="technical-label text-primary mb-2 flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full animate-ping"></span> ACCESO HABILITADO</span>
              <p className="text-white text-xl md:text-2xl font-black uppercase tracking-wide">
                Iniciar protocolo de ingreso oficial
              </p>
            </div>
            
            <a
              href="/participa.html"
              className="group w-full md:w-auto inline-flex items-center justify-center px-10 py-6 bg-primary text-primary-foreground font-black text-xl tracking-widest uppercase transition-all hover:bg-white hover:text-primary active:scale-95 chamfer-cut-tl whitespace-nowrap border-[3px] border-transparent hover:border-primary"
            >
              EJECUTAR <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
