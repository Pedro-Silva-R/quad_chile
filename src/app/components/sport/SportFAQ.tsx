import { ChevronDown, MessageSquare } from 'lucide-react';

export function SportFAQ() {
  const faqs = [
    {
      q: "¿Pueden jugar mujeres y hombres en el mismo equipo?",
      a: "Sí. Es un deporte paralímpico mixto: compiten juntos en la misma cancha. Además, según la clase funcional, alinear jugadoras puede dar una bonificación (0.5 o 1.0) al total permitido del equipo. No es \"decorativo\": cambia la estrategia."
    },
    {
      q: "Si hay tanto contacto, ¿es un deporte peligroso?",
      a: "Tiene contacto fuerte, pero está muy reglado. El choque permitido es silla contra silla. Golpear el cuerpo de un rival o hacer maniobras peligrosas como el \"spinning\" se castiga. Por eso el juego es intenso, pero con límites claros."
    },
    {
      q: "¿Qué ocurre si un jugador vuelca o cae de su silla?",
      a: "Se detiene el cronómetro. Entra el equipo técnico para asistir y reincorporar al jugador. Si no hay lesión, el partido sigue rápido. En este deporte el ritmo importa, pero la seguridad va primero."
    },
    {
      q: "¿Necesito mi propia silla deportiva para empezar a entrenar?",
      a: "No. Si estás empezando o vienes derivado desde rehabilitación, Quad Rugby Chile puede prestarte una silla de entrenamiento ajustada a tu tamaño para que pruebes. La idea es que puedas partir sin esa barrera."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-background relative border-b-[3px] border-border">
      <div className="max-w-4xl mx-auto px-[var(--edge-safe)]">
        
        {/* Encabezado */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-surface border-[3px] border-border mb-6">
            <MessageSquare className="w-8 h-8 text-[var(--brand-metal)]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Lo que necesitas <span className="text-primary">saber</span>
          </h2>
          <span className="technical-label text-primary">FAQ // PREGUNTAS FRECUENTES</span>
        </div>

        {/* Lista de FAQ */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-surface border-[3px] border-border shadow-hard-sm open:shadow-[var(--shadow-hard)] transition-all duration-200"
              name="sport-faq"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-surface-dim transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-focus">
                <div className="flex items-center gap-4">
                  <span className="technical-label text-[var(--brand-blue)] w-6 shrink-0">Q{index + 1}</span>
                  <h3 className="font-bold text-lg md:text-xl text-foreground m-0 leading-tight pr-4">
                    {faq.q}
                  </h3>
                </div>
                <div className="w-8 h-8 shrink-0 border-2 border-border flex items-center justify-center bg-background group-open:bg-primary group-open:text-primary-foreground group-open:border-primary transition-colors">
                  <ChevronDown className="w-5 h-5 group-open:-rotate-180 transition-transform duration-300" />
                </div>
              </summary>
              <div className="p-6 pt-0 pl-[4.5rem] text-[var(--on-surface-muted)] leading-relaxed border-t-[3px] border-transparent group-open:border-border mt-4">
                <p className="m-0 pt-4 pb-2">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
        
      </div>
    </section>
  );
}
