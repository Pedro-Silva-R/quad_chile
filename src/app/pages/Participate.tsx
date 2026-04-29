import { useEffect } from 'react';
import { ParticipateHero } from '../components/participate/ParticipateHero';
import { ParticipateRoleSelector } from '../components/participate/ParticipateRoleSelector';
import { ParticipateAthletePath } from '../components/participate/ParticipateAthletePath';
import { ParticipateVolunteerPath } from '../components/participate/ParticipateVolunteerPath';
import { ParticipateOfficialPath } from '../components/participate/ParticipateOfficialPath';
import { ParticipateClassifierPath } from '../components/participate/ParticipateClassifierPath';
import { ParticipateContactSection } from '../components/participate/ParticipateContactSection';
import { ParticipateFooterCTA } from '../components/participate/ParticipateFooterCTA';

/**
 * Design Rationale: Kinetic Brutalism V2 – Embudo de captación multi-rol.
 * La página presenta primero el selector de rol (acción simple) y luego
 * profundiza en cada ruta con scroll suave. Evita el scroll infinito sin
 * ocultar contenido relevante. Cada sección tiene ancla propia para los
 * quick-actions del hero.
 */
export function Participate() {
  useEffect(() => {
    document.title = 'Participa | Quad Rugby Chile';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Únete a la familia del Quad Rugby Chile. Buscamos atletas, voluntarios, árbitros y clasificadores. Encuentra tu rol y comienza tu camino en el deporte.'
      );
    }
  }, []);

  return (
    <>
      <ParticipateHero />
      <ParticipateRoleSelector />
      <ParticipateAthletePath />
      <ParticipateVolunteerPath />
      <ParticipateOfficialPath />
      <ParticipateClassifierPath />
      <ParticipateContactSection />
      <ParticipateFooterCTA />
    </>
  );
}
