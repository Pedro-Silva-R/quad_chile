import { useEffect } from 'react';
import { ClassificationHero } from '../components/classification/ClassificationHero';
import { ClassificationBalance } from '../components/classification/ClassificationBalance';
import { ClassificationMath } from '../components/classification/ClassificationMath';
import { ClassificationDimensions } from '../components/classification/ClassificationDimensions';
import { ClassificationHealth } from '../components/classification/ClassificationHealth';
import { ClassificationFAQ } from '../components/classification/ClassificationFAQ';
import { ClassificationFooterCTA } from '../components/classification/ClassificationFooterCTA';

/**
 * Design Rationale: Kinetic Brutalism V2 – Manual Técnico de Clasificación.
 * Tono técnico-utilitario: etiquetas seriales (CLS-01, DIM-01…), grid de tarjetas
 * de alineación con tratamiento invertido para el caso Equilibrado, y visualización
 * de la escala 0.5→3.5 como lista estructural. FAQ con <details>/<summary> nativo
 * para GEO/AEO. Quick-links en el Hero permiten saltar a cualquier sección con scroll suave.
 */
export function Classification() {
  useEffect(() => {
    document.title = 'Clasificación Deportiva | Quad Rugby Chile';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Clasificación funcional del rugby en silla de ruedas (WWR): qué es, cómo funciona la regla de los 8.0 puntos, ejemplos de alineación y preguntas frecuentes.'
      );
    }
  }, []);

  return (
    <>
      <ClassificationHero />
      <ClassificationBalance />
      <ClassificationMath />
      <ClassificationDimensions />
      <ClassificationHealth />
      <ClassificationFAQ />
      <ClassificationFooterCTA />
    </>
  );
}
