import { Instagram, Heart, MessageSquare, ExternalLink } from 'lucide-react';

export function SocialMediaSection() {
  const mediaItems = [
    { 
      id: 1, 
      handle: '@rugbyencl',
      likes: '248',
      comments: '12',
      label: 'DATA_STRM.01',
      image: undefined // Para usar imagen real: '/assets/social/post1.webp'
    },
    { 
      id: 2, 
      handle: '@rugbyencl',
      likes: '1.2k',
      comments: '45',
      label: 'DATA_STRM.02',
      image: undefined
    },
    { 
      id: 3, 
      handle: '@rugbyencl',
      likes: '856',
      comments: '28',
      label: 'DATA_STRM.03',
      image: undefined
    },
    { 
      id: 4, 
      handle: '@rugbyencl',
      likes: '932',
      comments: '31',
      label: 'DATA_STRM.04',
      image: undefined
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="font-display text-[15vw] font-black tracking-tighter vertical-text leading-none">
          FEED_SOCIAL
        </span>
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] relative z-10">
        
        <div className="text-center md:text-right mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 border-b-2 border-accent pb-2">
            <Instagram className="w-5 h-5 text-accent" />
            <span className="technical-label text-accent tracking-widest uppercase">INTEL_STREAM // INSTAGRAM</span>
          </div>
          <h2 className="text-foreground mb-4 uppercase tracking-tighter">Redes y Multimedia</h2>
          <p className="text-[var(--on-surface-muted)] text-lg max-w-xl mx-auto md:mr-0 font-medium">
            Síguenos en redes sociales para estar al día con el quad rugby en Chile.
          </p>
        </div>

        {/* Media Grid - 1 Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-surface-variant border-[3px] border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-hard-sm)]"
            >
              {/* Header de la tarjeta simulando IG */}
              <div className="absolute top-0 inset-x-0 p-3 bg-gradient-to-b from-black/60 to-transparent z-10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-[10px] font-black tracking-tight">{item.handle}</span>
                <span className="technical-label text-white/70 text-[8px]">{item.label}</span>
              </div>

              {/* Imagen / Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                {item.image ? (
                  <img src={item.image} alt="Social post" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-surface-dim group-hover:bg-accent/5 transition-colors">
                     <div className="absolute inset-0 technical-grid opacity-20"></div>
                     <Instagram className="w-12 h-12 text-border/20 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                )}
              </div>

              {/* Footer / Stats on Hover */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-accent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-around items-center">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-white" />
                  <span className="text-xs font-black">{item.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span className="text-xs font-black">{item.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-end">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-5 bg-card border-[3px] border-border shadow-[var(--shadow-hard-sm)] hover:shadow-[var(--shadow-hard)] hover:-translate-x-1 hover:-translate-y-1 transition-all active:translate-x-0 active:translate-y-0 active:shadow-none no-underline"
          >
            <div className="p-2 bg-accent text-white rounded-sm">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="technical-label text-accent text-[10px] font-black leading-none mb-1">INSTAGRAM_FEED</span>
              <span className="text-foreground font-black uppercase tracking-widest flex items-center gap-2">
                IR A INSTAGRAM<ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
