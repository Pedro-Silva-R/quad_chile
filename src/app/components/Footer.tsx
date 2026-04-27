import { Mail, Phone, Instagram, Youtube, Facebook, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'El Deporte', href: '#el-deporte' },
    { label: 'Participa', href: '#participa' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/quadrugbychile' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@quadrugbychile' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/quadrugbychile' },
  ];

  return (
    <footer id="contacto" className="bg-[var(--brand-black)] border-t-[6px] border-primary relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 technical-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)] relative z-10">

        {/* Main Footer Body */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand Column - Wide */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary border-[3px] border-primary/50 flex items-center justify-center shadow-[4px_4px_0_rgba(255,0,0,0.3)]">
                <span className="text-white font-display font-black text-xl">QR</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-white text-xl leading-none uppercase tracking-tight">Quad Rugby</span>
                <span className="font-display text-primary text-sm leading-none font-bold uppercase tracking-widest">Chile</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8 font-medium">
              Promoviendo el desarrollo del rugby en silla de ruedas en Chile. Un deporte paralímpico que combina
              velocidad, estrategia y determinación.
            </p>

            {/* Contact Items */}
            <div className="space-y-3">
              <a
                href="mailto:contacto@quadrugbychile.cl"
                className="flex items-center gap-3 group no-underline"
              >
                <div className="w-9 h-9 bg-white/10 border-[2px] border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                  <Mail className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white/70 text-sm group-hover:text-white transition-colors font-medium">contacto@quadrugbychile.cl</span>
              </a>
              <a
                href="tel:+56912345678"
                className="flex items-center gap-3 group no-underline"
              >
                <div className="w-9 h-9 bg-white/10 border-[2px] border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                  <Phone className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white/70 text-sm group-hover:text-white transition-colors font-medium">+56 9 1234 5678</span>
              </a>
            </div>
          </div>

          {/* Nav Column */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-l-4 border-primary pl-3">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors font-medium flex items-center gap-2 group no-underline"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-primary transition-all duration-200 flex-shrink-0"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-l-4 border-primary pl-3">
              Redes Sociales
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group no-underline"
                  >
                    <div className="w-9 h-9 bg-white/10 border-[2px] border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all">
                      <Icon className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors font-medium flex items-center gap-1">
                      {social.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* FEDERUPA — Con el respaldo de */}
        <div className="border-t-[1px] border-white/10 py-8 mb-2 flex flex-col items-center text-center">
          <p className="technical-label text-white/40 text-[9px] uppercase tracking-[0.2em] mb-6">Con el respaldo de</p>
          <div className="flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto">
            {/* Logo placeholder: listo para <img src="/assets/federupa-logo.webp" ... /> */}
            <div className="flex-shrink-0 w-20 h-20 border-[2px] border-white/20 bg-white/5 flex items-center justify-center chamfer-card group overflow-hidden">
              <img 
                src="/assets/federupa-logo.jpeg" 
                alt="FEDERUPA Logo" 
                className="w-full h-full object-contain p-2 opacity-50 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('flex-col');
                  const span = document.createElement('span');
                  span.className = 'technical-label text-white/50 text-[9px] font-black tracking-widest leading-tight';
                  span.innerHTML = 'FED<br/>ERUPA';
                  e.currentTarget.parentElement?.appendChild(span);
                }}
              />
            </div>
            <div className="flex flex-col justify-center max-w-xl">
              <p className="text-white/60 text-xs leading-relaxed md:text-left">
                <span className="text-white/80 font-semibold uppercase tracking-wider">Misión:</span> Fomentar el desarrollo del deporte paralímpico en Chile, promoviendo la inclusión y el alto rendimiento deportivo. <span className="text-white/80 font-semibold uppercase tracking-wider ml-2">Visión:</span> Ser referentes en Latinoamérica en deportes paralímpicos, formando atletas de clase mundial.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t-[2px] border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="technical-label text-white/50 text-[10px] uppercase tracking-widest">
            © {currentYear} Quad Rugby Chile
          </p>
          
          <div className="flex items-center align-center justify-center gap-3 bg-white/5 px-4 py-2 border border-white/10 chamfer-cut-tl group hover:border-primary transition-colors">
            <span className="technical-label text-white/40 text-[9px] tracking-widest">Hecho por</span>
            <span className="text-white font-bold text-xs tracking-tighter group-hover:text-primary transition-colors">NexoWeb</span>
            <div className="w-5 h-5 flex items-center align-center justify-center overflow-hidden">
              <img 
                src="/assets/nexoweb-logo.webp" 
                alt="NexoWeb Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const span = document.createElement('span');
                  span.className = 'text-[8px] text-primary font-black';
                  span.innerText = 'NW';
                  e.currentTarget.parentElement?.appendChild(span);
                }}
              />
            </div>
          </div>

          <div className="flex gap-6">
            <a href="/privacidad.html" className="text-white/50 hover:text-white/90 text-xs transition-colors font-medium">
              Privacidad
            </a>
            <a href="/terminos.html" className="text-white/50 hover:text-white/90 text-xs transition-colors font-medium">
              Términos
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
