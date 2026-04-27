import { Zap, Users, Trophy, Globe } from 'lucide-react';

export function WhatIsSection() {
  const features = [
    {
      icon: Zap,
      title: 'Velocidad',
      description: 'Acción intensa con jugadores alcanzando velocidades de hasta 15 km/h en sillas diseñadas para impacto.',
      label: '01',
      bgColor: 'var(--brand-blue)',
    },
    {
      icon: Users,
      title: 'Contacto',
      description: 'El único deporte paralímpico donde el contacto físico entre sillas es parte fundamental del juego.',
      label: '02',
      bgColor: 'var(--brand-red)',
    },
    {
      icon: Trophy,
      title: 'Sistema Técnico',
      description: 'Clasificación funcional de 0.5 a 3.5 puntos por jugador. En cancha, máximo 8 puntos entre 4 jugadores.',
      label: '03',
      bgColor: 'var(--brand-metal)',
    },
    {
      icon: Globe,
      title: 'Nivel Internacional',
      description: 'Deporte paralímpico desde 1996. Competiciones en América, Europa, Asia y Oceanía.',
      label: '04',
      bgColor: 'var(--brand-black)',
    },
  ];

  return (
    <section id="el-deporte" className="py-16 md:py-24 bg-surface-dim diagonal-section-top">

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] mt-8">
        <div className="text-center md:text-left mb-12 md:grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 lg:col-span-7">
            <h2 className="text-foreground mb-6 text-4xl md:text-6xl uppercase font-black tracking-tight">Qué es el Rugby en Silla de Ruedas</h2>
            <p className="text-[var(--on-surface-muted)] text-xl leading-relaxed">
              Conocido internacionalmente como Wheelchair Rugby o Quad Rugby, es un deporte de equipo que combina elementos
              de rugby, básquetbol y hockey sobre hielo. Diseñado específicamente para atletas con tetraplejía,
              el juego se desarrolla con cuatro jugadores por equipo en una cancha de básquetbol.
            </p>
          </div>
          
          {/* Empty State / Balance Placeholder (Hidden on mobile) */}
          <div className="hidden md:flex md:col-span-4 lg:col-span-5 items-center justify-center py-24">
            <div className="relative w-full aspect-[4/3] border-[3px] border-border overflow-hidden chamfer-card shadow-[var(--shadow-hard-sm)] group rotate-3 transition-transform hover:rotate-0 duration-300">
              <img 
                src="/assets/1a.jpeg" 
                alt="Rugby en silla de ruedas en acción" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
              
              {/* Technical Overlay */}
              <div className="absolute top-0 left-0 bg-border text-background px-2 py-1">
                <span className="technical-label !text-[10px]">LIVE_FEED</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm border-2 border-border p-2">
                <span className="technical-label text-foreground">IMG.01 // QRC_CORE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card p-6 border-[3px] border-border shadow-[var(--shadow-hard-sm)] transition-transform hover:-translate-x-1 hover:-translate-y-1 relative chamfer-card group"
              >
                {/* Technical label */}
                <div className="absolute top-4 right-4 transition-colors group-hover:text-primary">
                  <span className="technical-label text-inherit">{feature.label}</span>
                </div>

                <div
                  className="w-14 h-14 border-[3px] border-border flex items-center justify-center mb-4 chamfer-cut-tl"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-foreground mb-3">{feature.title}</h3>
                <p className="text-[var(--on-surface-muted)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/reglas.html"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground border-[3px] border-border shadow-[var(--shadow-hard-sm)] font-semibold no-underline transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none chamfer-cut-tl"
          >
            Ver reglas
          </a>
          <a
            href="/clasificacion.html"
            className="inline-flex items-center justify-center px-6 py-3 bg-surface text-foreground border-[3px] border-border shadow-[var(--shadow-hard-sm)] font-semibold no-underline transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none chamfer-cut-tl"
          >
            Entender clasificación
          </a>
        </div>
      </div>
    </section>
  );
}
