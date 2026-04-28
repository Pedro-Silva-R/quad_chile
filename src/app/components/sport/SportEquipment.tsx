import { Link } from 'react-router';
import { Settings, Shield, Zap, Check } from 'lucide-react';

export function SportEquipment() {
  return (
    <section id="equipamiento" className="py-20 md:py-32 bg-surface-dim relative border-b-[3px] border-border">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">
        
        {/* Encabezado */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="technical-label text-[var(--brand-metal)] block mb-4">SEC.04 // HARDWARE</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Las <span className="text-primary">máquinas</span>: sillas de juego y equipamiento
          </h2>
          <p className="text-xl text-[var(--on-surface-muted)] leading-relaxed border-l-[3px] border-primary pl-6">
            En el quad rugby, la silla no es un accesorio: es parte del juego. Se fabrica a medida y está hecha para resistir choques. Suelen usar aluminio o titanio, y cada pieza tiene un porqué (seguridad, maniobra, bloqueo).
          </p>
        </div>

        {/* Comparativa de Sillas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Silla Ofensiva */}
          <div className="bg-background border-[3px] border-border p-6 shadow-[var(--shadow-hard)] flex flex-col group hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground border-2 border-border">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase leading-none m-0">Silla ofensiva</h3>
                  <span className="technical-label text-[var(--brand-metal)]">CLASES ALTAS</span>
                </div>
              </div>
              <span className="technical-label text-[var(--brand-metal)] text-xs">MODEL:OFF</span>
            </div>
            
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-surface border-2 border-border mb-6 flex items-center justify-center overflow-hidden relative">
              <img 
                src="/assets/chair-off.webp" 
                alt="Silla de ruedas ofensiva de quad rugby" 
                width="600"
                height="450"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="technical-label text-border">IMG_MISSING // OFFENSIVE_CHAIR</span>';
                }}
              />
              <div className="absolute inset-0 scanlines pointer-events-none"></div>
            </div>

            <p className="text-[var(--on-surface-muted)] leading-relaxed m-0 mt-auto">
              Diseño compacto, ruedas más pequeñas y "alas" redondeadas. Se mueve con más agilidad, esquiva bloqueos y busca huecos.
            </p>
          </div>

          {/* Silla Defensiva */}
          <div className="bg-background border-[3px] border-border p-6 shadow-[var(--shadow-hard)] flex flex-col group hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--brand-black)] flex items-center justify-center text-[var(--brand-white)] border-2 border-border">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase leading-none m-0">Silla defensiva</h3>
                  <span className="technical-label text-[var(--brand-metal)]">CLASES BAJAS</span>
                </div>
              </div>
              <span className="technical-label text-[var(--brand-metal)] text-xs">MODEL:DEF</span>
            </div>
            
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-surface border-2 border-border mb-6 flex items-center justify-center overflow-hidden relative">
              <img 
                src="/assets/chair-def.webp" 
                alt="Silla de ruedas defensiva de quad rugby" 
                width="600"
                height="450"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="technical-label text-border">IMG_MISSING // DEFENSIVE_CHAIR</span>';
                }}
              />
              <div className="absolute inset-0 scanlines pointer-events-none"></div>
            </div>

            <p className="text-[var(--on-surface-muted)] leading-relaxed m-0 mt-auto">
              Parachoques extendido tipo "parrilla" o gancho. Está hecha para atrapar, enganchar y frenar a los atacantes.
            </p>
          </div>

        </div>

        {/* Layout Inferior: Elementos Clave y Checklist */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Elementos Clave */}
          <div className="lg:col-span-8 bg-surface border-[3px] border-border p-8 chamfer-cut-tl relative">
            <div className="absolute top-0 right-0 w-8 h-8 border-l-[3px] border-b-[3px] border-border"></div>
            <h3 className="font-display font-bold text-2xl uppercase mb-6 flex items-center gap-3">
              <Settings className="w-6 h-6 text-primary" />
              Elementos Clave
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand-metal)]"></span> Protectores de radios (Spokeguards)
                </h4>
                <p className="text-sm text-[var(--on-surface-muted)] m-0">
                  Placas sólidas que evitan que manos o sillas rivales se enreden en las ruedas.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand-metal)]"></span> Anti-vuelcos (Anti-tips)
                </h4>
                <p className="text-sm text-[var(--on-surface-muted)] m-0">
                  Ruedas traseras de seguridad obligatorias para evitar caídas hacia atrás en aceleraciones bruscas.
                </p>
              </div>
              <div className="sm:col-span-2">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--brand-metal)]"></span> Balón oficial
                </h4>
                <p className="text-sm text-[var(--on-surface-muted)] m-0">
                  Balón redondo texturizado (tipo voleibol) inflado a 7.5 libras de presión, diseñado para mejorar el agarre.
                </p>
              </div>
            </div>
          </div>

          {/* Checklist / CTA */}
          <div className="lg:col-span-4 bg-primary text-primary-foreground border-[3px] border-border p-8 shadow-[var(--shadow-hard)] flex flex-col">
            <h3 className="font-display font-black text-2xl uppercase mb-6">Tu primera práctica</h3>
            <ul className="space-y-4 mb-8 font-medium">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 shrink-0" />
                <span>Ropa deportiva cómoda.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 shrink-0" />
                <span>Zapatillas cerradas.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 shrink-0" />
                <span>Guantes y correas si tu condición lo requiere.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 shrink-0" />
                <span>Botella de agua.</span>
              </li>
            </ul>
            
            <Link 
              to="/participa" 
              className="mt-auto block text-center py-4 bg-[var(--brand-white)] text-[var(--brand-black)] border-2 border-border font-bold uppercase tracking-widest hover:bg-[var(--brand-black)] hover:text-[var(--brand-white)] hover:border-[var(--brand-black)] transition-colors"
            >
              [Agenda tu prueba]
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
