import { MessageCircle, Mail, Instagram, Facebook, Clock, ShieldCheck } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const contactCards = [
  {
    id: 'CHAT.WA',
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat rápido y directo con nuestro equipo. Ideal para consultas simples.',
    cta: 'Escribir ahora',
    href: 'https://wa.me/56900000000', // TODO: reemplazar con número real
    accentHover: 'hover:bg-[#25D366] hover:border-[#25D366] hover:text-[var(--brand-white)]',
  },
  {
    id: 'MSG.EMAIL',
    icon: Mail,
    title: 'Email',
    description: 'Escríbenos con detalles. Respondemos en días hábiles.',
    cta: 'Enviar correo',
    href: 'mailto:contacto@quadrugbychile.cl', // TODO: confirmar correo real
    accentHover: 'hover:bg-accent hover:border-accent hover:text-[var(--brand-black)]',
  },
  {
    id: 'SIG.IG',
    icon: Instagram,
    title: 'Instagram',
    description: 'Seguimiento del deporte, torneos y noticias del circuito chileno.',
    cta: 'Ver perfil',
    href: '#', // TODO: reemplazar con URL real
    accentHover: 'hover:bg-[#E1306C] hover:border-[#E1306C] hover:text-[var(--brand-white)]',
  },
  {
    id: 'SIG.FB',
    icon: Facebook,
    title: 'Facebook',
    description: 'Comunidad y cobertura de eventos nacionales e internacionales.',
    cta: 'Ver página',
    href: '#', // TODO: reemplazar con URL real
    accentHover: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-[var(--brand-white)]',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function ContactDirect() {
  return (
    <section
      id="contacto-directo"
      className="py-20 md:py-32 bg-surface border-t-[3px] border-border"
      aria-label="Canales de contacto directo"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">
        {/* Header */}
        <div className="mb-14 md:mb-20 text-center md:text-right">
          <span className="technical-label text-[var(--brand-metal)] block mb-4">
            SEC.02 // CONTACTO DIRECTO
          </span>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl mb-4">
            También puedes{' '}
            <span className="text-primary italic">escribirnos</span>
          </h2>
          <p className="text-[var(--on-surface-muted)] max-w-2xl leading-relaxed mx-auto md:mr-0 md:ml-auto">
            Si prefieres no usar el formulario, puedes contactarnos directamente por cualquiera de
            estos canales. Seguimos activos en redes sociales.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const isExternal = !card.href.startsWith('/') && !card.href.startsWith('#');
            return (
              <a
                key={card.id}
                href={card.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`group flex flex-col justify-between bg-card border-[3px] border-border p-6 shadow-[var(--shadow-hard-sm)] no-underline transition-all hover:shadow-[var(--shadow-hard)] hover:-translate-y-1 ${card.accentHover} chamfer-card`}
                aria-label={`${card.cta} — ${card.description}`}
              >
                <div>
                  {/* Icon + Label row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 border-[3px] border-border flex items-center justify-center bg-background group-hover:bg-[var(--brand-white)]/10 transition-colors">
                      <Icon className="w-6 h-6 text-foreground group-hover:text-inherit transition-colors" aria-hidden="true" />
                    </div>
                    <span className="technical-label text-[var(--brand-metal)] group-hover:text-inherit transition-colors">
                      {card.id}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-black text-xl uppercase tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[var(--on-surface-muted)] text-sm leading-relaxed group-hover:text-inherit transition-colors">
                    {card.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t-[3px] border-border/20">
                  <span className="technical-label flex items-center gap-2 group-hover:text-inherit transition-colors">
                    [{card.cta}]
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer row: horario + privacidad */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t-[3px] border-border">
          <div className="flex items-center gap-3 text-[var(--on-surface-muted)]">
            <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span className="technical-label">RESP. HÁBILES: Lunes – Viernes hasta 18:00 hrs.</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border-muted" aria-hidden="true" />
          <div className="flex items-center gap-3 text-[var(--on-surface-muted)]">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span className="technical-label">No compartimos tus datos con terceros.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
