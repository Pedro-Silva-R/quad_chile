import { useState } from 'react';
import { CheckCircle, Loader2, Target } from 'lucide-react';

export function ClubsSection() {
  const [formData, setFormData] = useState({
    name: '',
    region: '',
    city: '',
    contact: '',
    consent: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const regions = [
    'Arica y Parinacota',
    'Tarapacá',
    'Antofagasta',
    'Atacama',
    'Coquimbo',
    'Valparaíso',
    'Metropolitana',
    "O'Higgins",
    'Maule',
    'Ñuble',
    'Biobío',
    'Araucanía',
    'Los Ríos',
    'Los Lagos',
    'Aysén',
    'Magallanes',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.region || !formData.contact || !formData.consent) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', region: '', city: '', contact: '', consent: false });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-32 bg-surface-dim relative overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] relative z-10">
        
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-2 mb-4 border-l-4 border-[var(--brand-metal)] pl-3">
            <span className="technical-label text-[var(--brand-metal)] tracking-widest uppercase">Red Nacional</span>
          </div>
          <h2 className="text-foreground mb-6 text-4xl md:text-6xl uppercase font-black tracking-tight">Actividades por Región</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card border-[3px] border-border shadow-[var(--shadow-hard)] chamfer-card flex flex-col md:flex-row overflow-hidden group">
            
            {/* Panel Izquierdo: Info Técnica */}
            <div className="w-full md:w-2/5 bg-surface-variant p-8 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-border border-dashed relative flex flex-col justify-between">
              <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10 mb-8">
                <div className="flex items-center justify-center w-16 h-16 border-[3px] border-border bg-background mb-6 shadow-[var(--shadow-hard-sm)] group-hover:-translate-y-1 transition-transform">
                  <Target className="w-8 h-8 text-[var(--brand-metal)] animate-[spin_10s_linear_infinite]" />
                </div>
                <h3 className="text-foreground mb-4 font-black uppercase text-2xl tracking-tight">Mapeo de<br/>Zonas</h3>
                <p className="text-[var(--on-surface-muted)] text-sm leading-relaxed font-medium">
                  Estamos monitoreando el interés a lo largo del país para priorizar el desarrollo de nuevos polos deportivos. Regístrate en nuestro radar.
                </p>

                {/* Imagen del Radar / Mapa */}
                <div className="relative mt-8 w-full aspect-[4/3] border-[3px] border-border overflow-hidden chamfer-card bg-background group/map">
                  <img 
                    src="/assets/radar-map.webp" 
                    alt="Mapa de monitoreo nacional" 
                    className="w-full h-full object-cover opacity-60 group-hover/map:opacity-100 group-hover/map:scale-110 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-border/5');
                      const span = document.createElement('span');
                      span.className = 'technical-label text-[10px] opacity-30';
                      span.innerText = 'DATA_SYNC_PENDING';
                      e.currentTarget.parentElement?.appendChild(span);
                    }}
                  />
                  <div className="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>
                  <div className="absolute top-2 right-2 flex gap-1">
                    <span className="technical-label text-[8px] text-primary/60 mr-1">SCAN_V.02</span>
                    <div className="w-1.5 h-1.5 bg-primary animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <span className="technical-label text-[var(--brand-metal)] text-[10px]">ESTADO: ESCANEANDO RED</span>
              </div>
            </div>

            {/* Panel Derecho: Formulario */}
            <div className="w-full md:w-3/5 p-8 md:p-10 bg-card relative">
              <div className="mb-8">
                <span className="technical-label px-2 py-1 bg-[var(--brand-red)] text-white border-[3px] border-border inline-block mb-4">NOTIFICACIÓN</span>
                <h3 className="text-foreground mb-2 text-xl font-bold">Avísenme cuando haya actividad</h3>
              </div>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-[var(--success)] mb-4" />
                  <p className="text-foreground font-black uppercase text-xl mb-2">
                    Ingreso Confirmado
                  </p>
                  <p className="text-[var(--on-surface-muted)] text-sm font-medium">
                    Te notificaremos cuando el quad rugby llegue a tu región.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block technical-label text-[10px] text-[var(--brand-metal)] mb-2">
                      IDENTIFICACIÓN //
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nombre y Apellido"
                      required
                      className="w-full px-4 py-3 bg-surface border-[3px] border-border text-foreground font-medium placeholder:text-[var(--brand-metal)] outline-none focus:border-[var(--brand-metal)] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="region" className="block technical-label text-[10px] text-[var(--brand-metal)] mb-2">
                        REGIONES_CL //
                      </label>
                      <select
                        id="region"
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-surface border-[3px] border-border text-foreground font-medium outline-none focus:border-[var(--brand-metal)] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Seleccionar Región</option>
                        {regions.map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="city" className="block technical-label text-[10px] text-[var(--brand-metal)] mb-2">
                        LOCALIDAD // OPCIONAL
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Ciudad o Comuna"
                        className="w-full px-4 py-3 bg-surface border-[3px] border-border text-foreground font-medium placeholder:text-[var(--brand-metal)] outline-none focus:border-[var(--brand-metal)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact" className="block technical-label text-[10px] text-[var(--brand-metal)] mb-2">
                      VÍA_DE_CONTACTO //
                    </label>
                    <input
                      type="text"
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="Email o Teléfono WhatsApp"
                      required
                      className="w-full px-4 py-3 bg-surface border-[3px] border-border text-foreground font-medium placeholder:text-[var(--brand-metal)] outline-none focus:border-[var(--brand-metal)] transition-colors"
                    />
                  </div>

                  <div className="flex items-center gap-4 p-4 border-[3px] border-border/20 bg-surface-variant/50">
                    <div className="relative flex-shrink-0">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        required
                        className="w-5 h-5 !min-h-[20px] !min-w-[20px] border-[3px] border-border appearance-none checked:bg-accent checked:border-accent relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-xs checked:after:font-black checked:after:left-[3px] checked:after:-top-[1px] cursor-pointer transition-colors"
                      />
                    </div>
                    <label htmlFor="consent" className="text-xs text-[var(--on-surface-muted)] leading-relaxed font-medium cursor-pointer">
                      Acepto recibir notificaciones sobre quad rugby en mi región.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full px-8 py-4 bg-foreground text-background border-[3px] border-border shadow-[6px_6px_0_var(--brand-blue)] font-black uppercase tracking-widest transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none disabled:opacity-50 flex items-center justify-center gap-3 chamfer-cut-br"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          PROCESANDO
                        </>
                      ) : (
                        'INGRESAR AL RADAR'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
