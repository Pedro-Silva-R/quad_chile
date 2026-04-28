import { Link } from 'react-router';
import { BookOpen, Scale } from 'lucide-react';

export function SportPillars() {
  return (
    <section className="py-20 md:py-32 bg-background relative border-b-[3px] border-border">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <span className="technical-label text-[var(--brand-blue)] block mb-4">SEC.03 // LOS PILARES</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            El motor del juego:<br/>
            <span className="text-primary">reglas e igualdad</span> competitiva
          </h2>
          <p className="text-xl text-[var(--on-surface-muted)] leading-relaxed max-w-2xl mx-auto">
            Si entiendes dos cosas, la transmisión cambia: las reglas que apuran cada ataque y la clasificación funcional, que obliga a armar equipos con cabeza, no con "ventajas físicas".
          </p>
        </div>

        {/* Double Card Panel */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card: Reglas */}
          <div className="bg-surface border-[3px] border-border shadow-[var(--shadow-hard)] chamfer-card p-8 md:p-10 flex flex-col relative group overflow-hidden">
            <div className="noise-overlay"></div>
            {/* Diagonal Slash Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--brand-metal)]/10 to-transparent -skew-x-12 translate-x-10"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-16 h-16 border-[3px] border-border bg-primary flex items-center justify-center mb-8 shadow-hard-sm group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight mb-4">
                Reglamento base y tiempos
              </h3>
              
              <p className="text-[var(--on-surface-muted)] leading-relaxed mb-8">
                El partido se juega en cuatro cuartos de ocho minutos. La posesión y el avance tienen relojes que no perdonan. Hay contacto, sí, pero con límites claros: por ejemplo, golpear una silla por detrás del eje trasero para hacerla girar ("spinning") se sanciona. La idea es que haya intensidad sin poner en riesgo la seguridad.
              </p>
              
              <ul className="space-y-3 mb-10 mt-auto font-medium list-none p-0">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-none"></span>
                  4 cuartos de 8 minutos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-none"></span>
                  40 segundos de posesión para atacar.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-none"></span>
                  Faltas técnicas sancionan maniobras peligrosas.
                </li>
              </ul>

              <Link 
                to="/reglas" 
                className="inline-flex items-center justify-between w-full md:w-auto px-6 py-4 bg-[var(--brand-black)] text-[var(--brand-white)] border-[3px] border-[var(--brand-black)] font-bold uppercase tracking-wide no-underline hover:bg-primary hover:border-primary transition-colors mt-auto"
                aria-label="Leer el reglamento completo"
              >
                <span>[Lee el reglamento completo]</span>
                <span className="ml-4 font-normal text-sm lowercase text-[var(--brand-metal)] block md:hidden lg:block">Lo esencial para no perderte.</span>
              </Link>
            </div>
          </div>

          {/* Card: Clasificación */}
          <div className="bg-surface border-[3px] border-border shadow-[var(--shadow-hard)] chamfer-card p-8 md:p-10 flex flex-col relative group overflow-hidden">
            <div className="noise-overlay"></div>
            {/* Diagonal Slash Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--brand-blue)]/10 to-transparent -skew-x-12 translate-x-10"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-16 h-16 border-[3px] border-border bg-[var(--brand-blue)] flex items-center justify-center mb-8 shadow-hard-sm group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform">
                <Scale className="w-8 h-8 text-[var(--brand-white)]" />
              </div>
              
              <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight mb-4">
                Clasificación: el "tope" de puntos
              </h3>
              
              <p className="text-[var(--on-surface-muted)] leading-relaxed mb-8">
                Cada jugador recibe un puntaje (de 0.5 a 3.5) según su funcionalidad. En cancha, el equipo no puede superar un total de 8.0 puntos. Esto obliga a combinar perfiles distintos: nadie "sobra". La táctica manda.
              </p>
              
              <ul className="space-y-3 mb-10 mt-auto font-medium list-none p-0">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[var(--brand-blue)] rounded-none"></span>
                  Evaluación clínica asigna de 0.5 a 3.5 puntos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[var(--brand-blue)] rounded-none"></span>
                  Límite de 8.0 puntos combinados por equipo.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[var(--brand-blue)] rounded-none"></span>
                  Bonificación por mujeres en cancha (+0.5 o +1.0).
                </li>
              </ul>

              <Link 
                to="/clasificacion" 
                className="inline-flex items-center justify-between w-full md:w-auto px-6 py-4 bg-[var(--brand-black)] text-[var(--brand-white)] border-[3px] border-[var(--brand-black)] font-bold uppercase tracking-wide no-underline hover:bg-[var(--brand-blue)] hover:border-[var(--brand-blue)] transition-colors mt-auto"
                aria-label="Entender el sistema de clasificación"
              >
                <span>[Entiende la Clasificación]</span>
                <span className="ml-4 font-normal text-sm lowercase text-[var(--brand-metal)] block md:hidden lg:block">Descubre nuestras alineaciones.</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
