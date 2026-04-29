import { MessageCircle, Mail, FileText, Clock } from 'lucide-react';

const contactOptions = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat rápido y directo con nuestro equipo.',
    cta: 'Escribir ahora',
    href: 'https://wa.me/56900000000',
    isExternal: true,
    accentClass: 'hover:bg-[#25D366] hover:border-[#25D366] hover:text-[var(--brand-white)]',
    labelId: 'CHAT.WA',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Envíanos tus dudas o consultas detalladas.',
    cta: 'Enviar correo',
    href: 'mailto:contacto@quadrugbychile.cl',
    isExternal: true,
    accentClass: 'hover:bg-accent hover:border-accent hover:text-accent-foreground',
    labelId: 'MSG.EMAIL',
  },
  {
    icon: FileText,
    title: 'Formulario',
    description: 'Déjanos tus datos y nosotros te llamaremos.',
    cta: 'Ir a Contacto',
    href: '/contacto',
    isExternal: false,
    accentClass: 'hover:bg-foreground hover:border-foreground hover:text-background',
    labelId: 'FORM.01',
  },
];

export function ParticipateContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-surface relative border-t-[3px] border-border">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="technical-label text-[var(--brand-metal)] block mb-4">SEC.06 // CONTACTO RÁPIDO</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            ¿Prefieres que{' '}
            <span className="text-primary italic">hablemos?</span>
          </h2>
          <p className="text-lg text-[var(--on-surface-muted)] leading-relaxed max-w-2xl mx-auto">
            Si tienes dudas sobre cómo entrar o cuál camino te conviene, te orientamos sin vueltas. Equipo técnico y administrativo disponible para responderte claro y ayudarte a decidir rápido.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {contactOptions.map((opt) => {
            const Icon = opt.icon;
            const Tag = opt.isExternal ? 'a' : 'a';
            return (
              <Tag
                key={opt.title}
                href={opt.href}
                target={opt.isExternal ? '_blank' : undefined}
                rel={opt.isExternal ? 'noopener noreferrer' : undefined}
                className={`group flex flex-col justify-between bg-card border-[3px] border-border p-6 md:p-8 shadow-[var(--shadow-hard-sm)] no-underline transition-all hover:shadow-[var(--shadow-hard)] hover:-translate-y-1 ${opt.accentClass} chamfer-card`}
                aria-label={`${opt.cta} — ${opt.description}`}
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 border-[3px] border-border flex items-center justify-center bg-background group-hover:bg-[var(--brand-white)]/10 transition-colors">
                      <Icon className="w-6 h-6 text-foreground group-hover:text-inherit transition-colors" />
                    </div>
                    <span className="technical-label text-[var(--brand-metal)] group-hover:text-inherit transition-colors">{opt.labelId}</span>
                  </div>
                  <h3 className="font-display font-black text-xl uppercase tracking-tight mb-2">{opt.title}</h3>
                  <p className="text-[var(--on-surface-muted)] text-sm leading-relaxed group-hover:text-inherit transition-colors">{opt.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t-[3px] border-border/20">
                  <span className="technical-label flex items-center gap-2 group-hover:text-inherit transition-colors">
                    [{opt.cta}]
                  </span>
                </div>
              </Tag>
            );
          })}
        </div>

        {/* Response time notice */}
        <div className="flex items-center justify-center gap-3 text-[var(--on-surface-muted)]">
          <Clock className="w-4 h-4" />
          <span className="technical-label">HORARIO DE RESPUESTA: Días hábiles hasta las 18:00 hrs.</span>
        </div>

      </div>
    </section>
  );
}
