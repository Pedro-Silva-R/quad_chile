import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';

const faqs = [
  {
    id: 'cls-q1',
    q: '¿Quiénes son elegibles para jugar Quad Rugby?',
    a: 'Atletas con una discapacidad física verificable y permanente que afecte brazos, tronco y piernas. Lo más común: lesiones medulares cervicales, amputaciones múltiples, parálisis cerebral y distrofias musculares. No aplican discapacidades visuales o solo intelectuales.',
  },
  {
    id: 'cls-q2',
    q: '¿El puntaje de un jugador es definitivo para siempre?',
    a: 'No siempre. Muchos jugadores parten en estado de "Revisión". Con el tiempo, y tras evaluaciones en competencias oficiales (si la condición es estable), pueden pasar a "Confirmado". En condiciones progresivas, se revisa periódicamente.',
  },
  {
    id: 'cls-q3',
    q: '¿Las mujeres tienen reglas de clasificación distintas?',
    a: 'La evaluación funcional es la misma para hombres y mujeres. La diferencia está en el reglamento: incluir mujeres puede dar una bonificación de 0.5 o 1.0 puntos extra permitidos para la suma del equipo en cancha.',
  },
  {
    id: 'cls-q4',
    q: '¿Qué pasa si la discapacidad de un jugador cambia con el tiempo?',
    a: 'Si una condición mejora o empeora de forma relevante, se puede solicitar una Revisión Médica. Con nueva evidencia, el panel de clasificadores evalúa nuevamente y ajusta el puntaje si corresponde.',
  },
  {
    id: 'cls-q5',
    q: '¿Puede alguien jugar si su limitación física es muy leve?',
    a: 'Existen Criterios de Deficiencia Mínima (MIC). Si tras las pruebas físicas y técnicas se supera el límite permitido, la persona queda "No Elegible" (4.0 o superior) y no compite en modalidad paralímpica.',
  },
];

export function ClassificationFAQ() {
  return (
    <section
      id="faq-clasificacion"
      className="py-20 md:py-32 bg-background relative border-b-[3px] border-border"
      aria-labelledby="faq-cls-heading"
    >
      <div className="max-w-4xl mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-surface border-[3px] border-border mb-6 shadow-[var(--shadow-hard-sm)]">
            <HelpCircle className="w-8 h-8 text-[var(--brand-metal)]" aria-hidden="true" />
          </div>
          <span className="technical-label text-primary block mb-4">SEC.05 // FAQ</span>
          <h2
            id="faq-cls-heading"
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            Preguntas{' '}
            <span className="text-primary italic">frecuentes</span>
          </h2>
          <p className="text-[var(--on-surface-muted)] mt-4 max-w-lg mx-auto">
            Sobre la clasificación deportiva funcional
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <details
              key={faq.id}
              className="group bg-background border-[3px] border-border shadow-[var(--shadow-hard-sm)] open:shadow-[var(--shadow-hard)] transition-shadow duration-200"
              name="classification-faq"
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
          <span className="technical-label text-[var(--brand-metal)] block mb-4">DOC.REF // RECURSOS WWR</span>
          <p className="text-[var(--on-surface-muted)] mb-8 max-w-lg mx-auto">
            ¿Buscas formularios técnicos o manuales oficiales? Consulta los recursos de clasificación directamente en el portal de la <strong>World Wheelchair Rugby</strong> (documentación original en inglés).
          </p>
          <a
            href="https://worldwheelchair.rugby/classification-resources/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-surface border-[3px] border-border font-bold uppercase tracking-widest hover:bg-[var(--brand-black)] hover:text-[var(--brand-white)] hover:border-[var(--brand-black)] transition-all shadow-[var(--shadow-hard-sm)] no-underline"
          >
            <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            <span>Ver Recursos de Clasificación WWR</span>
          </a>
        </div>
      </div>
    </section>
  );
}
