import { Link } from 'react-router';
import { ArrowRight, Handshake } from 'lucide-react';

export function SportFooterCTA() {
  return (
    <section className="!py-24 md:!py-40 bg-[var(--brand-black)] text-[var(--brand-white)] relative overflow-hidden diagonal-section-top border-t-[3px] border-border mt-12">
      {/* Background Effect (Subtle) */}
      <div className="noise-overlay opacity-30"></div>
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] text-center">
        <div className="max-w-3xl mx-auto">
          
          <div className="inline-block mb-8 border-[3px] border-[var(--brand-white)] p-2 bg-[var(--brand-black)] rotate-3">
            <span className="technical-label">SYS.READY // INICIA_JUEGO</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
            El silbato está por sonar.<br/>
            <span className="text-primary italic">¿Te sumas?</span>
          </h2>
          
          <p className="text-xl text-[var(--brand-white)]/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Ya tienes lo básico: cómo se anota, por qué el reloj aprieta y qué significa la clasificación. Lo siguiente es verlo en vivo, o mejor, probarlo. Si quieres entrenar, apoyar o entenderlo desde adentro, aquí hay un lugar para ti.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            {/* Primary CTA */}
            <Link 
              to="/participa" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground border-[3px] border-border font-bold uppercase tracking-widest text-lg no-underline transition-transform hover:-translate-y-1 hover:-translate-x-1 shadow-[var(--shadow-hard-sm)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                [Únete a un Entrenamiento]
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link 
              to="/contacto" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-[var(--brand-white)] border-[3px] border-[var(--brand-white)] font-bold uppercase tracking-widest text-lg no-underline transition-colors hover:bg-[var(--brand-white)] hover:text-[var(--brand-black)] shadow-[var(--shadow-hard-sm)]"
            >
              <span className="flex items-center gap-3">
                <Handshake className="w-5 h-5" />
                Conviértete en Patrocinador
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
