import { useEffect } from 'react';
import { RulesHero } from '../components/rules/RulesHero';
import { RulesEssential } from '../components/rules/RulesEssential';
import { RulesSituations } from '../components/rules/RulesSituations';
import { RulesGlossary } from '../components/rules/RulesGlossary';
import { RulesFAQ } from '../components/rules/RulesFAQ';
import { RulesFooterCTA } from '../components/rules/RulesFooterCTA';

/**
 * Design Rationale: Kinetic Brutalism V2 – Manual Técnico de Campo.
 * Tono más utilitario que Home/Participa: uso intensivo de IBM Plex Mono para
 * etiquetas seriales (R-01, POS-01…), grid de glosario con hover invertido,
 * y bloques de comparación dos columnas para Violación vs. Falta.
 * FAQ con <details>/<summary> nativo para GEO/AEO. Quick-links en el Hero
 * permiten saltar a cualquier sección con scroll suave.
 */
export function Rules() {
  useEffect(() => {
    document.title = 'Reglas Oficiales | Quad Rugby Chile';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Reglamento oficial del rugby en silla de ruedas (WWR 2026): reglas base, tiempos de posesión, zona clave, faltas, violaciones, glosario táctico y preguntas frecuentes.'
      );
    }
  }, []);

  return (
    <>
      <RulesHero />
      <RulesEssential />
      <RulesSituations />
      <RulesGlossary />
      <RulesFAQ />
      <RulesFooterCTA />
    </>
  );
}
