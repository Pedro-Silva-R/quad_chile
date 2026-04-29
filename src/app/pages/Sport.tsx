import { useEffect } from 'react';
import { SportHero } from '../components/sport/SportHero';
import { SportIntro } from '../components/sport/SportIntro';
import { SportGameManual } from '../components/sport/SportGameManual';
import { SportPillars } from '../components/sport/SportPillars';
import { SportEquipment } from '../components/sport/SportEquipment';
import { SportFAQ } from '../components/sport/SportFAQ';
import { SportFooterCTA } from '../components/sport/SportFooterCTA';

export function Sport() {
  useEffect(() => {
    document.title = 'El Deporte | Quad Rugby Chile';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Descubre el rugby en silla de ruedas (Quad Rugby): historia, pilares del juego, equipamiento técnico y manual básico para entender la acción en la cancha.'
      );
    }
  }, []);

  return (
    <>
      <SportHero />
      <SportIntro />
      <SportGameManual />
      <SportPillars />
      <SportEquipment />
      <SportFAQ />
      <SportFooterCTA />
    </>
  );
}
