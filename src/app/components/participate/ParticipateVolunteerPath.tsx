import { Clock, CalendarCheck, Camera, Truck } from 'lucide-react';

const volunteerRoles = [
  {
    icon: CalendarCheck,
    title: 'Eventos',
    description: 'Apoyo en montaje de canchas, cronómetros y control de accesos.',
  },
  {
    icon: Truck,
    title: 'Logística',
    description: 'Asistencia en el traslado y almacenamiento de sillas deportivas.',
  },
  {
    icon: Camera,
    title: 'Comunicaciones',
    description: 'Cobertura fotográfica, gestión de redes sociales y redacción de noticias.',
  },
  {
    icon: Clock,
    title: 'Apoyo técnico / deportivo',
    description: 'Ayuda al cuerpo técnico con hidratación y asistencia básica en entrenamientos.',
  },
];

const availability = [
  { label: 'APOYO SEMANAL', sub: 'Compromiso regular' },
  { label: 'APOYO MENSUAL', sub: 'Presencia periódica' },
  { label: 'APOYO PUNTUAL', sub: 'Eventos específicos' },
];

export function ParticipateVolunteerPath() {
  return (
    <section id="voluntario" className="py-20 md:py-32 bg-background relative border-t-[3px] border-border">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">

        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14 md:mb-20">
          <div>
            <span className="technical-label text-accent block mb-4">SEC.03 // RUTA VOLUNTARIADO</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Quiero <span className="text-accent italic">ayudar</span>
            </h2>
          </div>
          <p className="text-lg text-[var(--on-surface-muted)] leading-relaxed border-l-[3px] border-accent pl-6">
            Un buen equipo no se sostiene solo con jugadores. Para que haya entrenamientos y torneos, alguien monta, coordina, comunica y resuelve lo que falta. Si tienes tiempo, orden, manos o ganas de aprender, aquí puedes aportar sin necesidad de saber del deporte desde antes. Se aprende en el camino, tranquilo.
          </p>
        </div>

        {/* Volunteer Roles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {volunteerRoles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="bg-surface border-[3px] border-border p-6 shadow-[var(--shadow-hard-sm)] hover:shadow-[var(--shadow-hard)] hover:-translate-y-1 transition-all duration-200 relative group overflow-hidden chamfer-card"
              >
                <div className="noise-overlay" />
                <div className="relative z-10">
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 bg-accent border-[3px] border-border shadow-[var(--shadow-hard-sm)] group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <span className="technical-label text-[var(--brand-metal)] block mb-2">VOL.0{idx + 1}</span>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3">{role.title}</h3>
                  <p className="text-[var(--on-surface-muted)] text-sm leading-relaxed">{role.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Availability Selector CTA */}
        <div className="bg-surface border-[3px] border-border p-8 md:p-10 shadow-[var(--shadow-hard)] chamfer-cut-tl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="technical-label text-[var(--brand-metal)] block mb-3">DISPONIBILIDAD // SELECCIONA TU MODALIDAD</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">¿Cuánto tiempo puedes dar?</h3>
              <p className="text-[var(--on-surface-muted)] text-sm leading-relaxed">
                Toda ayuda suma. Selecciona la modalidad que se ajusta a tu agenda y te contactamos con los detalles según tu disponibilidad.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {availability.map((opt) => (
                <a
                  key={opt.label}
                  href="#contacto"
                  className="flex items-center justify-between px-6 py-4 border-[3px] border-border bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all group no-underline"
                  aria-label={`Registrarme como voluntario con ${opt.label}`}
                >
                  <div>
                    <span className="technical-label block group-hover:text-accent-foreground transition-colors">{opt.label}</span>
                    <span className="text-xs text-[var(--on-surface-muted)] group-hover:text-accent-foreground/70 transition-colors">{opt.sub}</span>
                  </div>
                  <span className="technical-label text-[var(--brand-metal)] group-hover:text-accent-foreground transition-colors">//</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
