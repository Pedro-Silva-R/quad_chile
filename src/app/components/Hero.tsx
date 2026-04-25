import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/murderball2.mp4" type="video/mp4" />
        </video>

        {/* Functional overlay for legibility - solid dark */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Technical Overlays */}
        <div className="absolute inset-0 technical-grid"></div>
        <div className="noise-overlay"></div>
      </div>

      {/* Technical Markers (Absolute positioning) */}
      <div className="absolute top-24 left-8 z-10 hidden lg:block">
        <div className="w-4 h-4 border-l-2 border-t-2 border-white/50"></div>
        <span className="technical-label text-white/50 mt-2 block">X-001.START</span>
      </div>
      <div className="absolute top-24 right-8 z-10 hidden lg:block">
        <div className="w-4 h-4 border-r-2 border-t-2 border-white/50 ml-auto"></div>
        <span className="technical-label text-white/50 mt-2 block text-right">PRJ.QR_CHILE</span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] text-center md:text-right pt-16 pb-24 md:grid md:grid-cols-12 gap-8 items-center">
        
        {/* Empty State / Balance Placeholder (Hidden on mobile) */}
        <div className="hidden md:flex md:col-span-4 lg:col-span-5 items-center justify-center opacity-40">
          <div className="relative w-64 h-64 border-[3px] border-white/20 flex items-center justify-center chamfer-card p-4 group">
            <img 
              src="/assets/Field-of-Play.webp" 
              alt="Esquema del campo de juego" 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-2 right-2 technical-label text-[8px] text-white/40 tracking-widest">MAP.REF_001</div>
            <div className="absolute inset-0 scanlines opacity-10"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col md:col-span-8 lg:col-span-7 md:items-end">
          <h1 className="text-white mb-10 max-w-4xl">
            Rugby en Silla de Ruedas <span className="inline-block"><span className="text-[var(--brand-red)]">CH</span><span>I</span><span className="text-[var(--brand-blue)]">LE</span></span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-end items-center w-full">
            <a
              href="#el-deporte"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--brand-black)] border-[3px] border-white shadow-[6px_6px_0_var(--brand-blue)] font-bold no-underline transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none w-full sm:w-auto"
            >
              Conocer el deporte
            </a>
            <a
              href="#participa"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground border-[3px] border-primary shadow-[6px_6px_0_#ffffff] font-bold no-underline transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none w-full sm:w-auto"
            >
              Participa
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#el-deporte"
        aria-label="Desplazar hacia abajo"
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-10 animate-bounce no-underline flex flex-col items-center gap-2"
      >
        <span className="technical-label text-white/50">SCROLL</span>
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
      </a>

      {/* Technical Ticker (Anchored to bottom) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[var(--brand-black)] text-[var(--brand-white)] py-2 border-t-[3px] border-border z-20">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex gap-8">
          <span className="technical-label">SYS.STATUS: OPTIMAL</span>
          <span className="technical-label text-primary">///</span>
          <span className="technical-label">KINETIC ENERGY: 100%</span>
          <span className="technical-label text-primary">///</span>
          <span className="technical-label">IMPACT RATING: MAXIMUM</span>
          <span className="technical-label text-primary">///</span>
          <span className="technical-label">SYS.STATUS: OPTIMAL</span>
          <span className="technical-label text-primary">///</span>
          <span className="technical-label">KINETIC ENERGY: 100%</span>
          <span className="technical-label text-primary">///</span>
          <span className="technical-label">IMPACT RATING: MAXIMUM</span>
        </div>
      </div>
    </section>
  );
}
