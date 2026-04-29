import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const profile = [
  'Kinesiólogos, fisioterapeutas o médicos con conocimientos en neuro-rehabilitación y lesiones medulares.',
  'Terapeutas ocupacionales y profesionales especializados en ciencias del deporte adaptado.',
  'Capacidad aguda de análisis biomecánico y observación detallada en el terreno de juego.',
  'Compromiso ético e imparcialidad para asignar las clases deportivas correctas.',
];

export function ParticipateClassifierPath() {
  return (
    <section id="clasificador" className="py-20 md:py-32 bg-background relative border-t-[3px] border-border">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <span className="technical-label text-[var(--brand-blue)] block mb-4">SEC.05 // RUTA CLASIFICADOR</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Me interesa{' '}
            <span className="text-[var(--brand-blue)] italic">clasificación</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Main description */}
          <div className="lg:col-span-7">
            {/* Score range visual */}
            <div className="flex items-center gap-0 mb-8 border-[3px] border-border overflow-hidden shadow-[var(--shadow-hard-sm)]">
              {[0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5].map((score) => (
                <div
                  key={score}
                  className="flex-1 flex flex-col items-center py-4 border-r-[3px] border-border last:border-r-0 bg-surface hover:bg-[var(--brand-blue)] hover:text-[var(--brand-white)] transition-colors group cursor-default"
                  title={`Clase ${score}`}
                >
                  <span className="technical-label text-[var(--brand-metal)] group-hover:text-[var(--brand-white)]/70 transition-colors text-[10px]">PTS</span>
                  <span className="font-display font-black text-lg leading-tight">{score}</span>
                </div>
              ))}
            </div>

            <div className="bg-surface border-[3px] border-border p-8 shadow-[var(--shadow-hard-sm)] chamfer-card mb-8">
              <p className="text-lg text-[var(--on-surface-muted)] leading-relaxed">
                La clasificación funcional es lo que mantiene el juego parejo. El clasificador evalúa el compromiso motor de cada atleta (tronco, brazos, coordinación) y asigna un puntaje entre 0.5 y 3.5. Ese número define cómo se arma el equipo en cancha y evita que la ventaja sea "tener más fuerza", a secas. Si te formas como clasificador, trabajas con criterio clínico y reglas claras, y tu rol se nota en cada torneo: ordena, protege la justicia deportiva y permite que la táctica gane partidos. Se revisa, se discute y se registra siempre, en cada evaluación.
              </p>
            </div>

            {/* Link to /clasificacion */}
            <Link
              to="/clasificacion"
              className="group inline-flex items-center gap-3 px-6 py-4 border-[3px] border-[var(--brand-blue)] bg-transparent text-[var(--brand-blue)] font-bold uppercase tracking-widest no-underline hover:bg-[var(--brand-blue)] hover:text-[var(--brand-white)] transition-colors shadow-[var(--shadow-hard-sm)]"
              aria-label="Entender el sistema de clasificación funcional completo"
            >
              [Entender la clasificación]
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Profile Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border-[3px] border-border shadow-[var(--shadow-hard)] p-6 chamfer-cut-tl">
              <div className="border-b-[3px] border-border pb-4 mb-6">
                <span className="technical-label text-[var(--brand-blue)] block mb-1">PERFIL // RECOMENDADO</span>
                <h3 className="font-display font-black text-xl uppercase tracking-tight">¿Es para ti este rol?</h3>
              </div>
              <ul className="space-y-5">
                {profile.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border-[3px] border-[var(--brand-blue)] bg-transparent mt-0.5">
                      <span className="technical-label text-[var(--brand-blue)] text-[10px]">0{idx + 1}</span>
                    </div>
                    <p className="text-sm font-medium leading-snug text-[var(--on-surface-muted)]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contacto"
              className="group flex items-center justify-between w-full px-6 py-4 bg-[var(--brand-blue)] text-[var(--brand-white)] border-[3px] border-border font-bold uppercase tracking-widest no-underline hover:bg-[var(--brand-black)] transition-colors shadow-[var(--shadow-hard-sm)]"
              aria-label="Interesarse en la formación como clasificador funcional"
            >
              <span>[Me interesa formarme]</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
