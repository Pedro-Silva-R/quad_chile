import { Star, Award } from 'lucide-react';

export function TeamSection() {
  // PHOTOS: Para añadir una foto, agrega la ruta en el campo `photo`.
  // Ejemplo: photo: '/assets/team/mateo-fernandez.webp'
  // La imagen se usará como fondo del área superior de la tarjeta automáticamente.
  const players = [
    {
      name: 'Mateo Fernández',
      role: 'Atacante',
      city: 'Santiago',
      classification: '3.0',
      badge: 'CAP',
      index: 'P-01',
      photo: undefined as string | undefined,
    },
    {
      name: 'Daniela Torres',
      role: 'Defensa',
      city: 'Valparaíso',
      classification: '2.5',
      badge: 'SEL',
      index: 'P-02',
      photo: undefined as string | undefined,
    },
    {
      name: 'Lucas Ramírez',
      role: 'Mixto',
      city: 'Concepción',
      classification: '1.5',
      badge: 'MVP',
      index: 'P-03',
      photo: undefined as string | undefined,
    },
    {
      name: 'Sofía Muñoz',
      role: 'Defensa',
      city: 'Viña del Mar',
      classification: '2.0',
      badge: 'SEL',
      index: 'P-04',
      photo: undefined as string | undefined,
    },
  ];

  // STAFF PHOTOS: Mismo sistema. Ejemplo: photo: '/assets/team/ricardo-vargas.webp'
  const staff = [
    {
      name: 'Ricardo Vargas',
      role: 'Entrenador Principal',
      city: 'Santiago',
      badge: 'IWRF-L3',
      index: 'S-01',
      photo: undefined as string | undefined,
    },
    {
      name: 'Andrea Castillo',
      role: 'Preparadora Física',
      city: 'Santiago',
      badge: 'CERT',
      index: 'S-02',
      photo: undefined as string | undefined,
    },
    {
      name: 'Jorge Espinoza',
      role: 'Clasificador Funcional',
      city: 'Valparaíso',
      badge: 'IWRF',
      index: 'S-03',
      photo: undefined as string | undefined,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-dim relative overflow-hidden">
      {/* Background technical decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-accent/5 rounded-full pointer-events-none"></div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] relative z-10">
        <div className="text-center md:text-left mb-16 md:grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 mb-4 border-l-4 border-[var(--brand-metal)] pl-3">
            <span className="technical-label text-[var(--brand-metal)] tracking-widest uppercase">UNIDAD_EQUIPO_01</span>
          </div>
            <h2 className="text-foreground mb-6 text-4xl md:text-6xl uppercase font-black tracking-tight">Nuestro Equipo</h2>
            <p className="text-[var(--on-surface-muted)] text-lg max-w-2xl leading-relaxed">
              Conoce a los atletas y profesionales que representan el espíritu del quad rugby en Chile, 
              impulsando el deporte con precisión técnica y determinación.
            </p>
          </div>
          <div className="hidden md:block md:col-span-4 text-right">
            <span className="technical-label text-accent font-bold text-xl">PERSONAL_TÉCNICO.04</span>
          </div>
        </div>

        {/* Jugadores Destacados */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10 border-l-4 border-primary pl-4">
            <Star className="w-6 h-6 text-primary fill-primary" />
            <h3 className="text-foreground tracking-tighter uppercase font-black italic">Jugadores Destacados</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {players.map((player, idx) => {
              // Simular rotación aleatoria leve por índice
              const rotationClass = [
                'hover:rotate-1',
                'hover:-rotate-1',
                'hover:rotate-[1.5deg]',
                'hover:-rotate-[1.5deg]'
              ][idx % 4];

              return (
                <div
                  key={player.name}
                  className={`bg-card border-[3px] border-border shadow-[var(--shadow-hard-sm)] transition-all duration-300 ${rotationClass} hover:-translate-y-2 hover:shadow-[var(--shadow-hard)] overflow-hidden relative group`}
                >
                  {/* Technical index */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="technical-label px-2 py-0.5 bg-background border-2 border-border text-[10px] group-hover:border-primary group-hover:text-primary transition-colors">
                      {player.index}
                    </span>
                  </div>

                  <div className="h-56 border-b-[3px] border-border relative flex items-center justify-center overflow-hidden">
                    {/* Fondo: foto real si existe, placeholder técnico si no */}
                    {player.photo ? (
                      <>
                        <img
                          src={player.photo}
                          alt={`Foto de ${player.name}`}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                        {/* Overlay brutalista sobre la foto */}
                        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                        <div className="absolute inset-0 scanlines opacity-20"></div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-surface-variant group-hover:bg-primary/5 transition-colors"></div>
                        <div className="absolute inset-0 technical-grid opacity-10"></div>
                        <div className="w-28 h-28 border-[3px] border-border bg-card flex items-center justify-center text-foreground font-display text-4xl font-black group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-105 relative z-10">
                          {player.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </>
                    )}
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="technical-label px-2 py-1 bg-primary text-white border-2 border-border text-[10px] uppercase font-bold">
                        {player.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-foreground mb-1 font-black uppercase text-lg">{player.name}</h4>
                    <p className="text-[var(--on-surface-muted)] text-xs mb-4 font-bold tracking-wider opacity-70">
                      {player.role} // {player.city}
                    </p>
                    <div className="flex items-center justify-between border-t-2 border-border/10 pt-4">
                      <span className="technical-label text-[var(--brand-metal)] text-[10px]">CLASIFICACIÓN:</span>
                      <span className="technical-label px-3 py-1 bg-background border-2 border-primary text-primary font-bold">
                        {player.classification}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Staff */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10 border-l-4 border-accent pl-4">
            <Award className="w-6 h-6 text-accent fill-accent" />
            <h3 className="text-foreground tracking-tighter uppercase font-black italic">Staff Técnico</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, idx) => {
              const rotationClass = [
                'hover:-rotate-1',
                'hover:rotate-1',
                'hover:rotate-[0.8deg]'
              ][idx % 3];

              return (
                <div
                  key={member.name}
                  className={`bg-card p-6 border-[3px] border-border shadow-[var(--shadow-hard-sm)] transition-all duration-300 ${rotationClass} hover:-translate-y-2 hover:shadow-[var(--shadow-hard)] relative group overflow-hidden`}
                >
                  {/* Subtle Blue Grid Overlay on hover */}
                  <div className="absolute inset-0 technical-grid opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>

                  {/* Technical index */}
                  <div className="absolute top-4 right-4">
                    <span className="technical-label text-accent font-bold text-[10px] group-hover:underline">{member.index}</span>
                  </div>

                  <div className="flex items-start gap-5 relative z-10">
                    {/* Avatar: foto real si existe, iniciales si no */}
                    <div className="flex-shrink-0 w-20 h-20 border-[3px] border-accent overflow-hidden relative">
                      {member.photo ? (
                        <>
                          <img
                            src={member.photo}
                            alt={`Foto de ${member.name}`}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-accent/20"></div>
                        </>
                      ) : (
                        <div className="w-full h-full bg-accent/10 flex items-center justify-center text-accent font-display text-2xl font-black group-hover:bg-accent group-hover:text-white transition-all">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-foreground mb-1 font-black uppercase text-lg group-hover:text-accent transition-colors">{member.name}</h4>
                      <p className="text-[var(--on-surface-muted)] text-sm mb-3 font-medium leading-tight">
                        {member.role}
                      </p>
                      <div className="flex flex-col gap-2">
                        <span className="technical-label text-[var(--brand-metal)] text-[9px] uppercase tracking-tighter opacity-60">BASE: {member.city}</span>
                        <div className="inline-block">
                          <span className="technical-label px-2 py-0.5 bg-accent text-white border-2 border-border text-[10px] font-bold">
                            {member.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center md:text-left">
          <a
            href="#participa"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground border-[3px] border-border shadow-[var(--shadow-hard)] font-black uppercase tracking-widest no-underline transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none chamfer-cut-tl"
          >
            Quiero sumarme <span className="ml-3 text-2xl leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
