import { AlertTriangle, Clock, ShieldAlert, Crosshair, Map, Activity } from 'lucide-react';

export function SportGameManual() {
  const steps = [
    {
      icon: Clock,
      title: "Saque y posesión",
      desc: "El equipo atacante tiene 40 segundos para anotar y 12 segundos para cruzar la mitad de la cancha.",
      num: "01"
    },
    {
      icon: Activity,
      title: "Avance y dribleo",
      desc: "Para mantener la posesión, el jugador debe botar el balón o hacer un pase válido al menos una vez cada 8 segundos.",
      num: "02"
    },
    {
      icon: ShieldAlert,
      title: "Contacto y bloqueo",
      desc: "La defensa usa la silla para chocar de forma legal, trabar y cortar líneas de pase, buscando frenar el avance o forzar un error.",
      num: "03"
    },
    {
      icon: Map,
      title: "La zona clave",
      desc: "Solo tres defensas pueden permanecer simultáneamente dentro de su zona al defender y un jugador ofensivo no puede permanecer dentro de la zona clave enemiga por más de ocho segundos.",
      num: "04"
    },
    {
      icon: Crosshair,
      title: "Anotación del gol",
      desc: "Vale un punto cuando el portador cruza la línea de 8 metros con dos ruedas y con control claro del balón.",
      num: "05"
    }
  ];

  return (
    <section className="!py-20 md:!py-32 bg-surface-dim diagonal-section-top relative border-y-[3px] border-border">
      <div className="technical-grid absolute inset-0 z-0"></div>
      
      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">
        {/* Encabezado */}
        <div className="max-w-3xl mb-16 md:mb-24 ml-auto text-right">
          <span className="technical-label text-primary block mb-4">SEC.02 // MANUAL DE JUEGO</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Dinámica del partido: el camino hacia la <span className="text-primary">línea de gol</span>
          </h2>
          <p className="text-xl text-[var(--on-surface-muted)] leading-relaxed border-r-[3px] border-border pr-6">
            El objetivo es cruzar la línea de gol del rival con dos ruedas de la silla mientras controlas el balón. Suena simple. En la práctica es presión, bloqueos y decisiones rápidas con el reloj encima.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Pasos (Grid) */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.num}
                    className={`bg-background p-6 border-[3px] border-border shadow-[var(--shadow-hard)] chamfer-card relative group transition-transform hover:-translate-y-1 hover:-translate-x-1 ${idx === 4 ? 'sm:col-span-2' : ''}`}
                  >
                    <div className="absolute top-4 right-4 technical-label text-[var(--brand-metal)] group-hover:text-primary transition-colors">
                      {step.num}
                    </div>
                    <div className="w-12 h-12 border-2 border-border flex items-center justify-center bg-surface mb-6 text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl uppercase mb-3">{step.title}</h3>
                    <p className="text-[var(--on-surface-muted)] leading-relaxed m-0">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Advertencias (Errores comunes) */}
          <div className="lg:col-span-4">
            <div className="bg-[var(--brand-black)] text-[var(--brand-white)] p-8 border-[3px] border-border shadow-[var(--shadow-hard)] chamfer-cut-tl sticky top-32">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[var(--brand-metal)]">
                <AlertTriangle className="w-6 h-6 text-warning animate-pulse" />
                <h3 className="font-display font-bold text-xl uppercase m-0 text-warning">Lo que el público suele confundir</h3>
              </div>
              
              <ul className="space-y-6 m-0 p-0 list-none">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1.5 w-2 h-2 bg-[var(--brand-metal)]"></span>
                  <p className="m-0 leading-snug">
                    <strong className="text-[var(--brand-white)] block mb-1 font-display">No se usa balón ovalado:</strong>
                    <span className="text-[var(--brand-metal)] text-sm">El balón es redondo para que el pase y el control sean más seguros.</span>
                  </p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1.5 w-2 h-2 bg-[var(--brand-metal)]"></span>
                  <p className="m-0 leading-snug">
                    <strong className="text-[var(--brand-white)] block mb-1 font-display">El contacto permitido es silla contra silla:</strong>
                    <span className="text-[var(--brand-metal)] text-sm">Prohibidos los golpes directos al cuerpo del rival.</span>
                  </p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1.5 w-2 h-2 bg-[var(--brand-metal)]"></span>
                  <p className="m-0 leading-snug">
                    <strong className="text-[var(--brand-white)] block mb-1 font-display">No hay canastas:</strong>
                    <span className="text-[var(--brand-metal)] text-sm">Se anota cruzando una línea de 8 metros marcada en el suelo.</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
