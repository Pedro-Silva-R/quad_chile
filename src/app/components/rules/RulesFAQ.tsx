import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';

const faqs = [
  {
    id: 'q1',
    q: '¿Qué sucede si un equipo no cruza la mitad de la cancha a tiempo?',
    a: 'Si el equipo atacante no logra llevar el balón desde su pista trasera (backcourt) hacia la delantera (frontcourt) en doce segundos, se pita violación. El balón pasa al rival para un saque lateral.',
  },
  {
    id: 'q2',
    q: '¿Es legal golpear la silla de un jugador que no tiene el balón?',
    a: 'Sí. Puedes chocar y bloquear a cualquier jugador rival para abrirle camino a tu compañero con balón o para cortar la ofensiva del otro equipo, siempre respetando las zonas seguras de impacto en la silla.',
  },
  {
    id: 'q3',
    q: '¿Cuándo se detiene el reloj de posesión de cuarenta segundos?',
    a: 'Se detiene y se reinicia a quince segundos si la ofensiva pide un tiempo fuera y quedaban menos de quince. También se reinicia a cuarenta segundos tras una falta defensiva o un cambio definitivo de posesión.',
  },
  {
    id: 'q4',
    q: '¿Existen los goles de penalización (penales) en el rugby en silla de ruedas?',
    a: 'Sí. Si un jugador estaba por anotar y una falta defensiva evita el gol de forma clara, el árbitro puede conceder un gol de penalización (Penalty Try) en vez de mandar al infractor a la caja.',
  },
  {
    id: 'q5',
    q: '¿Qué ocurre si un jugador toca el suelo con los pies?',
    a: 'Se sanciona como violación por "Ventaja Física". En juego, el contacto con la cancha debe ser solo con las ruedas y el antivuelco. Si un jugador usa pies o cuerpo para frenar o impulsarse, pierde la posesión.',
  },
];

export function RulesFAQ() {
  return (
    <section
      id="faq-reglas"
      className="py-20 md:py-32 bg-surface relative border-b-[3px] border-border"
      aria-labelledby="faq-reglas-heading"
    >
      <div className="max-w-4xl mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-background border-[3px] border-border mb-6 shadow-[var(--shadow-hard-sm)]">
            <HelpCircle className="w-8 h-8 text-[var(--brand-metal)]" aria-hidden="true" />
          </div>
          <span className="technical-label text-primary block mb-4">SEC.04 // FAQ</span>
          <h2
            id="faq-reglas-heading"
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            Preguntas <span className="text-primary italic">frecuentes</span>
          </h2>
          <p className="text-[var(--on-surface-muted)] mt-4 max-w-lg mx-auto">
            Sobre el reglamento
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <details
              key={faq.id}
              className="group bg-background border-[3px] border-border shadow-[var(--shadow-hard-sm)] open:shadow-[var(--shadow-hard)] transition-shadow duration-200"
              name="rules-faq"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-surface-dim transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-focus">
                <div className="flex items-center gap-4">
                  <span
                    className="technical-label text-[var(--brand-blue)] w-6 shrink-0"
                    aria-hidden="true"
                  >
                    Q{index + 1}
                  </span>
                  <h3 className="font-bold text-lg md:text-xl text-foreground m-0 leading-tight pr-4">
                    {faq.q}
                  </h3>
                </div>
                <div className="w-8 h-8 shrink-0 border-2 border-border flex items-center justify-center bg-background group-open:bg-primary group-open:text-primary-foreground group-open:border-primary transition-colors">
                  <ChevronDown
                    className="w-5 h-5 group-open:-rotate-180 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0 pl-[4.5rem] text-[var(--on-surface-muted)] leading-relaxed border-t-[3px] border-transparent group-open:border-border mt-0">
                <p className="m-0 pt-4 pb-2">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* External Link CTA */}
        <div className="mt-16 pt-12 border-t-[3px] border-border/30 text-center">
          <span className="technical-label text-[var(--brand-metal)] block mb-4">DOC.REF // FUENTE OFICIAL</span>
          <p className="text-[var(--on-surface-muted)] mb-8 max-w-lg mx-auto">
            ¿Necesitas profundizar en el reglamento técnico completo? Consulta las reglas oficiales directamente en el portal de la <strong>World Wheelchair Rugby</strong> (documentación original en inglés).
          </p>
          <a
            href="https://worldwheelchair.rugby/wheelchair-rugby-rules/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-surface border-[3px] border-border font-bold uppercase tracking-widest hover:bg-[var(--brand-black)] hover:text-[var(--brand-white)] hover:border-[var(--brand-black)] transition-all shadow-[var(--shadow-hard-sm)] no-underline"
          >
            <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            <span>Ver Reglamento Oficial WWR</span>
          </a>
        </div>
      </div>
    </section>
  );
}
