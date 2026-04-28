import { CheckSquare } from 'lucide-react';

export function SportIntro() {
  const essentials = [
    'Deporte mixto de contacto en silla de ruedas.',
    'Se juega con un balón redondo en cancha de básquetbol.',
    'Equipos de cuatro jugadores en cancha con límite estricto de puntos.',
    'Ritmo alto, posesiones cortas y contacto constante.',
    'Mezcla de ideas de rugby, baloncesto y balonmano.'
  ];

  return (
    <section id="que-es" className="!py-20 md:!py-40 bg-background relative">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="mb-8">
              <span className="technical-label text-[var(--brand-metal)] block mb-4">SEC.01 // VISIÓN GENERAL</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
                Más que rehabilitación:<br/>
                <span className="text-primary">alto rendimiento</span> y contacto total.
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-lg md:text-xl text-[var(--on-surface-muted)] leading-relaxed mb-6">
                El rugby en silla de ruedas (también conocido por su apodo histórico "Murderball") es un deporte paralímpico mixto. 
                Está pensado para atletas con compromiso funcional en al menos tres extremidades. Se juega en una cancha de básquetbol, 
                en piso de madera, y con un balón redondo tipo voleibol que facilita el agarre, el pase y el control. 
                Es rápido, táctico y exige lectura de juego.
              </p>
              <p className="text-lg md:text-xl text-[var(--on-surface-muted)] leading-relaxed">
                Si lo miras con ojos de "rehabilitación", te pierdes la película. Esto es competencia de verdad. 
                Las sillas están hechas para chocar, bloquear y abrir espacios. Lo que decide un partido no es solo la fuerza: 
                manda la coordinación, el tiempo, y saber cuándo apretar y cuándo soltar.
              </p>
            </div>

            {/* Blockquote de alto impacto */}
            <blockquote 
              aria-label="Resumen clave"
              className="bg-[var(--brand-blue)] text-[var(--brand-white)] p-6 md:p-8 border-[3px] border-border shadow-[var(--shadow-hard)] chamfer-cut-tl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="technical-label text-[var(--brand-white)]">TL;DR</span>
              </div>
              <p className="font-display font-bold text-xl md:text-3xl italic leading-tight m-0 relative z-10">
                "Deporte de contacto en silla de ruedas donde cuatro jugadores combinan velocidad, bloqueos y táctica para cruzar una línea de gol."
              </p>
            </blockquote>
          </div>

          {/* Sidebar: Lo esencial */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32">
            <div className="bg-surface border-[3px] border-border p-6 shadow-[var(--shadow-hard)]">
              <div className="border-b-[3px] border-border pb-4 mb-6">
                <h3 className="font-display font-bold text-2xl uppercase m-0">Lo Esencial</h3>
                <span className="technical-label text-[var(--brand-metal)]">DATOS CLAVE</span>
              </div>
              
              <ul className="space-y-4 m-0 p-0 list-none">
                {essentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary border-2 border-border p-1">
                      <CheckSquare className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-base text-foreground font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Elemento decorativo técnico */}
            <div className="hidden md:flex justify-end mt-4 px-2 opacity-50">
               <span className="technical-label text-[var(--brand-metal)] tracking-widest text-xs">V.2.0 // QR_CHILE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
